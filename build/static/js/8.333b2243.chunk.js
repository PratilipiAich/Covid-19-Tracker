/*! For license information please see 8.333b2243.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[8],{143:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},149:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return s}));var a,r=n(2),o=n.n(r);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var c="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var l=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function s(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},274:function(e,t,n){"use strict";var a=n(1),r=n(10),o=n(27),i=n(8),c=n(0),l=n.n(c),s=n(2),u=n.n(s),f=n(143),p=n.n(f),d=n(149),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,i=e.className,c=e.close,s=e.cssModule,u=e.color,f=e.outline,b=e.size,m=e.tag,v=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(f?"-outline":"")+"-"+u,g=Object(d.b)(p()(i,{close:c},c||"btn",c||y,!!b&&"btn-"+b,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),s);h.href&&"button"===m&&(m="a");var E=c?"Close":null;return l.a.createElement(m,Object(a.a)({type:"button"===m&&h.onClick?"button":void 0},h,{className:g,ref:v,onClick:this.onClick,"aria-label":n||E}))},t}(l.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},t.a=m},275:function(e,t,n){},276:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n(49),o=n(50),i=n(51),c=n(0),l=n.n(c),s=(n(275),n(274)),u=(n(276),function(e){return l.a.createElement("div",{className:"card-container"},l.a.createElement("img",{width:"100%",style:{padding:"0px",borderRadius:"5px"},src:e.article.urlToImage,alt:"Covid-19 news"}),l.a.createElement("div",{className:"content",style:{padding:"10px",height:"100%"}},l.a.createElement("p",{style:{fontFamily:"Arial, Helvetica, sans-serif",align:"center",fontSize:"15px"}},l.a.createElement("e",null,e.article.title)),l.a.createElement("hr",null),l.a.createElement("span",{style:{fontSize:"10px",color:"gray"}},e.article.publishedAt),l.a.createElement("p",{style:{fontSize:"10px",color:"gray"}},e.article.author),l.a.createElement("p",{style:{fontSize:"10px"}},e.article.content),l.a.createElement("div",{className:"btn"},l.a.createElement(s.a,{href:e.article.url,target:"blank",style:{backgroundColor:"#063146",marginLeft:"60px",flexGrow:"1"}},"Read More"))))}),f=function(e){return l.a.createElement("div",{className:"card-list"},e.articles.map((function(e){return l.a.createElement(u,{article:e})})))},p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={articles:[],error:null},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/everything?q=covid&apiKey=".concat("f80c12a5df93415397b30c170713d48e");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({articles:t.articles}),console.log(e.state.news)}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement("h1",{style:{fontFamily:"Times New Roman, Times, serif",color:"#063146",fontSize:40,marginTop:"10px"}},l.a.createElement("e",null,"COVID-19 Headlines"))),l.a.createElement(f,{articles:this.state.articles}))}}]),n}(l.a.Component);t.default=p}}]);
//# sourceMappingURL=8.333b2243.chunk.js.map