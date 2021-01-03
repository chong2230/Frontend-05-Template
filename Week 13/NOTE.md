# 学习笔记

HTML的定义：XML与SGML

SGML是指”标准通用标记语言“（Standard Generalized Markup Language），是国际上定义电子文件结构和内容描述的标准，是一种非常复杂的文档的结构，主要用于大量高度结构化数据的防卫区赫尔其他工业领域，利于分类和索引。

XML（Extension Markup Language），可扩展标识语言，Web上表示结构化信息的一种标准文本格式，没有复杂的语法和包罗万象的数据定义。

常用转义字符

`
<  小于号  &lt; 
>  大于号  &gt;
&  与号    &amp;
"  双引号  &quot;
'  撇号    &apos;   
×  乘号    &times;
÷  除号    &divide;
`

### HTML语法

合法元素

Element: <tagname>...</tagname>

Text: Text

Comment: <!-- comments -->

Document Type: <!Doctype html>

ProcessingInstruction: <?a 1?> 预处理的语法

CDATA: <![CDATA[ ]]> 文本的另一种语法表达

字符引用

&#161; &amp; &lt; &quot;

### DOM API

修改操作

appendChild、insertBefore、removeChild、replaceChild

高级操作

compareDocumentPosition

contains

isEqualNode

isSameNode

cloneNode

### Range API

一个问题
`
把一个元素所有的子元素逆序
1   5
2   4
3   3
4   2
5   1
`
var range = new Range()

range.setStart(element, 9)

range.setEnd(element, 4)

var range = document.getSelection().getRangeAt(0)

range.setStartBefore

range.setEndBefore

range.setStartAfer

range.setEndAfter

range.selectNode

range.selectNodeContents

var fragment = range.extractContents()

range.insertNode(document.createTextNode("aaaa"))

### CSSOM

document.styleSheets

Rules

document.styleSheets[0].cssRules

document.styleSheets[0].insertRule("p {color: pink}", 0)

CSSStyleRule(selectorText String, Style Key-value 结构)

CSSCharsetRule

CSSCharsetRule

...

`
document.styleSheets[0].cssRules[0].style.color = "ligtgreen;
`

getComputedStyle

window.getComputedStyle(elt, pseudoElt);

### CSSOM View

window

window.innerHeight, window.innerWidth 实际的显示的宽高

window.outerWidth, window.outerHeight

window.devicePixelRatio

window.screen

window.screen.width、window.screen.height

window.screen.availWidth、window.screen.availHeight 和硬件相关

 scroll

 scrollTop、scrollLeft、scrollWidth、scrollHeight

 scroll(x, y) scrollBy(x, y) scrollIntoView() 

 window scrollX、scrollY、scroll(x, y)、scrollBy(x, y)

 layout

 getClientRects()

 getBoundingClientRect()


 ### 其他API

 标准化组织

 khronos (WebGL)

 ECMA(ECMAScript)

 WHATWG(HTML)

 W3C(webaudio、CG/WG)

 作业与实验：全部API的分类和整理

 # 总结

 看起来比较简单基础的内容，实际上确博大精深。老师对知识点的梳理非常全面，有很多没有使用过、不了解的知识点。Range API非常强大，需要非常熟练地掌握。浏览器api内容很多，真正要掌握前端，就需要从使用到知道为何这么用，背后的点滴才显功力。
 