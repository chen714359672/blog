(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{530:function(t,s,r){"use strict";r.r(s);var e=r(4),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),r("p",[t._v("number数据超过19位丢失精度处理"),r("br")])]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("后端返回id，结果接收的时候发现id显示出来的时候后面几位老是00，所以特意把这个问题记录下")]),t._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("p",[t._v("浏览上接收的，tid的后面几个一直都是00，这时候查看原始数据，发现并不是，所以应该是被自动转换掉了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chen714359672/picture@master/img/rests1.webp",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chen714359672/picture@master/img/rests2.webp",alt:""}})]),t._v(" "),r("p",[t._v("这时候网上查了下，原来还是js常见的问题了。因为结果中的数字超出了js的数字安全范围，导致精度丢失。")]),t._v(" "),r("h2",{attrs:{id:"解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),r("p",[t._v("采用json-bigint把超出 JS 安全整数范围的数字转为一个 BigNumber 类型的对象")]),t._v(" "),r("p",[t._v("["),r("a",{attrs:{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fsidorares%2Fjson-bigint",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sidorares/json-bigint"),r("OutboundLink")],1),t._v("]")]),t._v(" "),r("p",[t._v("用的话很简单，首先先npm安装下，然后在axios文件里引入")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chen714359672/picture@master/img/rests3.webp",alt:""}})]),t._v(" "),r("p",[t._v("再把返回的结果用json-bigint转换下就可以了")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/chen714359672/picture@master/img/rests4.webp",alt:""}})])])}),[],!1,null,null,null);s.default=i.exports}}]);