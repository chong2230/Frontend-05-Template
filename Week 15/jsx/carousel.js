import { Component } from './framework.js';

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
            // let child = document.createElement('img');
            // child.setAttribute('src', record);
            let child = document.createElement('div');
            child.style.backgroundImage = `url(${record})`
            this.root.appendChild(child);
        }

        let position = 0;

        this.root.addEventListener("mousedown", event => {
            // console.log("mousedown");
            let children = this.root.children;
            let startX = event.clientX;


            let move = event => {
                console.log("mousemove");
                // 使用event.clientX和event.clientY获取坐标位置
                // console.log(event.clientX, event.clientY);
                let dx = event.clientX - startX;

                // let current = position - Math.round(dx / 500);
                let current = position - ((dx - dx % 500) / 500); // 搞得这么复杂

                for (let offset of [-1, 0, 1]) {
                    let pos = current + offset; // 存在负数
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "none";
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500 + dx % 500}px)`;
                }

                // for (let child of children) {
                //     child.style.transition = "none";
                //     child.style.transform = `translateX(${- position * 500 + dx}px)`;

                // }

            }

            let up = event => {
                let dx = event.clientX - startX;

                position = position - Math.round(dx / 500);

                for (let offset of [0, -Math.sign(Math.round(dx / 500) - dx + 250 * Math.sign(dx))]) {
                    let pos = position + offset;
                    pos = (pos + children.length) % children.length;

                    children[pos].style.transition = "";
                    children[pos].style.transform = `translateX(${-pos * 500 + offset * 500}px)`;
                }

                // position = position - Math.round(dx / 500);
                // for (let child of children) {
                //     child.style.transition = "";
                //     child.style.transform = `translateX(${-position * 500}px)`;

                // }
                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up)
            }

            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);

        });

        /*let currentIndex = 0;
        setInterval(()=>{
            let children = this.root.children;
            let nextIndex = (currentIndex + 1) % children.length;

            // 只控制前后两张图片
            let current = children[currentIndex];
            let next = children[nextIndex];

            next.style.transition = "none";
            next.style.transform = `translateX(${100 - nextIndex * 100}%)`

            setTimeout(()=>{
                next.style.transition = "";
                current.style.transform = `translateX(${-100 - currentIndex * 100}%)`
                next.style.transform = `translateX(${-nextIndex * 100}%)`

                currentIndex = nextIndex;
            }, 16);
            
            // for (let child of children) {
            //     child.style.transform = `translateX(-${current*100}%)`;
            // }
        }, 3000);
        */
        // console.log(this.attributes.src);

        return this.root;
    }
    mounteTo(parent) {
        parent.appendChild(this.render());
    }
}