/*! For license information please see 2.c0d7fd7e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{117:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(129),c=n(102),i=n(110),l=n(8),s="light",u="dark",d=function(e){return e===u?u:s},f=function(){return l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},m=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).colorMode,r=(n=void 0===n?{}:n).disableSwitch,o=void 0!==r&&r,i=Object(a.useState)(f),l=i[0],h=i[1],v=Object(a.useCallback)((function(){h(s),m(s)}),[]),b=Object(a.useCallback)((function(){h(u),m(u)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(l))}),[l]),Object(a.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(a.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:l===u,setLightTheme:v,setDarkTheme:b}},v=n(148);var b=function(e){var t=h(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},p=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith("docusaurus.tab."))e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},g=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).announcementBar,r=(n=void 0===n?{}:n).id,o=void 0===r?"annoucement-bar":r,i=Object(a.useState)(!0),l=i[0],s=i[1];return Object(a.useEffect)((function(){if(o){var e=localStorage.getItem("docusaurus.announcement.id"),t=o!==e;localStorage.setItem("docusaurus.announcement.id",o),t&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&s(!1)}}),[]),{isAnnouncementBarClosed:l,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),s(!0)}}},k=n(149);var O=function(e){var t=p(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=g(),c=o.isAnnouncementBarClosed,i=o.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:c,closeAnnouncementBar:i}},e.children)},E=n(150),y=n(51),j=n.n(y);var C=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).announcementBar,a=void 0===n?{}:n,o=a.content,i=a.backgroundColor,l=a.textColor,s=Object(E.a)(),u=s.isAnnouncementBarClosed,d=s.closeAnnouncementBar;return!o||u?null:r.a.createElement("div",{className:j.a.announcementBar,style:{backgroundColor:i,color:l},role:"banner"},r.a.createElement("div",{className:j.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:j.a.announcementBarClose,onClick:d,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},w=n(2),_=n(104),S=n(109),N=n(20),T=n(114),L=n(151);function x(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var I=n(152);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function D(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var n=B(Object(a.useState)((function(){return D()?"\u2318":"Ctrl"})),2),o=n[0],c=n[1];return Object(a.useEffect)((function(){D()&&c("\u2318")}),[]),r.a.createElement("button",M({type:"button",className:"DocSearch DocSearch-Button","aria-label":"Search"},e,{ref:t}),r.a.createElement(I.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===o?r.a.createElement(x,null):o),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),V=null;function U(e){var t=e.hit,n=e.children;return r.a.createElement(S.a,{to:t.url},n)}function R(e){var t=e.state,n=e.onClose,a=Object(L.a)().generateSearchPageLink;return r.a.createElement(S.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function F(e){var t=Object(c.a)().siteMetadata,l=Object(i.b)().withBaseUrl,s=Object(T.useHistory)(),u=Object(a.useRef)(null),d=Object(a.useState)(!1),f=d[0],m=d[1],h=Object(a.useState)(null),v=h[0],b=h[1],p=Object(a.useCallback)((function(){return V?Promise.resolve():Promise.all([n.e(44).then(n.bind(null,459)),Promise.all([n.e(0),n.e(45)]).then(n.bind(null,458)),n.e(0).then(n.t.bind(null,99,7))]).then((function(e){var t=e[0].DocSearchModal;V=t}))}),[]),g=Object(a.useCallback)((function(){p().then((function(){m(!0)}))}),[p,m]),k=Object(a.useCallback)((function(){m(!1)}),[m]),O=Object(a.useCallback)((function(e){p().then((function(){m(!0),b(e.key)}))}),[p,m,b]);return function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,c=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||"/"===e.key&&!t)&&(e.preventDefault(),t?a():n()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,c])}({isOpen:f,onOpen:g,onClose:k,onInput:O,searchButtonRef:u}),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),r.a.createElement(A,{onTouchStart:p,onFocus:p,onMouseOver:p,onClick:g,ref:u}),f&&Object(N.createPortal)(r.a.createElement(V,Object(w.a)({onClose:k,initialScrollY:window.scrollY,initialQuery:v,navigator:{navigate:function(e){var t=e.suggestionUrl;s.push(t)}},transformItems:function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:l(""+t.pathname+t.hash)})}))},hitComponent:U,resultsFooterComponent:function(e){return r.a.createElement(R,Object(w.a)({},e,{onClose:k}))},transformSearchClient:function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}},e)),document.body))}var X=function(){var e=Object(c.a)().siteConfig;return r.a.createElement(F,e.themeConfig.algolia)},H=n(205),K=n.n(H),Y=n(52),q=n.n(Y),G=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.dark),style:n},t)},W=function(e){var t=e.icon,n=e.style;return r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.light),style:n},t)},z=function(e){var t=Object(c.a)(),n=t.siteConfig.themeConfig.colorMode.switchConfig,a=n.darkIcon,o=n.darkIconStyle,i=n.lightIcon,l=n.lightIconStyle,s=t.isClient;return r.a.createElement(K.a,Object(w.a)({disabled:!s,icons:{checked:r.a.createElement(G,{icon:a,style:o}),unchecked:r.a.createElement(W,{icon:i,style:l})}},e))},J=n(130);var Q=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,r]},Z=n(153),$=function(e){var t=Object(a.useState)(!0),n=t[0],r=t[1],o=Object(a.useState)(!1),c=o[0],i=o[1],l=Object(a.useState)(0),s=l[0],u=l[1],d=Object(a.useState)(0),f=d[0],m=d[1],h=Object(a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(T.useLocation)(),b=Q(v.hash),p=b[0],g=b[1];return Object(Z.a)((function(t){var n=t.scrollY;if(e&&(0===n&&r(!0),!(n<f))){if(c)return i(!1),r(!1),void u(n);var a=document.documentElement.scrollHeight-f,o=window.innerHeight;s&&n>=s?r(!1):n+o<a&&r(!0),u(n)}}),[s,f]),Object(a.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(a.useEffect)((function(){e&&p&&i(!0)}),[p]),{navbarRef:h,isNavbarVisible:n}},ee=n(154),te=n(155),ne=n(156),ae=n(53),re=n.n(ae),oe=n(6);function ce(e){var t=e.activeBasePath,n=e.activeBaseRegex,a=e.to,o=e.href,c=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,u=e.prependBaseUrlToHref,d=Object(oe.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),f=Object(i.a)(a),m=Object(i.a)(t),h=Object(i.a)(o,{forcePrependBaseUrl:!0});return r.a.createElement(S.a,Object(w.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:u?h:o}:Object.assign({isNavLink:!0,activeClassName:s,to:f},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(m)}}:null),d),c)}function ie(e){var t=e.items,n=e.position,a=e.className,o=Object(oe.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(_.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:Object(_.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n})},r.a.createElement(ce,Object(w.a)({className:c(a)},o,{onClick:o.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){function t(){e.target.parentNode.classList.toggle("dropdown--show")}"Enter"!==e.key||o.to||t(),"Tab"===e.key&&t()}}),o.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var n=e.className,a=Object(oe.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(ce,Object(w.a)({activeClassName:"dropdown__link--active",className:c(n,!0)},a)))})))):r.a.createElement(ce,Object(w.a)({className:c(a)},o))}function le(e){var t=e.items,n=(e.position,e.className),a=Object(oe.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(_.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(ce,Object(w.a)({className:o(n,!0)},a),a.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var n=e.className,c=Object(oe.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(ce,Object(w.a)({activeClassName:"menu__link--active",className:o(n)},c,{onClick:a.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(ce,Object(w.a)({className:o(n)},a)))}var se=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(oe.a)(e,["mobile"]),o=n?le:ie;return r.a.createElement(o,a)},ue=n(131);var de=function(e,t){return"next"===e.name?t:e.name},fe=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};var me={default:se,docsVersion:function(e){var t=e.label,n=e.to,a=e.docsPluginId,o=e.nextVersionLabel,c=Object(oe.a)(e,["label","to","docsPluginId","nextVersionLabel"]),i=Object(ue.useActiveVersion)(a),l=Object(ue.useLatestVersion)(a),s=null!=i?i:l,u=null!=t?t:function(e,t){return"next"===e.name?t:e.name}(s,o),d=null!=n?n:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(s).path;return r.a.createElement(se,Object(w.a)({},c,{label:u,to:d}))},docsVersionDropdown:function(e){var t,n=e.mobile,a=e.docsPluginId,o=e.nextVersionLabel,c=Object(oe.a)(e,["mobile","docsPluginId","nextVersionLabel"]),i=Object(ue.useActiveDocContext)(a),l=Object(ue.useVersions)(a),s=Object(ue.useLatestVersion)(a),u=l.map((function(e){var t=(null==i?void 0:i.alternateDocVersions[e.name])||fe(e);return{isNavLink:!0,label:de(e,o),to:t.path,isActive:function(){return e===(null==i?void 0:i.activeVersion)}}})),d=null!==(t=i.activeVersion)&&void 0!==t?t:s,f=n?"Versions":de(d,o),m=n?void 0:fe(d).path;return r.a.createElement(se,Object(w.a)({},c,{mobile:n,label:f,to:m,items:u}))}};function he(e){var t=e.type,n=Object(oe.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=me[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t}(t);return r.a.createElement(a,n)}var ve=function(){var e,t,n=Object(c.a)(),o=n.siteConfig.themeConfig,i=o.navbar,l=(i=void 0===i?{}:i).title,s=void 0===l?"":l,u=i.items,d=void 0===u?[]:u,f=i.hideOnScroll,m=void 0!==f&&f,h=o.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,p=n.isClient,g=Object(a.useState)(!1),k=g[0],O=g[1],E=Object(a.useState)(!1),y=E[0],j=E[1],C=Object(J.a)(),N=C.isDarkTheme,T=C.setLightTheme,L=C.setDarkTheme,x=$(m),I=x.navbarRef,M=x.isNavbarVisible,B=Object(ne.a)(),P=B.logoLink,D=B.logoLinkProps,A=B.logoImageUrl,V=B.logoAlt;Object(ee.a)(k);var U=Object(a.useCallback)((function(){O(!0)}),[O]),R=Object(a.useCallback)((function(){O(!1)}),[O]),F=Object(a.useCallback)((function(e){return e.target.checked?L():T()}),[T,L]),H=Object(te.a)();Object(a.useEffect)((function(){H===te.b.desktop&&O(!1)}),[H]);var K=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),Y=K.leftItems,q=K.rightItems;return r.a.createElement("nav",{ref:I,className:Object(_.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[re.a.navbarHideable]=m,e[re.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(S.a,Object(w.a)({className:"navbar__brand",to:P},D),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:V}),null!=s&&r.a.createElement("strong",{className:Object(_.a)("navbar__title",(t={},t[re.a.hideLogoText]=y,t))},s)),Y.map((function(e,t){return r.a.createElement(he,Object(w.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map((function(e,t){return r.a.createElement(he,Object(w.a)({},e,{key:t}))})),!b&&r.a.createElement(z,{className:re.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:N,onChange:F}),r.a.createElement(X,{handleSearchBarToggle:j,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:R}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(S.a,Object(w.a)({className:"navbar__brand",onClick:R,to:P},D),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:V}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(z,{"aria-label":"Dark mode toggle in sidebar",checked:N,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(he,Object(w.a)({mobile:!0},e,{onClick:R,key:t}))})))))))},be=n(119);n(54);function pe(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(O,null,t))}t.a=function(e){var t=Object(c.a)().siteConfig,n=void 0===t?{}:t,a=n.favicon,l=n.title,s=n.themeConfig.image,u=n.url,d=e.children,f=e.title,m=e.noFooter,h=e.description,v=e.image,b=e.keywords,p=e.permalink,g=e.version,k=f?f+" | "+l:l,O=v||s,E=Object(i.a)(O,{absolute:!0}),y=Object(i.a)(a);return r.a.createElement(pe,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:E}),O&&r.a.createElement("meta",{property:"twitter:image",content:E}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(C,null),r.a.createElement(ve,null),r.a.createElement("div",{className:"main-wrapper"},d),!m&&r.a.createElement(be.a,null))}},130:function(e,t,n){"use strict";var a=n(0),r=n(148);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},149:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},150:function(e,t,n){"use strict";var a=n(0),r=n(149);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},151:function(e,t,n){"use strict";var a=n(114),r=n(8),o=n(102);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(o.a)().siteConfig,c=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return c+"search?q="+encodeURIComponent(e)}}}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},153:function(e,t,n){"use strict";var a=n(0),r=n(8),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(o()),r=n[0],c=n[1],i=function(){var t=o();c(t),e&&e(t)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},154:function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},155:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),o=n[0],c=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}},156:function(e,t,n){"use strict";var a=n(102),r=n(130),o=n(110),c=n(118);t.a=function(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,n=(t=void 0===t?{}:t).navbar,i=(n=void 0===n?{}:n).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(o.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(o.a)(f),logoAlt:l.alt}}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=f(o),i=f(n(206)),l=f(n(7)),s=f(n(207)),u=f(n(208)),d=n(209);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},206:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}}}]);