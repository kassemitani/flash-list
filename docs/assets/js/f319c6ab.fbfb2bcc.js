"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[379],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],r={id:"known-issues",title:"Known issues",slug:"/known-issues",sidebar_position:3},l="Known Issues",d={unversionedId:"known-issues",id:"known-issues",title:"Known issues",description:"FlashList and FlatList have very different internal. While the API is almost the same, the behaviour might be different in some cases due to a bug, limitation or missing implementation. In any case, if the issue is already listed here don't create a new one.",source:"@site/docs/known-issues.md",sourceDirName:".",slug:"/known-issues",permalink:"/flash-list/docs/known-issues",editUrl:"https://github.com/shopify/flash-list/edit/main/docusaurus/docs/known-issues.md",tags:[],version:"current",lastUpdatedBy:"Talha Naqvi",lastUpdatedAt:1657727907,formattedLastUpdatedAt:"7/13/2022",sidebarPosition:3,frontMatter:{id:"known-issues",title:"Known issues",slug:"/known-issues",sidebar_position:3},sidebar:"autoSidebar",previous:{title:"Testing with Jest",permalink:"/flash-list/docs/testing"}},c=[{value:"1) FlashList&#39;s rendered size is not usable warning",id:"1-flashlists-rendered-size-is-not-usable-warning",children:[],level:3},{value:"2) <code>onEndReached</code> event doesn&#39;t have <code>distanceFromEnd</code>",id:"2-onendreached-event-doesnt-have-distancefromend",children:[],level:3},{value:"3)<code>scrollToIndex</code> doesn&#39;t have <code>viewOffset, viewPosition</code> support",id:"3scrolltoindex-doesnt-have-viewoffset-viewposition-support",children:[],level:3},{value:"4) <code>renderItem</code> callback doesn&#39;t have all features",id:"4-renderitem-callback-doesnt-have-all-features",children:[],level:3},{value:"5) Web support is in beta",id:"5-web-support-is-in-beta",children:[],level:3},{value:"6) <code>react-native-windows/macos</code> support",id:"6-react-native-windowsmacos-support",children:[],level:3}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"known-issues"},"Known Issues"),(0,a.kt)("p",null,"FlashList and FlatList have very different internal. While the API is almost the same, the behaviour might be different in some cases due to a bug, limitation or missing implementation. In any case, if the issue is already listed here don't create a new one."),(0,a.kt)("h3",{id:"1-flashlists-rendered-size-is-not-usable-warning"},"1) FlashList's rendered size is not usable warning"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlashList")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Flipkart/recyclerlistview"},"recyclerlistview")," to leverage its recycling capability. ",(0,a.kt)("inlineCode",{parentName:"p"},"recyclerlistview's")," default layout algorithm cannot work without a valid size. It needs to first measure itself and then decide how much to draw and reuse. So, make sure that the parent of the list mounts with a valid size (>=2px) and ",(0,a.kt)("inlineCode",{parentName:"p"},"FlashList")," will match the size of its parent. Please note that you cannot apply style directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"FlashList")," so you may need to wrap it in a ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),"."),(0,a.kt)("p",null,"Please note most lists do mount with deterministic sizes so make sure to check if you really need workarounds."),(0,a.kt)("h3",{id:"2-onendreached-event-doesnt-have-distancefromend"},"2) ",(0,a.kt)("inlineCode",{parentName:"h3"},"onEndReached")," event doesn't have ",(0,a.kt)("inlineCode",{parentName:"h3"},"distanceFromEnd")),(0,a.kt)("p",null,"This value is reported as 0. We don't have plans to implement this right now. Please provide feedback if this is important to you."),(0,a.kt)("h3",{id:"3scrolltoindex-doesnt-have-viewoffset-viewposition-support"},"3)",(0,a.kt)("inlineCode",{parentName:"h3"},"scrollToIndex")," doesn't have ",(0,a.kt)("inlineCode",{parentName:"h3"},"viewOffset, viewPosition")," support"),(0,a.kt)("p",null,"The list only guarantees to bring the given index in view port (as close to the top as possible). There is no support for additional customization."),(0,a.kt)("h3",{id:"4-renderitem-callback-doesnt-have-all-features"},"4) ",(0,a.kt)("inlineCode",{parentName:"h3"},"renderItem")," callback doesn't have all features"),(0,a.kt)("p",null,"As of now we only provide relevant data and index. No plans to change this."),(0,a.kt)("h3",{id:"5-web-support-is-in-beta"},"5) Web support is in beta"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Layout is async so it's possible to see shift animations on list load."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlankArea")," event and ",(0,a.kt)("inlineCode",{parentName:"li"},"useBlankAreaTracker")," hook are not supported.")),(0,a.kt)("p",null,"Exercise caution and make sure all changes are tested on web as there could be some differences when compared to Android/iOS."),(0,a.kt)("h3",{id:"6-react-native-windowsmacos-support"},"6) ",(0,a.kt)("inlineCode",{parentName:"h3"},"react-native-windows/macos")," support"),(0,a.kt)("p",null,"FlashList will run in JS only mode on both Windows and macOS. We don't have plans to write native code or actively test on platforms other than Android, iOS and Web."))}p.isMDXComponent=!0}}]);