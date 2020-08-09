(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=b(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},p=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return t?i.a.createElement(m,o(o({ref:a},s),{},{components:t})):i.a.createElement(m,o({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=p;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(2),i=t(6),r=(t(0),t(100)),c={id:"funciones-importantes",title:"Funciones Importantes en EOSIO",sidebar_label:"Funciones Importantes"},o={unversionedId:"funciones-importantes",id:"funciones-importantes",isDocsHomePage:!1,title:"Funciones Importantes en EOSIO",description:"Cuenta Privilegiada EOSIO",source:"@site/docs/funciones-importantes.md",permalink:"/docs/funciones-importantes",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/funciones-importantes.md",lastUpdatedAt:1597009192,sidebar_label:"Funciones Importantes",sidebar:"docs",previous:{title:"Redes Blockchain basadas en EOSIO",permalink:"/docs/redes-eosio"},next:{title:"Glosario de T\xe9rminos",permalink:"/docs/glosario"}},l=[{value:"Cuenta Privilegiada EOSIO",id:"cuenta-privilegiada-eosio",children:[]},{value:"Funciones Privilegiadas EOSIO",id:"funciones-privilegiadas-eosio",children:[{value:"<code>set_resource_limits</code>",id:"set_resource_limits",children:[]},{value:"<code>set_prods</code>",id:"set_prods",children:[]},{value:"<code>set_params</code>",id:"set_params",children:[]},{value:"<code>set_privileged</code>",id:"set_privileged",children:[]}]},{value:"Acciones de Sistema",id:"acciones-de-sistema",children:[{value:"<code>new_account</code>",id:"new_account",children:[]},{value:"<code>set code</code>",id:"set-code",children:[]},{value:"<code>set abi</code>",id:"set-abi",children:[]},{value:"<code>updateauth</code>",id:"updateauth",children:[]},{value:"<code>deleteauth</code>",id:"deleteauth",children:[]},{value:"<code>linkauth</code>",id:"linkauth",children:[]},{value:"<code>unlinkauth</code>",id:"unlinkauth",children:[]}]},{value:"Contrato Nativo eosio.token",id:"contrato-nativo-eosiotoken",children:[{value:"<code>create</code>",id:"create",children:[]},{value:"<code>issue</code>",id:"issue",children:[]},{value:"<code>retire</code>",id:"retire",children:[]},{value:"<code>transfer</code>",id:"transfer",children:[]}]}],s={rightToc:l};function b(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cuenta-privilegiada-eosio"},"Cuenta Privilegiada EOSIO"),Object(r.b)("p",null,"Esta cuenta posee acceso ilimitado a los recursos CPU, NET, y RAM.  Se fijar\xe1 una cuenta compuesta por el comit\xe9 permisionador que representa la autoridad m\xe1xima de la red. "),Object(r.b)("p",null,"Se pueden crear permisos especificaos para cada acci\xf3n privilegiada y ademas se podr\xe1 utilizar un contrato multifirma (o \u201cmultisig\u201d) con par\xe1metros variables que requerir\xe1 el consentimiento de la mayor\xeda de los actores en la tabla. Esta cuenta privilegiada se denominar\xe1 la cuenta ",Object(r.b)("inlineCode",{parentName:"p"},"eosio"),"."),Object(r.b)("h2",{id:"funciones-privilegiadas-eosio"},"Funciones Privilegiadas EOSIO"),Object(r.b)("p",null,"Los contratos inteligentes de EOSIO son simples archivos de WebAssembly. El formato WebAssembly permite definir importaciones, funciones que no se declaran en WASM en s\xed pero en el entorno en el que se ejecuta el c\xf3digo de WebAssembly. EOSIO utiliza estas funciones integradas (intr\xednsecas) para intercambiar datos entre el c\xf3digo de contrato de WebAssembly y el nodo EOSIO ",Object(r.b)("inlineCode",{parentName:"p"},"nodeos"),". Cada vez que la m\xe1quina virtual EOS (EOSVM), que ejecuta el c\xf3digo de WebAssembly, llega a un nivel intr\xednseco, el control del programa se transfiere al c\xf3digo del controlador de nodo para resolverlo. Una lista completa de funciones intr\xednsecas para EOSIO 2.0.X se puede encontrar ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"}),"aqu\xed"),"."),Object(r.b)("h3",{id:"set_resource_limits"},Object(r.b)("inlineCode",{parentName:"h3"},"set_resource_limits")),Object(r.b)("p",null,"Actualiza los limites de recursos asociados a una cuenta\nUtiliza como par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account:  La cuenta destino\nram_bytes:  El limite de RAM en bytes\nnet_weight:  El weight para determinar su capacidad de NET\ncpu_weight:  El weight para determinar su capacidad de CPU\n")),Object(r.b)("h3",{id:"set_prods"},Object(r.b)("inlineCode",{parentName:"h3"},"set_prods")),Object(r.b)("p",null,"Establece una nueva lista de productores(validadores) activos.\nUna vez que el bloque con la propuesta se vuelve irreversible los nuevos productores se vuelven activos.\nPar\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schedule: JSON con lista de productores y sus signing keys\n")),Object(r.b)("h3",{id:"set_params"},Object(r.b)("inlineCode",{parentName:"h3"},"set_params")),Object(r.b)("p",null,"Modifica uno o varios par\xe1metros de la blockchain."),Object(r.b)("p",null,"Par\xe1metros:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_block_net_usage")),"   La cantidad maxima de uso de net en un bloque")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"target_block_net_usage_pct")),"    El porcentaje de uso maximo de net, pasado este limite la red entra en modo congestion.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_transaction_net_usage")),"  El uso maximo de net que la chain va a permitir, mas alla de los limites de la cuenta.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"base_per_transaction_net_usage")),"  The base amount of net usage billed for a transaction to cover incidentals")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"net_usage_leeway")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"context_free_discount_net_usage_num")),"  The numerator for the discount on net usage of context-free data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"context_free_discount_net_usage_den")),"  The denominator for the discount on net usage of context-free data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_block_cpu_usage"))," The maxiumum billable cpu usage (in microseconds) for a block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"target_block_cpu_usage_pct"))," The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_transaction_cpu_usage"))," The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"min_transaction_cpu_usage"))," The minimum billable cpu usage (in microseconds) that the chain requires")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_transaction_lifetime"))," The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"deferred_trx_expiration_window"))," The number of seconds after the time a deferred transaction can first execute until it expires")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_transaction_delay"))," The maximum number of seconds that can be imposed as a delay requirement by authorization checks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_inline_action_size"))," Maximum allowed size (in bytes) of an inline action")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_inline_action_depth"))," Recursion depth limit on sending inline actions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"max_authority_depth"))," Recursion depth limit for checking if an authority is satisfied"))),Object(r.b)("h3",{id:"set_privileged"},Object(r.b)("inlineCode",{parentName:"h3"},"set_privileged")),Object(r.b)("p",null,"Permite establecer como privilegiada a una cuenta.\nPar\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account: La cuenta que se quiere setear como privilegiada\nis_priv:  0 para falso, mayor a 0 para verdadero\n")),Object(r.b)("h2",{id:"acciones-de-sistema"},"Acciones de Sistema"),Object(r.b)("p",null,"Estas acciones no requieren ser ejecutadas por una cuenta privilegiada."),Object(r.b)("h3",{id:"new_account"},Object(r.b)("inlineCode",{parentName:"h3"},"new_account")),Object(r.b)("p",null,"Crea una cuenta nueva.\nUtiliza como par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"creator: Nombre de la cuenta que crea la cuenta nueva\nname: Nombre de la cuenta nueva\nowner: Owner public key\nactive: Active public key\n")),Object(r.b)("h3",{id:"set-code"},Object(r.b)("inlineCode",{parentName:"h3"},"set code")),Object(r.b)("p",null,"Set code establecer o actualizar un contrato inteligente en una cuenta\nUtiliza como par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account: La cuenta a la que se desea publicar un contrato\ncode: El c\xf3digo en forma de BLOB binario\n")),Object(r.b)("h3",{id:"set-abi"},Object(r.b)("inlineCode",{parentName:"h3"},"set abi")),Object(r.b)("p",null,"Permite establecer o actualizar el abi para el contrato inteligente, se identifica por account_name.\nUtiliza como par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account: El nombre de la cuenta destino\nabi:  El abi\n")),Object(r.b)("h3",{id:"updateauth"},Object(r.b)("inlineCode",{parentName:"h3"},"updateauth")),Object(r.b)("p",null,"actualiza los permisos de una cuenta.\nUtiliza como par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account:  La cuenta que se desea modificar.\npemission:  El nombre del nuevo permiso\nparent: El permiso padre del nuevo permiso\nauth: El json definiendo la autorizaci\xf3n de permisos\n")),Object(r.b)("h3",{id:"deleteauth"},Object(r.b)("inlineCode",{parentName:"h3"},"deleteauth")),Object(r.b)("p",null,"elimina la autorizaci\xf3n de permisos de una cuenta .\nUtiliza como par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account: La cuenta destino\npermission: El nombre del permiso que se desea eliminar\n")),Object(r.b)("h3",{id:"linkauth"},Object(r.b)("inlineCode",{parentName:"h3"},"linkauth")),Object(r.b)("p",null,"Asigna una acci\xf3n especifica de un contrato a un permiso especifico, cinco acciones no pueden ser linkeadas updateauth,deleteauth,linkauth,unlikauth,canceldelay\nPar\xe1metros utilizados:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account: Cuenta destino\ncode: Cuenta owner de la acci\xf3n que se desea linkear\ntype: La accion que se desea linkear\nrequirement: El permiso a linkear.\n")),Object(r.b)("h3",{id:"unlinkauth"},Object(r.b)("inlineCode",{parentName:"h3"},"unlinkauth")),Object(r.b)("p",null,"Es la reversa de linkauth\nPar\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"account: Cuenta destino\ncode: Cuenta owner de la accion que se desea deslinkear\ntype: La acci\xf3n que se desea deslinkear\n")),Object(r.b)("h2",{id:"contrato-nativo-eosiotoken"},"Contrato Nativo eosio.token"),Object(r.b)("p",null,"Estas acciones pueden ser ejecutadas por cualquier cuenta con el fin de emitir un token propio."),Object(r.b)("h3",{id:"create"},Object(r.b)("inlineCode",{parentName:"h3"},"create")),Object(r.b)("p",null,"Le permite a una cuenta ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"issuer"))," crear un token.\nUtiliza como parametros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"issuer: La cuenta que crea el token\nmaximum_supply: La cantidad maxima junto al simbolo del token.\n")),Object(r.b)("h3",{id:"issue"},Object(r.b)("inlineCode",{parentName:"h3"},"issue")),Object(r.b)("p",null,"Esta acci\xf3n distribuye a una cuenta una cantidad de tokens determinada.\nUtiliza como Par\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"to: Cuenta a la que se distribuyen los tokens\nquantity: La cantidad de tokens a distribuir\nmemo: memo que acompa\xf1a la distribuci\xf3n inicial de tokens\n")),Object(r.b)("h3",{id:"retire"},Object(r.b)("inlineCode",{parentName:"h3"},"retire")),Object(r.b)("p",null,"El opuesto a crear un token.\nPar\xe1metros:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"quantity: La cantidad de tokens a retirar\nmemo : El memo que acompa\xf1a la transacci\xf3n.\n")),Object(r.b)("h3",{id:"transfer"},Object(r.b)("inlineCode",{parentName:"h3"},"transfer")),Object(r.b)("p",null,'Transfiere de una cuenta origen a una cuenta destino una cantidad "n" de tokens\nPar\xe1metros:'),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"from: Cuenta origen desde donde se debitan los tokens\nto: Cuenta destino a la que acreditar los tokens\nquantity: La cantidad de tokens\nmemo: Memo que acompa\xf1a la transacci\xf3n\n")))}b.isMDXComponent=!0}}]);