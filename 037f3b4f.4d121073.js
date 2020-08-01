(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return b}));var t=n(0),r=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},d=function(e){var a=u(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=t,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(b,s(s({ref:a},l),{},{components:n})):r.a.createElement(b,s({ref:a},l))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return s})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return u}));var t=n(2),r=n(6),o=(n(0),n(100)),c={id:"recursos",title:"Uso de Recursos",sidebar_label:"Uso de Recursos"},s={unversionedId:"recursos",id:"recursos",isDocsHomePage:!1,title:"Uso de Recursos",description:"LACChain no tiene y no tendr\xe1 tarifas de transacci\xf3n. Sin embargo, para limitar el uso de la red a sus l\xedmites t\xe9cnicos y evitar ataques de denegaci\xf3n de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red.",source:"@site/docs/recursos.md",permalink:"/docs/recursos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/recursos.md",lastUpdatedAt:1596311480,sidebar_label:"Uso de Recursos",sidebar:"docs",previous:{title:"Mecanismo de Consenso",permalink:"/docs/mecanismo-consenso"},next:{title:"Cuentas y Permisos",permalink:"/docs/cuentas-permisos"}},i=[{value:"Tipos de Recursos",id:"tipos-de-recursos",children:[{value:"RAM",id:"ram",children:[]},{value:"CPU",id:"cpu",children:[]},{value:"Network (NET)",id:"network-net",children:[]}]},{value:"L\xedmites de recursos de la cuenta",id:"l\xedmites-de-recursos-de-la-cuenta",children:[]},{value:"Contabilidad de recursos",id:"contabilidad-de-recursos",children:[]},{value:"CPU y NET como recursos el\xe1sticos",id:"cpu-y-net-como-recursos-el\xe1sticos",children:[]}],l={rightToc:i};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LACChain no tiene y no tendr\xe1 tarifas de transacci\xf3n. Sin embargo, para limitar el uso de la red a sus l\xedmites t\xe9cnicos y evitar ataques de denegaci\xf3n de servicio, es necesario establecer un mecanismo para solicitar y asignar recursos de red."),Object(o.b)("h2",{id:"tipos-de-recursos"},"Tipos de Recursos"),Object(o.b)("p",null,"Las cuentas podr\xe1n utilizar los siguientes recursos en la red:"),Object(o.b)("h3",{id:"ram"},"RAM"),Object(o.b)("p",null,"En una red EOSIO, la RAM es el espacio de almacenamiento de memoria donde la cadena de bloques almacena datos, se mide en kilobytes (KiB). Si su contrato necesita almacenar datos en una tabla de blockchain, como en una base de datos, puede almacenarlos en la RAM de blockchain."),Object(o.b)("p",null,"RAM es un recurso muy importante y es limitado. Se utiliza al ejecutar muchas acciones que est\xe1n disponibles en la cadena de bloques, al crear una nueva cuenta, por ejemplo, la informaci\xf3n de esa cuenta se almacena en la memoria de la cadena de bloques. Un ejemplo del uso de RAM es cuando una cuenta acepta un nuevo tipo de token, se debe crear un nuevo registro en alg\xfan lugar de la memoria de blockchain que contenga el saldo del nuevo token aceptado, y esa memoria, el espacio de almacenamiento en blockchain, debe ser comprada por el cuenta que transfiere el token o por la cuenta que acepta el nuevo tipo de token."),Object(o.b)("p",null,"RAM es referido como ",Object(o.b)("inlineCode",{parentName:"p"},"memory")," en el siguiente resultado del comando ",Object(o.b)("inlineCode",{parentName:"p"},"cleos get account")," : "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"memory: \n     quota:     86.68 KiB    used:     11.62 KiB  \n")),Object(o.b)("p",null,"Puede encontrar m\xe1s detalles sobre RAM como recurso del sistema ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"}),"aqu\xed"),"."),Object(o.b)("h3",{id:"cpu"},"CPU"),Object(o.b)("p",null,"CPU es el poder de procesamiento, la cantidad de CPU que tiene una cuenta se mide en microsegundos (\u03bcs), se conoce como ",Object(o.b)("inlineCode",{parentName:"p"},"CPU bandwith"),", el comando ",Object(o.b)("inlineCode",{parentName:"p"},"cleos get account")," emite la cantidad de tiempo de procesamiento que una cuenta tiene a su disposici\xf3n al enviar acciones a un contrato."),Object(o.b)("p",null,"Puede encontrar m\xe1s detalles sobre la CPU como recurso del sistema ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu"}),"aqu\xed"),"."),Object(o.b)("h3",{id:"network-net"},"Network (NET)"),Object(o.b)("p",null,"Como CPU y RAM, NET tambi\xe9n es un recurso muy importante en las cadenas de bloques basadas en EOSIO. NET es el ancho de banda de la red medido en bytes de transacciones y se conoce como ",Object(o.b)("inlineCode",{parentName:"p"},"net bandwidth"),"."),Object(o.b)("p",null,"Puede encontrar m\xe1s detalles sobre NET como recurso del sistema ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net"}),"aqu\xed"),"."),Object(o.b)("h2",{id:"l\xedmites-de-recursos-de-la-cuenta"},"L\xedmites de recursos de la cuenta"),Object(o.b)("p",null,"Cada cuenta en una cadena de bloques basada en EOSIO tiene l\xedmites de recursos para CPU / NET y RAM asociados. Estos l\xedmites especifican cu\xe1nto de cada recurso puede usar la cuenta y se pueden cambiar din\xe1micamente llamando a la API privilegiada ",Object(o.b)("inlineCode",{parentName:"p"},"set_resource_limits"),"."),Object(o.b)("p",null,"La diferencia entre los l\xedmites de recursos de CPU / NET y RAM es que la RAM, dado que es un recurso limitado, una vez utilizada, la \xfanica forma de recuperarla es liberar el espacio de almacenamiento utilizado. Por otro lado, CPU y NET se repondr\xe1n por completo cuando la cuenta no est\xe9 utilizando la red durante un per\xedodo de tiempo. Por defecto, este per\xedodo se establece en 24 horas."),Object(o.b)("h2",{id:"contabilidad-de-recursos"},"Contabilidad de recursos"),Object(o.b)("p",null,"Cuando un usuario (cuenta) desea interactuar con un contrato inteligente (otra cuenta), se crea una transacci\xf3n con una acci\xf3n que especifica la funci\xf3n inteligente para llamar junto con la cuenta (nivel de permiso) que autoriza la acci\xf3n."),Object(o.b)("p",null,"Luego, despu\xe9s de firmar con las claves que autorizan el nivel de permiso especificado en la acci\xf3n, la transacci\xf3n se transmite a la red hasta que alcanza el productor de bloques actual en la programaci\xf3n."),Object(o.b)("p",null,"El productor de bloques ejecutar\xe1 todas las acciones dentro de la transacci\xf3n y facturar\xe1 el tiempo utilizado para ejecutarlas (CPU) a la primera cuenta que autoriza la primera acci\xf3n. Adem\xe1s, facturar\xe1 a la primera cuenta de autorizaci\xf3n por el tama\xf1o de la transacci\xf3n (NET)."),Object(o.b)("p",null,"Si las acciones realizadas por el contrato inteligente implican alg\xfan tipo de almacenamiento de datos, el contrato inteligente puede elegir usar los recursos de RAM de cualquiera de las cuentas de autorizaci\xf3n de transacciones o usar los recursos de RAM de la cuenta del contrato inteligente."),Object(o.b)("h2",{id:"cpu-y-net-como-recursos-el\xe1sticos"},"CPU y NET como recursos el\xe1sticos"),Object(o.b)("p",null,"El ",Object(o.b)("inlineCode",{parentName:"p"},"resource limit manager")," de una cadena de bloques basada en EOSIO es la parte del protocolo que realiza un seguimiento de la cantidad de recursos de red disponibles en cualquier momento y cu\xe1ntos recursos est\xe1 usando cada cuenta."),Object(o.b)("p",null,"En particular, trata la CPU y NET como recursos el\xe1sticos que permiten a los usuarios consumir m\xe1s recursos de los que tienen derecho mientras este recurso est\xe1 por debajo del uso deseado (no congestionado)."),Object(o.b)("p",null,"Un recurso el\xe1stico tiene las siguientes propiedades."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"El uso deseado."),Object(o.b)("li",{parentName:"ul"},"El uso m\xe1ximo."),Object(o.b)("li",{parentName:"ul"},"El n\xfamero de per\xedodos de agregaci\xf3n que contribuyen al uso promedio."),Object(o.b)("li",{parentName:"ul"},"El multiplicador por el cual el espacio virtual puede sobrevender el uso cuando no est\xe1 congestionado."),Object(o.b)("li",{parentName:"ul"},"La tasa a la cual un recurso congestionado contrae su l\xedmite."),Object(o.b)("li",{parentName:"ul"},"La velocidad a la que un recurso no congestionado expande sus l\xedmites.")),Object(o.b)("p",null,"Veamos la configuraci\xf3n predeterminada para el recurso de CPU como ejemplo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"const static uint32_t default_max_block_cpu_usage        = 200'000; /// max block cpu usage in microseconds\nconst static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;\nconst static uint32_t block_cpu_usage_average_window_ms  = 60*1000l;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"elastic_limit_parameters cpu_limit_parameters = {\n    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), //10% of 200ms\n    config::default_max_block_cpu_usage,                                                          //200ms\n    config::block_cpu_usage_average_window_ms / config::block_interval_ms,                        //60s (120 blocks)\n    1000,                                                                                         //x1000 multiplier\n    {99, 100},                                                                                    //contract ratio 0.99 \n    {1000, 999}                                                                                   //expand ratio 1.001\n};\n")),Object(o.b)("p",null,"Al hacer de la CPU un recurso el\xe1stico, se crear\xe1 una CPU virtual que oscilar\xe1 entre el valor m\xe1s bajo posible, que es el uso m\xe1ximo especificado, y el valor m\xe1s alto posible, que es el valor m\xe1s bajo posible multiplicador."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"virtual cpu = [[maximum usage, maximum usage * multiplier]]\n")),Object(o.b)("p",null,"El l\xedmite de la CPU virtual se contraer\xe1 (expandir\xe1) mediante la ",Object(o.b)("inlineCode",{parentName:"p"},"relaci\xf3n de contrato (expandir) 'cuando la utilizaci\xf3n promedio est\xe9 por encima (debajo) del uso deseado, lo que significa que")," lo m\xe1ximo que una cuenta puede consumir durante los per\xedodos de inactividad es 1000x (multiplicador) ancho de banda se garantiza bajo congesti\xf3n."),Object(o.b)("p",null,"La utilizaci\xf3n promedio de la CPU se calcula utilizando un EMA (Promedio m\xf3vil exponencial) que otorga un mayor peso e importancia al uso m\xe1s reciente."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-c++"}),"def update_elastic_limit(current_limit, average_usage, elastic_resource_limit) {\n   result = current_limit\n   if average_usage > elastic_resource_limit.target:\n      result = result * elastic_resource_limit.contract_rate\n   else:\n      result = result * elastic_resource_limit.expand_rate\n\n   return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)\n")))}u.isMDXComponent=!0}}]);