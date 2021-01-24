import { Component, createElement  } from "./framework.js";
import Carousel from './carousel.js';
import { Timeline, Animation } from './animation.js';
import Button from './Button.js';
import List from './List.js';

let imgs = [
    'https://static001.geekbang.org/resource/image/95/d1/95775d0927a580170673aedfc70e33d1.jpg',
    'https://static001.geekbang.org/resource/image/37/e4/37fbe168a471e8ee1267fd741d096fe4.jpg',
    'https://static001.geekbang.org/resource/image/f7/f8/f7c1822abb4382896b9b4d3530b02ff8.jpg'
]

let a = <Button></Button>;
// let a = <div>content</div>;

a.mountTo(document.body)



