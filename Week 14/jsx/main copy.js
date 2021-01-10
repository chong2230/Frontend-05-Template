for (let i of [1,2,3]) {
    console.log(i);
}

class React {
    constructor() {

    }

    static createElement() {
        let root = document.createElement('div');
        return root;
    }
}

function createElement(type, attributes, ...children) {
    let element = document.createElement(type);
    for (let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    }
    return element;
}

var a = <div id="a">
    Hello World
    <span></span>
    <span></span>
    <span>3</span>
    </div>;

document.body.appendChild(a);