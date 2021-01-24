import { Component } from './framework.js';
import  {enableGesture} from './gesture.js';
import {Timeline, Animation} from './animation.js';
import {ease} from './cubicBezier.js';

export default class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        this.root = document.createElement('div');
        this.root.classList.add('carousel');
        for (let record of this.attributes.src) {
            let child = document.createElement('div');
            child.style.backgroundImage = `url(${record})`
            this.root.appendChild(child);
        }

        enableGesture(this.root);
        let timeline = new Timeline();
        timeline.start();

        let handler = null;

        let children = this.root.children;

        let position = 0;   // 局部变量充当state

        let t = 0;
        let ax = 0;

        this.root.addEventListener("start", (event)=>{
            timeline.pause();
            clearInterval(handler);
            let progress = (Date.now() - t)/500;
            ax = ease(progress) * 500 - 500;    // 移动到了下一帧
        });

        this.root.addEventListener("pan", (event)=>{
            let dx = event.clientX - event.startX - ax;

            let current = position - ((dx - dx % 500) / 500);

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

            let current = position - ((dx - dx % 500) / 500);

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

            position = position - ((dx - dx % 500) / 500) - direction;
            position = (position % children.length + children.length) % children.length;
        })

        let nextPicture = ()=>{
            let children = this.root.children;
            let nextPosition = (position + 1) % children.length;

            // 只控制前后两张图片
            let current = children[position];
            let next = children[nextPosition];

            t = Date.now();

            timeline.add(new Animation(current.style, "transform", 
                - position * 500, -500 - position * 500, 500, 0, ease, v => `translateX(${v}px)`));
            timeline.add(new Animation(next.style, "transform", 
                500 - nextPosition * 500, - nextPosition * 500, 500, 0, ease, v => `translateX(${v}px)`));    

            position = nextPosition;
            
        };

        handler = setInterval(nextPicture, 3000);        

        return this.root;
    }
    mounteTo(parent) {
        parent.appendChild(this.render());
    }
}