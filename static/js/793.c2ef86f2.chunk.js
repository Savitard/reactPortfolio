"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[793,84],{7084:function(e,t,n){n.r(t);n(2791),n(3508);var s=n(184);t.default=function(e){var t=e.title;return(0,s.jsx)("div",{className:"header",children:t})}},5793:function(e,t,n){n.r(t);var s=n(9439),i=n(2791),a=n(4880),r=n(7022),l=n(2677),c=n(7084),o=n(126),d=n(2150),u=n(184),x={images:{margin:10,display:"flex",justifyContent:"center",alignItems:"center"},contentContainer:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",border:"1px solid #ccc",margin:"10px"},introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"justify",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"},linkStyle:{margin:30,fontSize:30}};t.default=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),n=t[0],f=t[1],p=(0,a.useParams)().title;(0,i.useEffect)((function(){fetch(o.Z.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){return e}))}),[]);var m=null===n||void 0===n?void 0:n.projects.find((function(e){return e.title===p}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.default,{title:null===m||void 0===m?void 0:m.title}),n?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsx)(r.Z,{style:x.containerStyle,children:(0,u.jsxs)("div",{style:x.contentContainer,children:[(0,u.jsxs)(l.Z,{style:x.introTextContainer,children:[(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].presentation}}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{style:x.images,children:(0,u.jsx)("img",{src:"images/projects/".concat(m.title,"/1.jpg"),alt:"1",style:{maxWidth:"50%",height:"auto"}})}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].objectifs}}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].etapes}}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{style:x.images,children:[(0,u.jsx)("img",{src:"images/projects/".concat(m.title,"/2.jpg"),alt:"2",style:{maxWidth:"50%",height:"auto"}}),(0,u.jsx)("img",{src:"images/projects/".concat(m.title,"/3.jpg"),alt:"3",style:{maxWidth:"50%",height:"auto"}})]}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].acteurs}}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].resultats}}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{style:x.images,children:(0,u.jsx)("img",{src:"images/projects/".concat(m.title,"/4.jpg"),alt:"4",style:{maxWidth:"50%",height:"auto"}})}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].lendemain}}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:m.details[0].critique}})]}),(0,u.jsx)("h2",{style:{margin:"50px 0"},children:"Comp\xe9tences associ\xe9es"}),(0,u.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:m.tags.map((function(e){return(0,u.jsx)("div",{style:{backgroundColor:"#00d084",color:"white",borderRadius:"8px",padding:"8px 16px",margin:"0",display:"inline-block",textDecoration:"none",marginRight:"20px"},children:(0,u.jsx)("a",{href:"./#/skilldetails/".concat(e),style:x.linkStyle,children:e})},e)}))})]})})}):(0,u.jsx)(d.default,{})]})}},2677:function(e,t,n){var s=n(9439),i=n(1413),a=n(5987),r=n(1694),l=n.n(r),c=n(2791),o=n(162),d=n(184),u=["as","bsPrefix","className"],x=["className"];var f=c.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,s=e.className,r=(0,a.Z)(e,u);n=(0,o.vE)(n,"col");var c=(0,o.pi)(),d=(0,o.zG)(),x=[],f=[];return c.forEach((function(e){var t,s,i,a=r[e];delete r[e],"object"===typeof a&&null!=a?(t=a.span,s=a.offset,i=a.order):t=a;var l=e!==d?"-".concat(e):"";t&&x.push(!0===t?"".concat(n).concat(l):"".concat(n).concat(l,"-").concat(t)),null!=i&&f.push("order".concat(l,"-").concat(i)),null!=s&&f.push("offset".concat(l,"-").concat(s))})),[(0,i.Z)((0,i.Z)({},r),{},{className:l().apply(void 0,[s].concat(x,f))}),{as:t,bsPrefix:n,spans:x}]}(e),r=(0,s.Z)(n,2),c=r[0],f=c.className,p=(0,a.Z)(c,x),m=r[1],h=m.as,j=void 0===h?"div":h,g=m.bsPrefix,v=m.spans;return(0,d.jsx)(j,(0,i.Z)((0,i.Z)({},p),{},{ref:t,className:l()(f,!v.length&&g)}))}));f.displayName="Col",t.Z=f}}]);
//# sourceMappingURL=793.c2ef86f2.chunk.js.map