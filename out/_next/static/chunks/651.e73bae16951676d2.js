"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{9651:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var d=c(2648).Z,e=d(c(7294)),f=d(c(2717));let g={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h({res:a,err:b}){let c=a&&a.statusCode?a.statusCode:b?b.statusCode:404;return{statusCode:c}}let i={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}};class j extends e.default.Component{render(){let{statusCode:a,withDarkMode:b=!0}=this.props,c=this.props.title||g[a]||"An unexpected error has occurred";return e.default.createElement("div",{style:i.error},e.default.createElement(f.default,null,e.default.createElement("title",null,a?`${a}: ${c}`:"Application error: a client-side exception has occurred")),e.default.createElement("div",null,e.default.createElement("style",{dangerouslySetInnerHTML:{__html:`
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${b?`@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`:""}`}}),a?e.default.createElement("h1",{className:"next-error-h1",style:i.h1},a):null,e.default.createElement("div",{style:i.desc},e.default.createElement("h2",{style:i.h2},this.props.title||a?c:e.default.createElement(e.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}j.displayName="ErrorPage",j.getInitialProps=h,j.origGetInitialProps=h,b.default=j},8e3:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d=(0,c(2648).Z)(c(7294));let e=d.default.createContext({});b.AmpStateContext=e},9470:function(a,b){Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=function({ampFirst:a=!1,hybrid:b=!1,hasQuery:c=!1}={}){return a||b&&c}},2717:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var d=c(6495).Z,e=c(2648).Z,f=c(1598).Z,g=f(c(7294)),h=e(c(1585)),i=c(8e3),j=c(5850),k=c(9470);function l(a=!1){let b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}c(9475);let n=["name","httpEquiv","charSet","itemProp"];function o(a,b){return a.reduce(m,[]).reverse().concat(l(b.inAmpMode).reverse()).filter(function(){let a=new Set,b=new Set,c=new Set,d={};return e=>{let f=!0,g=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){g=!0;let h=e.key.slice(e.key.indexOf("$")+1);a.has(h)?f=!1:a.add(h)}switch(e.type){case"title":case"base":b.has(e.type)?f=!1:b.add(e.type);break;case"meta":for(let i=0,j=n.length;i<j;i++){let k=n[i];if(e.props.hasOwnProperty(k)){if("charSet"===k)c.has(k)?f=!1:c.add(k);else{let l=e.props[k],m=d[k]||new Set;("name"!==k||!g)&&m.has(l)?f=!1:(m.add(l),d[k]=m)}}}}return f}}()).reverse().map((a,c)=>{let e=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(b=>a.props.href.startsWith(b))){let f=d({},a.props||{});return f["data-href"]=f.href,f.href=void 0,f["data-optimized-fonts"]=!0,g.default.cloneElement(a,f)}return g.default.cloneElement(a,{key:e})})}var p=function({children:a}){let b=g.useContext(i.AmpStateContext),c=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:c,inAmpMode:k.isInAmpMode(b)},a)};b.default=p,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1585:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){let{headManager:b,reduceComponentsToState:c}=a;function h(){if(b&&b.mountedInstances){let e=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(e,a))}}if(e){var i;null==b||null==(i=b.mountedInstances)||i.add(a.children),h()}return f(()=>{var c;return null==b||null==(c=b.mountedInstances)||c.add(a.children),()=>{var c;null==b||null==(c=b.mountedInstances)||c.delete(a.children)}}),f(()=>(b&&(b._pendingUpdate=h),()=>{b&&(b._pendingUpdate=h)})),g(()=>(b&&b._pendingUpdate&&(b._pendingUpdate(),b._pendingUpdate=null),()=>{b&&b._pendingUpdate&&(b._pendingUpdate(),b._pendingUpdate=null)})),null};var d=(0,c(1598).Z)(c(7294));let e=!1,f=e?()=>{}:d.useLayoutEffect,g=e?()=>{}:d.useEffect}}])