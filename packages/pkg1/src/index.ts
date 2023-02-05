/*
 * @Date: 2023-02-02 14:47:15
 * @LastEditors: 吴迪
 * @LastEditTime: 2023-02-05 23:08:03
 * @FilePath: \Monorepo组件库工程化架构搭建\packages\pkg1\src\index.ts
 */
// 引用了pkg2的包，使用 pnpm install @spongia-test/pkg2 -r --filter @spongia-test/pkg1 命令安装其他项目依赖
// import pkg2 from '@spongia-test/pkg2'

function fun2() {
  // pkg2();
  console.log("I am package 1");
}

fun2()
export default fun2;
