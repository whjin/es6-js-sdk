# es6-js-sdk
电商网站的账号体系

- 原生`ES6`开发，除兼容库外不引用任何第三方库
- 包括工程化、架构设计、数据`Mock`等常用前端开发模式与流程
- 账号体系`SDK`，同意控制核心功能，对下游开放样式定制

# ES6+ #

- 更高的开发效率 `Object.assign` `Array.from` ...
- 更少的出错可能 `let&const` `Symbol` ...
- 更人性化的语法 **箭头函数** `async/await` ...

# 开发工具 #

- 工程化工具`webpack`
- 语法编译工具`babel`
- 脚手架工具

## webpack配置 ##

- `webpack`用于支持**模块化开发**
- 配置`babel-loader`将`es6`转换为`es5`
- 压缩、合并等前端优化

## babel配置 ##

- 通过`.babelrc`配置文件进行配置
- 与`webpack`或`gulp`等打包工具配合
- 在浏览器引入`babel-polyfill`转换新的`API`

## html-bundler ##

**脚手架工具（[html-bundler](https://github.com/be-fe/html-bundler)）**

- 解决`babel`和`webpack`配置比较繁琐的问题
- 性能与日志优化，`html/css`图片等的处理
- `Dev Server`和环境配置

**安装`html-bundler`**

    npm install html-bundler -g
    
    hb create yourproject -w
    
    cd yourproject && npm install && hb dev

# 需求分析 #

- 产品需要的内容和效果？
- 技术选型
- 技术指标

# 产品定型 #

- 包含登录/注册/找回密码/信息设置与修改
- 支持PC和移动端，各个子网站需要有自己的样式
- 功能逻辑必须统一和同步

# 技术方案 #

- 通过`JS SDK`的方式，由团队统一开发维护，保证功能的统一以及修改的同步。
- 支持PC和移动端，因此包体积要小，要分包，不能有依赖。
- `JS SDK`要包含全部业务逻辑，但不包含具体样式，由下游业务方进行自定义。

# 前端技术指标 #

- 浏览器兼容到IE8
- 支持PC和移动端，大小不能超过**30KB**
- 支持多种引用方式：直接引用，`commonJS`、`AMD`

# 前端架构设计 #

