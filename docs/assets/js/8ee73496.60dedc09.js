"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[139],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||r;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2814:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={id:"manual-linking",title:"Manual linking"},u=void 0,s={unversionedId:"guides/manual-linking",id:"guides/manual-linking",title:"Manual linking",description:"iOS",source:"@site/docs/guides/manual-linking.md",sourceDirName:"guides",slug:"/guides/manual-linking",permalink:"/flash-list/docs/guides/manual-linking",editUrl:"https://github.com/shopify/flash-list/edit/main/docusaurus/docs/guides/manual-linking.md",tags:[],version:"current",lastUpdatedBy:"Talha Naqvi",lastUpdatedAt:1659518702,formattedLastUpdatedAt:"8/3/2022",frontMatter:{id:"manual-linking",title:"Manual linking"},sidebar:"autoSidebar",previous:{title:"LayoutAnimation",permalink:"/flash-list/docs/guides/layout-animation"},next:{title:"React Native Reanimated",permalink:"/flash-list/docs/guides/reanimated"}},c=[{value:"iOS",id:"ios",children:[{value:"Using &#39;Pods&#39;",id:"using-pods",children:[],level:3}],level:2},{value:"Android",id:"android",children:[],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("h3",{id:"using-pods"},"Using 'Pods'"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to your iOS folder ",(0,r.kt)("inlineCode",{parentName:"li"},"cd ios")),(0,r.kt)("li",{parentName:"ul"},"Add this line to your ",(0,r.kt)("inlineCode",{parentName:"li"},"Podfile")," just below the last pod:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'RNFlashList', :path => '../node_modules/@shopify/flash-list'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pod install"))),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add project to ",(0,r.kt)("inlineCode",{parentName:"li"},"android/settings.gradle"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"include ':@shopify-flash-list'\nproject(':@shopify-flash-list').projectDir = new File(rootProject.projectDir, '../node_modules/@shopify/flash-list/android')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"),", add to dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"...\ndependencies {\n    ...\n+   implementation project(':@shopify-flash-list')\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally, in ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/src/main/java/your/package/MainApplication.kt"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"package com.myapp;\n\n+ import com.shopify.reactnative.flash_list.ReactNativeFlashListPackage\n\n...\n\noverride fun getPackages(): List<ReactPackage> {\n    val packages = PackageList(this).packages\n    packages.add(ReactNativeFlashListPackage());\n    return packages\n}\n")))}p.isMDXComponent=!0}}]);