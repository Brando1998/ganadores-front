import{b as T}from"./chunk-Q4VIZKH2.js";import{b as l}from"./chunk-I6FEGRTG.js";import{$ as p,A as r,Ea as M,Ga as d,Ja as b,Ka as w,La as k,Ma as x,Na as I,P as h,Pa as A,Ta as S,Ua as O,W as v,Y as C,aa as c,ba as m,kb as F,oa as y,sa as i,u as g,y as s}from"./chunk-WQ6EODAJ.js";var D=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-page-404"]],standalone:!0,features:[i],decls:2,vars:0,template:function(o,f){o&1&&(p(0,"p"),y(1,"page-404 works!"),c())}});let e=t;return e})();var P=(e,t)=>{let a=s(l);return a.hasAccess().active?!0:(a.logout(),!1)};var j=[{path:"auth",loadChildren:()=>import("./chunk-EAECPFZQ.js").then(e=>e.AuthModule)},{path:"admin",canActivate:[P],loadChildren:()=>import("./chunk-JRIRFY3B.js").then(e=>e.AdminModule)},{path:"",loadChildren:()=>import("./chunk-6Q37GTJT.js").then(e=>e.WebModule)},{path:"**",component:D,pathMatch:"full"}];function E(e,t){if(e.url.includes("admin")){var a=s(l);let n=a.getAccessToken(),o=e.clone({setHeaders:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",accept:"*/*",Authorization:`Bearer ${JSON.parse(n)}`}});return console.log("REQUEST TOKENIZED"),t(o)}else return t(e)}var _={providers:[S(j,O()),I(),b(k(),w([E]))]};var z=(()=>{let t=class t{constructor(){this.loading=!1}setLoading(n){this.loading=n}getLoading(){return this.loading}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function N(e,t){e&1&&(p(0,"div",1),m(1,"div",2),c())}var R=(()=>{let t=class t{constructor(n){this._loader=n}ngOnInit(){}};t.\u0275fac=function(o){return new(o||t)(h(z))},t.\u0275cmp=r({type:t,selectors:[["app-spinner"]],standalone:!0,features:[i],decls:1,vars:1,consts:[["class","cssload-container",4,"ngIf"],[1,"cssload-container"],[1,"cssload-speeding-wheel"]],template:function(o,f){o&1&&v(0,N,2,0,"div",0),o&2&&C("ngIf",f._loader.getLoading())},dependencies:[d,M],styles:['.cssload-container[_ngcontent-%COMP%]{position:fixed;width:100%;inset:0;background-color:#ffffffb3;z-index:9999}.cssload-speeding-wheel[_ngcontent-%COMP%]{content:"";display:block;position:absolute;left:48%;top:40%;width:63px;height:63px;margin:0 auto;border:4px solid rgb(0,0,0);border-radius:50%;border-left-color:transparent;border-right-color:transparent;animation:_ngcontent-%COMP%_cssload-spin .5s infinite linear;-o-animation:cssload-spin .5s infinite linear;-ms-animation:cssload-spin .5s infinite linear;-webkit-animation:_ngcontent-%COMP%_cssload-spin .5s infinite linear;-moz-animation:cssload-spin .5s infinite linear}@keyframes _ngcontent-%COMP%_cssload-spin{to{transform:rotate(360deg)}}@-o-keyframes cssload-spin{to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes cssload-spin{to{-ms-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes _ngcontent-%COMP%_cssload-spin{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes cssload-spin{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}']});let e=t;return e})();var H=(()=>{let t=class t{constructor(){this.title="ganadores"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=r({type:t,selectors:[["app-root"]],standalone:!0,features:[i],decls:2,vars:0,template:function(o,f){o&1&&m(0,"app-spinner")(1,"router-outlet")},dependencies:[d,A,R,T,F]});let e=t;return e})();x(H,_).catch(e=>console.error(e));
