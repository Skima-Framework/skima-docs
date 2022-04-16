"use strict";(self.webpackChunkskima_docs=self.webpackChunkskima_docs||[]).push([[906],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={id:"standard_actions",title:"Standard Actions",sidebar_position:3},p=void 0,s={unversionedId:"ios/standard_actions",id:"ios/standard_actions",title:"Standard Actions",description:"The Standard Actions Library contains a bunch of basic Actions that are enough to create simple applications.",source:"@site/docs/ios/standard_actions_ios.md",sourceDirName:"ios",slug:"/ios/standard_actions",permalink:"/docs/ios/standard_actions",editUrl:"https://github.com/Skima-Framework/docs/ios/standard_actions_ios.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"standard_actions",title:"Standard Actions",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Standard UI",permalink:"/docs/ios/standard_ui"}},d={},c=[{value:"Navigation",id:"navigation",level:2},{value:"Type",id:"type",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4},{value:"Apicall",id:"apicall",level:2},{value:"Type",id:"type-1",level:4},{value:"Data",id:"data-1",level:4},{value:"Example",id:"example-1",level:4},{value:"ManageValue",id:"managevalue",level:2},{value:"Type",id:"type-2",level:4},{value:"Data",id:"data-2",level:4},{value:"Example",id:"example-2",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Standard Actions Library contains a bunch of basic Actions that are enough to create simple applications."),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Podfile"',title:'"Podfile"'},"pod 'SkimaStandardActions'\n")),(0,r.kt)("h1",{id:"registration"},"Registration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="AppDelegate.swift"',title:'"AppDelegate.swift"'},"import Skima\nimport SkimaStandardActions\n\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    ActionsEngine.shared.registerOrReplace(SkimaStandardActions.self)\n    return true\n}\n")),(0,r.kt)("h2",{id:"navigation"},"Navigation"),(0,r.kt)("h4",{id:"type"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigation")),(0,r.kt)("h4",{id:"data"},"Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," (string): ",(0,r.kt)("inlineCode",{parentName:"li"},"deep_link"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"back")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," (string)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"deep_link")," then the value is the deeplink to navigate to, eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"skima://home")),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," then the value is the URL to request the contract of the new screen."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"back")," then the value is empty.")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "navigation",\n    "data": {\n        "type": "endpoint",\n        "value": "https://run.mocky.io/v3/f960b018-feca-4860-bcaf-b31b66bd95b7"\n    }\n}\n')),(0,r.kt)("h2",{id:"apicall"},"Apicall"),(0,r.kt)("h4",{id:"type-1"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apicall")),(0,r.kt)("h4",{id:"data-1"},"Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"method")," (string): ",(0,r.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"post"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"put"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"endpoint")," (string)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"body")," (","[string]","): Array of variablesId which values will be sent in the body of the request.")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "apicall",\n    "data": {\n        "type": "post",\n        "endpoint": "https://example.com/user",\n        "body": ["name", "last_name"]\n    }\n}\n')),(0,r.kt)("h2",{id:"managevalue"},"ManageValue"),(0,r.kt)("h4",{id:"type-2"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"manageValue")),(0,r.kt)("h4",{id:"data-2"},"Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," (string): ",(0,r.kt)("inlineCode",{parentName:"li"},"createOrModify"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"createIfNotExists"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyIfExists"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"remove")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," (string): Identifier of the variable to manage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," (string): ",(0,r.kt)("inlineCode",{parentName:"li"},"memory"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"storage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"encrypted")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dataType")," (string): ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"integer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"double"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," (string)")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "manageValue",\n    "data": {\n        "type": "createOrModify",\n        "id": "best_framework",\n        "dataType": "string",\n        "value": "skima"\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"mode")," is not implemented yet and the only ",(0,r.kt)("strong",{parentName:"p"},"dataType")," in use is ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."))))}u.isMDXComponent=!0}}]);