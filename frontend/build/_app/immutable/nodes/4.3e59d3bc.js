import{S as B,i as D,s as F,E as x,k as b,a as M,l as w,m as $,h as d,c as G,n as v,b as E,C as p,L as j,M as K,F as ee,G as te,H as le,g as C,d as k,q as N,r as O,N as ne,O as z,u as X,I as V,P as ae,Q as se,w as W,R as H,y as S,z as A,A as I,T as J,B as L}from"../chunks/index.6c5341b8.js";import{B as oe}from"../chunks/Button.a7b510d4.js";import{T as re}from"../chunks/Title.f5d19914.js";async function ie(s,e,t){const a={tool_name:e,game_name:t,likes:0,dislikes:0,user_id:s};return(await(await fetch(`https://arventure-backend-dev-aezx.1.sg-1.fl0.io/favourite/${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json()).message}function ue(s){let e,t,a,o,n,c,m;const f=s[5].default,r=x(f,s,s[4],null);return{c(){e=b("div"),t=b("label"),r&&r.c(),a=M(),o=b("input"),this.h()},l(l){e=w(l,"DIV",{});var i=$(e);t=w(i,"LABEL",{});var u=$(t);r&&r.l(u),u.forEach(d),a=G(i),o=w(i,"INPUT",{type:!0,placeholder:!0,class:!0}),i.forEach(d),this.h()},h(){v(o,"type","text"),v(o,"placeholder",s[1]),o.required=!0,v(o,"class","svelte-6cvanz")},m(l,i){E(l,e,i),p(e,t),r&&r.m(t,null),p(e,a),p(e,o),j(o,s[0]),n=!0,c||(m=K(o,"input",s[6]),c=!0)},p(l,[i]){r&&r.p&&(!n||i&16)&&ee(r,f,l,l[4],n?le(f,l[4],i,null):te(l[4]),null),(!n||i&2)&&v(o,"placeholder",l[1]),i&1&&o.value!==l[0]&&j(o,l[0])},i(l){n||(C(r,l),n=!0)},o(l){k(r,l),n=!1},d(l){l&&d(e),r&&r.d(l),c=!1,m()}}}function fe(s,e,t){let{$$slots:a={},$$scope:o}=e,{placeholder:n}=e,{type:c="text"}=e,{value:m=""}=e,{name:f="tool"}=e;function r(){m=this.value,t(0,m)}return s.$$set=l=>{"placeholder"in l&&t(1,n=l.placeholder),"type"in l&&t(2,c=l.type),"value"in l&&t(0,m=l.value),"name"in l&&t(3,f=l.name),"$$scope"in l&&t(4,o=l.$$scope)},[m,n,c,f,o,a,r]}class ce extends B{constructor(e){super(),D(this,e,fe,ue,F,{placeholder:1,type:2,value:0,name:3})}}function Q(s,e,t){const a=s.slice();return a[4]=e[t],a}function U(s){let e,t=s[4]+"",a,o;return{c(){e=b("option"),a=N(t),this.h()},l(n){e=w(n,"OPTION",{});var c=$(e);a=O(c,t),c.forEach(d),this.h()},h(){e.__value=o=s[4],e.value=e.__value},m(n,c){E(n,e,c),p(e,a)},p(n,c){c&4&&t!==(t=n[4]+"")&&X(a,t),c&4&&o!==(o=n[4])&&(e.__value=o,e.value=e.__value)},d(n){n&&d(e)}}}function _e(s){let e,t,a,o,n,c,m,f=s[2],r=[];for(let l=0;l<f.length;l+=1)r[l]=U(Q(s,f,l));return{c(){e=b("div"),t=b("label"),a=N(s[1]),o=M(),n=b("select");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=w(l,"DIV",{});var i=$(e);t=w(i,"LABEL",{for:!0});var u=$(t);a=O(u,s[1]),u.forEach(d),o=G(i),n=w(i,"SELECT",{name:!0,class:!0});var y=$(n);for(let T=0;T<r.length;T+=1)r[T].l(y);y.forEach(d),i.forEach(d),this.h()},h(){v(t,"for","game"),v(n,"name","game"),n.required=!0,v(n,"class","svelte-o4lbwh"),s[0]===void 0&&ne(()=>s[3].call(n))},m(l,i){E(l,e,i),p(e,t),p(t,a),p(e,o),p(e,n);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(n,null);z(n,s[0],!0),c||(m=K(n,"change",s[3]),c=!0)},p(l,[i]){if(i&2&&X(a,l[1]),i&4){f=l[2];let u;for(u=0;u<f.length;u+=1){const y=Q(l,f,u);r[u]?r[u].p(y,i):(r[u]=U(y),r[u].c(),r[u].m(n,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=f.length}i&5&&z(n,l[0])},i:V,o:V,d(l){l&&d(e),ae(r,l),c=!1,m()}}}function me(s,e,t){let{label:a=""}=e,{list:o=["Minecraft","No Man's Sky","Fall Guys","Call Of Duty","TABS","Stick Fight","Terraria","FC 24"]}=e,{value:n}=e;function c(){n=se(this),t(0,n),t(2,o)}return s.$$set=m=>{"label"in m&&t(1,a=m.label),"list"in m&&t(2,o=m.list),"value"in m&&t(0,n=m.value)},[n,a,o,c]}class he extends B{constructor(e){super(),D(this,e,me,_e,F,{label:1,list:2,value:0})}}function de(s){let e;return{c(){e=N("Your Voice, Your Game Empower AR Gaming with ARVote")},l(t){e=O(t,"Your Voice, Your Game Empower AR Gaming with ARVote")},m(t,a){E(t,e,a)},d(t){t&&d(e)}}}function pe(s){let e;return{c(){e=N("Choose Tool")},l(t){e=O(t,"Choose Tool")},m(t,a){E(t,e,a)},d(t){t&&d(e)}}}function ge(s){let e;return{c(){e=N("Create")},l(t){e=O(t,"Create")},m(t,a){E(t,e,a)},d(t){t&&d(e)}}}function ve(s){let e,t,a,o,n,c,m,f,r,l,i,u;t=new re({props:{$$slots:{default:[de]},$$scope:{ctx:s}}});function y(_){s[3](_)}let T={label:"Choose Game",list:["Minecraft","No Man's Sky"]};s[1]!==void 0&&(T.value=s[1]),n=new he({props:T}),W.push(()=>H(n,"value",y));function Z(_){s[4](_)}let q={placeholder:"Diamond Sword",type:"text",required:!0,$$slots:{default:[pe]},$$scope:{ctx:s}};return s[0]!==void 0&&(q.value=s[0]),f=new ce({props:q}),W.push(()=>H(f,"value",Z)),i=new oe({props:{type:"primary",onClick:s[2],$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){e=b("main"),S(t.$$.fragment),a=M(),o=b("form"),S(n.$$.fragment),m=M(),S(f.$$.fragment),l=M(),S(i.$$.fragment),this.h()},l(_){e=w(_,"MAIN",{class:!0});var h=$(e);A(t.$$.fragment,h),a=G(h),o=w(h,"FORM",{class:!0});var g=$(o);A(n.$$.fragment,g),m=G(g),A(f.$$.fragment,g),l=G(g),A(i.$$.fragment,g),g.forEach(d),h.forEach(d),this.h()},h(){v(o,"class","svelte-w2ng2"),v(e,"class","svelte-w2ng2")},m(_,h){E(_,e,h),I(t,e,null),p(e,a),p(e,o),I(n,o,null),p(o,m),I(f,o,null),p(o,l),I(i,o,null),u=!0},p(_,[h]){const g={};h&32&&(g.$$scope={dirty:h,ctx:_}),t.$set(g);const P={};!c&&h&2&&(c=!0,P.value=_[1],J(()=>c=!1)),n.$set(P);const R={};h&32&&(R.$$scope={dirty:h,ctx:_}),!r&&h&1&&(r=!0,R.value=_[0],J(()=>r=!1)),f.$set(R);const Y={};h&32&&(Y.$$scope={dirty:h,ctx:_}),i.$set(Y)},i(_){u||(C(t.$$.fragment,_),C(n.$$.fragment,_),C(f.$$.fragment,_),C(i.$$.fragment,_),u=!0)},o(_){k(t.$$.fragment,_),k(n.$$.fragment,_),k(f.$$.fragment,_),k(i.$$.fragment,_),u=!1},d(_){_&&d(e),L(t),L(n),L(f),L(i)}}}function be(s,e,t){let a="",o="Minecraft";async function n(){await ie(localStorage.getItem("user_id"),a,o),window.location.href="/tools"}function c(f){o=f,t(1,o)}function m(f){a=f,t(0,a)}return[a,o,n,c,m]}class we extends B{constructor(e){super(),D(this,e,be,ve,F,{})}}function $e(s){let e,t;return e=new we({}),{c(){S(e.$$.fragment)},l(a){A(e.$$.fragment,a)},m(a,o){I(e,a,o),t=!0},p:V,i(a){t||(C(e.$$.fragment,a),t=!0)},o(a){k(e.$$.fragment,a),t=!1},d(a){L(e,a)}}}class Ce extends B{constructor(e){super(),D(this,e,null,$e,F,{})}}export{Ce as component};
