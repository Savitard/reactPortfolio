"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[793],{5793:function(t,e,n){n.r(e);var i=n(9439),r=n(2791),o=n(4880),c=n(7022),a=n(126),l=n(2150),u=n(184),s={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};e.default=function(){var t=(0,r.useState)(null),e=(0,i.Z)(t,2),n=e[0],f=e[1],p=(0,o.useParams)().title;(0,r.useEffect)((function(){fetch(a.Z.projects,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return f(t)})).catch((function(t){return t}))}),[]);var h=null===n||void 0===n?void 0:n.projects.find((function(t){return t.title===p}));return(0,u.jsx)(u.Fragment,{children:n?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsx)(c.Z,{style:s.containerStyle,children:(0,u.jsx)("p",{children:h.bodyText})})}):(0,u.jsx)(l.default,{})})}}}]);
//# sourceMappingURL=793.0e0fb2a4.chunk.js.map