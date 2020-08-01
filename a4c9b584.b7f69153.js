(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return O}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=t,O=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(O,s(s({ref:n},c),{},{components:a})):r.a.createElement(O,s({ref:n},c))}));function O(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return s})),a.d(n,"rightToc",(function(){return p})),a.d(n,"default",(function(){return l}));var t=a(2),r=a(6),i=(a(0),a(100)),o={id:"instalacion-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos"},s={unversionedId:"instalacion-nodos",id:"instalacion-nodos",isDocsHomePage:!1,title:"Instalaci\xf3n de Nodos",description:"Versi\xf3n EOSIO : v2.0.5",source:"@site/docs/instalacion-nodos.md",permalink:"/docs/instalacion-nodos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/instalacion-nodos.md",lastUpdatedAt:1596311480,sidebar_label:"Instalaci\xf3n de Nodos",sidebar:"docs",previous:{title:"Informaci\xf3n sobre Entidades y Nodos",permalink:"/docs/datos-entidades-nodos"},next:{title:"Contrato Hola Mundo",permalink:"/docs/hola-mundo"}},p=[{value:"1. Instale EOSIO desde binarios precompilados",id:"1-instale-eosio-desde-binarios-precompilados",children:[{value:"Desinstalar",id:"desinstalar",children:[]}]},{value:"2. Configurar el nodo LatamLink Testnet",id:"2-configurar-el-nodo-latamlink-testnet",children:[{value:"Iniciar y detener nodeos",id:"iniciar-y-detener-nodeos",children:[]}]},{value:"Configuraciones relevantes nodeos",id:"configuraciones-relevantes-nodeos",children:[{value:"Validador",id:"validador",children:[]},{value:"Validador p2p layer 1",id:"validador-p2p-layer-1",children:[]},{value:"Validador p2p out",id:"validador-p2p-out",children:[]},{value:"Validador p2p bidir",id:"validador-p2p-bidir",children:[]},{value:"boot p2p out",id:"boot-p2p-out",children:[]},{value:"boot p2p bidir",id:"boot-p2p-bidir",children:[]},{value:"writer p2p",id:"writer-p2p",children:[]},{value:"writer api",id:"writer-api",children:[]},{value:"observer api",id:"observer-api",children:[]},{value:"observer p2p",id:"observer-p2p",children:[]}]}],c={rightToc:p};function l(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Versi\xf3n EOSIO : ",Object(i.b)("inlineCode",{parentName:"p"},"v2.0.5")," "),Object(i.b)("p",null,"Chain ID: ",Object(i.b)("inlineCode",{parentName:"p"},"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5")),Object(i.b)("p",null,"Archivo G\xe9nesis : ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json"}),Object(i.b)("inlineCode",{parentName:"a"},"genesis.json"))),Object(i.b)("h2",{id:"1-instale-eosio-desde-binarios-precompilados"},"1. Instale EOSIO desde binarios precompilados"),Object(i.b)("p",null,"Descargue la \xfaltima versi\xf3n de EOSIO para su sistema operativo desde:  ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.4"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.4"),"   "),Object(i.b)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",Object(i.b)("inlineCode",{parentName:"p"},"eosio_2.0.5-1-ubuntu-18.04_amd64.deb"),"  "),Object(i.b)("p",null,"Puedes usar apt para instalarlo:  "),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb   \n")),Object(i.b)("p",null,"Descargar\xe1 todas las dependencias e instalar\xe1 EOSIO a ",Object(i.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.5"),"  "),Object(i.b)("h3",{id:"desinstalar"},"Desinstalar"),Object(i.b)("p",null,"Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/eosio_uninstall.sh\n")),Object(i.b)("h2",{id:"2-configurar-el-nodo-latamlink-testnet"},"2. Configurar el nodo LatamLink Testnet"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/LatamLink-testnet\ncd ~/LatamLink-testnet\ngit clone https://github.com/LatamLink/testnet.git ./\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edite ",Object(i.b)("inlineCode",{parentName:"p"},"config.ini"),"   "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ingrese la direcci\xf3n IP externa de su servidor: ",Object(i.b)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP:9876")," "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Abrir puertos TCP  (8888, 9876) en su firewall / enrutador"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Especifique un archivo genesis.json la primera vez que ejecute nodeos"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(i.b)("p",null,"Siga los logs para verificar que su nodo est\xe9 funcionando bien."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"tail -f stderr.txt\n")),Object(i.b)("p",null,"Compruebe si puede acceder a su nodo mediante el enlace ",Object(i.b)("inlineCode",{parentName:"p"},"http://**YOUR_SERVER**/v1/chain/get_info")," "),Object(i.b)("p",null,"Aqu\xed hay un ",Object(i.b)("a",{href:"https://latamlink.eosio.cr/v1/chain/get_info",target:"_blank"},"Ejemplo de API"),"  "),Object(i.b)("h3",{id:"iniciar-y-detener-nodeos"},"Iniciar y detener nodeos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"./start.sh")," Inicia y reinicia el servicio Nodeos.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"./stop.sh")," Realiza el apagado correcto del servicio Nodeos."))),Object(i.b)("h2",{id:"configuraciones-relevantes-nodeos"},"Configuraciones relevantes nodeos"),Object(i.b)("p",null,"Esta no es una lista de configuraciones que pueden usarse out of the box, mas bien una lista de opciones importantes para cada tipo de nodo."),Object(i.b)("h3",{id:"validador"},"Validador"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"\nproducer-name = <validator_name>\n\nsignature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3\n\npeer-key =\npeer-private-key =\n\neosio::producer_plugin\n\n")),Object(i.b)("h3",{id:"validador-p2p-layer-1"},"Validador p2p layer 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"validador-p2p-out"},"Validador p2p out"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key = \np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"validador-p2p-bidir"},"Validador p2p bidir"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"boot-p2p-out"},"boot p2p out"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"boot-p2p-bidir"},"boot p2p bidir"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"writer-p2p"},"writer p2p"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(i.b)("h3",{id:"writer-api"},"writer api"),Object(i.b)("p",null,"Hacer referencia a la documentacion de ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.dfuse.io/en"}),"dfuse")),Object(i.b)("h3",{id:"observer-api"},"observer api"),Object(i.b)("p",null,"Hacer referencia a la documentacion de ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.dfuse.io/en"}),"dfuse")),Object(i.b)("h3",{id:"observer-p2p"},"observer p2p"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")))}l.isMDXComponent=!0}}]);