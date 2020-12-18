# 学习笔记

### CSS语法的研究

#### CSS 2.1的语法

CSS总体结构

@charset

@import 

rules: @media @page rule

At-rules

@charset https://www.w3.org/TR/css-syntax-3/[https://www.w3.org/TR/css-syntax-3/]

@import https://www.w3.org/TR/css-cascade-4/[https://www.w3.org/TR/css-cascade-4/]

@media 重点掌握

@page

@counter-style

@keyframes 重点掌握

@fontface 重点掌握

@supports   

@namespace

### CSS规则

选择器

声明：Key/Value

### 选择器语法

#### 简单选择器

*

div svg|a 

.cls

#id

\[attr=value\]

:hover

::before

#### 复合选择器

<简单选择器><简单选择器><简单选择器>

*或者 div 必须写在最前面

#### 复杂选择器

<复合选择器><sp><复合选择器> 子孙选择器

<复合选择器>">"<复合选择器> 父子选择器

<复合选择器>"~"<复合选择器> 邻接选择器

<复合选择器>"+"<复合选择器> 邻接选择器

<复合选择器>"||"<复合选择器> selector level4中才有，表格中选择一列

### 选择器的优先级

简单选择器计数

练习：

请写出下面选择器的优先级： 

`
div#a.b .c[id=x] 
0 1 3 1 

#a:not(#b) 
0 2 0 0 

*.a 
0 0 1 0 

div.a 
0 0 1 1
`

### 伪类

#### 链接/行为

:any-link

:link :visited

:hover

:active

:focus

:target  链接到当前目标，a标签做锚点用

#### 树结构

:empty

:nth-child()

:nth-last-child() 破坏了浏览器计算的时机

:first-child :last-child :only-child 破坏了浏览器计算的时机

#### 逻辑型

:not伪类

:where :has

不应该出现过于复杂的选择器

### 伪元素

::before

::after

::first-line

::first-letter

思考：为什么first-letter可以设置display:block之类的，而first-line不行呢？

作业：编写一个match函数，接收两个参数，第一个参数是一个选择器字符串性质，第二个是一个HTML元素，判断当前的元素是否能够匹配到我们的选择器

`
function match(selector, element) {
    return true;
}
match("div #id.class", document.getElementById("id));
`

# 总结

经过该课程的学习，对CSS有了一种新的全局的认识，原来只停留在选择器阶段，修改页面样式。并且对伪类、伪元素这些内容了解的很少。同时还学到了如何快速从W3C网站中爬取想要的知识，是一种主动学习的极佳方式，这也是以往未曾尝试过的。