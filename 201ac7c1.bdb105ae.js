(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var a=o.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=s(e.components);return o.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},p=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(t),p=n,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||r;return t?o.a.createElement(m,c(c({ref:a},d),{},{components:t})):o.a.createElement(m,c({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<r;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var n=t(2),o=t(6),r=(t(0),t(100)),i={id:"datos-entidades-nodos",title:"Informaci\xf3n sobre Entidades y Nodos",sidebar_label:"Datos de Entidades y Nodos"},c={unversionedId:"datos-entidades-nodos",id:"datos-entidades-nodos",isDocsHomePage:!1,title:"Informaci\xf3n sobre Entidades y Nodos",description:"Divulgaci\xf3n voluntaria de datos",source:"@site/docs/datos-entidades-nodos.md",permalink:"/docs/datos-entidades-nodos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/datos-entidades-nodos.md",lastUpdatedAt:1597009192,sidebar_label:"Datos de Entidades y Nodos",sidebar:"docs",previous:{title:"Proceso de Permisionado",permalink:"/docs/proceso-permisionado"},next:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/instalacion-nodos"}},l=[{value:"Divulgaci\xf3n voluntaria de datos",id:"divulgaci\xf3n-voluntaria-de-datos",children:[]},{value:"Herramienta Para Actualizar Datos",id:"herramienta-para-actualizar-datos",children:[]},{value:"Informaci\xf3n de Entidades",id:"informaci\xf3n-de-entidades",children:[{value:"Estructura JSON Entidades",id:"estructura-json-entidades",children:[]}]},{value:"Informaci\xf3n de Nodos",id:"informaci\xf3n-de-nodos",children:[{value:"Nodo Escritor",id:"nodo-escritor",children:[]},{value:"Nodo Validador",id:"nodo-validador",children:[]},{value:"Nodo Boot",id:"nodo-boot",children:[]},{value:"Nodo Observador",id:"nodo-observador",children:[]}]},{value:"Fases de Implementaci\xf3n",id:"fases-de-implementaci\xf3n",children:[{value:"Fase I",id:"fase-i",children:[]},{value:"Fase II",id:"fase-ii",children:[]},{value:"Fase III",id:"fase-iii",children:[]}]}],d={rightToc:l};function s(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"divulgaci\xf3n-voluntaria-de-datos"},"Divulgaci\xf3n voluntaria de datos"),Object(r.b)("p",null,"Los contratos de sistema de permiten a las entidades que sean operadores de nodos anunciar p\xfablicamente las cuentas de sus nodos y compartir informaci\xf3n sobre ellos mismos."),Object(r.b)("p",null,"Piense en un WHOIS para cuentas de LAC-Chain que se verifiquen mediante una firma de blockchain. Todos estos campos requieren un inicio de sesi\xf3n \xfanico que se autentica a trav\xe9s de blockchain. Solo la entidad con las claves correctas pueden editar estos campos , ya sea mediante linea de comando p utilizando la interfaz de usuario."),Object(r.b)("h2",{id:"herramienta-para-actualizar-datos"},"Herramienta Para Actualizar Datos"),Object(r.b)("p",null,'Con el prop\xf3sito de facilitar la actualizaci\xf3n de datos de las entidades hemos desarrollado una herramienta para entidades permisionadas.  Para acceder a la interfaz de usuario para actualizar datos seleccione la opci\xf3n "Update Node Info" en el ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://dashboard.latamlink.io"}),"Monitor de red"),"."),Object(r.b)("h2",{id:"informaci\xf3n-de-entidades"},"Informaci\xf3n de Entidades"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"eosio::action"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"setentinfo(entity, info)")),Object(r.b)("p",null,"Ejecutar esta acci\xf3n requiere de la autorizaci\xf3n de la cuenta permisionada o del comit\xe9 permisionador."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notas"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cuenta de la entidad permisionada")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"info")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON seg\xfan estructura de entidades")))),Object(r.b)("h3",{id:"estructura-json-entidades"},"Estructura JSON Entidades"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "account_name": "eoscostarica",\n    "org": {\n        "organization_name": "EOS Costa Rica",\n        "organization_id": "3-101-090127",\n        "technical_contact": "Xavier Fernandez",\n        "business_contact": "Edgar Fernandez",\n        "email": "bp@eosio.cr",\n        "website": "https://eoscostarica.io",\n        "code_of_conduct": "https://eoscostarica.io/en/transparency/#code_of_conduct",\n        "ownership_disclosure": "https://eoscostarica.io/en/transparency/#ownership_disclosure",\n        "branding": {\n            "logo_256": "https://eoscostarica.io/assets/eos-CostaRica-256x256.png",\n            "logo_1024": "https://eoscostarica.io/assets/eos-CostaRica-1024x1024.png",\n            "logo_svg": "https://eoscostarica.io/assets/eos-CostaRica-vectors.svg"\n        },\n        "location": {\n            "name": "San Jose",\n            "country": "CR",\n            "latitude": 9.936377,\n            "longitude": -84.078155\n        },\n        "social": {\n            "steemit": "eos-costarica",\n            "twitter": "EOSCostaRica",\n            "youtube": "channel/UCvYinCH3O1iKpi-_dNfQAGQ",\n            "facebook": "costaricaeos",\n            "github": "eoscostarica",\n            "reddit": "eoscostarica",\n            "keybase": "eoscostarica",\n            "telegram": "eoscr",\n            "wechat": ""\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"informaci\xf3n-de-nodos"},"Informaci\xf3n de Nodos"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"eosio::action"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"setentinfo(node, info)")),Object(r.b)("p",null,"Ejecutar esta acci\xf3n requiere de la autorizaci\xf3n de la cuenta permisionada o del comit\xe9 permisionador."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Par\xe1metro"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tipo"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notas"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"node")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cuenta del nodo asociada a la entidad")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"info")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON seg\xfan tipo de Nodo")))),Object(r.b)("h3",{id:"nodo-escritor"},"Nodo Escritor"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "writer_api": "http://lacchain.eosio.cr",\n    "writer_ssl": "https://lacchain.eosio.cr",\n    "writer_p2p": "lacchain.eosio.cr:9876",\n    "location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(r.b)("h3",{id:"nodo-validador"},"Nodo Validador"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "validator_p2p_out": "lacchain.eosio.cr:9876",\n    "validator_p2p_bidir": "lacchain.eosio.cr:9876",\n    "validator_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(r.b)("h3",{id:"nodo-boot"},"Nodo Boot"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "boot_p2p_out": "",\n    "boot_p2p_bidir": "lacchain.eosio.cr:9876",\n    "boot_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(r.b)("h3",{id:"nodo-observador"},"Nodo Observador"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "observer_api": "http://lacchain.eosio.cr",\n    "observer_ssl": "https://lacchain.eosio.cr",\n    "observer_p2p": "lacchain.eosio.cr:9876",\n    "observer_location": {\n        "name": "San Jose",\n        "country": "CR",\n        "latitude": 9.936377,\n        "longitude": -84.078155\n    }\n}\n')),Object(r.b)("h2",{id:"fases-de-implementaci\xf3n"},"Fases de Implementaci\xf3n"),Object(r.b)("h3",{id:"fase-i"},"Fase I"),Object(r.b)("h4",{id:"lista-autogenerada-de-todos-los-productores-de-bloques-extra\xeddos-de-la-cadena-de-bloques"},"Lista autogenerada de todos los productores de bloques extra\xeddos de la cadena de bloques."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Nombre de la cuenta del nodo"),Object(r.b)("li",{parentName:"ul"},"Tipo de entidad de nodo"),Object(r.b)("li",{parentName:"ul"},"Clave p\xfablica de nodo"),Object(r.b)("li",{parentName:"ul"},"C\xf3digo de ubicaci\xf3n (ISO 3166-1 num\xe9rico)")),Object(r.b)("h4",{id:"informaci\xf3n-voluntaria-proporcionada-por-cada-entidad"},"Informaci\xf3n voluntaria proporcionada por cada entidad"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Nombre legal"),Object(r.b)("li",{parentName:"ul"},"N\xfamero de identificaci\xf3n"),Object(r.b)("li",{parentName:"ul"},"Nombre de contacto t\xe9cnico"),Object(r.b)("li",{parentName:"ul"},"Nombre de contacto negocios"),Object(r.b)("li",{parentName:"ul"},"Direcci\xf3n"),Object(r.b)("li",{parentName:"ul"},"Sitio web"),Object(r.b)("li",{parentName:"ul"},"Correo Electr\xf3nico"),Object(r.b)("li",{parentName:"ul"},"Redes sociales"),Object(r.b)("li",{parentName:"ul"},"Marca / Logotipo"),Object(r.b)("li",{parentName:"ul"},"C\xf3digo de Conducta")),Object(r.b)("h4",{id:"nodos-eosio"},"Nodos EOSIO"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ubicaciones de nodos"),Object(r.b)("li",{parentName:"ul"},"Puntos finales API y P2P"),Object(r.b)("li",{parentName:"ul"},"Validadores"),Object(r.b)("li",{parentName:"ul"},"Nodos de escritor"),Object(r.b)("li",{parentName:"ul"},"Nodos History API"),Object(r.b)("li",{parentName:"ul"},"Nodos API"),Object(r.b)("li",{parentName:"ul"},"Nodos Boot"),Object(r.b)("li",{parentName:"ul"},"Nodos Observadores")),Object(r.b)("h3",{id:"fase-ii"},"Fase II"),Object(r.b)("h4",{id:"rendimiento"},"Rendimiento"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Bloques perdidos en X per\xedodo de tiempo ",Object(r.b)("em",{parentName:"li"},"- Involuntario")),Object(r.b)("li",{parentName:"ul"},"Rondas perdidas en X per\xedodo de tiempo ",Object(r.b)("em",{parentName:"li"},"- Involuntario")),Object(r.b)("li",{parentName:"ul"},"N\xfamero total de bloques producidos ",Object(r.b)("em",{parentName:"li"},"- Involuntario")),Object(r.b)("li",{parentName:"ul"},"Posici\xf3n media en la lista de BP ",Object(r.b)("em",{parentName:"li"},"- Involuntario")),Object(r.b)("li",{parentName:"ul"},"Calificaci\xf3n de rendimiento promedio ",Object(r.b)("em",{parentName:"li"},"- Involuntario")),Object(r.b)("li",{parentName:"ul"},"Tiempo de inactividad total"),Object(r.b)("li",{parentName:"ul"},"Interrupciones"),Object(r.b)("li",{parentName:"ul"},"Pruebas de estr\xe9s"),Object(r.b)("li",{parentName:"ul"},"Gesti\xf3n de parches"),Object(r.b)("li",{parentName:"ul"},"Capacidad Recuperaci\xf3n de Desastres"),Object(r.b)("li",{parentName:"ul"},"Pruebas de intrusi\xf3n")),Object(r.b)("h4",{id:"infraestructura"},"Infraestructura"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"F\xedsica / Nube p\xfablica / Compartida",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Sitio primario"),Object(r.b)("li",{parentName:"ul"},"Sitio secundario"))),Object(r.b)("li",{parentName:"ul"},"Diagrama Infraestructura"),Object(r.b)("li",{parentName:"ul"},"Protecci\xf3n DDoS"),Object(r.b)("li",{parentName:"ul"},"Firewalls"),Object(r.b)("li",{parentName:"ul"},"Balanceadores de carga"),Object(r.b)("li",{parentName:"ul"},"VPN "),Object(r.b)("li",{parentName:"ul"},"Planes futuros")),Object(r.b)("h3",{id:"fase-iii"},"Fase III"),Object(r.b)("h4",{id:"estructura-de-soporte"},"Estructura de soporte"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"N\xfamero de empleados t\xe9cnicos."),Object(r.b)("li",{parentName:"ul"},"Soporte 24/7"),Object(r.b)("li",{parentName:"ul"},"Herramientas de monitoreo"),Object(r.b)("li",{parentName:"ul"},"Plan de comunicaci\xf3n con otros nodos Validadores")),Object(r.b)("h4",{id:"estructura-de-propiedad"},"Estructura de propiedad"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Descripci\xf3n de la estructura comercial"),Object(r.b)("li",{parentName:"ul"},"N\xfamero de empleados"),Object(r.b)("li",{parentName:"ul"},"Titulares de intereses individuales"),Object(r.b)("li",{parentName:"ul"},"Accionistas de entidades comerciales"),Object(r.b)("li",{parentName:"ul"},"Entidades afiliadas")))}s.isMDXComponent=!0}}]);