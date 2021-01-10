for (let i of [1,2,3]) {
    console.log(i);
}

function createElement(type, attributes, ...children) {
    let element;
    if (typeof type === 'string') { // 原生的元素
        // element = document.createElement(type);
        element = new ElementWrapper(type);
    } else {
        element = new type;
    }
    for (let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        if (typeof child === 'string') {
            // child = document.createTextNode(child);
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }
    return element;
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(child) {
        child.mounteTo(this.root);
    }
    mounteTo(parent) {
        parent.appendChild(this.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(child) {
        child.mounteTo(this.root);
    }
    mounteTo(parent) {
        parent.appendChild(this.root);
    }
}

class Div {
    constructor() {
        this.root = document.createElement('div');
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(child) {
        child.mounteTo(this.root);
    }
    mounteTo(parent) {
        parent.appendChild(this.root);
    }
}

var a = <Div id="a">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    </Div>;

// document.body.appendChild(a);

a.mounteTo(document.body);