(this["webpackJsonpnba-player-heights"]=this["webpackJsonpnba-player-heights"]||[]).push([[0],{116:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),c=r(31),s=r.n(c),a=r(48),o=r(155),l=r(14),j=r(165),b=r(167),h=r(160),d=r(157),u=r(1),x=function(e){var t=e.error;return Object(u.jsx)(h.a,{item:!0,sx:{marginBottom:10,marginTop:10},children:Object(u.jsxs)(d.a,{variant:"filled",severity:"error",children:["There is an error with the request. Please return later.",Object(u.jsx)("br",{}),t.message]})})},m=r(163),g=r(164),O=function(){var e=document.querySelector('meta[name="app-version"]').content,t="%APP_VERSION%"!==e?"v".concat(e):"v#",r=document.querySelector('meta[name="build-version"]').content,n="%BUILD_VERSION%"!==r?r.substring(0,4):"2021";return Object(u.jsx)(h.a,{item:!0,sx:{marginTop:5},children:Object(u.jsx)("footer",{children:Object(u.jsxs)(m.a,{variant:"body1",align:"center",children:["Just a simple React exercise by \xa0",Object(u.jsx)(g.a,{href:"https://twitter.com/gabrielizalo",children:"Gabriel Porras"})," - ",n,t&&Object(u.jsxs)("span",{children:[" ","-"," ",Object(u.jsx)(g.a,{href:"https://github.com/gabrielizalo/nba-player-heights/releases",children:t})]}),Object(u.jsx)("br",{}),Object(u.jsx)(g.a,{href:"https://github.com/gabrielizalo/nba-player-heights",children:Object(u.jsx)("img",{alt:"NBA Players Heights GitHub",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACCElEQVRYhe3Wz4tNYRwG8M+dYWyQjGmmZEMaQyL5sWA1SLGxkpqF+ANQSvIH+BFhM1HWFjaiqJm5IyykLGVhlogNKzaKe8fivLc593XumXPuPTvz1LfOfd/n+zxP73ve9x7+d9RKcEdxHIexHhvC+Gd8QR2PMVdlQNiD55gvWK9xoArj5biLZgnzVjUxGTS6wlq87MI4rhdBqxQGUuaPMIJjBQPN4iiG8SQVotRK3EsJnkqN13AZ1zCBQ6EmcAUXIp3TKZ3Joub7tO/5yTLJI5xI6TSxO4vUF/2+rv1o7u8hwM7Ucy1o52JM+342MN5DgB34FWmO5jVcisgPejBvIf0+zeNiHjm+bI5UEGA80qznkeci8lAFAdZFmh/yyD8jcte3WAoDkeaPmNDX4ZlqVmA4x++fge/R3MEKAsQa3/LIM9qX653etmEA7yPN6ZiUXoFX0dx2yTHq78K8P/Rui8ZjjzZslf3XO4stJczHZH8/NMNcLmYDeUqyAs8s3IozOIfBjL5BnA/GjQzz+dC/KPamBG5hBd5EQiMZfUMdTFv1R/JlVQh3Uk2bsRJn8RD3ZRylMJYX4HZRc5I3vx4a32JNwb5O5tO6OE2rLRzLr7iKM5J9LhNgCqvKmrewDDclW5EWLRLgN24EjZ6xS3IaGviYw/sUOE+1f4xUho2hOmHTIvNLWEIm/gKSceFr46My6wAAAABJRU5ErkJggg=="})})]})})})},p=r.p+"static/media/nba-player-heights-header.dc80f8c8.jpg",f=function(){return Object(u.jsx)(h.a,{item:!0,sx:{marginBottom:2},children:Object(u.jsx)("header",{children:Object(u.jsx)("img",{alt:"NBA Player Heights",src:p,width:"100%"})})})},y=r(156),v=r(161),A=function(e){var t=e.setSumHeights,r=Object(n.useState)(!1),i=Object(l.a)(r,2),c=i[0],s=i[1],a=Object(n.useState)(!1),o=Object(l.a)(a,2),b=o[0],d=o[1],x=Object(n.useState)(""),g=Object(l.a)(x,2),O=g[0],p=g[1],f=Object(n.useState)(""),A=Object(l.a)(f,2),B=A[0],N=A[1],P=function(){t(O)},E=function(){var e=function(e){var t=!1,r="";if(!e.length)return[t,r];var n=Number(e);return Number.isNaN(n)?[t=!0,r="Please validate your number!"]:n<1?[t=!0,r="Are you crazy?"]:n<100?[t=!0,r="Hey! NBA players are not exactly petite!"]:n>180?[t=!0,r="Hey! NBA players are human!"]:[t,r]}(O),t=Object(l.a)(e,2),r=t[0],n=t[1];d(r),N(n),s(!O.length||r)};return Object(n.useEffect)((function(){E()}),[O]),Object(u.jsx)(h.a,{item:!0,sx:{paddingBottom:3,width:1},children:Object(u.jsx)(j.a,{sx:{backgroundColor:"#fff",borderBottom:"1px solid #0253a5",borderTop:"1px solid #0253a5",color:"white",p:2},children:Object(u.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",children:[Object(u.jsx)(h.a,{item:!0,xs:4,sx:{textAlign:"right"},children:Object(u.jsx)(m.a,{gutterBottom:!0,style:{color:"#0253a5",textDecoration:"bold"},variant:"Body1",children:"Desired sum of heights (Ex: 139):"})}),Object(u.jsx)(h.a,{item:!0,xs:4,sx:{textAlign:"left"},children:Object(u.jsx)(y.a,{autoFocus:!0,error:b,fullWidth:!0,helperText:B,id:"sumHeights",label:"Players Heights",onChange:function(e){p(e.target.value)},onKeyPress:function(e){"Enter"!==e.key||c||P()},type:"number",value:O})}),Object(u.jsx)(h.a,{item:!0,xs:4,sx:{textAlign:"left"},children:Object(u.jsx)(v.a,{color:"error",disabled:c,onClick:P,variant:"outlined",children:"Search Players"})})]})})})},B=r(166),N=function(){return Object(u.jsx)(h.a,{item:!0,sx:{marginBottom:10,marginTop:10},children:Object(u.jsxs)(d.a,{variant:"outlined",severity:"info",children:["Loading...",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(B.a,{})]})})},P=function(e){var t=e.playersList,r=e.sumHeights,i=Object(n.useState)([]),c=Object(l.a)(i,2),s=c[0],a=c[1],o=Object(n.useState)([]),j=Object(l.a)(o,2),b=j[0],x=j[1];return Object(n.useEffect)((function(){if(r){var e=function(e,t){for(var r=[],n=Number(t),i=0;i<e.length-1;i+=1)for(var c=Number(e[i].h_in),s=i+1;s<e.length;s+=1)c+Number(e[s].h_in)===n&&r.push([e[i],e[s]]);return r}(t,r),n=e.slice(0,50);a(e),x(n)}}),[r]),Object(u.jsxs)(h.a,{container:!0,spacing:2,sx:{backgroundColor:"#fff",borderBottom:"1px solid #cc2b31",borderTop:"1px solid #cc2b31",color:"white",p:2,width:"100%"},children:[Object(u.jsxs)(d.a,{severity:"error",children:[Object(u.jsx)("strong",{children:"Number of Players:"})," ",null===t||void 0===t?void 0:t.length,"\xa0 - \xa0 ",Object(u.jsx)("strong",{children:"Number of Pairs Found:"})," ",null===s||void 0===s?void 0:s.length]}),b.map((function(e){return Object(u.jsx)(h.a,{item:!0,xs:6,children:Object(u.jsxs)(m.a,{gutterBottom:!0,sx:{borderBottom:"1px dotted gray",color:"#cc2b31",paddingBottom:"10px",paddingTop:"10px",textDecoration:"bold"},variant:"body2",children:[e[0].first_name," ",e[0].last_name," ",Object(u.jsx)("small",{children:Object(u.jsxs)("em",{children:["(",e[0].h_in," inches)"]})})," ","- ",e[1].first_name," ",e[1].last_name," ",Object(u.jsx)("small",{children:Object(u.jsxs)("em",{children:["(",e[1].h_in," inches)"]})})]},"".concat(e[0].first_name,"-").concat(e[1].first_name))})})),s.length>b.length&&Object(u.jsxs)(d.a,{severity:"info",sx:{marginBottom:"10px",marginTop:"10px"},children:["Because of the big list we print only"," ",Object(u.jsxs)("strong",{children:[b.length," players"]}),"."]})]})},E=r.p+"static/media/nba-player-heights-bg.4c783590.jpg",I=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],i=t[1],c=Object(a.useQuery)("playersHeights",(function(){return fetch("https://mach-eight.uc.r.appspot.com/").then((function(e){return e.json()}))})),s=c.isLoading,o=c.isError,d=c.data,m=c.error;return Object(u.jsx)(j.a,{minHeight:"100vh",sx:{backgroundAttachment:"fixed",backgroundImage:"url(".concat(E,")"),backgroundPosition:"top center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(u.jsx)(b.a,{maxWidth:"md",children:Object(u.jsxs)(h.a,{alignItems:"center",container:!0,direction:"column",justifyContent:"center",sx:{p:2},children:[Object(u.jsx)(f,{}),o&&!s&&Object(u.jsx)(x,{error:m}),s&&!o&&Object(u.jsx)(N,{}),!s&&!o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A,{setSumHeights:i}),r&&d&&(null===d||void 0===d?void 0:d.values.length)>0&&Object(u.jsx)(P,{playersList:d.values,sumHeights:r})]}),Object(u.jsx)(O,{})]})})})},S=new a.QueryClient,H=function(){return Object(u.jsxs)(a.QueryClientProvider,{client:S,children:[Object(u.jsx)(o.a,{}),Object(u.jsx)(I,{})]})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.e2de9f0c.chunk.js.map