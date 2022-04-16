"use strict";(self.webpackChunkskima_docs=self.webpackChunkskima_docs||[]).push([[574],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=i,c=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],p={id:"standard_ui",title:"Standard UI",sidebar_position:2},o=void 0,d={unversionedId:"ios/standard_ui",id:"ios/standard_ui",title:"Standard UI",description:"The Standard UI Library contains a bunch of basic Widgets that are enough to create a simple app or are used to create more complex ones.",source:"@site/docs/ios/standard_ui_ios.md",sourceDirName:"ios",slug:"/ios/standard_ui",permalink:"/docs/ios/standard_ui",editUrl:"https://github.com/Skima-Framework/docs/ios/standard_ui_ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"standard_ui",title:"Standard UI",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting started with iOS",permalink:"/docs/ios/get_started_ios"},next:{title:"Standard Actions",permalink:"/docs/ios/standard_actions"}},m={},s=[{value:"Button",id:"button",level:2},{value:"Type",id:"type",level:4},{value:"Props",id:"props",level:4},{value:"Example",id:"example",level:4},{value:"Manipulator",id:"manipulator",level:4},{value:"Example",id:"example-1",level:4},{value:"Label",id:"label",level:2},{value:"Type",id:"type-1",level:4},{value:"Props",id:"props-1",level:4},{value:"Example",id:"example-2",level:4},{value:"Manipulator",id:"manipulator-1",level:4},{value:"Example",id:"example-3",level:4},{value:"Image",id:"image",level:2},{value:"Type",id:"type-2",level:4},{value:"Props",id:"props-2",level:4},{value:"Example",id:"example-4",level:4},{value:"Manipulator",id:"manipulator-2",level:4},{value:"Example",id:"example-5",level:4},{value:"Textfield",id:"textfield",level:2},{value:"Type",id:"type-3",level:4},{value:"Props",id:"props-3",level:4},{value:"Example",id:"example-6",level:4},{value:"Manipulator",id:"manipulator-3",level:4},{value:"Example",id:"example-7",level:4},{value:"Checkbox",id:"checkbox",level:2},{value:"Type",id:"type-4",level:4},{value:"Props",id:"props-4",level:4},{value:"Example",id:"example-8",level:4},{value:"Manipulator",id:"manipulator-4",level:4},{value:"Example",id:"example-9",level:4},{value:"Container",id:"container",level:2},{value:"Type",id:"type-5",level:4},{value:"Props",id:"props-5",level:4},{value:"Example",id:"example-10",level:4},{value:"Stack",id:"stack",level:2},{value:"Type",id:"type-6",level:4},{value:"Props",id:"props-6",level:4},{value:"Example",id:"example-11",level:4},{value:"ScrollView",id:"scrollview",level:2},{value:"Type",id:"type-7",level:4},{value:"Props",id:"props-7",level:4},{value:"Example",id:"example-12",level:4}],u={toc:s};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Standard UI Library contains a bunch of basic Widgets that are enough to create a simple app or are used to create more complex ones."),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Podfile"',title:'"Podfile"'},"pod 'SkimaStandardUI'\n")),(0,l.kt)("h1",{id:"registration"},"Registration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="AppDelegate.swift"',title:'"AppDelegate.swift"'},"import Skima\nimport SkimaStandardUI\n\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    WidgetsEngine.shared.registerOrReplace(SkimaStandardUI.self)\n    return true\n}\n")),(0,l.kt)("h1",{id:"standard-widgets"},"Standard Widgets"),(0,l.kt)("h2",{id:"button"},"Button"),(0,l.kt)("h4",{id:"type"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"button")),(0,l.kt)("h4",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"initial_state")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"enable"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"disable"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"loading"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"enable"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," (string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"link"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"primary"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick"),": (","[Action]",")")),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Widget"',title:'"Widget"'},'{\n    "type": "button",\n    "id": "button_1",\n    "props": {\n        "text": "Press me!"\n    }\n}\n')),(0,l.kt)("h4",{id:"manipulator"},"Manipulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"widgetId")," (string): Identifier of the button to manipulate."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"change_state"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value")," (string):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_state")," then value could be ",(0,l.kt)("inlineCode",{parentName:"li"},"enable"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"disable"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"loading"),"."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text")," then value is the new text.")))),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "buttonManipulation",\n    "data": {\n        "widgetId": "button_1",\n        "type": "change_state",\n        "value": "disable"\n    }\n}\n')),(0,l.kt)("h2",{id:"label"},"Label"),(0,l.kt)("h4",{id:"type-1"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"label")),(0,l.kt)("h4",{id:"props-1"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text")," (string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max_lines")," (integer)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text_alignment")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"justified"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"text_color")," (string): must be hexadecimal, eg ",(0,l.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"font_size")," (number)")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Widget"',title:'"Widget"'},'{\n    "type": "label",\n    "id": "label_1",\n    "props": {\n        "text": "This is a label!",\n        "text_alignment": "center",\n        "text_color": "#FF0000",\n        "font_size": 24\n    }\n}\n')),(0,l.kt)("h4",{id:"manipulator-1"},"Manipulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"widgetId")," (string): Identifier of the label to manipulate."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text_color"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"change_font_size"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value")," (string):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text")," then value is the new text."),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text_color")," then value must be an hexadecimal color, eg ",(0,l.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_font_size")," then value must be a number but as string, eg ",(0,l.kt)("inlineCode",{parentName:"li"},'"16"'))))),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "labelManipulation",\n    "data": {\n        "widgetId": "label_1",\n        "type": "change_text",\n        "value": "This is a changed label!"\n    }\n}\n')),(0,l.kt)("h2",{id:"image"},"Image"),(0,l.kt)("h4",{id:"type-2"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"image")),(0,l.kt)("h4",{id:"props-2"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url")," (string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"local_resource")," (string): Not implemented yet"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"content_mode")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"scaleToFill"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"caleAspectFit"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"scaleAspectFill"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"center"))),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Widget"',title:'"Widget"'},'{\n    "type": "image",\n    "id": "image_1",\n    "props": {\n        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png",\n        "content_mode": "scaleAspectFit"\n    }\n}\n')),(0,l.kt)("h4",{id:"manipulator-2"},"Manipulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"widgetId")," (string): Identifier of the image to manipulate."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"change_image")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value")," (string):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_image")," then value is the url of the new image.")))),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "imageManipulation",\n    "data": {\n        "widgetId": "image_1",\n        "type": "change_image",\n        "value": "https://source.android.com/setup/images/Android_symbol_green_RGB.png"\n    }\n}\n')),(0,l.kt)("h2",{id:"textfield"},"Textfield"),(0,l.kt)("h4",{id:"type-3"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"textfield")),(0,l.kt)("h4",{id:"props-3"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variableId")," (string): Is the Identifier of the variable where the content of the textfield will be saved."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"placeholder")," (string)")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Widget"',title:'"Widget"'},'{\n    "type": "textfield",\n    "id": "textfield_1",\n    "props": {\n        "variableId": "name_textfield_value",\n        "placeholder": "Name"\n    }\n}\n')),(0,l.kt)("h4",{id:"manipulator-3"},"Manipulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"widgetId")," (string): Identifier of the textfield to manipulate."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value")," (string):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"change_text")," then value is the new text")))),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "textfieldManipulation",\n    "data": {\n        "widgetId": "textfield_1",\n        "type": "change_image",\n        "value": ""\n    }\n}\n')),(0,l.kt)("h2",{id:"checkbox"},"Checkbox"),(0,l.kt)("h4",{id:"type-4"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"checkbox")),(0,l.kt)("h4",{id:"props-4"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variableId")," (string): Is the Identifier of the variable where the state of the checkbox will be saved."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"initial_state")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"enable"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"disable"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"enable"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"initial_condition")," (boolean): if ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," then the checkbox will start checked."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color"),": (string): must be hexadecimal, eg ",(0,l.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onActivated")," (","[Action]","): Actions that are executed when the checkbox is checked."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onDeactivated")," (","[Action]","): Actions that are executed when the checkbox is unchecked.")),(0,l.kt)("h4",{id:"example-8"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Widget"',title:'"Widget"'},'{\n    "type": "checkbox",\n    "id": "checkbox_1",\n    "props": {\n        "variableId": "checkbox_value",\n        "initial_condition": false\n    }\n}\n')),(0,l.kt)("h4",{id:"manipulator-4"},"Manipulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"widgetId")," (string): Identifier of the checkbox to manipulate."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"activate"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"deactivate"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"toggle"))),(0,l.kt)("h4",{id:"example-9"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Action"',title:'"Action"'},'{\n    "type": "checkboxManipulation",\n    "data": {\n        "widgetId": "checkbox_1",\n        "type": "activate"\n    }\n}\n')),(0,l.kt)("h2",{id:"container"},"Container"),(0,l.kt)("h4",{id:"type-5"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"container")),(0,l.kt)("h4",{id:"props-5"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"backgroundColor")," (string): Must be hexadecimal, eg ",(0,l.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"borderColor")," (string): Must be hexadecimal, eg ",(0,l.kt)("inlineCode",{parentName:"li"},"#FF0000")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"BorderWidth")," (number)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cornerRadius"),": (number)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"children")," (","[Widget]","): Array of Widgets to render inside the container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," (","[Action]","): Actions that are executed when the container is tapped.")),(0,l.kt)("h4",{id:"example-10"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "container",\n    "props": {\n        "backgroundColor": "#FF0000",\n        "borderColor": "#00FF00",\n        "borderWidth": 4,\n        "cornerRadius": 16\n    }\n}\n')),(0,l.kt)("h2",{id:"stack"},"Stack"),(0,l.kt)("h4",{id:"type-6"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stack")),(0,l.kt)("h4",{id:"props-6"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"children")," (","[Widget]","): Array of Widgets to render inside the stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"axis")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"spacing")," (number)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"alignment")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"leading"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"firstBaseline"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"trailing"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"lastBaseline"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"distribution")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fillEqually"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fillProportionally"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"equalSpacing"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"equalCentering"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),".")),(0,l.kt)("h4",{id:"example-11"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "stack",\n    "props": {\n        "axis": "vertical",\n        "spacing": 8,\n        "children": []\n    }\n}\n')),(0,l.kt)("h2",{id:"scrollview"},"ScrollView"),(0,l.kt)("h4",{id:"type-7"},"Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scrollview")),(0,l.kt)("h4",{id:"props-7"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"children")," (","[Widget]","): Array of Widgets to render inside the stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"axis")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"spacing")," (number)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"alignment")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"leading"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"firstBaseline"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"trailing"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"lastBaseline"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"distribution")," (string): ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fillEqually"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fillProportionally"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"equalSpacing"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"equalCentering"),". Default is ",(0,l.kt)("inlineCode",{parentName:"li"},"fill"),".")),(0,l.kt)("h4",{id:"example-12"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "scrollview",\n    "props": {\n        "axis": "vertical",\n        "spacing": 8,\n        "children": []\n    }\n}\n')))}k.isMDXComponent=!0}}]);