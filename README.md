<h2 align="center">Vue UI 组件</h2>

<p align="center">
  <a href="https://travis-ci.org/LqZww/gulu-vue"><img src="https://travis-ci.org/LqZww/gulu-vue.svg?branch=master" alt="Build Status"></a>
  <a href="https://badge.fury.io/js/gulu-vue-zww"><img src="https://badge.fury.io/js/gulu-vue-zww.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/gulu-vue-zww"><img src="https://img.shields.io/npm/l/gulu-vue.svg" alt="NPM"></a>
</p>

## 介绍

一个基于 Vue 的 UI 框架 !

## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 中使用 border-box 

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```

    IE 8 及以上浏览器都将支持。

    然后设置默认颜色相关变量（存在兼容性问题）：
    ```
    html {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: #FFFFFF;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999999;
      --border-color-hover: #666;
    }
    ```

2. 安装

    ```
    npm i --save gulu-vue-zww
    ```

3. 引入 gulu-vue-zww

    ```
    import { Button } from "gulu-vue-zww";
    import "gulu-vue-zww/dist/index.css";

    export default {
      components: {
        "z-button": Button,
      },
    };
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码