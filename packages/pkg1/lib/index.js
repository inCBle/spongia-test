"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _pkg() {
  const data = _interopRequireDefault(require("@spongia-test/pkg2"));
  _pkg = function _pkg() {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * @Date: 2023-02-02 14:47:15
 * @LastEditors: 吴迪
 * @LastEditTime: 2023-02-05 22:36:27
 * @FilePath: \Monorepo组件库工程化架构搭建\packages\pkg1\src\index.ts
 */
// 引用了pkg2的包，使用 pnpm install @spongia-test/pkg2 -r --filter @spongia-test/pkg1 命令安装其他项目依赖

function fun2() {
  (0, _pkg().default)();
  console.log("I am package 1");
}
fun2();
var _default = fun2;
exports.default = _default;