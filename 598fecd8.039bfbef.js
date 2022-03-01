(window.webpackJsonp=window.webpackJsonp||[]).push([[100,103,140,200,219,232],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return g}));var a=n(2),o=n(6),r=(n(0),n(338)),i=n(57),c=n(58),s=n(67),l=n(59),u=n(63),d={id:"rotation-gesture",title:"Rotation gesture",sidebar_label:"Rotation gesture"},b={unversionedId:"api/gestures/rotation-gesture",id:"version-2.0.0/api/gestures/rotation-gesture",isDocsHomePage:!1,title:"Rotation gesture",description:"A continuous gesture that can recognize a rotation gesture and track its movement.",source:"@site/versioned_docs/version-2.0.0/api/gestures/rotation-gesture.md",slug:"/api/gestures/rotation-gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/rotation-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/rotation-gesture.md",version:"2.0.0",sidebar_label:"Rotation gesture",sidebar:"version-2.0.0/docs",previous:{title:"Long press gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/long-press-gesture"},next:{title:"Pinch gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/pinch-gesture"}},h=[{value:"Config",id:"config",children:[]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>RotationGesture</code>:",id:"event-attributes-specific-to-rotationgesture",children:[]},{value:"<code>rotation</code>",id:"rotation",children:[]},{value:"<code>velocity</code>",id:"velocity",children:[]},{value:"<code>anchorX</code>",id:"anchorx",children:[]},{value:"<code>anchorY</code>",id:"anchory",children:[]}]},{value:"Example",id:"example",children:[]}],p={rightToc:h};function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A continuous gesture that can recognize a rotation gesture and track its movement."),Object(r.b)("p",null,"The gesture ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),"activates")," when fingers are placed on the screen and change position in a proper way."),Object(r.b)("p",null,"Gesture callback can be used for continuous tracking of the rotation gesture. It provides information about the gesture such as the amount rotated, the focal point of the rotation (anchor), and its instantaneous velocity."),Object(r.b)("h2",{id:"config"},"Config"),Object(r.b)(c.default,{mdxType:"BaseEventConfig"}),Object(r.b)(s.default,{mdxType:"BaseContinousEventConfig"}),Object(r.b)("h2",{id:"callbacks"},"Callbacks"),Object(r.b)(l.default,{mdxType:"BaseEventCallbacks"}),Object(r.b)(u.default,{mdxType:"BaseContinousEventCallbacks"}),Object(r.b)("h2",{id:"event-data"},"Event data"),Object(r.b)("h3",{id:"event-attributes-specific-to-rotationgesture"},"Event attributes specific to ",Object(r.b)("inlineCode",{parentName:"h3"},"RotationGesture"),":"),Object(r.b)("h3",{id:"rotation"},Object(r.b)("inlineCode",{parentName:"h3"},"rotation")),Object(r.b)("p",null,"Amount rotated, expressed in radians, from the gesture's focal point (anchor)."),Object(r.b)("h3",{id:"velocity"},Object(r.b)("inlineCode",{parentName:"h3"},"velocity")),Object(r.b)("p",null,"Instantaneous velocity, expressed in point units per second, of the gesture."),Object(r.b)("h3",{id:"anchorx"},Object(r.b)("inlineCode",{parentName:"h3"},"anchorX")),Object(r.b)("p",null,"X coordinate, expressed in points, of the gesture's central focal point (anchor)."),Object(r.b)("h3",{id:"anchory"},Object(r.b)("inlineCode",{parentName:"h3"},"anchorY")),Object(r.b)("p",null,"Y coordinate, expressed in points, of the gesture's central focal point (anchor)."),Object(r.b)(i.default,{mdxType:"BaseEventData"}),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const rotation = useSharedValue(1);\nconst savedRotation = useSharedValue(1);\n\nconst rotationGesture = Gesture.Rotation()\n  .onUpdate((e) => {\n    rotation.value = savedRotation.value + e.rotation;\n  })\n  .onEnd(() => {\n    savedRotation.value = rotation.value;\n  });\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],\n}));\n\nreturn (\n  <GestureDetector gesture={rotationGesture}>\n    <Animated.View style={[styles.box, animatedStyle]} />\n  </GestureDetector>\n);\n")))}g.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,p=d["".concat(i,".").concat(h)]||d[h]||b[h]||r;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(338)),i={},c={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.0.0/api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-event-data.md",version:"2.0.0"},s=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(r.b)("h3",{id:"state"},Object(r.b)("inlineCode",{parentName:"h3"},"state")),Object(r.b)("p",null,"Current ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(r.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(r.b)("h3",{id:"numberofpointers"},Object(r.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(r.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}u.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(338)),i={},c={unversionedId:"api/gestures/base-gesture-config",id:"version-2.0.0/api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-config.md",version:"2.0.0"},s=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(r.b)("h3",{id:"enabledvalue-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(r.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(r.b)("strong",{parentName:"p"},"never")," become ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#active"}),Object(r.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"}),Object(r.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"}),Object(r.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(r.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/long-press-gesture"}),Object(r.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/tap-gesture"}),Object(r.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h3",{id:"hitslopsettings"},Object(r.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(r.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(r.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(r.b)("inlineCode",{parentName:"p"},"left"),", ",Object(r.b)("inlineCode",{parentName:"p"},"right"),", ",Object(r.b)("inlineCode",{parentName:"p"},"top")," or ",Object(r.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(r.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(r.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(r.b)("inlineCode",{parentName:"p"},"left"),", ",Object(r.b)("inlineCode",{parentName:"p"},"right")," or ",Object(r.b)("inlineCode",{parentName:"p"},"top")," and ",Object(r.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(r.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(r.b)("inlineCode",{parentName:"p"},"right")," or ",Object(r.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(r.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(r.b)("inlineCode",{parentName:"p"},"top")," or ",Object(r.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(r.b)("inlineCode",{parentName:"p"},"width")," or ",Object(r.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(r.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(r.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(r.b)("inlineCode",{parentName:"p"},"width")," and ",Object(r.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(r.b)("h3",{id:"withrefref"},Object(r.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(r.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(r.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(r.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(r.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(r.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(r.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(r.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(r.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(r.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(r.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(r.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}u.isMDXComponent=!0},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(338)),i={},c={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.0.0/api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-gesture-callbacks.md",version:"2.0.0"},s=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",children:[]},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",children:[]},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",children:[]},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",children:[]},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(r.b)("h3",{id:"onbegincallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onBegin(callback)")),Object(r.b)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),Object(r.b)("h3",{id:"onstartcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(r.b)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),Object(r.b)("h3",{id:"onendcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(r.b)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),Object(r.b)("h3",{id:"onfinalizecallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),Object(r.b)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),Object(r.b)("h3",{id:"ontouchesdowncallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(r.b)("h3",{id:"ontouchesmovecallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(r.b)("h3",{id:"ontouchesupcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(r.b)("h3",{id:"ontouchescancelledcallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}u.isMDXComponent=!0},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(338)),i={},c={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"version-2.0.0/api/gestures/base-continous-gesture-callbacks",isDocsHomePage:!1,title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-callbacks.md",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-continous-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-callbacks.md",version:"2.0.0"},s=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",children:[]},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),Object(r.b)("h3",{id:"onupdatecallback"},Object(r.b)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),Object(r.b)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active."))}u.isMDXComponent=!0},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(338)),i={},c={unversionedId:"api/gestures/base-continous-gesture-config",id:"version-2.0.0/api/gestures/base-continous-gesture-config",isDocsHomePage:!1,title:"base-continous-gesture-config",description:"Properties common to all continous gestures:",source:"@site/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-config.md",slug:"/api/gestures/base-continous-gesture-config",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/base-continous-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/base-continous-gesture-config.md",version:"2.0.0"},s=[{value:"Properties common to all continous gestures:",id:"properties-common-to-all-continous-gestures",children:[]},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"properties-common-to-all-continous-gestures"},"Properties common to all continous gestures:"),Object(r.b)("h3",{id:"manualactivationvalue-boolead"},Object(r.b)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/state-manager"}),"state manager"),"."))}u.isMDXComponent=!0}}]);