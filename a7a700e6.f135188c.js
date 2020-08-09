(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,a,r){"use strict";r.d(a,"a",(function(){return d})),r.d(a,"b",(function(){return m}));var t=r(0),n=r.n(t);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var a=n.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},d=function(e){var a=p(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=t,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?n.a.createElement(m,c(c({ref:a},s),{},{components:r})):n.a.createElement(m,c({ref:a},s))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},83:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return i})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return l})),r.d(a,"default",(function(){return p}));var t=r(2),n=r(6),o=(r(0),r(100)),i={id:"como-iniciar",title:"Como Iniciar",sidebar_label:"Como Iniciar"},c={unversionedId:"como-iniciar",id:"como-iniciar",isDocsHomePage:!1,title:"Como Iniciar",description:"Antes de iniciar",source:"@site/docs/como-iniciar.md",permalink:"/docs/como-iniciar",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/como-iniciar.md",lastUpdatedAt:1596311480,sidebar_label:"Como Iniciar",sidebar:"docs",previous:{title:"Ruta del Proyecto",permalink:"/docs/roadmap"},next:{title:"Manejo de Llaves Privadas",permalink:"/docs/llaves-privadas"}},l=[{value:"Antes de iniciar",id:"antes-de-iniciar",children:[]},{value:"Obtenga sus llaves privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Creador de cuentas \xe1gil",id:"creador-de-cuentas-\xe1gil",children:[]}],s={rightToc:l};function p(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"antes-de-iniciar"},"Antes de iniciar"),Object(o.b)("p",null,"Primero, es recomendable tener instalado el software ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/eosio"}),"EOSIO")," desarrollado por ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://block.one/"}),"Block.one")," para realizar acciones con el protocolo EOS siguiendo el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio/eosio")," y ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio"),". Este software se compone de:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos:")," es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos:")," funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"keosd:")," funciona como billetera para manejar las llaves para EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"/img/diagramas/cleos.png",alt:"Cleos"}))),Object(o.b)("p",null,"Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," y seguido de ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," para acceder a recursos para crear los contratos."),Object(o.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus llaves privadas"),Object(o.b)("p",null,"Mas informaci\xf3n ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/llaves-privadas"}),"sobre llaves privadas."),"  "),Object(o.b)("h2",{id:"creador-de-cuentas-\xe1gil"},"Creador de cuentas \xe1gil"),Object(o.b)("p",null,"Portal para crear cuentas y llaves p\xfablicas o privadas en un solo clic."))}p.isMDXComponent=!0}}]);