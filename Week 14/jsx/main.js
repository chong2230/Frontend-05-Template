import { Component, createElement  } from "./framework.js";
class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        this.root = document.createElement('div');
        for (let record of this.attributes.src) {
            // let child = document.createElement('img');
            // child.setAttribute('src', record);
            let child = document.createElement('div');
            child.style.backgroundImage = `url(${record})`
            this.root.appendChild(child);
        }
        console.log(this.attributes.src);

        return this.root;
    }
    mounteTo(parent) {
        parent.appendChild(this.render());
    }
}

let imgs = [
    'https://static001.geekbang.org/resource/image/95/d1/95775d0927a580170673aedfc70e33d1.jpg',
    'https://static001.geekbang.org/resource/image/37/e4/37fbe168a471e8ee1267fd741d096fe4.jpg',
    'https://static001.geekbang.org/resource/image/f7/f8/f7c1822abb4382896b9b4d3530b02ff8.jpg'
]

// var a = <Div id="a">
//     <span>1</span>
//     <span>2</span>
//     <span>3</span>
//     </Div>;

// document.body.appendChild(a);

let a = <Carousel class="carousel" src={imgs} />;

a.mounteTo(document.body);