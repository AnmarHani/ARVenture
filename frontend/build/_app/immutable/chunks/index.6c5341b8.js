function k(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function L(t){return t()}function O(){return Object.create(null)}function g(t){t.forEach(L)}function P(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(J(e,n))}function ht(t,e,n,r){if(t){const c=T(t,e,n,r);return t[0](c)}}function T(t,e,n,r){return t[1]&&r?H(n.ctx.slice(),t[1](r(e))):n.ctx}function mt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],i=Math.max(e.dirty.length,c.length);for(let o=0;o<i;o+=1)s[o]=e.dirty[o]|c[o];return s}return e.dirty|c}return e.dirty}function pt(t,e,n,r,c,s){if(c){const i=T(e,n,r,s);t.p(i,c)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function bt(t){return t??""}let v=!1;function K(){v=!0}function Q(){v=!1}function R(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(c>0&&e[n[c]].claim_order<=l?c+1:R(1,c,_=>e[n[_]].claim_order,l))-1;r[u]=n[f]+1;const a=f+1;n[a]=u,c=Math.max(a,c)}const s=[],i=[];let o=e.length-1;for(let u=n[c]+1;u!=0;u=r[u-1]){for(s.push(e[u-1]);o>=u;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);s.reverse(),i.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<i.length;u++){for(;l<s.length&&i[u].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(i[u],f)}}function V(t,e){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){v&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function $t(){return j(" ")}function kt(){return j("")}function vt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,r,c=!1){tt(t);const s=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const u=n(o);return u===void 0?t.splice(i,1):t[i]=u,c||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const u=n(o);return u===void 0?t.splice(i,1):t[i]=u,c?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function et(t,e,n,r){return I(t,c=>c.nodeName===e,c=>{const s=[];for(let i=0;i<c.attributes.length;i++){const o=c.attributes[i];n[o.name]||s.push(o.name)}s.forEach(i=>c.removeAttribute(i))},()=>r(e))}function Et(t,e,n){return et(t,e,n,Y)}function nt(t,e){return I(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function Nt(t){return nt(t," ")}function St(t,e){e=""+e,t.data!==e&&(t.data=e)}function jt(t,e){t.value=e??""}function At(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ct(t,e,n){for(let r=0;r<t.options.length;r+=1){const c=t.options[r];if(c.__value===e){c.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Mt(t){const e=t.querySelector(":checked");return e&&e.__value}function qt(t,e){return new t(e)}let b;function d(t){b=t}function A(){if(!b)throw new Error("Function called outside component initialization");return b}function Ot(t){A().$$.on_mount.push(t)}function Bt(t){A().$$.after_update.push(t)}const p=[],B=[];let y=[];const E=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(C))}function Lt(){return D(),z}function S(t){y.push(t)}function Pt(t){E.push(t)}const w=new Set;let m=0;function C(){if(m!==0)return;const t=b;do{try{for(;m<p.length;){const e=p[m];m++,d(e),rt(e.$$)}}catch(e){throw p.length=0,m=0,e}for(d(null),p.length=0,m=0;B.length;)B.pop()();for(let e=0;e<y.length;e+=1){const n=y[e];w.has(n)||(w.add(n),n())}y.length=0}while(p.length);for(;E.length;)E.pop()();N=!1,w.clear(),d(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function ct(t){const e=[],n=[];y.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),y=e}const $=new Set;let h;function it(){h={r:0,c:[],p:h}}function ut(){h.r||g(h.c),h=h.p}function F(t,e){t&&t.i&&($.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Tt(t,e){const n=e.token={};function r(c,s,i,o){if(e.token!==n)return;e.resolved=o;let u=e.ctx;i!==void 0&&(u=u.slice(),u[i]=o);const l=c&&(e.current=c)(u);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==s&&a&&(it(),lt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),ut())}):e.block.d(1),l.c(),F(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[s]=l),f&&C()}if(W(t)){const c=A();if(t.then(s=>{d(c),r(e.then,1,e.value,s),d(null)},s=>{if(d(c),r(e.catch,2,e.error,s),d(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function It(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function zt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Dt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function st(t,e,n,r){const{fragment:c,after_update:s}=t.$$;c&&c.m(e,n),r||S(()=>{const i=t.$$.on_mount.map(L).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...i):g(i),t.$$.on_mount=[]}),s.forEach(S)}function ot(t,e){const n=t.$$;n.fragment!==null&&(ct(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(p.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,r,c,s,i,o=[-1]){const u=b;d(t);const l=t.$$={fragment:null,ctx:[],props:s,update:k,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:O(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};i&&i(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...M)=>{const q=M.length?M[0]:_;return l.ctx&&c(l.ctx[a],l.ctx[a]=q)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](q),f&&at(t,a)),_}):[],l.update(),f=!0,g(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){K();const a=Z(e.target);l.fragment&&l.fragment.l(a),a.forEach(X)}else l.fragment&&l.fragment.c();e.intro&&F(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),Q(),C()}d(u)}class Wt{$destroy(){ot(this,1),this.$destroy=k}$on(e,n){if(!P(n))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as A,ot as B,V as C,dt as D,ht as E,pt as F,yt as G,mt as H,k as I,_t as J,bt as K,jt as L,vt as M,S as N,Ct as O,xt as P,Mt as Q,zt as R,Wt as S,Pt as T,Tt as U,It as V,P as W,$t as a,gt as b,Nt as c,lt as d,kt as e,ut as f,F as g,X as h,Ht as i,Bt as j,Y as k,Et as l,Z as m,wt as n,Ot as o,At as p,j as q,nt as r,ft as s,Lt as t,St as u,it as v,B as w,qt as x,Dt as y,Ft as z};