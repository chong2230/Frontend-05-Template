let currentToken = null;

const EOF = Symbol["EOF"];  // EOF: End of file

function data(c) {
    if(c == "<") {
        return tagOpen;
    } else if (c == EOF) {
        emit({
            type: "EOF"
        });
        return ;
    } else {
        emit({
            type: "text",
            content: c
        })
        return data;    // 文本节点
    }
}

function tagOpen(c) {
    if (c == "/") {
        return endTagOpen;
    } else if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: "startTag",
            tagName: ""
        }
        return tagName(c);
    } else {
        emit({
            type: "text",
            content: c
        });
        return ;
    }
}

function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: "endTag",
            tagName: ""
        }
        return tagName(c);
    } else if (c == ">") {
        
    } else if (c == EOF) {
        
    } else {

    }
}

function tagName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c == "/") {
        return selfClosingStartTag;
    } else if (c.match(/^[A-Z]$/)) {
        currentToken.tagName += c;
        return tagName;
    } else if (c == ">") {
        emit(currentToken);
        return data;
    } else {
        currentToken.tagName += c;
        return tagName;
    }
}

function beforeAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c == "/" || c == ">" || c == EOF) {
        return afterAttributeName(c);
    } else if (c == "=") {
        
    } else {
        currentAttribute = {
            name: "",
            value: ""
        }
        return attributeName(c);
    }
}

function afterAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return afterAttributeName;
    } else if (c == "/") {
        return selfClosingStartTag;
    } else if (c == "=") {
        return beforeAttributeValue;
    } else if (c == ">") {
        currentToken[currentAttribute.name] = currentAttribute.value;
        emit(currentToken);
        return data;
    } else if (c == EOF) {

    } else {
        currentToken[currentAttribute.name] = currentAttribute.value;
        currentAttribute = {
            name: "",
            value: ""
        };
        return attributeName(c);
    }
}

function attributeName(c) {
    if (c.match(/^[\t\n\f ]$/) || c == "/" || c == ">" || c == EOF) {
        return afterAttributeName(c);
    } else if (c == "=") {
        return beforeAttributeValue;
    } else if (c == "\u0000") {
        
    } else if (c == "\"" || c == "'" || c == "<") {
        
    } else {
        currentAttribute.name += c;
        return attributeName;
    }
}

function beforeAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/) || c == "/" || c == ">" || c == EOF) {
        return beforeAttributeValue;
    } else if (c == "\"") {
        return doubleQuoteAttributeValue;
    } else if (c == "\'") {
        return singleQuoteAttributeValue;
    } else if (c == ">") {
        
    } else {        
        return UnquoteAttributeValue(c);
    }
}

function doubleQuoteAttributeValue(c) {
    if (c == "\"") {
        currentToken[currentAttribute.name] = currentAttribute.value;
        return afterQuoteAttributeValue;
    } else if (c == "\u0000") {
        
    } else if (c == EOF) {
        
    } else {
        currentAttribute.value += c;
        return doubleQuoteAttributeValue;
    }
}

function singleQuoteAttributeValue(c) {
    if (c == "\'") {
        currentToken[currentAttribute.name] = currentAttribute.value;
        return afterQuoteAttributeValue;
    } else if (c == "\u0000") {
        
    } else if (c == EOF) {
        
    } else {
        currentAttribute.value += c;
        return doubleQuoteAttributeValue;   // ? 这里用doubleQuoteAttributeValue?
    }
}

// 需再次听课进行理解
function UnquoteAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        currentToken[currentAttribute.name] = currentAttribute.value;
        return beforeAttributeName;
    } else if (c == "/") {
        currentToken[currentAttribute.name] = currentAttribute.value;
        return selfClosingStartTag;
    } else if (c == ">'") {
        currentToken[currentAttribute.name] = currentAttribute.value;
        emit(currentToken);
        return data;
    } else if (c == "\u0000") {
        
    } else if (c == "\"" || c == "'" || c == "=" || c == "`") {
        
    } else if (c == EOF) {
        
    } else {     
        currentAttribute.value += c;   
        return UnquoteAttributeValue;
    }
}

function afterQuoteAttributeValue(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c == "/") {
        return selfClosingStartTag;
    } else if (c == ">") {
        currentToken[currentAttribute.name] = currentAttribute.value;
        emit(currentToken);
        return data;
    } else if (c == EOF) {

    } else {
        currentAttribute.value += c;
        return doubleQuoteAttributeValue;
    }
}

