(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{224:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(338)),o={id:"create-native-wrapper",title:"createNativeWrapper",sidebar_label:"createNativeWrapper()"},c={unversionedId:"gesture-handlers/api/create-native-wrapper",id:"version-2.3.0/gesture-handlers/api/create-native-wrapper",isDocsHomePage:!1,title:"createNativeWrapper",description:"We recently released RNGH 2.0 with new Gestures system. Check out [RNGH 2.0",source:"@site/versioned_docs/version-2.3.0/gesture-handlers/api/create-native-wrapper.md",slug:"/gesture-handlers/api/create-native-wrapper",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/create-native-wrapper",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.3.0/gesture-handlers/api/create-native-wrapper.md",version:"2.3.0",sidebar_label:"createNativeWrapper()",sidebar:"version-2.3.0/docs",previous:{title:"NativeViewGestureHandler",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/nativeview-gh"},next:{title:"Testing",permalink:"/react-native-gesture-handler/docs/api/test-api"}},s=[{value:"Arguments",id:"arguments",children:[{value:"Component",id:"component",children:[]},{value:"config",id:"config",children:[]}]},{value:"Returns",id:"returns",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We recently released RNGH 2.0 with new Gestures system. Check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/#rngh-20"}),"RNGH 2.0\nsection in Introduction")," for more information."))),Object(i.b)("p",null,"Creates provided component with NativeViewGestureHandler, allowing it to be part of RNGH's\ngesture system."),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("h3",{id:"component"},"Component"),Object(i.b)("p",null,"The component we want to wrap."),Object(i.b)("h3",{id:"config"},"config"),Object(i.b)("p",null,"Config is an object with properties that can be used on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/gesture-handlers/api/nativeview-gh"}),Object(i.b)("inlineCode",{parentName:"a"},"NativeViewGestureHandler"))),Object(i.b)("h2",{id:"returns"},"Returns"),Object(i.b)("p",null,"Wrapped component."))}l.isMDXComponent=!0},338:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);