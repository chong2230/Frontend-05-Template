# 学习笔记

### Node相关

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

npm命令
`
npm -v
npm install npm -g
cnpm install npm -g

npm install express
var express = require("express");
npm install express -g   # 全局安装
`
fs内置模块提供对文件的操作

文件属性读写，fs.stat、fs.chmod、fs.chown

文件内容读写，fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等

底层文件操作，fs.open、fs.read、fs.write、fs.close等