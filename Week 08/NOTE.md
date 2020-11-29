# 学习笔记

### 有限状态机

#### 每一个状态都是一个机器

在每一个机器里，我们可以做计算、存储、输出......

所有的这些机器接受的输入是一致的

状态机的每一个机器本身没有状态，如果我们用函数表示的话，它应该是一个纯函数（无副作用）

每一个机器知道下一个状态

    每个机器都有确定的下一个状态（Moore）

    每个机器根据输入决定下一个状态（Mealy）

#### Mealy

// 每个函数是一个状态
function state(input)
{
    return next;
}
while(input) {
    state = state(input);
}

Moore中state和input无关

### 使用有限状态机处理字符串


作业：使用状态机完成“abababx”的处理
可选作业：我们如何用状态机处理完全未知的pattern？
参考资料：字符串KMP算法
https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

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
}
function foundA(c) {
    if (c === "b") 
        return foundA2;
    else
        return start(c);
}
function foundA2(c) {
    if (c === "a") 
        return foundB2;
    else
        return start(c);
}
function foundB2(c) {
    if (c === "b") 
        return foundA3;
    else
        return start(c);
}
function foundA3(c) {
    if (c === "a") 
        return foundA3;
    else
        return start(c);
}
function end(c) {
    return end;
}
