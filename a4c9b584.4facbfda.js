(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m}));var o=n(0),r=n.n(o);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var a=r.a.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=l(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||t;return n?r.a.createElement(m,s(s({ref:a},d),{},{components:n})):r.a.createElement(m,s({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<t;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return s})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return l}));var o=n(2),r=n(6),t=(n(0),n(100)),i={id:"instalacion-nodos",title:"Instalaci\xf3n de Nodos",sidebar_label:"Instalaci\xf3n de Nodos"},s={unversionedId:"instalacion-nodos",id:"instalacion-nodos",isDocsHomePage:!1,title:"Instalaci\xf3n de Nodos",description:"Nodos EOSIO",source:"@site/docs/instalacion-nodos.md",permalink:"/docs/instalacion-nodos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/website/docs/instalacion-nodos.md",lastUpdatedAt:1597084661,sidebar_label:"Instalaci\xf3n de Nodos",sidebar:"docs",previous:{title:"Informaci\xf3n sobre Entidades y Nodos",permalink:"/docs/datos-entidades-nodos"},next:{title:"Contrato Hola Mundo",permalink:"/docs/hola-mundo"}},c=[{value:"Nodos EOSIO",id:"nodos-eosio",children:[{value:"Requerimientos de Hardware",id:"requerimientos-de-hardware",children:[]},{value:"Almacenamiento",id:"almacenamiento",children:[]},{value:"Sistema de archivos",id:"sistema-de-archivos",children:[]},{value:"Contenedores y Virtualizaci\xf3n",id:"contenedores-y-virtualizaci\xf3n",children:[]},{value:"Redes",id:"redes",children:[]}]},{value:"TestNet EOSIO LAC-Chain",id:"testnet-eosio-lac-chain",children:[{value:"Instalaci\xf3n desde binarios pre-compilados",id:"instalaci\xf3n-desde-binarios-pre-compilados",children:[]},{value:"Desinstalar",id:"desinstalar",children:[]},{value:"Configuraci\xf3n de un nodo para el Testnet EOSIO",id:"configuraci\xf3n-de-un-nodo-para-el-testnet-eosio",children:[]}]},{value:"Ejemplos de Configuraciones",id:"ejemplos-de-configuraciones",children:[{value:"Validador",id:"validador",children:[]},{value:"Validador p2p layer 1",id:"validador-p2p-layer-1",children:[]},{value:"Validador p2p out",id:"validador-p2p-out",children:[]},{value:"Validador p2p bidir",id:"validador-p2p-bidir",children:[]},{value:"boot p2p out",id:"boot-p2p-out",children:[]},{value:"boot p2p bidir",id:"boot-p2p-bidir",children:[]},{value:"writer p2p",id:"writer-p2p",children:[]},{value:"writer api",id:"writer-api",children:[]},{value:"observer api",id:"observer-api",children:[]},{value:"observer p2p",id:"observer-p2p",children:[]}]}],d={rightToc:c};function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(t.b)("wrapper",Object(o.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"nodos-eosio"},"Nodos EOSIO"),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Nodeos")," es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronizaci\xf3n con otros nodos a trav\xe9s del ",Object(t.b)("strong",{parentName:"p"},"protocolo p2p"),", proporciona una ",Object(t.b)("strong",{parentName:"p"},"API HTTP")," para el software del cliente y, opcionalmente, ",Object(t.b)("strong",{parentName:"p"},"firma bloques")," si se configura con la cuenta de un validador."),Object(t.b)("p",null,"Nodeos est\xe1 disponible en c\xf3digo fuente y paquetes binarios en el ",Object(t.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases"}),"repositorio GitHub"),".  Las plataformas compatibles son Ubuntu 16.04 y 18.04, RHEL7 y MacOS. "),Object(t.b)("p",null,"Cuando planifique la instalaci\xf3n de un servidor, tiene varias opciones para seleccionar. A menudo, la selecci\xf3n est\xe1 determinada por los h\xe1bitos y preferencias existentes del administrador del sistema."),Object(t.b)("h3",{id:"requerimientos-de-hardware"},"Requerimientos de Hardware"),Object(t.b)("p",null,"Las caracter\xedsticas de un servidor dependen mucho de los requisitos de la red. Las redes de alto tr\xe1fico como el mainnet de EOS requieren un servidor dedicado con SSD o NVMe conectados directamente, al menos para los archivos de estado de los nodos. Algunos proveedores de hosting permiten una combinaci\xf3n de HDD y SSD en el mismo servidor f\xedsico, y bloquea el registro y el archivo de historial de estado que se pueden almacenar en discos duros. "),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Un servidor t\xedpico en producci\xf3n tendr\xeda al menos 500 GB de almacenamiento SSD, 32 GB de RAM y una CPU de 3.5 Ghz o m\xe1s r\xe1pido.")),Object(t.b)("p",null,"Las redes de bajo tr\xe1fico y las redes de prueba estar\xedan funcionando bien en servidores virtuales VPS. Por lo general, 8 GB de RAM y un par de n\xfacleos de CPU son suficientes. "),Object(t.b)("h3",{id:"almacenamiento"},"Almacenamiento"),Object(t.b)("p",null,"El registro de bloques y el historial de estado pueden requerir un espacio de almacenamiento significativo."),Object(t.b)("p",null,"En cuanto a rendimiento, nodeos requiere acceso a su estado de memoria compartida con el m\xednimo retraso posible. Por lo tanto, el directorio que contenga los datos del estado debe residir en almacenamiento SSD o NVMe. Otros directorios, como los bloques y el historial de estado, son bastante bajos en cuanto a los requisitos de rendimiento, y los discos duros funcionan bien para este trabajo. "),Object(t.b)("h3",{id:"sistema-de-archivos"},"Sistema de archivos"),Object(t.b)("p",null,"ZFS es un sistema de archivos desarrollado por Sun Microsystems y utilizado en su sistema operativo Solaris. El sistema de archivos ha sido portado al kernel de Linux y est\xe1 disponible de forma inmediata en Ubuntu 18.04"),Object(t.b)("p",null,"Otros sistemas de archivos de elecci\xf3n ser\xedan ext4 y XFS. Son estables y funcionan bien, aunque ZFS ofrece una serie de caracter\xedsticas \xfanicas para beneficiarse de:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Respaldos r\xe1pidos y costo-eficientes. Se necesita una fracci\xf3n de segundo para crear un nuevo respaldo de un sistema de archivos ZFS, y los respaldos son m\xe1s ligeros en tama\xf1o ya que solo se agregan los cambios a los datos del nodo. El contenido del respaldo se puede copiar m\xe1s tarde en alg\xfan otro medio o ubicaci\xf3n remota sin interrumpir el servicio.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Compresi\xf3n r\xe1pida lz4. Incluso en NVMe, la compresi\xf3n no agrega ning\xfan retraso visible al funcionamiento del disco, y permite ahorrar hasta un 30% en el archivo de registro de bloques y hasta un 50% en el archivo de estado. Tambi\xe9n reduce el tr\xe1fico de E / S de almacenamiento, lo que permite aumentar el rendimiento.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Creaci\xf3n f\xe1cil de tantos sistemas de archivos como sea necesario, y cada sistema de archivos tendr\xeda su propio punto de montaje, tama\xf1o de registro, pol\xedtica de almacenamiento en cach\xe9 y configuraciones de compresi\xf3n. Esto permite ajustar el almacenamiento seg\xfan las necesidades de aplicaci\xf3n."))),Object(t.b)("p",null,"LVM puede o no usarse, y depende del administrador del sistema definir la pol\xedtica est\xe1ndar. Adem\xe1s, algunos proveedores de alojamiento, como IONOS, est\xe1n pre-configurando los servidores con LVM, por lo que es m\xe1s f\xe1cil usarlo que eliminarlo."),Object(t.b)("h3",{id:"contenedores-y-virtualizaci\xf3n"},"Contenedores y Virtualizaci\xf3n"),Object(t.b)("p",null,"Por lo general, un servidor ejecutar\xeda m\xfaltiples procesos de nodo para diferentes prop\xf3sitos y posiblemente hasta para diferentes redes. Cada administrador del sistema debe seleccionar una estrategia para colocar procesos de nodo en un servidor. A continuaci\xf3n incluimos un resumen de las principales estrategias utilizadas."),Object(t.b)("h4",{id:"sin-contenedores"},"Sin contenedores"),Object(t.b)("p",null,"Los nodos se ejecutar\xe1n directamente en el espacio principal del host. El beneficio es un mantenimiento m\xe1s f\xe1cil y, en algunos casos, un mejor rendimiento. El inconveniente es que el paquete binario EOSIO instala los archivos binarios en una ubicaci\xf3n com\xfan, y si se ejecutan varios procesos de nodo en el servidor, todos deben actualizarse simult\xe1neamente."),Object(t.b)("h4",{id:"contenedores-lxc"},"Contenedores LXC"),Object(t.b)("p",null,"La mayor\xeda de las distribuciones de Linux ofrecen la funcionalidad de contenedores LXC. Debian supone que usted sabe c\xf3mo configurar una red para los contenedores, mientras que Ubuntu preconfigura un puente interno con direcciones en el rango 10.0.3.0/24 y un servicio DHCP en \xe9l. El direccionamiento es f\xe1cil de cambiar, y tambi\xe9n el servicio DHCP se puede configurar con asignaciones de direcciones est\xe1ticas para sus contenedores. Cuando se crea, un contenedor es un sistema operativo Linux m\xednimo y necesita instalar paquetes adicionales seg\xfan sea necesario (incluso syslog y ping no est\xe1n presentes desde el principio). Los contenedores son f\xe1ciles de mantener y uno de los beneficios es que puede seleccionar una distribuci\xf3n o versi\xf3n de Linux diferente a la que ejecuta el host."),Object(t.b)("h4",{id:"virtualizaci\xf3n-kvm-xen-vmware"},"Virtualizaci\xf3n KVM, Xen, VmWare"),Object(t.b)("p",null,"Hay una cierta sobrecarga en la operaci\xf3n de la CPU, y normalmente la virtualizaci\xf3n completa no se usa en el entorno EOSIO. Sin embargo, podr\xeda ser utilizable, especialmente si ya forma parte de los procesos est\xe1ndar de TI."),Object(t.b)("h4",{id:"contenedores-docker"},"Contenedores Docker"),Object(t.b)("p",null,"Utilizan la misma tecnolog\xeda subyacente que LXC, pero hay una serie de caracter\xedsticas adicionales, como la implementaci\xf3n autom\xe1tica. Por esta raz\xf3n se ha decidido implementar los servicios como contenedores docker."),Object(t.b)("h3",{id:"redes"},"Redes"),Object(t.b)("p",null,"El dise\xf1o y la seguridad de la red deben planificarse cuidadosamente. Considerando "),Object(t.b)("p",null,"En la mayor\xeda de los entornos de proveedores de alojamiento, las m\xe1quinas f\xedsicas se enfrentan directamente a Internet p\xfablico sin ning\xfan firewall frente a ellas. Algunos proveedores ofrecen un firewall frente a un servidor, opcional u obligatorio."),Object(t.b)("p",null,"Un proceso de nodeos generalmente se escucha en 2 o 3 puertos TCP: el punto final p2p, la API HTTP y, opcionalmente, el websocket del complemento de historial de estado."),Object(t.b)("p",null,"Adem\xe1s, nodeos suele establecer conexiones TCP salientes a sus pares p2p como se especifica en su configuraci\xf3n."),Object(t.b)("h4",{id:"balanceadores-de-carga"},"Balanceadores de carga"),Object(t.b)("p",null,"Algunos proveedores de alojamiento ofrecen equilibradores de carga frente a los servidores. Un equilibrador de carga generalmente supervisa la conectividad a los servidores de fondo y deja de enviar solicitudes a un servidor que deja de responder, o se cumple alguna condici\xf3n de supervisi\xf3n personalizada. Normalmente tambi\xe9n le permiten pausar el tr\xe1fico a uno de los servidores y dejarlo fuera de servicio para mantenimiento y actualizaciones. "),Object(t.b)("h2",{id:"testnet-eosio-lac-chain"},"TestNet EOSIO LAC-Chain"),Object(t.b)("p",null,"Versi\xf3n EOSIO : ",Object(t.b)("inlineCode",{parentName:"p"},"v2.0.5")," "),Object(t.b)("p",null,"Chain ID: ",Object(t.b)("inlineCode",{parentName:"p"},"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5")),Object(t.b)("p",null,"Archivo G\xe9nesis : ",Object(t.b)("a",Object(o.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json"}),Object(t.b)("inlineCode",{parentName:"a"},"genesis.json"))),Object(t.b)("h3",{id:"instalaci\xf3n-desde-binarios-pre-compilados"},"Instalaci\xf3n desde binarios pre-compilados"),Object(t.b)("p",null,"Descargue la \xfaltima versi\xf3n de EOSIO para su sistema operativo desde:  ",Object(t.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/releases/tag/v2.0.4"}),"https://github.com/EOSIO/eos/releases/tag/v2.0.4"),"   "),Object(t.b)("p",null,"Por ejemplo, para ubuntu 18.04 necesitas descargar ",Object(t.b)("inlineCode",{parentName:"p"},"eosio_2.0.5-1-ubuntu-18.04_amd64.deb"),"  "),Object(t.b)("p",null,"Puedes usar apt para instalarlo:  "),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb\nsudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb   \n")),Object(t.b)("p",null,"Descargar\xe1 todas las dependencias e instalar\xe1 EOSIO a ",Object(t.b)("inlineCode",{parentName:"p"},"/usr/opt/eosio/v2.0.5"),"  "),Object(t.b)("h3",{id:"desinstalar"},"Desinstalar"),Object(t.b)("p",null,"Para desinstalar los binarios y dependencias instaladas de EOSIO, ejecute:"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/eosio_uninstall.sh\n")),Object(t.b)("h3",{id:"configuraci\xf3n-de-un-nodo-para-el-testnet-eosio"},"Configuraci\xf3n de un nodo para el Testnet EOSIO"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"mkdir ~/LatamLink-testnet\ncd ~/LatamLink-testnet\ngit clone https://github.com/LatamLink/testnet.git ./\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Edite ",Object(t.b)("inlineCode",{parentName:"p"},"config.ini"),"   "),Object(t.b)("ul",{parentName:"li"},Object(t.b)("li",{parentName:"ul"},"Ingrese la direcci\xf3n IP externa de su servidor: ",Object(t.b)("inlineCode",{parentName:"li"},"p2p-server-address = YOUR_DOMAIN_OR_IP:9876")," "))),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},"Abrir puertos TCP  (8888, 9876) en su firewall / enrutador"))),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Especifique un archivo genesis.json la primera vez que ejecute nodeos"),"  "),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"./start.sh --delete-all-blocks --genesis-json genesis.json\n")),Object(t.b)("p",null,"Siga los logs para verificar que su nodo est\xe9 funcionando bien."),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"tail -f stderr.txt\n")),Object(t.b)("p",null,"Compruebe si puede acceder a su nodo mediante el enlace ",Object(t.b)("inlineCode",{parentName:"p"},"http://**YOUR_SERVER**/v1/chain/get_info")," "),Object(t.b)("p",null,"Aqu\xed hay un ",Object(t.b)("a",{href:"https://latamlink.eosio.cr/v1/chain/get_info",target:"_blank"},"Ejemplo de API"),"  "),Object(t.b)("h4",{id:"iniciar-y-detener-nodeos"},"Iniciar y detener nodeos"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("inlineCode",{parentName:"p"},"./start.sh")," Inicia y reinicia el servicio Nodeos.")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("p",{parentName:"li"},Object(t.b)("inlineCode",{parentName:"p"},"./stop.sh")," Realiza el apagado correcto del servicio Nodeos."))),Object(t.b)("h2",{id:"ejemplos-de-configuraciones"},"Ejemplos de Configuraciones"),Object(t.b)("p",null,'Esta no es una lista de configuraciones que pueden usarse "out of the box", mas bien una lista de opciones importantes para cada tipo de nodo.'),Object(t.b)("h3",{id:"validador"},"Validador"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"\nproducer-name = <validator_name>\n\nsignature-provider = EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3\n\npeer-key =\npeer-private-key =\n\neosio::producer_plugin\n\n")),Object(t.b)("h3",{id:"validador-p2p-layer-1"},"Validador p2p layer 1"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(t.b)("h3",{id:"validador-p2p-out"},"Validador p2p out"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key = \np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(t.b)("h3",{id:"validador-p2p-bidir"},"Validador p2p bidir"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(t.b)("h3",{id:"boot-p2p-out"},"boot p2p out"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(t.b)("h3",{id:"boot-p2p-bidir"},"boot p2p bidir"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(t.b)("h3",{id:"writer-p2p"},"writer p2p"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"peer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")),Object(t.b)("h3",{id:"writer-api"},"writer api"),Object(t.b)("p",null,"Hacer referencia a la documentacion de ",Object(t.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.dfuse.io/en"}),"dfuse")),Object(t.b)("h3",{id:"observer-api"},"observer api"),Object(t.b)("p",null,"Hacer referencia a la documentacion de ",Object(t.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.dfuse.io/en"}),"dfuse")),Object(t.b)("h3",{id:"observer-p2p"},"observer p2p"),Object(t.b)("pre",null,Object(t.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"p2p-accept-transactions = false\napi-accept-transactions = false\n\npeer-key =\npeer-private-key =\np2p-listen-endpoint =\np2p-server-address =\np2p-peer-address =\np2p-max-nodes-per-host =\nmax-clients =\nnet-threads =\n\neosio::net_plugin\n")))}l.isMDXComponent=!0}}]);