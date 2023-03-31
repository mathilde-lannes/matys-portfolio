(self.webpackChunkmatys_portfolio=self.webpackChunkmatys_portfolio||[]).push([[156],{3657:function(n,e,t){"use strict";t.r(e);var r,o,i,a=t(1880),u=t(7294),l=t(4854),f=t(1804),s=t.n(f),c=t(2788),p=t(9389),x=t(6955);const d=c.ZP.main(r||(r=(0,a.Z)(["\n  & > header {\n    margin-bottom: 100px;\n    text-align: center;\n\n    a {\n      &:hover,\n      &:focus {\n        cursor: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\")\n            20 0,\n          auto;\n      }\n    }\n  }\n\n  footer {\n    ",";\n    width: 100%;\n    margin-top: 20px;\n  }\n"])),(n=>{let{theme:e}=n;return e.mixins.flexBetween})),m=c.ZP.ul(o||(o=(0,a.Z)(["\n  ",";\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 15px;\n  margin-top: 50px;\n  position: relative;\n\n  @media (max-width: 1080px) {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n"])),(n=>{let{theme:e}=n;return e.mixins.resetList})),g=c.ZP.li(i||(i=(0,a.Z)(["\n  transition: var(--transition);\n  cursor: default;\n\n  @media (prefers-reduced-motion: no-preference) {\n    &:hover,\n    &:focus-within {\n      .post__inner {\n        transform: translateY(-7px);\n      }\n    }\n  }\n\n  a {\n    position: relative;\n    z-index: 1;\n  }\n\n  .post__inner {\n    ",";\n    ",";\n    flex-direction: column;\n    align-items: flex-start;\n    position: relative;\n    height: 100%;\n    padding: 2rem 1.75rem;\n    border-radius: var(--border-radius);\n    transition: var(--transition);\n    background-color: var(--light-navy);\n\n    header,\n    a {\n      width: 100%;\n    }\n  }\n\n  .post__icon {\n    ",";\n    color: var(--green);\n    margin-bottom: 30px;\n    margin-left: -5px;\n\n    svg {\n      width: 40px;\n      height: 40px;\n    }\n  }\n\n  .post__title {\n    margin: 0 0 10px;\n    color: var(--lightest-slate);\n    font-size: var(--fz-xxl);\n\n    a {\n      position: static;\n\n      &:before {\n        content: '';\n        display: block;\n        position: absolute;\n        z-index: 0;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n    }\n  }\n\n  .post__desc {\n    color: var(--light-slate);\n    font-size: 17px;\n  }\n\n  .post__date {\n    color: var(--light-slate);\n    font-family: var(--font-mono);\n    font-size: var(--fz-xxs);\n    text-transform: uppercase;\n  }\n\n  ul.post__tags {\n    display: flex;\n    align-items: flex-end;\n    flex-wrap: wrap;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n\n    li {\n      color: var(--green);\n      font-family: var(--font-mono);\n      font-size: var(--fz-xxs);\n      line-height: 1.75;\n\n      &:not(:last-of-type) {\n        margin-right: 15px;\n      }\n    }\n  }\n"])),(n=>{let{theme:e}=n;return e.mixins.boxShadow}),(n=>{let{theme:e}=n;return e.mixins.flexBetween}),(n=>{let{theme:e}=n;return e.mixins.flexBetween}));e.default=n=>{let{location:e,data:t}=n;const r=t.allMarkdownRemark.edges;return u.createElement(p.Z,{location:e},u.createElement("title",null,"Pensieve"),u.createElement(d,null,u.createElement("header",null,u.createElement("h1",{className:"big-heading"},"Pensieve"),u.createElement("p",{className:"subtitle"},u.createElement("a",{href:"https://www.wizardingworld.com/writing-by-jk-rowling/pensieve"},"a collection of memories"))),u.createElement(m,null,r.length>0&&r.map(((n,e)=>{let{node:t}=n;const{frontmatter:r}=t,{title:o,description:i,slug:a,date:f,tags:c}=r,p=new Date(f).toLocaleDateString();return u.createElement(g,{key:e},u.createElement("div",{className:"post__inner"},u.createElement("header",null,u.createElement("div",{className:"post__icon"},u.createElement(x.BZ,null)),u.createElement("h5",{className:"post__title"},u.createElement(l.Link,{to:a},o)),u.createElement("p",{className:"post__desc"},i)),u.createElement("footer",null,u.createElement("span",{className:"post__date"},p),u.createElement("ul",{className:"post__tags"},c.map(((n,e)=>u.createElement("li",{key:e},u.createElement(l.Link,{to:"/pensieve/tags/"+s()(n)+"/",className:"inline-link"},"#",n))))))))})))))}},2705:function(n,e,t){var r=t(5639).Symbol;n.exports=r},9932:function(n){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o}},2663:function(n){n.exports=function(n,e,t,r){var o=-1,i=null==n?0:n.length;for(r&&i&&(t=n[++o]);++o<i;)t=e(t,n[o],o,n);return t}},9029:function(n){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(e)||[]}},4239:function(n,e,t){var r=t(2705),o=t(9607),i=t(2333),a=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?o(n):i(n)}},8674:function(n){n.exports=function(n){return function(e){return null==n?void 0:n[e]}}},531:function(n,e,t){var r=t(2705),o=t(9932),i=t(1469),a=t(3448),u=r?r.prototype:void 0,l=u?u.toString:void 0;n.exports=function n(e){if("string"==typeof e)return e;if(i(e))return o(e,n)+"";if(a(e))return l?l.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},5393:function(n,e,t){var r=t(2663),o=t(3816),i=t(8748),a=RegExp("['’]","g");n.exports=function(n){return function(e){return r(i(o(e).replace(a,"")),n,"")}}},7937:function(n,e,t){var r=t(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});n.exports=r},1957:function(n,e,t){var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;n.exports=r},9607:function(n,e,t){var r=t(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;n.exports=function(n){var e=i.call(n,u),t=n[u];try{n[u]=void 0;var r=!0}catch(l){}var o=a.call(n);return r&&(e?n[u]=t:delete n[u]),o}},3157:function(n){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return e.test(n)}},2333:function(n){var e=Object.prototype.toString;n.exports=function(n){return e.call(n)}},5639:function(n,e,t){var r=t(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();n.exports=i},2757:function(n){var e="\\u2700-\\u27bf",t="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",u="[\\u2700-\\u27bf]",l="["+t+"]",f="[^\\ud800-\\udfff"+o+a+e+t+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",x="(?:"+l+"|"+f+")",d="(?:"+p+"|"+f+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?",b=h+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,c].join("|")+")"+h+v+")*"),y="(?:"+[u,s,c].join("|")+")"+b,E=RegExp([p+"?"+l+"+"+m+"(?="+[i,p,"$"].join("|")+")",d+"+"+g+"(?="+[i,p+x,"$"].join("|")+")",p+"?"+x+"+"+m,p+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,y].join("|"),"g");n.exports=function(n){return n.match(E)||[]}},3816:function(n,e,t){var r=t(7937),o=t(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=o(n))&&n.replace(i,r).replace(a,"")}},1469:function(n){var e=Array.isArray;n.exports=e},7005:function(n){n.exports=function(n){return null!=n&&"object"==typeof n}},3448:function(n,e,t){var r=t(4239),o=t(7005);n.exports=function(n){return"symbol"==typeof n||o(n)&&"[object Symbol]"==r(n)}},1804:function(n,e,t){var r=t(5393)((function(n,e,t){return n+(t?"-":"")+e.toLowerCase()}));n.exports=r},9833:function(n,e,t){var r=t(531);n.exports=function(n){return null==n?"":r(n)}},8748:function(n,e,t){var r=t(9029),o=t(3157),i=t(9833),a=t(2757);n.exports=function(n,e,t){return n=i(n),void 0===(e=t?void 0:e)?o(n)?a(n):r(n):n.match(e)||[]}}}]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-88bbe470f9dec6622dfe.js.map