function selfClosingStartTag(c) {
    if (c == ">") {
        currentToken.isSelfClosing = true;
        emit(currentToken);
        return data;
    } else if (c == "EOF") {

    } else {
        
    }
}

let currentAttribute = null;

let stack = [{type:  "document", children: []}]
let currentTextNode = null

let rules = []
function addCSSRules(text) {
    var ast = css.parse(text)
    rules.push(...ast.stylesheet.rules)
}

// 假设selector都是简单选择器 .class #id tagName选择器div
// 复杂选择器用正则拆分关系
function match(element, selector) {
    if (!selector || !element.attributes)
        return false;
    
    if (selector.charAt(0) == "#") {
        var attr = element.attributes.filter(attr => attr.name === "id")[0];
        if (attr && attr.value === selector.replace("#", ''))
            return true;
    } else if (selector.charAt(0) == ".") {
        var attr = element.attributes.filter(attr => attr.name === "class")[0];
        if (attr && attr.value === selector.replace(".", ''))
            return true;
    } else {
        if (element.tagName === selector) {
            return true;
        }
    }
    return false;
}

function specificity(selector) {
    var p = [0, 0, 0, 0]
    var  selectorParts = selector.split(" ")
    for (var part of selectorParts) {
        if (part.charAt(0) == "#") {
            p[1] += 1;
        } else if (part.charAt(0) == ".") {
            p[2] += 1;
        } else {
            p[3] += 1;
        }
    }
    return p;
}

function compare(sp1, sp2) {
    if (sp1[0] - sp2[0])
        return sp1[0] - sp2[0];
    if (sp1[0] - sp2[0])
        return sp1[0] - sp2[0];
    if (sp1[0] - sp2[0])
        return sp1[0] - sp2[0];
    return sp1[3] - sp2[3];
}

function computeCSS(element) {
    console.log(rules)
    console.log("compute CSS for Element", element)
    // 标签匹配从当前元素逐级往外匹配，所以需要reverse
    var elements = stack.slice().reverse();
    if (!element.computedStyle) 
        element.computedStyle = {};
    
    for (let rule of rules) {
        var selectorParts = rule.selectors[0].split(" ").reverse()

        if (!match(element, selectorParts[0])) continue
        let matched = false;
        var j=1;
        for(var i=0; i<elements.length; i++) {
            j++
        }
        if(j>=selectorParts.length)
            matched = true

        if(matched) {
            console.log("Element", element, element.computedStyle)
            var sp = specificity(rule.selectors[0])
            var computedStyle = element.computedStyle;
            for (var declaration of rule.declaration) {
                if (!computedStyle[declaration.property]) {
                    computedStyle[declaration.property] = {}
                }
                if (!computedStyle[declaration.property].specificity) {
                    computedStyle[declaration.property].value = declaration.value
                    computedStyle[declaration.property].specificity = sp
                } else if (compare(computedStyle[declaration.property].specificity, sp) < 0) {
                    computedStyle[declaration.property].value = declaration.value
                    computedStyle[declaration.property].specificity = sp
                }
                
            }
            // 未做优先级处理 
            console.log(element.computedStyle)
        }
    }
}

function emit(token) {
    if (token.type === "text")
        return;
    let top = stack[stack.length - 1]

    if (token.type == "startTag") {
        let element = {
            type: "element",
            children: [],
            attributes: []
        }
        element.tagName = token.tagName;

        for (let p in token) {
            if (p != "type" || p != "tagName") {
                element.attributes.push({
                    name: p,
                    value: token[p]
                })
            }
        }
        computeCSS(element)
        top.children.push(element)

        if (!token.isSelfClosing)
            stack.push(element);

        currentTextNode = null;
        
    } else if (token.type == "endTag") {
        if (top.tagName != token.tagName) {
            throw new Error("Tag start end doesn't match!");
        } else {
            stack.pop();
        }
        currentTextNode = null;
    } else if (token.type == "text") {
        if (currentTextNode == null) {
            currentTextNode = {
                type: "text",
                content: ""
            }
            top.children.push(currentTextNode);
        }
        currentTextNode.content += token.content;
    }
}

module.exports.parseHTML = function parseHTML(html) {
    // console.log(html);
    let state = data;
    for (let c of html) {
        state = state(c);
    }
    state = state(EOF);
    return stack[0];
}