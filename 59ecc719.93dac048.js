(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,a,o){"use strict";o.d(a,"a",(function(){return d})),o.d(a,"b",(function(){return m}));var r=o(0),n=o.n(r);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function c(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?c(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),u=function(e){var a=n.a.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},d=function(e){var a=u(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},b=n.a.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(o),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||t;return o?n.a.createElement(m,l(l({ref:a},s),{},{components:o})):n.a.createElement(m,l({ref:a},s))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,c=new Array(t);c[0]=b;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<t;s++)c[s]=o[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},74:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return c})),o.d(a,"metadata",(function(){return l})),o.d(a,"rightToc",(function(){return i})),o.d(a,"default",(function(){return u}));var r=o(2),n=o(6),t=(o(0),o(100)),c={id:"hola-mundo",title:"Contrato Hola Mundo",sidebar_label:"Contrato Hola Mundo"},l={unversionedId:"hola-mundo",id:"hola-mundo",isDocsHomePage:!1,title:"Contrato Hola Mundo",description:"Explicamos con ejemplos c\xf3mo crear una cuenta y un contrato \u201cHello World\u201d para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por Block.one para compartir con la comunidad.",source:"@site/docs/hola-mundo.md",permalink:"/docs/hola-mundo",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/hola-mundo.md",lastUpdatedAt:1597010612,sidebar_label:"Contrato Hola Mundo",sidebar:"docs",previous:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/instalacion-nodos"},next:{title:"Monitor de Red",permalink:"/docs/monitor"}},i=[{value:"Obtenga sus llaves privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Adquirir recurso RAM",id:"adquirir-recurso-ram",children:[]},{value:"Crear un Contrato",id:"crear-un-contrato",children:[]},{value:"Publicar el Contrato",id:"publicar-el-contrato",children:[]},{value:"Video-Tutorial",id:"video-tutorial",children:[]}],s={rightToc:i};function u(e){var a=e.components,o=Object(n.a)(e,["components"]);return Object(t.b)("wrapper",Object(r.a)({},s,o,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Explicamos con ejemplos c\xf3mo crear una cuenta y un contrato \u201cHello World\u201d para subir a una blockchain basada en EOS.IO. Para este ejemplo, nos basamos en recursos publicados por ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"http://developers.eos.io/"}),"Block.one para compartir con la comunidad"),"."),Object(t.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus llaves privadas"),Object(t.b)("p",null,"Mas informaci\xf3n ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/llaves-privadas"}),"sobre llaves privadas."),"  "),Object(t.b)("h2",{id:"adquirir-recurso-ram"},"Adquirir recurso RAM"),Object(t.b)("p",null,"Una vez que se tiene la cuenta en el LatamLink Testnet, para el contrato, estaremos requiriendo disponer de recursos RAM. "),Object(t.b)("p",null,"En este caso estamos conectados a un url remoto por medio de un API endpoint de LatamLink Testnet para extraer la informaci\xf3n de la cuenta y verificar cuantos kiloytes de RAM tiene disponbible la cuenta."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"cleos get account {nomredecuenta}")),Object(t.b)("h2",{id:"crear-un-contrato"},"Crear un Contrato"),Object(t.b)("p",null,"Para continuar, vamos a crear un contrato sencillo dentro de un nuevo directorio, el cual llamamos ",Object(t.b)("inlineCode",{parentName:"p"},"holacontrato"),". Como en EOS se requieren recursos, estos deber\xe1n estar asociados al nombre de una cuenta, por lo que se debe poner el mismo nombre del contrato anteriormente creado."),Object(t.b)("p",null,"Para editar el contrato, puede usarse un editor de texto. Para este ejemplo se utiliz\xf3 Sublime Text."),Object(t.b)("p",null,"La primera l\xednea incluye una librer\xeda que a la cual se tiene acceso a trav\xe9s del Contract Development Toolkit (CDT), una herramienta que permite acceder a recursos para crear los contratos."),Object(t.b)("p",null,"En la l\xednea de clase, se deber\xe1 exponer nuestro contrato \u201cholacontrato\u201d que tiene una acci\xf3n definida, que en este caso llamamos \u201cHola\u201d y su argumento es un usuario tipo nombre. Al guardar el contrato, en el directorio queda un archivo C++."),Object(t.b)("p",null,"El archivo C++ se tiene que compilar usando la herramienta CDT (Contract Development Toolkit), que recibe de input el archivo C++ y como output origina un archivo web assembly (wasm) que es un archivo ejecutable por el contrato.\nAdicional al archivo wasm, tambi\xe9n se genera un archivo abi que sirve para el mapeo de las funciones del contrato. El comando va a recibir el contrato como un input y como output va a generar un archivo wasm que es el archivo que realmente se sube al blockchain."),Object(t.b)("p",null,"Como no especificamos una, el sistema nos da un mensaje de que no existe una cl\xe1usula ricardiana. Una cl\xe1usula ricardiana es un contrato en prosa, escrito en ingl\xe9s, que describe la intenci\xf3n del contrato y que debe estar alineada con la intenci\xf3n para la que se cre\xf3. En el sitio de Block.one vienen recursos para las cl\xe1usulas ricardianas. Para efectos del ejemplo no creamos uno."),Object(t.b)("p",null,"Una vez ejecutado el comando para set contract, el sistema lee la informaci\xf3n en el contrato para luego publicarlo."),Object(t.b)("h2",{id:"publicar-el-contrato"},"Publicar el Contrato"),Object(t.b)("p",null,"Una vez listo el contrato, vamos a publicar en la cuenta de LatamLink Testnet. Para publicar nuestro contrato, debemos usar el comando usado en cleos y el API endpoint usado anteriormente en LatamLink Testnet para subir el contrato a la ubicaci\xf3n que queremos con un permiso activo para poder firmar con la billetera creada."),Object(t.b)("p",null,"De vuelta al block explorer podemos verificar que la cuenta es due\xf1a de un contrato que expone la acci\xf3n \u201cHola\u201d y que contiene la informaci\xf3n abi en la que se especifican en estructura JSON las acciones dentro del contrato y componentes asociados."),Object(t.b)("p",null,"Una vez que el contrato est\xe9 listo, podemos ejecutar una acci\xf3n en el contrato. Con cleos existe un comando para especificar el endpoint dentro de LatamLink Testnet y as\xed ejecutar la acci\xf3n \u201cHola\u201d. Para este ejemplo, ponemos como input: \u201ceoscostarica\u201d. El output de la acci\xf3n ser\xe1 el texto \u201cHola eoscostarica\u201d."),Object(t.b)("p",null,"Podemos verificar en el explorador de bloques las acciones ejecutadas."),Object(t.b)("p",null,"Es necesario esperar unos segundos para completar la irreversibilidad del bloque, ya que los block producers deben hacer la validaci\xf3n del bloque de datos para esto."),Object(t.b)("p",null,"Finalmente, esta es una muestra de c\xf3mo se puede interactuar con una blockchain. Existen herramientas de Javascript, librer\xeda ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/librerias-sdk#eosjs"}),"EOS JS")," que podr\xeda implementarse para ejecutar acciones de una manera m\xe1s program\xe1tica para integrar con dApps, poder persistir datos, o incluso ejecutar l\xf3gica de negocios en la blockchain con este mismo patr\xf3n."),Object(t.b)("h2",{id:"video-tutorial"},"Video-Tutorial"),Object(t.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);