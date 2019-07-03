# douban-minipro

> A Mpvue project

## 首页

![](https://ws1.sinaimg.cn/large/8660d1bbly1g4mhm6fr6jg20ab0ih7mn.gif)

## 搜索页
![](https://ws1.sinaimg.cn/large/8660d1bbly1g4mhmb2y4jg20ab0ih0v9.gif)

## 搜索详情页

![](https://ws1.sinaimg.cn/large/8660d1bbly1g4mhmeho8fg20ab0ihn4t.gif)
## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
