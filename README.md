# disable-text-size-adjust

[![npm][npm]][npm-url] 
[![downloads][downloads]][downloads-url]
[![license][license]][license-url]

[npm]: https://img.shields.io/npm/v/disable-text-size-adjust.svg
[npm-url]: https://www.npmjs.com/package/disable-text-size-adjust
[downloads]: https://img.shields.io/npm/dm/disable-text-size-adjust.svg
[downloads-url]: https://npmcharts.com/compare/disable-text-size-adjust?minimal=true
[license]: https://img.shields.io/npm/l/disable-text-size-adjust.svg
[license-url]:https://github.com/git-onepixel/disable-text-size-adjust/blob/master/LICENSE

## What problems to solve ?
当用户缩放了系统字体，web页面的字体大小会强制进行同比缩放，导致页面布局错乱。

针对IOS平台，只需设置 `html` 元素样式：  `text-size-adjust:100%;`

针对Android平台，需要根据系统缩放比例进行反向缩放。

## Install

``` bash
# use npm 
npm i disable-text-size-adjust
# use yarn
yarn add disable-text-size-adjust
```

## Usage

``` javascript
// ES6
import 'disable-text-size-adjust';
// require
require('disable-text-size-adjust');
```
