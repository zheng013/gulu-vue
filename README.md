# 轱辘 - 一个Vue的组件
[![Build Status](https://www.travis-ci.org/zheng013/gulu-vue.svg?branch=master)](https://www.travis-ci.org/zheng013/gulu-vue)

## 介绍
这是我在学习vue做的一个UI框架，希望能对你有用。
## 开始使用
1. CSS样式

使用本框架前，必须在css中添加border-box
```
*，*::before,::after{
box-sizing:border-box
}
```
IE8及以上浏览器都支持此样式。

你还需要声明默认的颜色样式变量（后续会改成sass）

```
 html {
            --button-height: 36px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-hover-color: #666
        }
```
IE15及以上浏览器都支持此样式。(can i use .com)


2 安装gulu
```
npm i --save gulu-1-1
```
3 引入gulu
```
import {Button} from 'gulu-1-1'

```
4 引入svg symbol（也可以我自动帮你引，将代码放入svg.js import即可）
```
<script src="//at.alicdn.com/t/font_1685616_vlu2xeq38ng.js"></script>

```
## 文档

## 提问

## 变更记录

## 联系方式

## 代码贡献