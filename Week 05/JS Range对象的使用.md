# JS Range使用整理

### 参考链接：

[JS Range使用整理](https://blog.csdn.net/weixin_30409849/article/details/97139845)

[JS Range 对象的使用](https://segmentfault.com/a/1190000009875696)


### 一：Range对象的概念

Range对象代表页面上一段连续的区域，通过Range对象可以获取或者修改页面上任何区域的内容。也可以通过Range的方法进行复制和移动页面任何区域的元素。

通过Range对象，可以获取用户选中的区域，或者指定选中区域，得到Range的起点和终点、修改或者复制里边的文本，甚至是html。在富文本编辑器开发中，经常会使用到这些功能。

### 二：Range对象的属性和方法

#### (1)属性

startContainer

包含“起点”的节点。“包含”的意思是起点所属的节点。

endContainer

包含“结束点”的节点

startOffset

“起点”在startContainer中的偏移量。

#### (2)定位（设置“起点”和“结束点”）的一些方法

setStart(node, offset)和setEnd(node, offset)

setStart：设置起点的位置，node是对startContainer的引用，偏移则是startOffset；

setEnd：设置结束点的位置，node是对endContainer的引用，偏移则是startOffset；

setStartBefore(referenceNode)、setStartAfter(referenceNode)

setEndBefore(referenceNode)、setEndAfter(referenceNode)

setStartBefore：将“起点”设置到referenceNode前

setStartAfter：将“起点”设置到referenceNode后

setEndBefore：将“结束点”设置到referenceNode前

setEndAfter：将“结束点”设置到referenceNode后

selectNode(referenceNode)和selectNodeContents(referenceNode)

selectNode：设置Range的范围，包括referenceNode和它的所有后代(子孙)节点。

selectNodeContents：设置Range的范围，包括它的所有后代节点。

#### (3)修改范围的方法

cloneRange()

cloneRange()方法将返回一个当前Range的副本，它也是Range对象。

cloneContents()

可以克隆选中Range的fragment并返回改fragment。这个方法类似extractContents()，但不是删除，而是克隆。

deleteContents()

从Dom中删除Range选中的fragment。注意该函数没有返回值（实际上为undefined）。

extractContents()

将选中的Range从DOM树中移到一个fragment中，并返回此fragment。

insertNode

insertNode方法可以插入一个节点到Range中，注意会插入到Range的“起点”。

insertNode

insertNode方法可以插入一个节点到Range中，注意会插入到Range的“起点”。

compare：返回1, 0, -1.（0为相等，1为时，comparerange在sourceRange之后，-1为comparerange在sourceRange之前）。

detach()

虽然GC（垃圾收集器）会将其收集，但用detach()释放range对象是一个好习惯。语法为：oRange.detach();

toString()

返回该范围表示的文档区域的纯文本内容，不包含任何标签;