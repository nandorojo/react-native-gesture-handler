(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var o=n(2),r=n(6),a=(n(0),n(338)),i={id:"troubleshooting",title:"Troubleshooting"},s={unversionedId:"troubleshooting",id:"version-2.3.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Troubleshooting",source:"@site/versioned_docs/version-2.3.0/troubleshooting.md",slug:"/troubleshooting",permalink:"/react-native-gesture-handler/docs/troubleshooting",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.3.0/troubleshooting.md",version:"2.3.0",sidebar:"version-2.3.0/docs",previous:{title:"Installation",permalink:"/react-native-gesture-handler/docs/installation"},next:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/quickstart/quickstart"}},u=[{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Reporting issues",id:"reporting-issues",children:[]},{value:"It&#39;s not a bug, it&#39;s a feature",id:"its-not-a-bug-its-a-feature",children:[]}],l={rightToc:u};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("p",null,"Thanks for giving this library a try! We are sorry that you might have encountered issues though. Here is how you can seek help:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Search over the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-gesture-handler/issues"}),"issues on Github"),". There is a chance someone had this problem in the past and it has been resolved!"),Object(a.b)("li",{parentName:"ol"},"When sure your problem hasn't been reported or was reported but the proposed solution doesn't work for you please follow ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#reporting-issues"}),"our issue reporting guidelines"),"."),Object(a.b)("li",{parentName:"ol"},"You can try seeking help on ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://chat.expo.dev/"}),"Expo Developers Discord")," where we often hang out."),Object(a.b)("li",{parentName:"ol"},"If you feel like reading the source code I highly recommend it, as this is by far the best resource and gives you the most up to date insights into how the library works and what might be causing the bug."),Object(a.b)("li",{parentName:"ol"},"If you managed to find the solution consider ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/#contributing"}),"contributing")," a fix or update our documentation to make this information easier to find for the others in the future.")),Object(a.b)("h2",{id:"reporting-issues"},"Reporting issues"),Object(a.b)("p",null,"This library is maintained by a very small team.\nPlease be mindful of that when reporting issue and when it happens that we can't get back to you as soon as you might expect.\nWe would love to fix all the problems as soon as possible, but often our time is constraint with other issues/features or projects.\nTo make it easier for us to understand your issue and to be able to approach it sooner you can help by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Making sure the issue description is complete. Please include all the details about your environment (library version, RN version, device OS etc)."),Object(a.b)("li",{parentName:"ul"},"It is the best to provide an example app that reproduces the issue you are having. Put it up on ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://gist.github.com/"}),"gist"),", ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://snack.expo.io"}),"snack")," or create a repo on Github \u2013\xa0it doesn't matter as long as we can easily pull it in, run and see the issue."),Object(a.b)("li",{parentName:"ul"},"Explain how you run your repro app and what steps to take to reproduce the issue."),Object(a.b)("li",{parentName:"ul"},"Isolate your issue from other dependencies you might be using and make the repro app as minimal as possible."),Object(a.b)("li",{parentName:"ul"},"If you have spent some time figuring out the root cause of the problem you can leave a note about your findings so far."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Do not comment on closed issues"),". It is very unlikely that we are going to notice your comment in such a case. If the issue has been closed, but the proposed solution doesn't work for you, please open a new one providing all the information necessary and linking to the solution you have tried.")),Object(a.b)("h2",{id:"its-not-a-bug-its-a-feature"},"It's not a bug, it's a feature"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Changing ",Object(a.b)("inlineCode",{parentName:"li"},"enabled")," prop during a gesture has no effect, only when a gesture starts (that is a finger touches the screen) the ",Object(a.b)("inlineCode",{parentName:"li"},"enabled")," prop is taken into consideration to decide whether to extract (or not) the gesture and provide it with stream of events to analyze."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Native")," gesture may not conform to the standard state flow due to platform specific workarounds to incorporate native views into RNGH."),Object(a.b)("li",{parentName:"ul"},"Keep in mind that ",Object(a.b)("inlineCode",{parentName:"li"},"Touchables")," from RNGH are rendering two additional views that may need to be styled separately to achieve desired effect (",Object(a.b)("inlineCode",{parentName:"li"},"style")," and ",Object(a.b)("inlineCode",{parentName:"li"},"containerStyle")," props)."),Object(a.b)("li",{parentName:"ul"},"In order for the gesture composition to work, all composed gestures must be attached to the same ",Object(a.b)("inlineCode",{parentName:"li"},"GestureHandlerRootView"),".")))}c.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=c(n),h=o,d=b["".concat(i,".").concat(h)]||b[h]||p[h]||a;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);