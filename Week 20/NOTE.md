# 学习笔记

### Git Hooks

pre-commit钩子在键入提交信息前运行。 它用于检查即将提交的快照，例如，检查是否有所遗漏，确保测试运行，以及核查代码。

prepare-commit-msg 钩子在启动提交信息编辑器之前，默认信息被创建之后运行。
它允许你编辑提交者所看到的默认信息。 该钩子接收一些选项：存有当前提交信息的文件的路径、提交类型和修补提交的提交的 SHA-1 校验。 

commit-msg 钩子接收一个参数，此参数即上文提到的，存有当前提交信息的临时文件的路径。

post-commit 钩子在整个提交过程完成后运行。 它不接收任何参数，但你可以很容易地通过运行 git log -1 HEAD 来获得最后一次的提交信息。 该钩子一般用于通知之类的事情。


### ESLint

npm install eslint --save-dev / yarn add eslint --dev

npx eslint --init / yarn run eslint --init

npx eslint yourfile.js / yarn run eslint yourfile.js

config

.eslintrc.{js,yml,json}

`
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}

{
    "extends": "eslint:recommended"
}
`

git stash push

git stash pop

git stash push -k

服务端检查使用web hooks，有强制性；客户端检查不做强制性。

### 无头浏览器

PhantomJS过于老旧

Chrome Headless是目前的最佳实践。

alias chrome=""

chrome --headless --dump-dom about:blank

使用Puppeteer，通过npm i puppeteer -D安装后运行，会提示Error: Could not find expected browser (chrome) locally.

由于Chromium 下载失败导致的。

镜像地址：https://npm.taobao.org/mirrors/chromium-browser-snapshots/Mac/856583/

https://github.com/iotale/garden/issues/21

通过env设置环境变量运行node

env PUPPETEER_EXECUTABLE_PATH=./chrome-mac/Chromium.app/Contents/MacOS/Chromium node index.js