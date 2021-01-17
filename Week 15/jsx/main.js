import { Component, createElement  } from "./framework.js";
import Carousel from './carousel.js';
import { Timeline, Animation } from './animation.js';

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

let tl = new Timeline();
window.tl = tl;
window.animation = new Animation({ set a(v) {console.log(v)} }, "a", 0, 100, 1000, null);

// tl.add(new Animation({ set a(v) {console.log(v)} }, "a", 0, 100, 1000, null));
tl.start();

