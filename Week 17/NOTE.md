# 学习笔记

### yeoman

Yeoman 是一种高效、开源的 Web 应用脚手架搭建系统，意在精简开发过程。Yeoman 因其专注于提供脚手架功能而声誉鹊起，它支持使用各种不同的工具和接口协同优化项目的生成。

Yeoman 提供了命令行实用表单程序“Yo”,Yeoman 包括了应用构建器“Grunt”和“Gulp”，帮助实现应用开发的自动化。Yeoman 软件第三层的特点在于使用了软件包管理器“npm”，管理后端和前端开发的代码包及其依赖关系，由此为应用开发提供便利。

npm install -g yo

npm install -g generator-generator

yo generator

npm link

### webpack

运行命令npm install webpack-cli -g和npm install webpack -g，安装webpack-cli@4.4.0和webpack@5.19.0，在项目下运行webpack，仍提示webpack未安装

[webpack5.0+SSR尝鲜【排坑记录】](https://zhuanlan.zhihu.com/p/270758074)

看着问题不少，其中webpack5.0与webpack-dev-server不兼容，还是暂用4.x吧

入口地点(entry points)

输出(output)

模式(mode)

loader

插件(plugin)

配置(configuration)

模块(module)

### babel

安装所需的包（package）

npm install --save-dev @babel/core @babel/cli @babel/preset-env

npm install --save @babel/polyfill