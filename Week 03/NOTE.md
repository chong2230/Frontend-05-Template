学习笔记

1. 四则运算
词法分析算法包括LL算法（从左到右扫描、从左到右归并）和LR算法。通过四则运算的词法分析，首要步骤就是分析四则运算包含的内容。
TokenNumber:
    1 2 3 4 5 6 7 8 9 0的组合
Operator: +、-、*、/之一
Whitespace: <SP>
LineTerminator: <LF> <CR>
然后对涉及的表达式进行分析，包括加法和乘法，然后进行递归操作
<Expression>::=
    <AdditiveExpresson><EOF>

<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>

2. 正则表达式
通过正则匹配四则运算所用到的字符。
var regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
通过regexp.exec()方法进行检索。反复调用 exec() 方法来遍历字符串中的所有匹配文本。在匹配后，它将把 RegExpObject 的 
lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
总结：需要更深入地了解正则表达式，才能在需要时更方便地使用。

3. LL词法分析
通过字典记录操作符，通过regexp.exec()和lastIndex进行检索，使用对象（包含type和value）进行存储并打印输出。
其中用到了ES6新特性Generator，yield返回数据。
总结：需要掌握regexp.exec()和lastIndex的用法，熟悉ES6~ES11新增特性

4. LL语法分析一
比较难的部分。要把Expression、AdditiveExpression和MultiplicativeExpression的关系梳理出来，然后分情况进行处理。
采取的策略是功能拆分，先分析MultiplicativeExpression的情况。
type="Number"||"MultiplicativeExpression"应该怎么处理，为"MultiplicativeExpression"时，又分为"*"||"/"，应该怎么处理。
// 前三项合成一个MultiplicativeExpression
node.children.push(source.shift());
node.children.push(source.shift());
node.children.push(source.shift());
source.unshift(node);
通过上述代码把node拆分出来，并进行递归，完成整个语法的分析。

5. LL语法分析二
采取和MultiplicativeExpression类似的方式，梳理AdditiveExpresson和Expression。其中AdditiveExpresson前三项合成时变成
node.children.push(source.shift());
node.children.push(source.shift());
MultiplicativeExpression(source);
node.children.push(source.shift());
插入了一句MultiplicativeExpression(source);是把"+"||"-"右侧当做一个乘法表达式，那么就需要使用MultiplicativeExpression()进行分析。
Expression则处理AdditiveExpression和EOF的情况，存储到type为Expression的对象中。
总结：对Expression、AdditiveExpression和MultiplicativeExpression直接逻辑的梳理是件比较痛苦的事。这步理不清是没法开始的，说白了就是需要补算法的功底了。在下面再列一遍，反复听课，反复梳理，再补算法知识，增加练习，以期能达到纯手写的水准。

<Expression>::=
    <AdditiveExpresson><EOF>

<AdditiveExpression>::=
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>