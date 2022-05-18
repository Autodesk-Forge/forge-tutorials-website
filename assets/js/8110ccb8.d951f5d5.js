"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[382],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7462),a=n(7294),i=n(2389),r=n(7556),s=n(6010),l="tabItem_LplD";function d(e){var t,n,i,d=e.lazy,c=e.block,p=e.defaultValue,u=e.values,h=e.groupId,m=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,r.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,r.UB)(),N=k.tabGroupChoices,b=k.setTabGroupChoices,E=(0,a.useState)(w),y=E[0],x=E[1],C=[],T=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=N[h];null!=j&&j!==y&&v.some((function(e){return e.value===j}))&&x(j)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),o=v[n].value;o!==y&&(T(t),x(o),null!=h&&b(h,o))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=C.indexOf(e.currentTarget)+1;n=C[o]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:_,onClick:_},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function c(e){var t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},5669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=n(9877),s=n(8215),l=["components"],d={},c="Basic Extension",p={unversionedId:"tutorials/dashboard/basic",id:"tutorials/dashboard/basic",title:"Basic Extension",description:"Forge Viewer provides its own set of APIs",source:"@site/docs/tutorials/03-dashboard/01-basic.mdx",sourceDirName:"tutorials/03-dashboard",slug:"/tutorials/dashboard/basic",permalink:"/forge-tutorials-website/tutorials/dashboard/basic",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/03-dashboard/01-basic.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/forge-tutorials-website/tutorials/dashboard/"},next:{title:"Model Summary",permalink:"/forge-tutorials-website/tutorials/dashboard/panel"}},u={},h=[{value:"Extension skeleton",id:"extension-skeleton",level:2},{value:"Event handling",id:"event-handling",level:2},{value:"Metadata queries",id:"metadata-queries",level:2},{value:"Simple extension",id:"simple-extension",level:2},{value:"Try it out",id:"try-it-out",level:2}],m={toc:h};function g(e){var t=e.components,d=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-extension"},"Basic Extension"),(0,i.kt)("p",null,"Forge Viewer provides its own set of ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Viewer3D"},"APIs"),"\nthat you can use to customize its look and feel, behavior, and even the rendered content. While you ",(0,i.kt)("em",{parentName:"p"},"could"),"\nsimply sprinkle your custom viewer logic in random places of the client-side code, it is a good practice\nto encapsulate any viewer functionality into a ",(0,i.kt)("em",{parentName:"p"},"viewer extension"),". That way you can easily share the same\nfunctionality across different pages of your web application, and even across different projects entirely."),(0,i.kt)("p",null,"Let's start by implementing a simple viewer extension that will react to various viewer events, and output\ndifferent types of information about the currently loaded design."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't have an existing Forge application to start with, you can use one of the apps from\nprevious tutorials. Here's a quick way to get the ",(0,i.kt)("a",{parentName:"p",href:"../simple-viewer"},"Simple Viewer")," application\nrunning locally using your preferred programming language:"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"nodejs",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Create Forge app credentials if you don't have them already (see ",(0,i.kt)("a",{parentName:"li",href:"/"},"Getting Started")," for\nmore details)"),(0,i.kt)("li",{parentName:"ul"},"Make sure you have ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js"),", ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),",\nand a Unix-like terminal installed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On Windows systems, you can install ",(0,i.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows"),"\nwhich comes bundled with a ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," terminal"))),(0,i.kt)("li",{parentName:"ul"},"Open the terminal and run the following commands:")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/autodesk-forge/forge-simple-viewer-nodejs\ncd forge-simple-viewer-nodejs\nnpm install\nFORGE_CLIENT_ID="your client id" FORGE_CLIENT_SECRET="your client secret" npm start\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080")))),(0,i.kt)(s.Z,{value:"dotnet",label:".NET 6",mdxType:"TabItem"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Create Forge app credentials if you don't have them already (see ",(0,i.kt)("a",{parentName:"li",href:"/"},"Getting Started")," for\nmore details)"),(0,i.kt)("li",{parentName:"ul"},"Make sure you have ",(0,i.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET 6"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),", and a Unix-like terminal installed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On Windows systems, you can install ",(0,i.kt)("a",{parentName:"li",href:"https://gitforwindows.org"},"Git for Windows"),"\nwhich comes bundled with a ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," terminal"))),(0,i.kt)("li",{parentName:"ul"},"Open the terminal and run the following commands:")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/autodesk-forge/forge-simple-viewer-dotnet\ncd forge-simple-viewer-dotnet\ndotnet build\nFORGE_CLIENT_ID="your client id" FORGE_CLIENT_SECRET="your client secret" dotnet run\n')),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Open the browser and navigate to ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080"))))))),(0,i.kt)("h2",{id:"extension-skeleton"},"Extension skeleton"),(0,i.kt)("p",null,"Later in this tutorial we will implement other extensions that may share similar functionality, so we will\nfirst implement a base class that all the extensions will be derived from."),(0,i.kt)("p",null,"Go to the folder that contains your client side assets such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," page (in our case it's\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot")," folder), and create a new subfolder called ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions"),". This is where we will store all\nour viewer extensions. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension.js")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," folder, and populate it with\nthe following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n    }\n\n    load() {\n        return true;\n    }\n\n    unload() {\n        return true;\n    }\n}\n")),(0,i.kt)("p",null,"As you can see, a viewer extension is basically a subclass of ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Extension"},"Autodesk.Viewing.Extension"),"\nthat overrides some of its lifecycle methods. For now we have overridden the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load")," - called when the extension is loaded by the viewer, returning a boolean flag indicating whether the loading was successful"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unload")," - called when the extension is unloaded by the viewer, returning a boolean flag indicating whether the unloading was successful")),(0,i.kt)("p",null,'In its constructor the extension always receives the instance of the viewer that "owns" this extension,\nand optionally another object with extension-specific inputs.'),(0,i.kt)("h2",{id:"event-handling"},"Event handling"),(0,i.kt)("p",null,'Now, let\'s update our extension so that it reacts to different kinds of events in the viewer, for example,\nwhen a new model is loaded, when the user selects one or more elements, or when one or more elements are\n"isolated". Update the ',(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        // highlight-start\n        this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);\n        this._onSelectionChanged = (ev) => this.onSelectionChanged(ev.model, ev.dbIdArray);\n        this._onIsolationChanged = (ev) => this.onIsolationChanged(ev.model, ev.nodeIdArray);\n        // highlight-end\n    }\n\n    load() {\n        // highlight-start\n        this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        // highlight-end\n        return true;\n    }\n\n    unload() {\n        // highlight-start\n        this.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        // highlight-end\n        return true;\n    }\n\n    // highlight-start\n    onModelLoaded(model) {}\n\n    onSelectionChanged(model, dbids) {}\n\n    onIsolationChanged(model, dbids) {}\n    // highlight-end\n}\n")),(0,i.kt)("p",null,"As you can see, the viewer provides ",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"removeEventListener")," methods that we can use\nto handle different viewer events. In this case we're handling the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBJECT_TREE_CREATED_EVENT"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"SELECTION_CHANGED_EVENT"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ISOLATE_EVENT")," events by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"onModelLoaded"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onSelectionChanged"),",\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"onIsolationChanged")," methods respectively. For now these methods don't do anything - we will override\nthem in other extensions derived from the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Full list of viewer events can be found at\n",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/#events"},"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/#events"),"."))),(0,i.kt)("h2",{id:"metadata-queries"},"Metadata queries"),(0,i.kt)("p",null,"Most of the extensions in this tutorial will need to access the metadata of the currently loaded design,\nfor example, to iterate through the design's logical hierarchy, or to query properties of elements."),(0,i.kt)("p",null,"In the viewer UI, logical hierarchy is what you see in the ",(0,i.kt)("em",{parentName:"p"},"Model")," panel:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Model browser",src:n(4836).Z,width:"1500",height:"890"})),(0,i.kt)("p",null,"To navigate the logical hierarchy programatically, the viewer API provides a structure called\nan ",(0,i.kt)("em",{parentName:"p"},"instance tree")," (or an ",(0,i.kt)("em",{parentName:"p"},"object tree"),") that simply defines parent-child relationships between\ndifferent design elements, called ",(0,i.kt)("em",{parentName:"p"},"nodes"),". For example, you can use this structure to find\nall children of a specific node, to find a parent of a node, or to ",(0,i.kt)("em",{parentName:"p"},"recursively")," enumerate all\nchildren of a given node. Nodes without any children - we call them ",(0,i.kt)("em",{parentName:"p"},"leaf nodes")," - are usually\nmore interesting for us as they contain more metadata than the internal nodes."),(0,i.kt)("p",null,"Let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class with a couple of helper methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);\n        this._onSelectionChanged = (ev) => this.onSelectionChanged(ev.model, ev.dbIdArray);\n        this._onIsolationChanged = (ev) => this.onIsolationChanged(ev.model, ev.nodeIdArray);\n    }\n\n    load() {\n        this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    unload() {\n        this.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    onModelLoaded(model) {}\n\n    onSelectionChanged(model, dbids) {}\n\n    onIsolationChanged(model, dbids) {}\n\n    // highlight-start\n    findLeafNodes(model) {\n        return new Promise(function (resolve, reject) {\n            model.getObjectTree(function (tree) {\n                let leaves = [];\n                tree.enumNodeChildren(tree.getRootId(), function (dbid) {\n                    if (tree.getChildCount(dbid) === 0) {\n                        leaves.push(dbid);\n                    }\n                }, true /* recursively enumerate children's children as well */);\n                resolve(leaves);\n            }, reject);\n        });\n    }\n    // highlight-end\n\n    // highlight-start\n    async findPropertyNames(model) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, {}, function (results) {\n                let propNames = new Set();\n                for (const result of results) {\n                    for (const prop of result.properties) {\n                        propNames.add(prop.displayName);\n                    }\n                }\n                resolve(Array.from(propNames.values()));\n            }, reject);\n        });\n    }\n    // highlight-end\n}\n")),(0,i.kt)("p",null,"Here we're starting to use the ",(0,i.kt)("a",{parentName:"p",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model"},"Model")," class\n(representing the currently loaded design) and some of its methods, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/#getobjecttree-onsuccesscallback-onerrorcallback"},"Model#getObjectTree")," - used to\nretrieve the model's instance tree"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Viewing/Model/#getbulkproperties-dbids-options-onsuccesscallback-onerrorcallback"},"Model#getBulkProperties")," - used to\nretrieve the metadata for one or more objects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Private/InstanceTree/#getrootid"},"InstanceTree#getRootId")," - returning the ID of the root object"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://forge.autodesk.com/en/docs/viewer/v7/reference/Private/InstanceTree/#enumnodechildren-node-callback-recursive"},"InstanceTree#enumNodeChildren")," - used to\nrecursively enumerate all children of a specific object")),(0,i.kt)("h2",{id:"simple-extension"},"Simple extension"),(0,i.kt)("p",null,"Alright, now to try this new functionality in the viewer, let's create another extension\nderived from the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class, and load it in our viewer application. Create a\n",(0,i.kt)("inlineCode",{parentName:"p"},"LoggerExtension.js")," file in the same folder where ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension.js")," is located, and\npopulate it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/LoggerExtension.js"',title:'"wwwroot/extensions/LoggerExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass LoggerExtension extends BaseExtension {\n    load() {\n        super.load();\n        console.log('LoggerExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        console.log('LoggerExtension unloaded.');\n        return true;\n    }\n\n    async onModelLoaded(model) {\n        super.onModelLoaded(model);\n        const props = await this.findPropertyNames(this.viewer.model);\n        console.log('New model has been loaded. Its objects contain the following properties:', props);\n    }\n\n    async onSelectionChanged(model, dbids) {\n        super.onSelectionChanged(model, dbids);\n        console.log('Selection has changed', dbids);\n    }\n\n    onIsolationChanged(model, dbids) {\n        super.onIsolationChanged(model, dbids);\n        console.log('Isolation has changed', dbids);\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('LoggerExtension', LoggerExtension);\n")),(0,i.kt)("p",null,"The new extension simply overrides methods of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class, and outputs some\nuseful information to the browser console in reaction to different viewer events."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Browser console is essential for web development and debugging. Learn more on how to use it for\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/console/"},"Chrome"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/console"},"Edge"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Opening_the_Web_Console"},"Firefox"),",\nand ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/safari/tools/"},"Safari"),"."))),(0,i.kt)("p",null,"We also ",(0,i.kt)("strong",{parentName:"p"},"register")," the extension under a specific unique ID so that the viewer can later find it.\nThis is done via a singleton object called ",(0,i.kt)("inlineCode",{parentName:"p"},"Autodesk.Viewing.theExtensionManager")," and its\n",(0,i.kt)("inlineCode",{parentName:"p"},"registerExtension(extensionId, extensionClass)")," method."),(0,i.kt)("p",null,"Now, let's make sure the extension code is loaded by our web application. In our case we can simply\nadd the following ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," statement to the top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot/viewer.js")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import './extensions/LoggerExtension.js';\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're working with a different application source code, you may need to include the file\nusing a ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tag in your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," page, for example, like so:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="extensions/LoggerExtension.js"><\/script>\n')))),(0,i.kt)("p",null,"Finally, we need to tell the viewer to load this extension. Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"wwwroot/viewer.js")," file,\nfind the line where the ",(0,i.kt)("inlineCode",{parentName:"p"},"GuiViewer3D")," class is instantiated, and pass in a custom configuration\nobject listed below as the second parameter to the constructor. If you are already passing a custom\nconfig to the constructor, simply include the ",(0,i.kt)("inlineCode",{parentName:"p"},"'LoggerExtension'")," string to its ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n    extensions: [\n        'LoggerExtension'\n    ]\n};\nconst viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n")),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"And with that, our first extension is ready to use. It doesn't have any user interface\nbut we can test it out in the browser console. Start your application as usual, view it\nin the browser, open the browser console, and load one of your designs into the viewer.\nWhen the model finishes loading, our ",(0,i.kt)("inlineCode",{parentName:"p"},"LoggerExtension")," will list all properties used\nin this model to the console. And if we select one or more objects in the viewer,\nthe extension will list their IDs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Summary Result",src:n(8296).Z,width:"1500",height:"987"})))}g.isMDXComponent=!0},4836:function(e,t,n){t.Z=n.p+"assets/images/model-browser-6910550ba52b9cd1207d136223711883.webp"},8296:function(e,t,n){t.Z=n.p+"assets/images/summary-result-05e4ef75d4e4fee2abbda347c75ff60a.webp"}}]);