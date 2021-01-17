let element = document.documentElement;

let isListeningMouse = false;

element.addEventListener("mousedown", event => {
    let context = Object.create(null);
    contexts.set("mouose" + (1 << event.button), context);
    start(event, context);
    let mousemove = event => {
        // console.log(event.clientX, event.clientY);
        let button = 1;
        while(button <= event.buttons) {
            if (button & event.buttons) {
                // order of buttons & button property is not same
                let key;
                if(button === 2)
                    key = 4;
                else if (button === 4)
                    key = 2;
                else 
                    key = button;
                let context = contexts.get("mouse" + key);
                move(event, context);
            }
            button = button << 1;
        }
        // move(event);
    }
    let mouseup = event => {
        end(event);
        let context = contexts.get("mouse" + (1 << event.button));
        end(event. context);
        contexts.delete("mouse" + (1 << event.button));

        if (event.buttons === 0) {
            element.removeEventListener("mousemove", mousemove);
            element.removeEventListener("mouseup", mouseup);
            isListeningMouse = false;
        }
       
    }
    if (!isListeningMouse) {
        element.addEventListener("mousemove", mousemove);
        element.addEventListener("mouseup", mouseup);
        isListeningMouse = true;
    }
    
})

let contexts = new Map();

element.addEventListener("touchstart", event => {
    for (let touch of event.changedTouches) {
        console.log(touch.clientX, touch.clientY);
        start(touch);
    }
})
element.addEventListener("touchmove", event => {
    for (let touch of event.changedTouches) {
        console.log(touch.clientX, touch.clientY);
        move(touch);
    }
});
element.addEventListener("touchend", event => {
    for (let touch in event.changedTouches) {
        console.log(touch.clientX, touch.clientY);
        end(touch);
    }
});
element.addEventListener("touchcancel", event => {
    for (let touch of event.changedTouches) {
        console.log(touch.clientX, touch.clientY);
        cancel(touch);
    }
});

// 存在多个点击事件，不能使用全局变量来处理
// let handler;
// let startX, startY;
// let isPan = false, isTap = true, isPress = false;

// 一段时间之内的点的速度的平均
let start = (point, context) => {
    // console.log('start', point.clientX, point.clientY);
    context.startX = point.clientX, context.startY = point.clientY;
    context.points = [{
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    }];

    context.isTap = true;
    context.isPan = false;
    context.isPress = false;

    context.handler = setTimeout(()=>{
        // console.log("press");
        context.isTap = false;
        context.isPan = false;
        context.isPress = true;
        context.handler = null;
    }, 500);
}
let move = (point, context) => {
    let dx = point.clientX - context.startX, dy = point.clientY - context.startY;

    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
        context.isPan = true;
        console.log("panstart");
        clearTimeout(context.handler);
    }

    if (context.isPan) {
        console.log(dx, dy);
        console.log("pan");
    }

    context.points = context.points.filter(point => Date.now() - point.t < 500)

    context.points.push({
        t: Date.now(),
        x: point.clientX,
        y: point.clientY
    })
}
let end = (point, context) => {
    if(context.isTap) {
        // console.log("tap");
        dispatch("tap", {});
        clearTimeout(context.handler);
    }
    if(context.isPan) {
        console.log("panend");
    }
    if(context.isPress) {
        console.log("pressend");
    }
    context.points = context.points.filter(point => Date.now() - pint.t < 500);
    let d, v;
    if (!context.points.length) {
        v = 0;
    } else {

    }
    let d = Math.sqrt((point.clientX - contexts.points[0].x) ** 2 +
        (point.clientY - contexts.points[0].y) ** 2);
    let v = d / (Date.now() - contexts.points[0].t);

    if (v > 1.5) {
        console.log("flick");
        context.isFlick = true;
    } else {
        context.isFlick = false;
    }
    // console.log("end", point.clientX, point.clientY);
}
let cancel = (point, context) => {
    clearTimeout(context.handler);
    console.log("cancel", point.clientX, point.clientY);
}

function dispatch(type, properties) {
    let event = new Event(type);
    console.log(event);
    for (let name of properties) {
        event[name] = properties[name]
    }
    element.dispatchEvent(event);
}