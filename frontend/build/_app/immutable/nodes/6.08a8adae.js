import{S as F,i as J,s as U,w as A,R as L,k as b,y,a as O,l as S,m as I,z as k,c as R,h as p,n as x,b as V,C as $,A as E,T as M,g as P,d as q,B as C,q as W,r as G,D as Q}from"../chunks/index.45f387ff.js";import{g as X}from"../chunks/navigation.820f5a8e.js";import{B as Y}from"../chunks/Button.93f2c75d.js";import{I as N}from"../chunks/InputWithIcon.88b40c4a.js";import{S as Z}from"../chunks/SubTitle.941fd900.js";async function ee(a,t){return(await(await fetch("https://arventure-backend-dev-aezx.1.sg-1.fl0.io/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:t})})).json()).user_id}function te(a){let t;return{c(){t=W("Sign in")},l(n){t=G(n,"Sign in")},m(n,e){V(n,t,e)},d(n){n&&p(t)}}}function ne(a){let t;return{c(){t=W("Login")},l(n){t=G(n,"Login")},m(n,e){V(n,t,e)},d(n){n&&p(t)}}}function se(a){let t,n,e,i,d,c,o,_,m,g,u,T,B,f,D;i=new Z({props:{$$slots:{default:[te]},$$scope:{ctx:a}}});function H(s){a[3](s)}let j={placeholder:"Username",required:!0,icon:" bx bxs-user"};a[0]!==void 0&&(j.value=a[0]),o=new N({props:j}),A.push(()=>L(o,"value",H));function K(s){a[4](s)}let z={type:"password",placeholder:"Password",required:!0,icon:"bx bxs-lock-alt"};return a[1]!==void 0&&(z.value=a[1]),u=new N({props:z}),A.push(()=>L(u,"value",K)),f=new Y({props:{type:"full-width-radius",onClick:a[2],$$slots:{default:[ne]},$$scope:{ctx:a}}}),{c(){t=b("main"),n=b("div"),e=b("form"),y(i.$$.fragment),d=O(),c=b("div"),y(o.$$.fragment),m=O(),g=b("div"),y(u.$$.fragment),B=O(),y(f.$$.fragment),this.h()},l(s){t=S(s,"MAIN",{class:!0});var r=I(t);n=S(r,"DIV",{class:!0});var h=I(n);e=S(h,"FORM",{action:!0});var l=I(e);k(i.$$.fragment,l),d=R(l),c=S(l,"DIV",{class:!0});var v=I(c);k(o.$$.fragment,v),v.forEach(p),m=R(l),g=S(l,"DIV",{class:!0});var w=I(g);k(u.$$.fragment,w),w.forEach(p),B=R(l),k(f.$$.fragment,l),l.forEach(p),h.forEach(p),r.forEach(p),this.h()},h(){x(c,"class","input-box svelte-15xchn3"),x(g,"class","input-box svelte-15xchn3"),x(e,"action",""),x(n,"class","content svelte-15xchn3"),x(t,"class","svelte-15xchn3")},m(s,r){V(s,t,r),$(t,n),$(n,e),E(i,e,null),$(e,d),$(e,c),E(o,c,null),$(e,m),$(e,g),E(u,g,null),$(e,B),E(f,e,null),D=!0},p(s,[r]){const h={};r&64&&(h.$$scope={dirty:r,ctx:s}),i.$set(h);const l={};!_&&r&1&&(_=!0,l.value=s[0],M(()=>_=!1)),o.$set(l);const v={};!T&&r&2&&(T=!0,v.value=s[1],M(()=>T=!1)),u.$set(v);const w={};r&64&&(w.$$scope={dirty:r,ctx:s}),f.$set(w)},i(s){D||(P(i.$$.fragment,s),P(o.$$.fragment,s),P(u.$$.fragment,s),P(f.$$.fragment,s),D=!0)},o(s){q(i.$$.fragment,s),q(o.$$.fragment,s),q(u.$$.fragment,s),q(f.$$.fragment,s),D=!1},d(s){s&&p(t),C(i),C(o),C(u),C(f)}}}function ae(a,t,n){let e,i,d="";async function c(){console.log(e,i),d=await ee(e,i),localStorage.setItem("user_id",d),X("/"),alert("Please Refresh Page")}function o(m){e=m,n(0,e)}function _(m){i=m,n(1,i)}return[e,i,c,o,_]}class ie extends F{constructor(t){super(),J(this,t,ae,se,U,{})}}function oe(a){let t,n;return t=new ie({}),{c(){y(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,i){E(t,e,i),n=!0},p:Q,i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){C(t,e)}}}class pe extends F{constructor(t){super(),J(this,t,null,oe,U,{})}}export{pe as component};