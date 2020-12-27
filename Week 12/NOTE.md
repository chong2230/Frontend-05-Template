# 学习笔记

### 盒

标签（Tag） 元素（Element） 盒（Box）

`
HTML代码中可以书写开始_标签___，结束__标签__ ，和自封闭_标签___ 。
一对起止_标签___ ，表示一个__元素__ 。
DOM树中存储的是_元素___和其它类型的节点（Node）。
CSS选择器选中的是_标签___ 。
CSS选择器选中的_标签___ ，在排版时可能产生多个_盒___ 。（注意）
排版和渲染的基本单位是_盒___ 。（注意）
`

盒模型

多层结构，content，padding，border，margin

box-sizing: 

content-box 排版占用的区块是content+padding+border+margin

border-box 包括了padding和border

正常流

排版有正常流、flex、grid、Houdini（完全自由的拿JS干预的排版）

[Grid网格布局](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

容器（container）和项目（item）

行（row）和列（column）

单元格（cell）

网格线（grid line）

display: grid指定一个容器采用网格布局，容器元素默认为块级元素。通过display: inline-grid设成行内元素。

注意：设为网格布局后，容器子元素（项目）的float、display: inline-block、display: tabel-cell、vertical-align和column-*等设置都将失效。

grid-template-columns, grid-template-rows

grid-row-gap, grid-column-gap, grid-gap

grid-template-areas

grid-auto-flow

justify-items, align-items, place-items

justify-content, align-content, place-content

grid-auto-columns, grid-auto-rows

......

太多了吧，大哥，写不下去了！

正常流排版

收集盒进行，计算盒在行中的排布，计算行的排布

BFC，从左到右，从上到下排布

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

如何创建BFC

1. float的值不是none。
2. position的值不是static或者relative。
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4. overflow的值不是visible

IFC

正常流的块级排布

边距折叠

Block

Block Container：里面有BFC的

Block-level Box: 外面有BFC的

Block Box = Block Container + Block-level Box，里外都有BFC的

### Flex排版

收集盒进行，计算盒在主轴方向的排布，计算盒在交叉轴方向的排布

### Animation 

@keyframes定义

animation: 使用

`
@keyframes mykf {
    from {background-color: red;}
    to {background-color: yellow;}
}
div {
    animation: mykf 5s infinite;
}
`

animation-name 时间曲线

animation-duration 动画的时长

animation-timing-function 动画的时间曲线

animation-delay 动画开始前的延迟

animation-iteration-count 动画的播放次数

animation-direction 动画的方向

Transition

transition-property 要变换的属性

transition-duration 变换的时长

transition-timing-function 时间曲线

transition-delay 延迟

https://cubic-bezier.com/

三次贝塞尔曲线，牛顿积分法

### 颜色

红黄蓝三原色（颜料，CMY，CMYK）红绿蓝的补色，品红、黄、青

红绿蓝三原色

HSL和HSV （H：色相，S: 纯度 L：亮度lightness，V:value 色值，Brightness 明度）

### 绘制

几何图形：border、box-shadow、border-radius

文字：font、text-decoration

位图: background-image