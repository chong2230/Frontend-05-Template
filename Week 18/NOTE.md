# 学习笔记

### 单元测试工具 Mocha

为什么要做单元测试？

某些库可能会被多个地方使用，需要保证它未来能够保持稳定性，这样以后在修改代码的时候不用大量去回归原来的代码

TDD：测试驱动，BDD：行为驱动，语法上的差异只是前者在做断言，后者在做描述

出现BDD的原因是希望项目经理能写，希望PD在写story的时候就把测试用例写了，所以它强调的是多角色在生产链路上的协同问题

mocha：mocha是一个功能丰富的测试框架，也就是运行测试的工具，

travis-ci：持续集成工具，相当于一个docker容器，每次发布代码会把代码拉到docker容器，然后执行一些你想执行的东西

karma：浏览器测试框架，可以搭配mocha、should.js等一起使用，为了让测试用例可以跑在真实的浏览器中，并且同时可以跑多个浏览器，可以检测浏览器的兼容性。mac没有IE，可以使用https://www.browserling.com/

主要是在填karma.conf.js

karma的原理主要是把代码放过去以后如何把测试的结果同步给node，用websocket做通讯，联动浏览器和node。webpack的热重载也是用websocket做通讯

断言库：做单元测试是需要写测试脚本的，那么测试脚本就需要用到断言库

node assert：http://nodejs.cn/api/assert.html  由于是node原生支持，debug能力会更强。

should.js

expect.js

chai.js

mocha不限制使用哪一种断言库，它需要先引入断言库，如：

var should=require('should');

mocha的使用先推荐一下[阮一峰老师的教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)

安装

npm install --global mocha

npm install --save-dev mocha

使用新语法写测试用例

./node_modules/.bin/mocha --require @babel/register

code coverage

nyc

npm install --save-dev @istanbuljs/nyc-config-bable

"mocha": "^8.2.1",
"nyc": "^15.1.0",

