# 学习笔记

### 浏览器的工作原理

    HTTP      parse  css computing      layout                 render

URL  =>  HTML  =>  DOM  =>  DOM with CSS  =>  DOM with position  =>  Bitmap

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

### HTTP协议解析

ISO-OSI七层网络结构

物理层 数据链路层 网络层 传输层 会话层 表示层 应用层

4G/5G/Wifi  Internet TCP HTTP

TCP与IP的基础知识 

流  端口  require('net)

包  IP地址  libnet/libpcap

IP地址唯一地标识了连入网络的每个设备，libnet构造IP包并且发送，libpcap负责从网卡抓所有的流经你网卡的IP包

HTTP

Request/Response

#### ResponseParser总结

Resonse必须分段构造，所以我们要用一个ResponseParser来“装配”

ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构


### 总结

对浏览器工作原理有更深的了解，了解了如何使用状态机处理字符串，初步了解了如何实现HTTP请求和发送数据以及对Response进行解析