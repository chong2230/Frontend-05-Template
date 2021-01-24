import { Component, STATE, ATTRIBUTE } from './framework.js';
import  {enableGesture} from './gesture.js';
import {Timeline, Animation} from './animation.js';
import {ease} from './cubicBezier.js';

export {STATE, ATTRIBUTE} from './framework.js';

export default class Carousel extends Component {
    constructor() {
        super();
        
    }
    render() {
        this.root = document.createElement('div');
        this.root.classList.add('carousel');
        for (let record of this[ATTRIBUTE].src) {
            let child = document.createElement('div');
            child.style.backgroundImage = `url(${record})`
            this.root.appendChild(child);
        }

        enableGesture(this.root);
        let timeline = new Timeline();
        timeline.start();

        let handler = null;

        let children = this.root.children;

        this[STATE].position = 0;

        let t = 0;
        let ax = 0;

        this.root.addEventListener("start", (event)=>{
            timeline.pause();
            clearInterval(handler);
            let progress = (Date.now() - t)/500;
            ax = ease(progress) * 500 - 500;    // 移动到了下一帧
        });

        this.root.addEventListener("tap", (event)=>{
            this.triggerEvent("click", {
                data: this[ATTRIBUTE].src[this[STATE].position]
            })
        });

        this.root.addEventListener("pan", (event)=>{
            let dx = event.clientX - event.startX - ax;

            let current = this[STATE].position - ((dx - dx % 500) / 500);

            for (let offset of [-1, 0, 1]) {
                let pos = current + offset; // 存在负数
                pos = (pos % children.length + children.length) % children.length;

                children[pos].style.transition = "none";
                children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + dx % 500}px)`;
            }
        })

        this.root.addEventListener("end", (event)=>{
            timeline.reset();
            timeline.start();
            handler = setInterval(nextPicture, 3000);

            let dx = event.clientX - event.startX - ax;

            let current = this[STATE].position - ((dx - dx % 500) / 500);

            let direction = Math.round((dx % 500) / 500);

            if (event.isFlick) {
                console.log('isFlick', event.volocity)
                if (event.velocity < 0) {
                    direction = Math.ceil((dx % 500) / 500);
                } else {
                    direction = Math.floor((dx % 500) / 500);
                }
            }

            for (let offset of [-1, 0, 1]) {
                let pos = current + offset; // 存在负数
                pos = (pos % children.length + children.length) % children.length;

                children[pos].style.transition = "none";
                timeline.add(new Animation(children[pos].style, "transform", 
                    - pos * 500 + offset * 500 + dx % 500, 
                    -pos * 500 + offset * 500 + direction * 500,
                     500, 0, ease, v => `translateX(${v}px)`));
            }

            this[STATE].position = this[STATE].position - ((dx - dx % 500) / 500) - direction;
            this[STATE].position = (this[STATE].position % children.length + children.length) % children.length;
        })

        let nextPicture = ()=>{
            let children = this.root.children;
            let nextPosition = (this[STATE].position + 1) % children.length;

            // 只控制前后两张图片
            let current = children[this[STATE].position];
            let next = children[nextPosition];

            t = Date.now();

            timeline.add(new Animation(current.style, "transform", 
                - this[STATE].position * 500, -500 - this[STATE].position * 500, 500, 0, ease, v => `translateX(${v}px)`));
            timeline.add(new Animation(next.style, "transform", 
                500 - nextPosition * 500, - nextPosition * 500, 500, 0, ease, v => `translateX(${v}px)`));    

            this.triggerEvent("change", {position: this[STATE].position});
            this[STATE].position = nextPosition;
            
        };

        handler = setInterval(nextPicture, 3000);        

        return this.root;
    }
    mounteTo(parent) {
        parent.appendChild(this.render());
    }
}