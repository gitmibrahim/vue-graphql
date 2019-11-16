(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1eca":function(t,e,n){},"3a7d":function(t,e,n){},"3b50":function(t,e,n){"use strict";var r=n("72c1"),a=n.n(r);a.a},"4be0":function(t,e,n){"use strict";var r=n("1eca"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"articles",attrs:{itemprop:"articleSection"}},t._l(t.articles,(function(e){return n("div",{key:e.id,staticClass:"article"},[n("router-link",{attrs:{to:"/article/"+e.slug}},[n("article",{attrs:{itemscope:"",itemtype:"http://schema.org/Article"}},[n("img",{staticClass:"article-thumbnail",attrs:{src:e.thumbnail_image.image_url,alt:""}}),t._v(" "),n("h4",{attrs:{itemprop:"headline"}},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"author",attrs:{itemprop:"author"}},[n("em",[t._v("author: ")]),t._v(t._s(e.author.name))])])])],1)})))},o=[],s=(n("96cf"),n("c973")),c=n.n(s),l=n("bc3a"),u=n.n(l),p=r["a"].component("Main",{data:function(){return{articles:[]}},mounted:function(){this.getArticles()},methods:{getArticles:function(){var t=c()(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("articles"),!e){t.next=4;break}return this.articles=JSON.parse(e),t.abrupt("return");case 4:return t.next=6,u.a.post("https://metaphysics-production.artsy.net/",{query:"\n          {\n            articles {\n              id\n              thumbnail_title\n              thumbnail_teaser\n              title\n              slug\n              author {\n                id\n                name\n              }\n              thumbnail_image {\n                image_url\n              }\n            }\n          }\n        "});case 6:n=t.sent,this.articles=n.data.data.articles,localStorage.setItem("articles",JSON.stringify(this.articles));case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}}),f=p,d=(n("c266"),n("2877")),m=Object(d["a"])(f,i,o,!1,null,null,null),h=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.sections,(function(e,r){return n("div",{key:r},["image_collection"==e.type?n("div",{staticClass:"article-section-container responsive-layout-container",attrs:{"data-layout":"overflow_fillwidth","data-section-type":"image_collection"}},[n("div",{staticClass:"article-section-image-collection images-loaded",attrs:{"data-index":"0","data-layout":"overflow_fillwidth"}},[n("ul",{staticClass:"single portrait"},[n("li",[n("figure",[n("img",{attrs:{src:e.images[0].url,alt:""}})])])])])]):t._e(),t._v(" "),"text"==e.type?n("div",{staticClass:"article-section-container responsive-layout-container",attrs:{"data-section-type":"text"}},[n("div",{staticClass:"article-section-text",domProps:{innerHTML:t._s(e.body)}})]):t._e()])})))},g=[],b=r["a"].component("Article",{data:function(){return{sections:[]}},mounted:function(){var t=c()(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://writer.artsy.net/api/articles/".concat(this.$route.params.slug));case 2:e=t.sent,this.sections=e.data.sections;case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}),_=b,y=(n("3b50"),Object(d["a"])(_,v,g,!1,null,"2178b7c7",null)),w=y.exports,x=[{path:"/",component:h},{path:"/article/:slug",component:w}],O=x,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("router-view")],1)},k=[],C={name:"app",components:{Main:h,Article:w}},S=C,P=(n("4be0"),Object(d["a"])(S,j,k,!1,null,"2b66678b",null)),M=P.exports;r["a"].config.productionTip=!1,r["a"].use(a["a"]);var A=new a["a"]({routes:O});new r["a"]({render:function(t){return t(M)},router:A}).$mount("#app")},"72c1":function(t,e,n){},c266:function(t,e,n){"use strict";var r=n("3a7d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.737af9e8.js.map