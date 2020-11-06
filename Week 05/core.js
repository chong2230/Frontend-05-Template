// 简版vue3

const isObject = val => val !== null && typeof val === 'object'

const baseHandler = {
	get(target, key) {
		const res = Reflect.get(target, key)
		track(target, key)
		return isObject(res) ? reactive(res) : res
	},
	set(target, key, val) {
		let info = {oldValue: target[key], newValue: val}
		Reflect.set(target, key, val)
		trigger(target, key, info)
	}
}

const toProxy = new WeakMap()
function reactive(target) {
	let observed = toProxy.get(target)
	if (observed) return observed
	observed = new Proxy(target, baseHandler)
	return observed
}

function computed(fn) {
	const runner = effect(fn, {computed: true, lazy: true})
	return {
		effect: runner,
		get value() {
			return runner()
		}
	}
}

function effect(fn, options={}) {
	let e = createReactiveEffect(fn, options)
	if (!options.lazy) {
		e()
	}
	return e
}

function createReactiveEffect(fn, options) {
	const effect = function effect(...args) {
		return run(effect, fn, args)
	}
	effect.deps = []
	effect.computed = options.computed
	effect.lazy = options.lazy
	return effect
}

function run(effect, fn, args) {
	if (effectStack.indexOf(effect) === -1) {
		try {
		effectStack.push(effect)
		return fn(...args)
		} finally {
		effectStack.pop()
		}
	}
}
let effectStack = [];
let targetMap = new WeakMap()
// 收集依赖
function track(target, key) {
	const effect = effectStack[effectStack.length-1]
	if (effect) {
		let depMap = targetMap.get(target)
		if (depMap === undefined) {
			depMap = new Map()
			targetMap.set(target,depMap)
		}
		let dep = depMap.get(key)
		if (dep === undefined) {
			dep = new Set()
			depMap.set(key, dep)
		}
		if (!dep.has(effect)) {
			dep.add(effect)
			effect.deps.push(dep)
		}
	}
}

// 派发更新
function trigger(target, key, info) {
	const depMap = targetMap.get(target)
	if (depMap === undefined) {
		return
	}
	const effects = new Set()
	const computedRunners = new Set()
	if (key) {
		let deps = depMap.get(key)
		deps.forEach(effect=>{
			if (effect.computed) {
				computedRunners.add(effect)
			} else {
				effects.add(effect)
			}
		})
		effects.forEach(effect=>effect())
		computedRunners.forEach(computed=>computed())
	}
}
