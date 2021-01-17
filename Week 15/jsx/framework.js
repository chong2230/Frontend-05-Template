export function createElement(type, attributes, ...children) {
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

export class Component {
    constructor(type) {
        // this.root = this.render();
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
    // render() {
    //     return document.createElement('div');
    // }
}

class ElementWrapper extends Component {
    constructor(type) {
        super();
        this.root = document.createElement(type);
    }
    
}

class TextWrapper extends Component {
    constructor(content) {
        super();
        this.root = document.createTextNode(content);
    }
    
}