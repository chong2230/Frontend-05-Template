// 在一个字符串中，找到字符"a"
function match(string) {
    for (let c of string) {
        if (c == "a")
            return true;
    }
    return false;
}
match("I am groot");

// 在一个字符串中，找到字符"ab"(不能使用正则表达式)
function match(string) {
    let foundA = false;
    for (let c of string) {
        if (c == "a")
            foundA = true;
        else if (foundA && c == "b")
            return true;
        else
            foundA = false;
    }
    return false;
}
match("I abm groot");

// 在一个字符串中，找到字符"abc"

// 状态机的实现

function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}
function start(c) {
    if (c === "a") 
        return foundA;
    else return start;    
}
function foundA(c) {
    if (c === "b") 
        return foundB;
    else
        return start(c);
}
function foundB(c) {
    if (c === "c") 
        return end;
    else
        return start(c);
}
function end(c) {
    return end;
}

// 问题升级：找到字符串“abcabx”
function match(string) {
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}
function start(c) {
    if (c === "a") 
        return foundA;
    else 
        return start;
}
function foundA(c) {
    if (c === "b") 
        return foundB;
    else
        return start(c);
}
function foundB(c) {
    if (c === "c") 
        return foundC;
    else
        return start(c);
}
function foundC(c) {
    if (c === "a") 
        return foundA2;
    else
        return start(c);
}
function foundA2(c) {
    if (c === "b") 
        return foundB2;
    else
        return start(c);
}
function foundB2(c) {
    if (c === "x") 
        return end;
    else
        return foundB(c);
}
function end(c) {
    return end;
}
match("I am abcabcabx");