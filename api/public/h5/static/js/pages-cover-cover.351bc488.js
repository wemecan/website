(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cover-cover"],{"0563":function(t,n,e){"use strict";var i=e("4ea4");e("4de4"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var r=i(e("1da1")),a={data:function(){return{list_index:0,list:[{icon:"iconchanpin",text:"产品列表",path:"/pages/pic_list/pic_list",id:-1},{icon:"iconxinwen",text:"新闻列表",path:"/pages/article_list/article_list",id:-1},{icon:"iconcoverage-fill",text:"封面",path:"/pages/cover/cover",id:-1},{icon:"icongeren1",text:"us",path:"/pages/us/us",id:-1}],options:[{icon:"iconzhuye1",text:"主页",path:"/pages/index/index",id:0}]}},created:function(){uni.getStorageSync("tabbar_index")&&(this.list_index=uni.getStorageSync("tabbar_index")),this.getTabbar()},methods:{toGo:function(t,n,e){uni.setStorageSync("tabbar_index",n),0==n?uni.redirectTo({url:t}):uni.redirectTo({url:t+"?id="+e})},getTabbar:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var e,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e={},i=t,n.next=4,t.modulePublic.getBottom().then((function(t){e=t.data}));case 4:for(e=e.filter((function(t){return 1==t.is_show})),r=0;r<e.length;r++)"pic_list"==e[r].type?i.options.push(t.list[0]):"article_list"==e[r].type?i.options.push(t.list[1]):"cover"==e[r].type?i.options.push(t.list[2]):"us"==e[r].type&&i.options.push(t.list[3]),i.options[r+1].text=e[r].navigation_name,i.options[r+1].id=e[r].category_id;case 6:case"end":return n.stop()}}),n)})))()}}};n.default=a},"132e":function(t,n,e){"use strict";var i=e("cfa3"),r=e.n(i);r.a},2963:function(t,n,e){"use strict";e.r(n);var i=e("0563"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"3b5f":function(t,n,e){"use strict";var i=e("4ea4");e("a9e3"),e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("672b")),a={components:{Tabbar:r.default},data:function(){return{content:"",bg_url:"",is_tabbar:!0,backButton:!1}},onLoad:function(t){t.id&&this.getCoverByID(t.id),t.tabbar_hide&&1==Number(t.tabbar_hide)&&(this.is_tabbar=!1,this.backButton=!0)},mounted:function(){if(this.backButton){var t=document.getElementsByClassName("uni-page-head-btn");t[0].style.display="block"}},methods:{getCoverByID:function(t){var n=this;this.modulePublic.getCoverByID(t).then((function(t){var e=t.data[0].content;e=e.replace(/<img /g,'<img style="max-width: 100%"'),n.content=e}))}}};n.default=a},4571:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cover[data-v-7e2243b6]{padding-bottom:%?110?%}.cover .head[data-v-7e2243b6]{height:%?300?%;background-color:#0086b3;overflow:hidden;background-size:cover}.cover .head .img[data-v-7e2243b6]{width:100%}.cover .content[data-v-7e2243b6]{background-color:#fff;padding:%?50?% %?20?% %?20?% %?20?%;-webkit-border-radius:%?50?% %?50?% 0 0;border-radius:%?50?% %?50?% 0 0;z-index:999;margin-top:%?-50?%}.uni-page-head-btn[data-v-7e2243b6]{display:block!important}',""]),t.exports=n},"501b":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"cover"},[e("v-uni-view",{staticClass:"head",style:{background:"url("+t.bg_url+")"}}),e("v-uni-view",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),t.is_tabbar?e("tabbar"):t._e()],1)},a=[]},"5d07":function(t,n,e){"use strict";e.r(n);var i=e("3b5f"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},"63f3":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tabbar"},[t._l(t.options,(function(n,i){return[e("v-uni-view",{key:i,staticClass:"list",class:{list_click:i==t.list_index},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGo(n.path,i,n.id)}}},[e("i",{staticClass:"iconfont",class:n.icon}),t._v(t._s(n.text))])]}))],2)},a=[]},"672b":function(t,n,e){"use strict";e.r(n);var i=e("63f3"),r=e("2963");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("f99e");var o,c=e("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"84da0cd8",null,!1,i["a"],o);n["default"]=s.exports},"70d6":function(t,n,e){var i=e("c805");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("cd25acfa",i,!0,{sourceMap:!1,shadowMode:!1})},c805:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tabbar[data-v-84da0cd8]{height:%?100?%;width:100%;position:fixed;bottom:0;left:0;border-top:%?2?% solid #eee;padding:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:9999;color:#999;background-color:#fff}.tabbar .list[data-v-84da0cd8]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.6rem}.tabbar .list i[data-v-84da0cd8]{width:%?32?%;height:%?32?%}.tabbar .list_click[data-v-84da0cd8]{color:#333}',""]),t.exports=n},cfa3:function(t,n,e){var i=e("4571");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("1a72af1c",i,!0,{sourceMap:!1,shadowMode:!1})},f99e:function(t,n,e){"use strict";var i=e("70d6"),r=e.n(i);r.a},face:function(t,n,e){"use strict";e.r(n);var i=e("501b"),r=e("5d07");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("132e");var o,c=e("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"7e2243b6",null,!1,i["a"],o);n["default"]=s.exports}}]);