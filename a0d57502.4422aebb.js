(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{259:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(6),r=(a(0),a(338)),c={id:"touchables",title:"Touchables",sidebar_label:"Touchables"},i={unversionedId:"api/components/touchables",id:"version-2.3.0/api/components/touchables",isDocsHomePage:!1,title:"Touchables",description:"Gesture Handler library provides an implementation of RN's touchable components that are based on native buttons and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native.",source:"@site/versioned_docs/version-2.3.0/api/components/touchables.md",slug:"/api/components/touchables",permalink:"/react-native-gesture-handler/docs/api/components/touchables",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.3.0/api/components/touchables.md",version:"2.3.0",sidebar_label:"Touchables",sidebar:"version-2.3.0/docs",previous:{title:"Swipeable",permalink:"/react-native-gesture-handler/docs/api/components/swipeable"},next:{title:"Drawer Layout",permalink:"/react-native-gesture-handler/docs/api/components/drawer-layout"}},l=[{value:"Example:",id:"example",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Gesture Handler library provides an implementation of RN's touchable components that are based on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api/components/buttons"}),"native buttons")," and does not rely on JS responder system utilized by RN. Our touchable implementation follows the same API and aims to be a drop-in replacement for touchables available in React Native."),Object(r.b)("p",null,"React Native's touchables API can be found here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchablenativefeedback"}),"Touchable Native Feedback")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchablehighlight"}),"Touchable Highlight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchableopacity"}),"Touchable Opacity")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/react-native/docs/touchablewithoutfeedback"}),"Touchable Without Feedback"))),Object(r.b)("p",null,"All major touchable properties (except from ",Object(r.b)("inlineCode",{parentName:"p"},"pressRetentionOffset"),") have been adopted and should behave in a similar way as with RN's touchables."),Object(r.b)("p",null,"The motivation for using RNGH touchables as a replacement for these imported from React Native is to follow built-in native behavior more closely by utilizing platform native touch system instead of relying on the JS responder system.\nThese touchables and their feedback behavior are deeply integrated with native\ngesture ecosystem and could be connected with other native components (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView"),") and Gesture Handlers easily and in a more predictable way, which\nfollows native apps' behavior."),Object(r.b)("p",null,"Our intention was to make switch for these touchables as simple as possible. In order to use RNGH's touchables the only thing you need to do is to change library from which you import touchable components.\nneed only to change imports of touchables."),Object(r.b)("h3",{id:"example"},"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  TouchableNativeFeedback,\n  TouchableHighlight,\n  TouchableOpacity,\n  TouchableWithoutFeedback,\n} from 'react-native';\n")),Object(r.b)("p",null,"has to be replaced with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import {\n  TouchableNativeFeedback,\n  TouchableHighlight,\n  TouchableOpacity,\n  TouchableWithoutFeedback,\n} from 'react-native-gesture-handler';\n")),Object(r.b)("p",null,"For a comparison of both touchable implementations see our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/release_tests/touchables/index.tsx"}),"touchables example")))}b.isMDXComponent=!0},338:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return a?o.a.createElement(m,i(i({ref:t},s),{},{components:a})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);