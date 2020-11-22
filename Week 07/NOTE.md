# 学习笔记

### 运算符和表达式

Atom、Expression、Statement、Structure、Program/Module

Member

a.b a[b] foo`string` super.b super[ `b` ] new.target new Foo() new Foo

Reference

Object Key delete assign

Call

foo() super() foo()['b] foo().b foo()`abc`

Left Handside & Right Handsize

Update（自增、自减）

a++ a-- --a ++a

++a++，a会优先和后边的自增相结合，++(a++)，语法上是不合法的

Unary（单目运算符）

delete a.b、void foo()、typeof a、+a、-a、~a、!a、await a

Exponental(**)

Multiplicative(* / %)

Additive(+ -)

Shift(<< >> >>>)

Relationshio(< > <= >= instanceof in)

Equality(== != === !===)

Bitewise(& ^ |)

Logical(&& || )

Conditional( ? : )

### Completion Record
 
[[type]]: normal, break, continue, return, or throw

[[value]]: 基本类型

[[target]]: label 语句前加标识符和冒号，continue和break（后加上target）会与它进行交互
 
##### 简单语句和复合语句

简单语句

ExpressionStatement

EmptyStatement: 一个分号; 没什么意义

DebuggerStatement：debugger;调试时使用的语句

ThrowStatement 抛出异常

ContinueStatement

BreakStatement

ReturnStatement 函数中使用，返回函数的返回值
 
复合语句

BlockStatement

IfStatement

SwitchStatement 建议if代替switch，因为switch容易写错，每个case都需要加break

IterationStatement

WithStatement

LabelledStatement

TryStatement try catch finally 三段结构，try不能省略{}
 
block
{
     
}
 
Iteration
while() {} 
do {} while(); 
for(; ;) 
for(k in obj) {} 
for(... of ...) 
 
try

try中return后，finally仍会执行
 
声明（非JavaScript标准）

FunctionDeclaration

GeneratorDeclaration

AsyncFunctionDeclaration

AsyncGeneratorDeclaration

VariableStatement

ClassDeclaration

LexicalDeclaration（const和let）
 
function

function*

async function

async function*

(function写在尾部，也可以被访问到)

var
 
class const let

(在声明前使用，会报错，现代的，尽量使用)
 
预处理（pre-process）

所有的声明都有预处理机制，const声明前使用会报错，可以用try catch捕获
 
作用域

var 函数体

const 所在的{}
 
JS执行粒度（运行时）

宏任务、微任务（Promise）、函数调用、语句/声明、表达式、直接量/变量/this
 
事件循环

等待，获取代码，执行代码，继续等待...
 
Realm

找出js中所有Realm对象，把Realm做一个可视化对象

# 学习总结

1. 对运算符和表达式、类型转换、运行时、语句、声明、宏任务和微任务、函数调用有了更全面的认识

2. 作用域、闭包、作用域链相关概念还需要加深理解

3. 对宏任务和微任务以及事件机制需要更深入地了解

