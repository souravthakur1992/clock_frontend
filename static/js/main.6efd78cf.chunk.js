(this.webpackJsonpclock_frontend=this.webpackJsonpclock_frontend||[]).push([[0],{75:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),o=(n(75),n(61)),l=n(11),s=n(27),d=n(48),u=n(17),h=n(116),j=n(118),b=n(44),g=n.n(b),m=n(3),x=Object(h.a)((function(e){var t;return{root:(t={fontSize:function(e){return"bodyBold"===e.variant?"1.5rem":void 0}},Object(u.a)(t,e.breakpoints.down("xs"),{fontSize:function(e){return"bodyBold"===e.variant?"1.125rem":void 0}}),Object(u.a)(t,"fontFamily",(function(e){return"Roboto "+(e.font||"Regular")})),t)}}));function p(e){var t=x(e),n=e.variant,a=e.className,r=Object(d.a)(e,["variant","className"]),i="bodyBold"===n?void 0:n;return Object(m.jsx)(j.a,Object(s.a)(Object(s.a)({color:"textPrimary",className:g()(t.root,a),variant:i},r),{},{children:e.children}))}var O=n(91),f=Object(h.a)((function(e){return{root:{borderRadius:function(e){return e.square?5:void 0},borderColor:function(){return e.palette.primary.light},border:function(e){return e.borderless?"none":void 0},boxSizing:"border-box",overflow:"hidden",padding:"20px 16px",textAlign:function(e){return e.textAlign||"center"},transition:e.transitions.create(["background-color","color"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest}),color:function(t){return e.palette.text[t.color||"primary"]}},primary:{},secondary:{backgroundColor:e.palette.background.default}}}));function v(e){var t=e.color,n=e.className,a=(e.textAlign,Object(d.a)(e,["color","className","textAlign"])),r=f(e),i={classes:a.classes,component:a.component,elevation:a.elevation,square:a.square,variant:a.variant,onClick:a.onClick};return Object(m.jsx)(O.a,Object(s.a)(Object(s.a)({className:g()(r.root,r[t||"primary"],n),variant:"outlined"},i),{},{children:e.children}))}var k=Object(h.a)((function(){return{clockhand:{transformOrigin:"bottom center",position:"absolute",right:0,left:0,bottom:"50%",margin:"0 auto",zIndex:3}}})),w=function(e){var t=k();return Object(m.jsx)("div",{className:t.clockhand,style:{height:e.height,width:e.width,transform:"rotate("+e.angle+"deg)",backgroundColor:e.color}})},y=n.p+"static/media/analogClock.e91157a1.svg",A=Object(h.a)((function(e){return{clock:{borderRadius:"50%",position:"relative",background:"black url(".concat(y,")"),backgroundSize:"100% 100%",height:"20em",width:"20em",margin:"2em auto"}}})),C=function(e){var t=A();return Object(m.jsx)("div",{className:t.clock,children:e.children})},S=Object(h.a)((function(e){return{center:{position:"absolute",right:0,left:0,bottom:0,top:0,borderRadius:"50%",backgroundColor:"white",height:"3%",width:"3%",margin:"auto"},pie:{width:"5em",height:"5em",display:"block",borderRadius:"50%",backgroundColor:"green",marginLeft:"-34.5px",marginTop:"-33.5px",float:"left",color:"white",backgroundImage:function(e){return Math.abs(Math.ceil(e.hourAngle-90)-Math.ceil(e.minuteAngle-90))<180?"linear-gradient(".concat(Math.min(Math.ceil(e.hourAngle-90),Math.ceil(e.minuteAngle-90)),"deg, transparent 50%, white 50%),linear-gradient(").concat(Math.max(Math.ceil(e.hourAngle-90),Math.ceil(e.minuteAngle-90)),"deg, white 50%, transparent 50%)"):"linear-gradient(".concat(Math.max(Math.ceil(e.hourAngle-90),Math.ceil(e.minuteAngle-90)),"deg, transparent 50%, white 50%),linear-gradient(").concat(Math.min(Math.ceil(e.hourAngle-90),Math.ceil(e.minuteAngle-90)),"deg, white 50%, transparent 50%)")}}}})),F=function(e){var t=Object(s.a)({},e),n=t.angle,a=t.hourAngle,r=t.minuteAngle,i=t.secondAngle,c=S(e);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(C,{children:[Object(m.jsx)(w,{height:"27%",width:"1%",angle:a,color:"#F57C00"}),Object(m.jsx)(w,{height:"36%",width:".9%",angle:r,color:"#FFD600"}),Object(m.jsx)(w,{height:"38%",width:".5%",angle:i,color:"#AEEA00"}),Object(m.jsx)("div",{className:c.center,children:Object(m.jsx)("div",{className:c.pie,children:Object(m.jsx)(p,{variant:"h6",font:"Bold",paragraph:!0,children:n})})})]})})},M=n(123),N=n(120),B=n(60),I=n.n(B),T=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N.a,{}),Object(m.jsx)(M.a,{display:"flex",justifyContent:"center",style:{marginTop:30},children:Object(m.jsxs)(p,{paragraph:!0,align:"center",children:["Made with ",Object(m.jsx)(I.a,{style:{marginBottom:"-6px"},color:"error"})," By Sourav Thakur \xa9 ",(new Date).getFullYear()," "]})})]})},L=n(40),R=n(122),D=n(125),z=Object(h.a)((function(e){return{root:Object(u.a)({padding:"".concat("5px"),backgroundColor:"#002658","&::before":{content:'""',zIndex:-1,width:"100%",left:0}},e.breakpoints.down("sm"),{padding:24}),root2:Object(u.a)({maxWidth:350,margin:16},e.breakpoints.down("sm"),{padding:8}),paper:{minWidth:230,width:450,display:"flex",justifyContent:"space-around",flexDirection:"column",textAlign:"center",backgroundColor:"#FFFFFF",border:"unset",borderRadius:"0 0 5px 5px"},rightHeading:{marginTop:32},list:Object(u.a)({maxWidth:"80%",margin:"auto"},e.breakpoints.down("sm"),{paddingLeft:0,maxWidth:"100%"}),time:{marginTop:"96px"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"25ch"}}}));var E=function(){var e=Object(a.useState)((new Date).toLocaleTimeString()),t=Object(L.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(0),c=Object(L.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)(0),d=Object(L.a)(s,2),u=d[0],h=d[1],j=Object(a.useState)(0),b=Object(L.a)(j,2),g=b[0],x=b[1],O=z({minuteAngle:u,hourAngle:g});Object(a.useEffect)((function(){f()}),[n]),Object(a.useEffect)((function(){var e=setInterval((function(){r((function(e){var t=(new Date).toISOString().slice(0,10),n=new Date(t+" "+e);return n.setSeconds(n.getSeconds()+1),n.toLocaleTimeString()}))}),1e3);return clearInterval(e)}),[]);var f=function(){var e=parseInt(n.split(":")[2])||0,t=parseInt(n.split(":")[1])+e/60,a=parseInt(n.split(":")[0])+t/60;l(6*e%360),h(6*t%360),x(30*a%360)},k=function(){var e=Math.abs(g-u);return Math.round(Math.min(360-e,e))+"\xb0"};return Object(m.jsx)("div",{className:O.root,children:Object(m.jsxs)(M.a,{display:"flex",justifyContent:"space-around",children:[Object(m.jsx)(v,{className:O.paper,children:Object(m.jsxs)("div",{className:O.root2,children:[Object(m.jsx)(p,{variant:"h6",font:"Bold",align:"center",children:"Calculate Angle Between Clock Hands"}),Object(m.jsx)(N.a,{}),Object(m.jsx)("br",{}),Object(m.jsxs)(p,{paragraph:!0,align:"left",children:["Kindly ",Object(m.jsx)("b",{children:"Enter/Select"})," Time and See the result for Angle between Clock Hands"]}),Object(m.jsxs)(p,{variant:"h6",font:"Bold",align:"center",children:["Current Time Value ",Object(m.jsx)("b",{children:n})]}),Object(m.jsxs)("div",{className:O.time,children:[Object(m.jsx)(p,{variant:"h6",font:"Bold",align:"center",children:"Select Time"}),Object(m.jsx)(R.a,{type:"time",variant:"outlined",className:O.textField,value:n,onChange:function(e){return r(e.target.value)},InputLabelProps:{shrink:!0}})]})]})}),Object(m.jsxs)(v,{className:O.paper,children:[Object(m.jsx)(p,{variant:"h6",font:"Bold",className:O.rightHeading,children:"Calculated Angle"}),Object(m.jsx)(p,{variant:"h5",font:"Bold",style:{color:"green"},children:k()}),Object(m.jsx)(D.a,{className:O.list,children:Object(m.jsx)(F,{angle:k(),secondAngle:o,minuteAngle:u,hourAngle:g})})]})]})})},H=Object(h.a)((function(e){return{root:{width:"100%"}}}));function P(e){var t=H();return Object(m.jsx)("div",{className:t.root,children:Object(m.jsx)(E,{})})}var W=n(121),q=n(124),J=n.p+"static/media/clock.984299de.svg",_=Object(h.a)((function(e){var t;return{placeholder:(t={},Object(u.a)(t,e.breakpoints.up("xs"),{height:64}),Object(u.a)(t,e.breakpoints.down("xs"),{height:56}),t),typoStyle:{textAlign:"center"}}}));function K(){var e=_();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(W.a,{color:"transparent",children:Object(m.jsx)(q.a,{children:Object(m.jsx)("img",{src:J,width:50,height:40})})}),Object(m.jsx)("div",{className:e.placeholder})]})}n(85);var V=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)(a.Fragment,{children:[Object(m.jsxs)("div",{style:{flex:"1 0 auto",width:"100%",margin:"auto"},children:[Object(m.jsx)(K,{}),Object(m.jsx)("div",{style:{padding:"0 16px 0 16px"},children:Object(m.jsx)(l.c,{children:Object(m.jsx)(l.a,{exact:!0,path:"/",component:P})})})]}),Object(m.jsx)(T,{})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),Y()}},[[88,1,2]]]);
//# sourceMappingURL=main.6efd78cf.chunk.js.map