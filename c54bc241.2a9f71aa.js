(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{338:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var a=t(0),c=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),b=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},h=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=b(t),h=a,p=d["".concat(r,".").concat(h)]||d[h]||u[h]||l;return t?c.a.createElement(p,o(o({ref:n},s),{},{components:t})):c.a.createElement(p,o({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=h;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},56:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(2),c=t(6),l=(t(0),t(338)),r={},o={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.1.1/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.1.1/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.1.1/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.1.1/api/gestures/base-gesture-callbacks.md",version:"2.1.1"},i=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",children:[]},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",children:[]},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",children:[]},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",children:[]},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",children:[]}],s={rightToc:i};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(l.b)("h3",{id:"onbegincallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(l.b)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),Object(l.b)("h3",{id:"onstartcallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(l.b)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),Object(l.b)("h3",{id:"onendcallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(l.b)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),Object(l.b)("h3",{id:"onfinalizecallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),Object(l.b)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),Object(l.b)("h3",{id:"ontouchesdowncallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),Object(l.b)("p",null,"Set the ",Object(l.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(l.b)("h3",{id:"ontouchesmovecallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),Object(l.b)("p",null,"Set the ",Object(l.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(l.b)("h3",{id:"ontouchesupcallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),Object(l.b)("p",null,"Set the ",Object(l.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(l.b)("h3",{id:"ontouchescancelledcallback"},Object(l.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),Object(l.b)("p",null,"Set the ",Object(l.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}b.isMDXComponent=!0}}]);