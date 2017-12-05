module.exports = file => require('@/views/' + file + '.vue').default  // vue-loader at least v13.0.0+
/*require es6 模块产生bug
http://www.jianshu.com/p/be5aee324283
example

// 文件 a.js
const a = 1;
export default a;

// 文件 b.js
var a = require('./a.js');
编译后执行会产生 bug， 因为 a.default 才是需要的模块的对象。
可以通过以下方式来调用。

var a = require('module').default；*/
