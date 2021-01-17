/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./animation-demo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./animation-demo.js":
/*!***************************!*\
  !*** ./animation-demo.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _animation = __webpack_require__(/*! ./animation */ \"./animation.js\");\n\nvar tl = new _animation.Timeline();\n\ntl.start();\n\ntl.add(new _animation.Animation(document.querySelector(\"#el\").style, \"transform\", 0, 500, 2000, 0, null, function (v) {\n  return \"translateX(\" + v + \"px)\";\n}));\n\ndocument.querySelector(\"#pause-btn\").addEventListener(\"click\", function () {\n  return tl.pause();\n});\ndocument.querySelector(\"#resume-btn\").addEventListener(\"click\", function () {\n  return tl.resume();\n});\n\n//# sourceURL=webpack:///./animation-demo.js?");

/***/ }),

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TICK = Symbol(\"tick\");\nvar TICK_HANDLER = Symbol(\"tick-handler\");\nvar ANIMATIONS = Symbol(\"animations\");\nvar START_TIME = Symbol(\"start-time\");\nvar PAUSE_START = Symbol(\"pause-start\");\nvar PAUSE_TIME = Symbol(\"pause-time\");\n\nvar Timeline = exports.Timeline = function () {\n    function Timeline() {\n        _classCallCheck(this, Timeline);\n\n        this[ANIMATIONS] = new Set();\n        this[START_TIME] = new Map();\n    }\n\n    _createClass(Timeline, [{\n        key: \"start\",\n        value: function start() {\n            var _this = this;\n\n            var startTime = Date.now();\n            this[PAUSE_TIME] = 0;\n            this[TICK] = function () {\n                var now = Date.now();\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = _this[ANIMATIONS][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var animation = _step.value;\n\n                        var t = void 0;\n                        if (_this[START_TIME].get(animation) < startTime) {\n                            t = now - startTime - _this[PAUSE_TIME];\n                        } else {\n                            t = now - _this[START_TIME].get(animation) - _this[PAUSE_TIME];\n                        }\n                        if (animation.duration < t) {\n                            _this[ANIMATIONS].delete(animation);\n                            t = animation.duration;\n                        }\n\n                        animation.receive(t); // 使用t0，不会超出范围\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n\n                _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]);\n            };\n            this[TICK]();\n        }\n    }, {\n        key: \"pause\",\n        value: function pause() {\n            this[PAUSE_START] = Date.now();\n            cancelAnimationFrame(this[TICK_HANDLER]);\n        }\n    }, {\n        key: \"resume\",\n        value: function resume() {\n            this[PAUSE_TIME] += Date.now() - this[PAUSE_START];\n            this[TICK]();\n        }\n    }, {\n        key: \"reset\",\n        value: function reset() {}\n    }, {\n        key: \"add\",\n        value: function add(animation, startTime) {\n            if (arguments.length < 2) {\n                startTime = Date.now();\n            }\n            this[ANIMATIONS].add(animation);\n            this[START_TIME].set(animation, startTime);\n        }\n    }]);\n\n    return Timeline;\n}();\n\nvar Animation = exports.Animation = function () {\n    function Animation(object, property, startValue, endValue, duration, delay, timingFunction, template) {\n        _classCallCheck(this, Animation);\n\n        this.object = object;\n        this.property = property;\n        this.startValue = startValue;\n        this.endValue = endValue;\n        this.duration = duration;\n        this.delay = delay;\n        this.timingFunction = timingFunction;\n        this.template = template;\n    }\n\n    _createClass(Animation, [{\n        key: \"receive\",\n        value: function receive(time) {\n            var range = this.endValue - this.startValue;\n            // this.object[this.property] = this.startValue + range * time / this.duration;\n            this.object[this.property] = this.template(this.startValue + range * time / this.duration);\n        }\n    }]);\n\n    return Animation;\n}();\n\n//# sourceURL=webpack:///./animation.js?");

/***/ })

/******/ });