(this.webpackJsonpequations=this.webpackJsonpequations||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),a=n(4),c=n.n(a),s=n(2),r=n(1),l=function(t){t.stopAnimation;var e=t.animating,n=t.previousConstant,i=t.constant,a=t.result;console.log(e);var c=Object(o.useRef)(),l=Object(o.useState)(e),u=Object(s.a)(l,2),g=u[0];u[1];console.log(g);Object(o.useEffect)((function(){console.log(g);var t=c.current,e=t.getContext("2d"),o=function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}(e),s=getComputedStyle(t).getPropertyValue("width").slice(0,-2),r=getComputedStyle(t).getPropertyValue("height").slice(0,-2);t.width=s*o,t.height=r*o,t.style.width="".concat(s,"px"),t.style.height="".concat(r,"px");var l,u=0,b=0,j=0,f=0,m=function(t,e,n){t.font="1em Arial",t.fillText(e,0,n)},v=function(t,e,n,o,i){var a=400-200*o/e,c=400-200*o/n,s=i/30||.45;f=n<e?f-s:f+s;var r=Math.abs(f),l=Math.abs(c-a);return t.strokeStyle="hsl(0,0%,80%)",t.lineWidth=1,o==e&&(t.strokeStyle="hsl(0,0%,10%)",t.lineWidth=Math.max(3-j/25,1.5)),o==n&&(t.lineWidth=Math.min(1+j/25,3),t.strokeStyle="hsl(0,0%,10%)"),t.beginPath(),r>l?(f=l,console.log(f),t.moveTo(0,f+a),t.lineTo(800,f+a),t.stroke(),m(t,o,f),!1):(t.moveTo(0,f+a),t.lineTo(800,f+a),t.stroke(),m(t,o,f),!0)},p=function(t,e,o){t.clearRect(0,0,t.canvas.width,t.canvas.height),function(t){t.beginPath(),t.moveTo(10,0),t.lineTo(10,800),t.stroke()}(t),function(t){t.beginPath(),t.moveTo(0,400),t.lineTo(800,400),t.stroke()}(t);var c=!0;Math.max(n,i);return v(t,n,i,1,e)||(c=!1),m(t,i),function(t,e){t.beginPath(),t.arc(100,e,20,20,0,2*Math.PI),t.fill()}(t,h(a)),c};return function t(n){j+=1;var o=n-u;if(u=n,o&&(b+=o),!p(e,o))return console.log("aFPS:  ",j/(b/1e3)),void console.log("time total: ",b/1e3,"seconds");l=requestAnimationFrame(t)}(),function(){console.log(l),cancelAnimationFrame(l)}}));var h=function(t){return 400-200*t};return Object(r.jsx)("canvas",{ref:c,style:{width:"800px",height:"800px"}})},u=function(t){var e=t.onValueChange,n=Object(o.useState)(1),i=Object(s.a)(n,2);i[0],i[1];return Object(r.jsx)("input",{type:"number",step:".125",onChange:function(t){e(t.target.value)},style:{fontSize:40}})};var g=function(){var t=Object(o.useState)(!1),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(o.useState)(1),c=Object(s.a)(a,2),g=c[0],h=(c[1],Object(o.useState)(1)),b=Object(s.a)(h,2),j=b[0],f=b[1],m=Object(o.useState)(1),v=Object(s.a)(m,2),p=v[0],d=v[1];return console.log(n),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{stopAnimation:function(){i(!1),console.log("stopping animation")},animating:n,previousConstant:p,constant:j,result:g}),Object(r.jsx)(u,{onValueChange:function(t){t&&(i(!0),console.log("animating"),d(j),f(t))}})]})};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.55716d2f.chunk.js.map