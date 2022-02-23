(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{529:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),t("p",[s._v("关于webpack的一些笔记"),t("br")])]),s._v(" "),t("h2",{attrs:{id:"webpack作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack作用"}},[s._v("#")]),s._v(" webpack作用")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("模块打包")]),s._v("。可以将不同模块的文件打包整合在一起，并且保证它们之间的引用正确，执行有序。利用打包我们就可以在开发的时候根据我们自己的业务自由划分文件模块，保证项目结构的清晰和可读性。")]),s._v(" "),t("li",[t("strong",[s._v("编译兼容")]),s._v("。可以帮助我们队代码打补丁，还可以编译转换.less 、 .vue、.jsx的格式文件")]),s._v(" "),t("li",[t("strong",[s._v("能力扩展")]),s._v("。还可以进一步实现诸如按需加载，代码压缩等一系列功能，帮助我们进一步提高自动化程序，工程效率以及打包输出的质量")])]),s._v(" "),t("h2",{attrs:{id:"webpack特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack特性"}},[s._v("#")]),s._v(" webpack特性")]),s._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"#FF000"}},[s._v("Entry")])],1),s._v("： 入口 ， webpack执行构建的第一步将从Entry开始，可抽象成输入")]),s._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"#FF000"}},[s._v("Module")])],1),s._v("： 模块，在webpack里一切皆模块，一个模块对应着一个文件。webpack会从配置的entry开始递归找出所有依赖的模块。")]),s._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"#FF000"}},[s._v("Chunk")])],1),s._v(":  代码块，一个chunk由多个模块组合而成，用于代码合并与分割")]),s._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"#FF000"}},[s._v("loader")])],1),s._v(":  模块转换器，用于把模块原内容按照需求转换成新内容")]),s._v(" "),t("p",[s._v("在打包过程中，会默认把所有遇到的文件都当作 "),t("code",[s._v("JavaScript")]),s._v("代码进行解析，因此当项目存在非"),t("code",[s._v("JS")]),s._v("类型文件时，我们需要先对其进行必要的转换，才能继续执行打包任务")]),s._v(" "),t("p",[s._v("当链式调用多个 loader 的时候，请记住它们会以相反的顺序执行。取决于数组写法格式，"),t("strong",[s._v("从右向左或者从下向上执行")])]),s._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"#FF000"}},[s._v("plugin")])],1),s._v(":  扩展插件，在webpack构建流程中的特定时机注入逻辑来改变构建结果")]),s._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"#FF000"}},[s._v("output")])],1),s._v(":  输入结果")]),s._v(" "),t("h2",{attrs:{id:"构建流程分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建流程分析"}},[s._v("#")]),s._v(" 构建流程分析")]),s._v(" "),t("ol",[t("li",[t("font",{attrs:{color:"#FF000"}},[s._v("初始化")]),s._v(" "),t("ol",[t("li",[s._v("从配置文件和shell语句中读取与合并参数，得出最终的参数")])])],1),s._v(" "),t("li",[t("font",{attrs:{color:"#FF000"}},[s._v("run实例化")]),s._v(" "),t("ol",[t("li",[s._v("初始化对象后，加载所有配置的插件，执行对象的run方法开始执行编译")])])],1),s._v(" "),t("li",[t("font",{attrs:{color:"#FF000"}},[s._v("编译构建")]),s._v(" "),t("ol",[t("li",[s._v("entry  确定入口，找出所有的入口文件")]),s._v(" "),t("li",[s._v("make  编译模块，从入口文件出发，调用所有配置的loader对模块进行翻译")]),s._v(" "),t("li",[s._v("build module  完成模块编译  翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")]),s._v(" "),t("li",[s._v("seal  输出资源  根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再把每个chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")]),s._v(" "),t("li",[s._v("emit  输出完成  把文件内容写入到文件系统")])])],1)]),s._v(" "),t("p",[s._v("1、读取"),t("code",[s._v("webpack")]),s._v("的配置参数；")]),s._v(" "),t("p",[s._v("2、启动"),t("code",[s._v("webpack")]),s._v("，创建"),t("code",[s._v("Compiler")]),s._v("对象并开始解析项目；")]),s._v(" "),t("p",[s._v("3、从入口文件（"),t("code",[s._v("entry")]),s._v("）开始解析，并且找到其导入的依赖模块，递归遍历分析，形成依赖关系树；")]),s._v(" "),t("p",[s._v("4、对不同文件类型的依赖模块文件使用对应的"),t("code",[s._v("Loader")]),s._v("进行编译，最终转为"),t("code",[s._v("Javascript")]),s._v("文件；")]),s._v(" "),t("p",[s._v("5、整个过程中"),t("code",[s._v("webpack")]),s._v("会通过发布订阅模式，向外抛出一些"),t("code",[s._v("hooks")]),s._v("，而"),t("code",[s._v("webpack")]),s._v("的插件即可通过监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的")]),s._v(" "),t("h2",{attrs:{id:"常见的loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的loader"}},[s._v("#")]),s._v(" 常见的Loader")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("file-loader")]),s._v("： 把文件输出到一个文件夹中，在代码中通过相对URL去引用输出的文件")]),s._v(" "),t("li",[t("strong",[s._v("url-loader")]),s._v("： 与file-loader类似，区别是用户可以设置一个阈值，大于阈值会交给file-loader处理，小于阈值时返回文件base64形式编码（处理图片和字体）")]),s._v(" "),t("li",[t("strong",[s._v("image-loader")]),s._v("：加载并且压缩图片文件")]),s._v(" "),t("li",[t("strong",[s._v("json-loader")]),s._v(":  加载 JSON 文件（默认包含）")]),s._v(" "),t("li",[t("strong",[s._v("babel-loader")]),s._v("：把 ES6 转换成 ES5")]),s._v(" "),t("li",[t("strong",[s._v("ts-loader")]),s._v(": 将 TypeScript 转换成 JavaScript")]),s._v(" "),t("li",[t("strong",[s._v("sass-loader")]),s._v("：将SCSS/SASS代码转换成CSS")]),s._v(" "),t("li",[t("strong",[s._v("css-loader")]),s._v("：加载 CSS，支持模块化、压缩、文件导入等特性")]),s._v(" "),t("li",[t("strong",[s._v("style-loader")]),s._v("：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS")]),s._v(" "),t("li",[t("strong",[s._v("postcss-loader")]),s._v("：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀")]),s._v(" "),t("li",[t("strong",[s._v("eslint-loader")]),s._v("：通过 ESLint 检查 JavaScript 代码")])]),s._v(" "),t("h2",{attrs:{id:"常见的plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的plugin"}},[s._v("#")]),s._v(" 常见的Plugin")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("html-webpack-plugin")]),s._v(":  简化HTML文件创建")]),s._v(" "),t("li",[t("strong",[s._v("mini-css-extract-plugin")]),s._v(": 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)")]),s._v(" "),t("li",[t("strong",[s._v("clean-webpack-plugin")]),s._v(": 目录清理")]),s._v(" "),t("li",[t("strong",[s._v("webpack-bundle-analyzer")]),s._v(": 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)")])]),s._v(" "),t("h2",{attrs:{id:"loader与plugin的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader与plugin的区别"}},[s._v("#")]),s._v(" Loader与Plugin的区别")]),s._v(" "),t("p",[s._v("Loder本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为webpack只认识js,所以loader相当于翻译官，对其他类型的资源进行转译的预处理工作。")]),s._v(" "),t("p",[s._v("Plugin就是插件，可以扩展webpack的功能。")]),s._v(" "),t("p",[s._v("Loader在module.rules中配置，作为模块的解析规则，类型为数组。每一项都是一个Object，内部包含了test（类型文件）、loader、options（参数）等属性")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...other config")]),s._v("\n  module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^your-regExp$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'loader-name-A'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n             loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'loader-name-B'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("Plugin在plugins中单独配置，类型为数组，每一项是一个plugin的实例")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" webpackConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HtmlWebpackPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            template"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/index.html'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以src/目录下的index.html为模板打包")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"提供效率的插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提供效率的插件"}},[s._v("#")]),s._v(" 提供效率的插件")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("webpack-dashboard")]),s._v("：可以更友好的展示相关打包信息")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("webpack-merge")]),s._v("：提取公共配置，减少重复配置代码")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("speed-measure-webpack-plugin")]),s._v("：简称 SMP，分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时，有助于找到构建过程中的性能瓶颈")])])]),s._v(" "),t("h2",{attrs:{id:"sourcemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap"}},[s._v("#")]),s._v(" sourcemap")]),s._v(" "),t("p",[s._v("source map是将编译、打包、压缩后的diamante映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("hidden-source-map")]),s._v("：借助第三方错误监控平台 Sentry 使用")])]),s._v(" "),t("h2",{attrs:{id:"模块打包原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块打包原理"}},[s._v("#")]),s._v(" 模块打包原理")]),s._v(" "),t("p",[s._v("Webpack 实际上为每个模块创造了一个可以导出和导入的环境，本质上并没有修改 代码的执行逻辑，代码执行顺序与模块加载顺序也完全一致")]),s._v(" "),t("h2",{attrs:{id:"文件监听原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件监听原理"}},[s._v("#")]),s._v(" 文件监听原理")]),s._v(" "),t("p",[s._v("在发现源码发生变化时，自动重新构建出新的输出文件。")]),s._v(" "),t("p",[s._v("webapck开启监听模式，有两种方式：")]),s._v(" "),t("p",[s._v("​\t启动webpack命令时，带上 -- watch原理")]),s._v(" "),t("p",[s._v("​\t在配置webpack.config.js中设置watch：true")]),s._v(" "),t("p",[s._v("缺点： 每次需要手动刷新浏览器")]),s._v(" "),t("p",[s._v("原理： 轮训判断文件的最后编辑时间是否变化，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等aggregateTimeout后再执行")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("export "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    \n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认false,也就是不开启    ")]),s._v("\n\twatch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只有开启监听模式时，watchOptions才有意义    ")]),s._v("\n\twatchOptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("        \n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认为空，不监听的文件或者文件夹，支持正则匹配        ")]),s._v("\n\t\tignored"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        \n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听到变化发生后会等300ms再去执行，默认300ms        ")]),s._v("\n\t\taggregateTimeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        \n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次        ")]),s._v("\n\t\tpoll"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("    \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"webpack热更新原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack热更新原理"}},[s._v("#")]),s._v(" webpack热更新原理")]),s._v(" "),t("p",[s._v("webapck的热更新又称热替换。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。")]),s._v(" "),t("p",[s._v("核心就是客户端从服务端拉去更新后的文件，准备的说是chunk diff，实际上wds与浏览器之间维护了一个websocket，当本地资源发生变化时，wds会向浏览器推送更新，并带上构建时的hash，让客户端与上一次资源进行对比。客户端对比出差异后会向wds发起ajax请求来获取更改内容（文件列表，hash）。这样客户端就可以再借助这些信息继续向WDS发起jsonp请求获取该jsonp请求获取该chunk的增量更新。后续的部分由hotmoduleplugin来完成。")]),s._v(" "),t("h2",{attrs:{id:"文件指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[s._v("#")]),s._v(" 文件指纹")]),s._v(" "),t("p",[t("code",[s._v("Hash")]),s._v(":   和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会更改")]),s._v(" "),t("p",[t("code",[s._v("Chunkhash")]),s._v("： 和webpack打包的chunk有关，不同的entry会生出不同的chunkhash")]),s._v(" "),t("p",[t("code",[s._v("Contenthash")]),s._v(":  根据文件内容来定义hash，文件内容不变，则contenthash不变")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   \n\tentry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("        \n\t\tapp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./scr/app.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        \n\t\tsearch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/search.js'")]),s._v("    \n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n\toutput"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("        \n\t\tfilename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name][contenthash:8].js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        \n\t\tpath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("__dirname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/dist'")]),s._v("    \n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("占位符名称及含义")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ext")]),s._v("     资源后缀名")]),s._v(" "),t("li",[t("code",[s._v("name")]),s._v("    文件名称")]),s._v(" "),t("li",[t("code",[s._v("path")]),s._v("    文件的相对路径")]),s._v(" "),t("li",[t("code",[s._v("folder")]),s._v("  文件所在的文件夹")]),s._v(" "),t("li",[t("code",[s._v("contenthash")]),s._v("   文件的内容hash，默认是md5生成")]),s._v(" "),t("li",[t("code",[s._v("hash")]),s._v("         文件内容的hash，默认是md5生成")]),s._v(" "),t("li",[t("code",[s._v("emoji")]),s._v("        一个随机的指代文件内容的emoj")])]),s._v(" "),t("h2",{attrs:{id:"webpack的构建速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack的构建速度"}},[s._v("#")]),s._v(" webpack的构建速度")]),s._v(" "),t("p",[t("code",[s._v("压缩代码")])]),s._v(" "),t("ul",[t("li",[s._v("多进程并行压缩\n"),t("ul",[t("li",[s._v("webpack-paralle-uglify-plugin")]),s._v(" "),t("li",[s._v("uglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)")]),s._v(" "),t("li",[s._v("terser-webpack-plugin 开启 parallel 参数")])])]),s._v(" "),t("li",[s._v("通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。")])]),s._v(" "),t("p",[t("code",[s._v("图片压缩")])]),s._v(" "),t("ul",[t("li",[s._v("使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)")]),s._v(" "),t("li",[s._v("配置 image-webpack-loader")])]),s._v(" "),t("p",[t("code",[s._v("缩小打包作用域")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("exclude/include (确定 loader 规则范围)")]),s._v(" "),t("li",[s._v("resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)")]),s._v(" "),t("li",[s._v("resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)")]),s._v(" "),t("li",[s._v("resolve.extensions 尽可能减少后缀尝试的可能性")]),s._v(" "),t("li",[s._v("noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)")]),s._v(" "),t("li",[s._v("IgnorePlugin (完全排除模块)")]),s._v(" "),t("li",[s._v("合理使用alias")])]),s._v(" "),t("p",[t("code",[s._v("提取页面公共资源")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("基础包分离：\n"),t("ul",[t("li",[s._v("使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中")]),s._v(" "),t("li",[s._v("使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件")])])])]),s._v(" "),t("p",[t("code",[s._v("DLL")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。")]),s._v(" "),t("li",[s._v("HashedModuleIdsPlugin 可以解决模块数字id问题")])]),s._v(" "),t("p",[t("code",[s._v("充分利用缓存提升二次构建速度")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("babel-loader 开启缓存")]),s._v(" "),t("li",[s._v("terser-webpack-plugin 开启缓存")]),s._v(" "),t("li",[s._v("使用 cache-loader 或者 hard-source-webpack-plugin")])]),s._v(" "),t("p",[t("code",[s._v("Tree shaking")])]),s._v(" "),t("ul",[t("li",[s._v("打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率")]),s._v(" "),t("li",[s._v("禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking")]),s._v(" "),t("li",[s._v("使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码\n"),t("ul",[t("li",[s._v("purgecss-webpack-plugin 和 mini-css-extract-plugin配合使用(建议)")])])])]),s._v(" "),t("p",[t("code",[s._v("Scope hoisting")])]),s._v(" "),t("ul",[t("li",[s._v("构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突")]),s._v(" "),t("li",[s._v("必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("动态Polyfill\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护")])])])}),[],!1,null,null,null);a.default=n.exports}}]);