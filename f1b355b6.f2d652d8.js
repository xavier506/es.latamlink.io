(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{100:function(e,a,r){"use strict";r.d(a,"a",(function(){return p})),r.d(a,"b",(function(){return m}));var t=r(0),n=r.n(t);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var a=n.a.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},p=function(e){var a=l(e.components);return n.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=t,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return r?n.a.createElement(m,c(c({ref:a},d),{},{components:r})):n.a.createElement(m,c({ref:a},d))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},95:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return i})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return l}));var t=r(2),n=r(6),o=(r(0),r(100)),i={id:"rendimiento",title:"Rendimiendo y Seguridad de la Red",sidebar_label:"Rendimiento y Seguridad"},c={unversionedId:"rendimiento",id:"rendimiento",isDocsHomePage:!1,title:"Rendimiendo y Seguridad de la Red",description:"Es esencial conocer los l\xedmites de la infraestructura desde una perspectiva de ciberseguridad y rendimiento.",source:"@site/docs/rendimiento.md",permalink:"/docs/rendimiento",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/rendimiento.md",lastUpdatedAt:1597084661,sidebar_label:"Rendimiento y Seguridad",sidebar:"docs",previous:{title:"Monitoreo de Red",permalink:"/docs/monitoreo"},next:{title:"Privacidad",permalink:"/docs/privacidad"}},s=[{value:"Transacciones por Segundo (TPS)",id:"transacciones-por-segundo-tps",children:[{value:"Ejemplos de Contratos para probar rendimiento",id:"ejemplos-de-contratos-para-probar-rendimiento",children:[]}]},{value:"Quantum safe cryptography",id:"quantum-safe-cryptography",children:[]}],d={rightToc:s};function l(e){var a=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Es esencial conocer los l\xedmites de la infraestructura desde una perspectiva de ciberseguridad y rendimiento."),Object(o.b)("p",null,"LatamLink planea realizar an\xe1lisis y evaluaciones de ciberseguridad en la infraestructura. asi como realizar pruebas de estr\xe9s coordinadas juntas."),Object(o.b)("h2",{id:"transacciones-por-segundo-tps"},"Transacciones por Segundo (TPS)"),Object(o.b)("p",null,"Dependiendo del uso, EOSIO tiene capacidad de aproximadamente ",Object(o.b)("strong",{parentName:"p"},"10,000 transacciones por segundo")," usando EOSIO v2.0."),Object(o.b)("h3",{id:"ejemplos-de-contratos-para-probar-rendimiento"},"Ejemplos de Contratos para probar rendimiento"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/CryptoLions/TxShooterContract"}),"Contrato para pruebas de rendimiento")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/michaeljyeates/eos-blaster"}),"EOS Blaster"))),Object(o.b)("h2",{id:"quantum-safe-cryptography"},"Quantum safe cryptography"),Object(o.b)("p",null," El BID tiene inter\xe9s en comenzar a explorar c\xf3mo avanzar hacia una nueva generaci\xf3n de tecnolog\xeda blockchain segura cu\xe1ntica. Hay un interes en  probar las capacidades cu\xe1nticas en la red LACChain para hacerlo resistente a las computadoras cu\xe1nticas. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," Este tema se abord\xf3 en ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://publications.iadb.org/es/tecnologias-cuanticas-una-oportunidad-transversal-e-interdisciplinar-para-la-transformacion-digital"}),"esta publicaci\xf3n del BID"))),Object(o.b)("p",null,"\xa0\xa0\xa0\nLatamLink explorar\xe1 la forma generar certificados siguiendo el est\xe1ndar de credenciales verificables ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.w3.org/TR/vc-data-model/"}),"VC")," para todos los nodos en la red que tendr\xe1n como mecanismo de autenticaci\xf3n un par de llaves p\xfablica-privada generados con un algoritmo cu\xe1ntico seguro."),Object(o.b)("p",null,"Con el objetivo de :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Usar estas llaves para encapsular el proceso de ",Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/lacchain/besu-network/blob/master/TOPOLOGY_AND_ARCHITECTURE.md"}),"comunicaci\xf3n entre nodos a trav\xe9s de TCP / RPLx")),Object(o.b)("li",{parentName:"ul"},"Usar las llaves cu\xe1nticas para firmar las transacciones emitidas por los nodos escritor, de modo que puede ser verificado por los nodos validadores")))}l.isMDXComponent=!0}}]);