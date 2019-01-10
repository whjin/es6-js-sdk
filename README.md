# es6-js-sdk

电商网站的账号体系：[需求分析与技术实现](https://github.com/whjin/es6-js-sdk/blob/master/doc/%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90%E4%B8%8E%E6%8A%80%E6%9C%AF%E5%AE%9E%E7%8E%B0.md)

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

