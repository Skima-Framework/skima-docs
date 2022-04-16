"use strict";(self.webpackChunkskima_docs=self.webpackChunkskima_docs||[]).push([[671],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),s=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(k,o(o({ref:e},c),{},{components:n})):i.createElement(k,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6397:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"data_types",title:"Data Types",sidebar_position:2},p=void 0,s={unversionedId:"data_types",id:"data_types",title:"Data Types",description:"Primitive types",source:"@site/docs/data_types.md",sourceDirName:".",slug:"/data_types",permalink:"/skima-docs/docs/data_types",editUrl:"https://github.com/Skima-Framework/docs/data_types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"data_types",title:"Data Types",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/skima-docs/docs/overview"},next:{title:"Contracts",permalink:"/skima-docs/docs/contracts"}},c={},u=[{value:"Primitive types",id:"primitive-types",level:2},{value:"Skima types",id:"skima-types",level:2},{value:"Widget",id:"widget",level:3},{value:"Constraint",id:"constraint",level:3},{value:"Action",id:"action",level:3}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"primitive-types"},"Primitive types"),(0,r.kt)("p",null,"The primitive data types of JSON are taken, which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"integer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"boolean"))),(0,r.kt)("h2",{id:"skima-types"},"Skima types"),(0,r.kt)("p",null,"They are the data models that are part of the Skima Core: Widget, Constraint and Action."),(0,r.kt)("h3",{id:"widget"},"Widget"),(0,r.kt)("p",null,"Widgets have four attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": It is the name of the widget to use as a model."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": Is an identifier for the current instance of the widget. It is optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"props"),": It is a properties object to correctly build the Widget. The values of this object can be of a primitive type such as a Skima type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"constraints"),": It is an array of Constraints that will be applied to the widget in question.")),(0,r.kt)("h3",{id:"constraint"},"Constraint"),(0,r.kt)("p",null,"They have five attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": Uniquely identifies the constraint. It is optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": It is the type of constraint to apply. Can be: ",(0,r.kt)("inlineCode",{parentName:"li"},"topEqual"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottomEqual"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rightEqual"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"leftEqual"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"height"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"width"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"centerX"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"centerY")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontalMargin"),". It is mandatory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"to"),": Where appropriate, indicates against which side of the other widget to apply the constraint. It can be: ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"of"),": Where applicable, it is the id of the widget against which the constraint must be applied."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value"),": It is a number that indicates the value of the constraint.")),(0,r.kt)("h3",{id:"action"},"Action"),(0,r.kt)("p",null,"Actions have three attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": It is the name of the Action to use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": Uniquely identifies the Action. It is optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data"),": It is an object with all the necessary parameters to execute the action correctly. The values of this object can be of a primitive type such as a Skima type.")))}d.isMDXComponent=!0}}]);