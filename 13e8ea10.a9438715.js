(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,a,r){"use strict";r.d(a,"a",(function(){return b})),r.d(a,"b",(function(){return m}));var t=r(0),n=r.n(t);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var a=n.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},b=function(e){var a=d(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(r),u=t,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||i;return r?n.a.createElement(m,c(c({ref:a},s),{},{components:r})):n.a.createElement(m,c({ref:a},s))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return o})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return l})),r.d(a,"default",(function(){return d}));var t=r(2),n=r(6),i=(r(0),r(100)),o={id:"trazabilidad",title:"Trazabilidad de Acciones",sidebar_label:"Trazabilidad"},c={unversionedId:"trazabilidad",id:"trazabilidad",isDocsHomePage:!1,title:"Trazabilidad de Acciones",description:"Permisos y trazabilidad en EOSIO",source:"@site/docs/trazabilidad.md",permalink:"/docs/trazabilidad",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/trazabilidad.md",lastUpdatedAt:1597010612,sidebar_label:"Trazabilidad",sidebar:"docs",previous:{title:"Topolog\xeda de Red",permalink:"/docs/topologia-red"},next:{title:"Monitoreo de Red",permalink:"/docs/monitoreo"}},l=[{value:"Permisos y trazabilidad en EOSIO",id:"permisos-y-trazabilidad-en-eosio",children:[]},{value:"Trazabilidad de acciones LACChain",id:"trazabilidad-de-acciones-lacchain",children:[{value:"Creaci\xf3n de cuenta",id:"creaci\xf3n-de-cuenta",children:[]},{value:"Trazabilidad, damage control y liability",id:"trazabilidad-damage-control-y-liability",children:[]}]}],s={rightToc:l};function d(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"permisos-y-trazabilidad-en-eosio"},"Permisos y trazabilidad en EOSIO"),Object(i.b)("p",null,"En EOSIO todas las transacciones est\xe1n vinculadas a una cuenta, por ejemplo si se desea llamar a la acci\xf3n de un contrato, el llamado va a venir acompa\xf1ado de una cuenta origen que consume esa acci\xf3n del contrato inteligente."),Object(i.b)("p",null,"A diferencia de otras blockchains ninguna acci\xf3n es an\xf3nima, considerando que el permiso de crear nuevas cuenta podr\xeda delegarse exclusivamente a los escritores en la topolog\xeda BESU, toda acci\xf3n sin importar  como ingresa a la red podr\xeda quedar vinculada al escritor que creo la cuenta."),Object(i.b)("h2",{id:"trazabilidad-de-acciones-lacchain"},"Trazabilidad de acciones LACChain"),Object(i.b)("p",null,"En esta propuesta preliminar, los permisos privilegiados pueden delegarse de forma din\xe1mica a distintas entidades y sub-entidades, por ejemplo a comit\xe9s legales dentro del comit\xe9 o a representantes t\xe9cnicos dentro del comit\xe9."),Object(i.b)("p",null,"Proponemos delegar los permisos de crear cuenta a los escritores, este permiso puede ser modificado a su vez por una organizaci\xf3n/comit\xe9 para amoldarse a los requerimientos legales y operativos."),Object(i.b)("h3",{id:"creaci\xf3n-de-cuenta"},"Creaci\xf3n de cuenta"),Object(i.b)("p",null,"Se plantean los siguientes pasos para la creaci\xf3n de cuentas y uso de los recursos de la chain."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Se delega el permiso de crear nuevas cuentas exclusivamente a los escritores/writers.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Un escritor ",Object(i.b)("inlineCode",{parentName:"p"},"escritorbobb"),", crea una cuenta nueva ",Object(i.b)("inlineCode",{parentName:"p"},"aliceaccount"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"En la tabla de cuentas, ",Object(i.b)("inlineCode",{parentName:"p"},"aliceaccount")," tiene definido a ",Object(i.b)("inlineCode",{parentName:"p"},"escritorbobb")," como el escritor que creo la cuenta")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"El escritor decide como distribuirle recursos a alice en funci\xf3n a los requerimientos definidos por el comite, puede optar por transferir recursos, delegarlos, cofirmar transacciones.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"alice utiliza los recursos de la red."))),Object(i.b)("h3",{id:"trazabilidad-damage-control-y-liability"},"Trazabilidad, damage control y liability"),Object(i.b)("p",null,"En caso de que se est\xe9n usando recursos de la chain por fuera del scope planteado por el comit\xe9, se plantea el siguiente escenario."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Se identifica la cuenta abusando de los recursos")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Se identifica el escritor responsable de la creaci\xf3n de esa cuenta (informaci\xf3n publica en la chain)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Se notifica al escritor")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"El comit\xe9 puede optar por accionar de distintas formas:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Delegar al escritor  la responsabilidad de controlar."),Object(i.b)("li",{parentName:"ul"},"Deshabilitar la cuenta abusando."),Object(i.b)("li",{parentName:"ul"},"Deshabilitar todas las cuentas generadas por el escritor."),Object(i.b)("li",{parentName:"ul"},"No Deshabilitar las cuentas pero desdelegar recursos temporalmente."),Object(i.b)("li",{parentName:"ul"},"Ordenar a los validadores que blacklisteen la cuenta."),Object(i.b)("li",{parentName:"ul"},"Otras acciones que cumplan con los requerimientos legales y operativos."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Una vez controlada la situaci\xf3n queda sujeto al comit\xe9 como realizar el arbitraje que responda a los requerimientos del comit\xe9."))))}d.isMDXComponent=!0}}]);