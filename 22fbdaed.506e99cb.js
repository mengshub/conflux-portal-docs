(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(179)),o={id:"cfx_sign",title:"CFX Sign",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/CFX_Sign.md"},c={id:"portal/API_Reference/Signing_Data/cfx_sign",title:"CFX Sign",description:"The CFX Sign method is the oldest signing method in Conflux, and can sign any",source:"@site/docs/en/portal/API_Reference/Signing_Data/CFX_Sign.md",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/cfx_sign",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/API_Reference/Signing_Data/CFX_Sign.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584584769,sidebar:"docs",previous:{title:"Signing Data with Conflux Portal",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/signing_data_with_portal"},next:{title:"Sign Typed Data v1",permalink:"/conflux-portal-docs/docs/portal/API_Reference/Signing_Data/sign_typed_data_v1"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The CFX Sign method is the oldest signing method in Conflux, and can sign any\nbinary data, making it a dangerous method that can potentially sign transactions\nor even ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Chosen-ciphertext_attack"}),"leak its private\nkey"),". "),Object(i.b)("p",null,"You can read ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/MetaMask/eth-simple-keyring/blob/master/index.js#L61-L68"}),"our implementation\nhere"),". "),Object(i.b)("p",null,"Since this method is insecure, it should only be used for internal experiments\nor your own contracts that you interact with directly. "),Object(i.b)("p",null,"When prompted for this type of signature, users are shown an aggressive warning\nthat inclines them to re-evaluate their trust of the site suggesting the\nsignature. "))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,g=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?a.a.createElement(g,c({ref:t},l,{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);