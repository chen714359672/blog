(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{522:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),a("p",[t._v("关于es6常用的知识点"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("重新阅读了一遍阮一峰老师的《ES6标准入门》，主要为了方便记忆，同时也想把es6比较常用重要的点记录下来")]),t._v(" "),a("h2",{attrs:{id:"声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("​\tconst命令：声明常量")]),t._v(" "),a("p",[t._v("​\tlet命令： 声明变量")]),t._v(" "),a("h3",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("p",[t._v("​\t\t全局作用域")]),t._v(" "),a("p",[t._v("​\t\t函数作用域： function() {}")]),t._v(" "),a("p",[t._v("​\t\t块级作用域： {}")]),t._v(" "),a("h3",{attrs:{id:"作用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用范围"}},[t._v("#")]),t._v(" 作用范围")]),t._v(" "),a("p",[t._v("​\t\t"),a("strong",[t._v("var命令")]),t._v("在全局代码中运行")]),t._v(" "),a("p",[t._v("​\t\t"),a("strong",[t._v("const命令")]),t._v("和"),a("strong",[t._v("let命令")]),t._v("只能在代码块中执行")]),t._v(" "),a("h3",{attrs:{id:"赋值使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值使用"}},[t._v("#")]),t._v(" 赋值使用")]),t._v(" "),a("p",[t._v("​\t\tconst命令声明常量后必须立马赋值")]),t._v(" "),a("p",[t._v("​\t\tlet命令声明变量后可立马赋值或使用时赋值")]),t._v(" "),a("h3",{attrs:{id:"声明方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明方法"}},[t._v("#")]),t._v(" 声明方法")]),t._v(" "),a("p",[t._v("​\t\tvar、const、let、function、class、import")]),t._v(" "),a("h3",{attrs:{id:"重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),a("p",[t._v("​\t\t不允许重复声明")]),t._v(" "),a("p",[t._v("​\t\t未定义就使用会报错： const命令和let命令不存在变量提升")]),t._v(" "),a("p",[t._v("​\t\t暂时性死区： 在代码块内使用const命令和let命令声明变量之前，该变量都不可用")]),t._v(" "),a("h2",{attrs:{id:"解构赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值"}},[t._v("#")]),t._v(" 解构赋值")]),t._v(" "),a("p",[t._v("​\t\t字符串解构： const [ a，b，c，d，e] = “hello”")]),t._v(" "),a("p",[t._v("​\t\t数值解构： const { toString: s } = 123")]),t._v(" "),a("p",[t._v("​\t\t布尔解构：  const { toString: b } =  true")]),t._v(" "),a("p",[t._v("​\t\t对象解构：  const { x,  y } = { x: 1，y: 2 }")]),t._v(" "),a("p",[t._v("​\t\t数组解构： const [x，y] = [1，2]")]),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("​\t\t交换变量值： [x，y] = [y，x]")]),t._v(" "),a("p",[t._v("​\t\t返回函数多个值：\tconst [x，y，z] =  Func()")]),t._v(" "),a("p",[t._v("​\t\t提交JSON数据： const { name，version } = packageJson")]),t._v(" "),a("h3",{attrs:{id:"重点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点-2"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),a("p",[t._v("​\t\t匹配模式： 只要等号两边的模式相同，左边的变量就会被赋予对应的值")]),t._v(" "),a("p",[t._v("​\t\t解构赋值规则： 只要等号右边的值不是对象或数组，就先将其转为对象")]),t._v(" "),a("p",[t._v("​\t\tundefined和null无法转为对象，因此无法进行解构")]),t._v(" "),a("h2",{attrs:{id:"字符串扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展"}},[t._v("#")]),t._v(" 字符串扩展")]),t._v(" "),a("p",[t._v("​\t\t字符串模板： 可单行可多行可插入变量的增强版字符串")]),t._v(" "),a("p",[t._v("​\t\trepeat():\t把字符串重复n次，返回新字符串")]),t._v(" "),a("p",[t._v("​\t\tmatchAll()： 返回正则表达式在字符串的所有匹配")]),t._v(" "),a("p",[t._v("​\t\tincludes(): 是否存在指定字符串")]),t._v(" "),a("p",[t._v("​\t\tstartsWith(): 是否存在字符串头部指定字符串")]),t._v(" "),a("p",[t._v("​\t\tendsWith():  是否存在字符串尾部指定字符串")]),t._v(" "),a("p",[t._v("​\t\ttrimStart():  消除头部空格，返回新字符串")]),t._v(" "),a("p",[t._v("​\t\ttrimEnd():  消除字符串尾部空格，返回新字符串")]),t._v(" "),a("p",[t._v("​\t\treplaceAll():  一次性替换所有匹配，返回新字符串")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aabbcc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'aa__cc'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"数值扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值扩展"}},[t._v("#")]),t._v(" 数值扩展")]),t._v(" "),a("p",[t._v("​\t\tNumber.parseInt（）：  返回转换值的整数部分")]),t._v(" "),a("p",[t._v("​\t\tNumber.parseFloat()： 返回转换值的浮点数部分")]),t._v(" "),a("p",[t._v("​\t\tNumber.isNaN():  是否为NaN")]),t._v(" "),a("p",[t._v("​\t\tNumber.isinteger():  是否为整数")]),t._v(" "),a("h2",{attrs:{id:"对象扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象扩展"}},[t._v("#")]),t._v(" 对象扩展")]),t._v(" "),a("p",[t._v("​\t\tObject.is()： 对比两值是否相等")]),t._v(" "),a("p",[t._v("​\t\tObject.assign():  合并对象（浅拷贝），返回原对象")]),t._v(" "),a("p",[t._v("​\t\tObect.values():  返回以值组成的数组")]),t._v(" "),a("p",[t._v("​\t\tObject.entries():  返回以键和值组成的数组")]),t._v(" "),a("h2",{attrs:{id:"扩展运用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展运用"}},[t._v("#")]),t._v(" 扩展运用")]),t._v(" "),a("p",[t._v("​\t\t克隆数值： const arr = [ ...arr1 ]")]),t._v(" "),a("p",[t._v("​\t\t合并数组： const arr = [ ...arr1，...arr2 ]")]),t._v(" "),a("p",[t._v("​\t\t拼接数组： arr.push(...arr1)")]),t._v(" "),a("p",[t._v("​\t\t合并对象： const obj = { ...obj1，...obj2 }")]),t._v(" "),a("p",[t._v("​\t\t转换数组为对象： { ...[1，2] }")]),t._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("p",[t._v("​\t\tUndefined")]),t._v(" "),a("p",[t._v("​\t\tNull")]),t._v(" "),a("p",[t._v("​\t\tString")]),t._v(" "),a("p",[t._v("​\t\tNumber")]),t._v(" "),a("p",[t._v("​\t\tBoolean")]),t._v(" "),a("p",[t._v("​\t\tObject")]),t._v(" "),a("p",[t._v("​\t\tSymbol")]),t._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),a("p",[t._v("类似于数组的数据结构，成员值都是唯一且没有重复的值")]),t._v(" "),a("p",[t._v("声明： const set = new Set(arr)")]),t._v(" "),a("h3",{attrs:{id:"应用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-2"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v('​\t\t去重字符串：[...new Set(str)].join("")')]),t._v(" "),a("p",[t._v("​\t\t去重数组： [...new Set(arr)] 或 Array.from(new Set(arr))")]),t._v(" "),a("h2",{attrs:{id:"class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[t._v("#")]),t._v(" Class")]),t._v(" "),a("p",[t._v("对一类具有共同特征的事物的抽象")]),t._v(" "),a("p",[t._v("方法和关键字：")]),t._v(" "),a("p",[t._v("​\t\tconstructor()：构造函数")]),t._v(" "),a("p",[t._v("​\t\textends：继承父类")]),t._v(" "),a("p",[t._v("​\t\tsuper:  新建父类的this")]),t._v(" "),a("p",[t._v("​\t\tstatic:  定义静态属性方法")]),t._v(" "),a("h2",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),a("h3",{attrs:{id:"export-规定模块对外接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-规定模块对外接口"}},[t._v("#")]),t._v(" export： 规定模块对外接口")]),t._v(" "),a("p",[t._v("​\t\t默认导出：  export default Person")]),t._v(" "),a("p",[t._v('​\t\t单独导出：  export const name = "Bruce"')]),t._v(" "),a("p",[t._v("​\t\t按需导出：  export { age，name，sex }")]),t._v(" "),a("p",[t._v("​\t\t改名导出：  export { name  as  newName }")]),t._v(" "),a("h3",{attrs:{id:"import-导入模块内部功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-导入模块内部功能"}},[t._v("#")]),t._v(" import：导入模块内部功能")]),t._v(" "),a("p",[t._v("​\t\t默认导入： import  Person  from  ”person“")]),t._v(" "),a("p",[t._v('​\t\t按需导入：  import  { age，name，sex } from "person"')]),t._v(" "),a("h2",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),a("p",[t._v("​\t\t进行中： pending")]),t._v(" "),a("p",[t._v("​\t\t已成功：resolved")]),t._v(" "),a("p",[t._v("​\t\t已失败： rejected")]),t._v(" "),a("h3",{attrs:{id:"出参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出参"}},[t._v("#")]),t._v(" 出参")]),t._v(" "),a("p",[t._v("​\t\tresolved: 将状态从未完成变为成功，在异步操作成功时调用，并将异步操作的结果作为参数传递出去")]),t._v(" "),a("p",[t._v("​\t\treject: 将状态从未完成变为失败，在异步操作失败时调用，并将异步操作的错误作为参数传递出去")]),t._v(" "),a("h3",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("p",[t._v("​\t\tthen(): 分别指定resolved状态和rejected状态的回调函数")]),t._v(" "),a("p",[t._v("​\t\t\t第一参数： 状态变为resolved时调用")]),t._v(" "),a("p",[t._v("​\t\t\t第二参数： 状态变为rejected时调用")]),t._v(" "),a("p",[t._v("​\t\tcatch(): 指定发生错误时的回调函数")]),t._v(" "),a("p",[t._v("​\t\tPromise.all():  将多个实例包装成一个新实例，返回全部实例状态变更后的结果数组（齐变更再返回）")]),t._v(" "),a("p",[t._v("​\t\tPromise.race():  将多个实例包装成一个新实例，返回全部实例状态优先变更后的结果（先变更先返回）")]),t._v(" "),a("p",[t._v("​\t\tPromise.resolve():  将对象转为Promse对象")]),t._v(" "),a("p",[t._v("​\t\tPromse.reject() :  将对象转为状态为rejected的Promse对象")]),t._v(" "),a("h3",{attrs:{id:"重点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点-3"}},[t._v("#")]),t._v(" 重点")]),t._v(" "),a("p",[t._v("​\t\t只有异步操作的结果可决定当前状态是哪一种，其他操作都无法改变这个状态")]),t._v(" "),a("p",[t._v("​\t\t状态改变只有两种可能： 从pending变为resolved、从pending变为rejected")]),t._v(" "),a("p",[t._v("​\t\t一旦新建Promse对象就会立即执行，无法中途取消")]),t._v(" "),a("p",[t._v("​\t\t不设置回调函数，内部抛错不会反应到外部")]),t._v(" "),a("p",[t._v("​\t\t当处于pending时，无法得知目前进展到哪一个阶段")]),t._v(" "),a("p",[t._v("​\t\t实例状态变为resolved或rejected时，会触发then()绑定的回调函数")]),t._v(" "),a("p",[t._v("​\t\tresolve()和reject()的执行总是晚于本轮循环的同步任务")]),t._v(" "),a("p",[t._v("​\t\tthen()返回新实例，后可再调用另一个then()")]),t._v(" "),a("p",[t._v("​\t\tthen()运行中抛出错误会被catch()捕获")]),t._v(" "),a("p",[t._v("​\t\treject()的作用等同于抛出错误")]),t._v(" "),a("p",[t._v("​\t\t实例状态已变成resolved时，再抛出错误是无效的，不会被捕获，等于没有抛出")]),t._v(" "),a("p",[t._v("​")])])}),[],!1,null,null,null);s.default=r.exports}}]);