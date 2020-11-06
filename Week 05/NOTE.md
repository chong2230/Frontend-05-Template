# 学习笔记

### 1. 学习了Proxy的使用

Proxy是强大且危险的特性，为底层库设计，对象行为的可预测性会降低，慎用


### 2. 学习了如何实现vue3的reactive方法

使用Proxy将对象进行代理，获取对象的值时，会调用Proxy中的get方法，通过数组将其存储起来，并将要调用的方法存放到全局的callbacks中。设置对象属性值时，会调用set方法，遍历callbacks方法执行指定的callback()。此处要进行缓存，避免重复new Proxy()对象。此处理解上还有点费力，需反复听课和阅读代码。在其他学习中，添加了core.js，引入了reactive、effect、computed、track、trigger、run等方法，实现了简版vue3，但对其中的具体实现方法还未完全理解。


### 3. 熟悉拖拽的使用

监听元素的mousedown事件，当处于按下状态下，对document的mousemove和mouseup进行监听，获取event.clientX和event.clientY，赋值给元素，使用translate: transform(clientX, clientY)样式来实现。


### 4. 熟悉了Range对象的使用

Range对象代表页面上一段连续的区域，通过Range对象可以获取或者修改页面上任何区域的内容。也可以通过Range的方法进行复制和移动页面任何区域的元素。

通过Range对象，可以获取用户选中的区域，或者指定选中区域，得到Range的起点和终点、修改或者复制里边的文本，甚至是html。在富文本编辑器开发中，经常会使用到这些功能。