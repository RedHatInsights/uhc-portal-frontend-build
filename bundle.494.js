(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[494],{16494:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>w});var r=t(30624),n=t.n(r),o=t(334),l=t(12167),i=t(96533),s=t(22248),c=t(33646),b=t(39666),u=t(90351),d=t(9431),v=t(9047),h=t(38080),f=t(69693),p=t(42282),y=t(79920),A=t(158),m=t(43363),O=t(66789);const{Api:g,Config:E}=d.I;g.setAuthInterceptor(m.w),E.setRouteBasePath("/assisted-installer");class j extends n().Component{constructor(...e){var a,t;super(...e),t={ready:!1},(a="state")in this?Object.defineProperty(this,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[a]=t}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("").then((()=>{insights.chrome.appNavClick((0,h.Z)(window.location.pathname))})),insights.chrome.auth.getUser().then((e=>{A.h.dispatch((0,p._z)(e&&e.identity&&e.identity.user)),v.ZP.fetchConfig().then((()=>{A.h.dispatch((0,y.c)()),this.setState({ready:!0}),!v.ZP.override&&v.ZP.configData.sentryDSN&&(s.S1({dsn:v.ZP.configData.sentryDSN,integrations:[new u.x,new c.jK.GlobalHandlers({onerror:!0,onunhandledrejection:!1})]}),e&&e.identity&&e.identity.user&&b.e((a=>{const{email:t,username:r}=e.identity.user;a.setUser({email:t,username:r})})))}))}))}render(){const{ready:e}=this.state;return e?n().createElement(l.Provider,{store:A.h},n().createElement(i.ZP,{store:A.h}),n().createElement(o.BrowserRouter,{basename:(0,f.ZP)()},n().createElement(O.Z,null))):null}}const w=j},69693:(e,a,t)=>{"use strict";t.d(a,{uF:()=>o,ZP:()=>l});const{insights:r}=t(60306);function n(){return`/beta/${r.appname}`}function o(e){return e.replace(new RegExp(`^${n()}`,"i"),"")}const l=n},38080:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});var r=t(69693);function n(e){const a=(0,r.uF)(e).replace(/^\//,"").split("/");switch(a[0]){case"downloads":case"token":return{id:"downloads"};case"quota":return{id:a[1]||"openshift-quota",parentId:"subscriptions",secondaryNav:!0};case"subscriptions":return{id:a[1],parentId:"subscriptions",secondaryNav:!0};case"overview":case"releases":return{id:a[0]};default:return{id:""}}}},66789:(e,a,t)=>{"use strict";t.d(a,{Z:()=>v});var r=t(30624),n=t.n(r),o=t(45697),l=t.n(o),i=t(12167),s=t(35914),c=t(46568),b=t(83626),u=t(9047);const d=({children:e})=>n().createElement(n().Fragment,null,n().createElement("span",{id:"scrollToTop"}),u.ZP.override&&n().createElement(b.Z,{env:u.ZP.override}),n().createElement(c.Z,null,e||n().createElement(s.Z,null)));d.propTypes={children:l().oneOfType([l().arrayOf(l().node),l().node])};const v=(0,i.connect)((e=>({userProfile:e.userProfile})))(d)},79920:(e,a,t)=>{"use strict";t.d(a,{R:()=>i,c:()=>s});var r=t(41447),n=t(6176);const o=(e,a)=>({type:r.Bc,payload:{feature:e,enabled:a}}),l=(e,a)=>({name:a,action:()=>n.Z.selfFeatureReview(e).then((e=>e.data.enabled))}),i=[l("osd-trial",r.vC),l("assisted-installer-sno",r.Vs),l("assisted-installer-ocs",r.D9),l("assisted-installer-cnv",r.nc),l("assisted-installer-merge-lists",r.xf),l("assisted-installer-network-type-selection",r.ZY),l("assisted-installer-platform-integration",r.S9),{name:r.vu,action:()=>Promise.all([n.Z.selfAccessReview({action:"create",resource_type:"BareMetalCluster"}),n.Z.selfFeatureReview("assisted-installer")]).then((([e,a])=>e.data.allowed&&a.data.enabled))}],s=()=>e=>{i.forEach((({name:a,action:t})=>t().then((t=>e(o(a,t)))).catch((()=>e(o(a,!1))))))}},42282:(e,a,t)=>{"use strict";t.d(a,{hI:()=>g,_z:()=>c,nh:()=>m,c3:()=>O});var r=t(27361),n=t.n(r),o=t(45205),l=t(85935),i=t(97875),s=t(94784);const c=e=>({payload:e,type:o.AQ.LX}),b=(e,a)=>0===a.cost?1/0:Math.floor((e.allowed-e.consumed)/a.cost),u=(e,a,t)=>{const r=e,n=a.allowed-a.consumed;t.forEach((e=>{const{availability_zone_type:a,cloud_provider:t,resource_name:o,product:l,billing_model:i}=e,c="rhinfra"===e.byoc?"rhInfra":e.byoc;l!==s.Po.ROSA&&Object.entries(r).forEach((([e,r])=>{i!==e&&"any"!==i||Object.entries(r).forEach((([e,r])=>{l!==e&&l!==s.Po.ANY||Object.entries(r).forEach((([e,r])=>{t!==e&&"any"!==t||Object.entries(r).forEach((([e,t])=>{c!==e&&"any"!==c||Object.entries(t).forEach((([e,l])=>{`${a}Az`===e&&(l[o]=n,l.available+=n,t.totalAvailable+=n),"any"===a&&"totalAvailable"!==e&&(l[o]=n,l.available+=n,t.totalAvailable+=n/2),t.totalAvailable>0&&(r.isAvailable=!0)}))}))}))}))}))}))},d=(e,a,t)=>{const r=e,n=a.allowed-a.consumed;t.forEach((e=>{const{cloud_provider:a,resource_name:t,product:o,billing_model:l}=e,i="rhinfra"===e.byoc?"rhInfra":e.byoc;o!==s.Po.ROSA&&Object.entries(r).forEach((([r,c])=>{l!==r&&"any"!==l||Object.entries(c).forEach((([r,l])=>{o!==r&&o!==s.Po.ANY||Object.entries(l).forEach((([r,o])=>{a!==r&&"any"!==a||Object.entries(o).forEach((([a,r])=>{i!==a&&"any"!==i||(r[t]={available:n,cost:e.cost})}))}))}))}))}))},v=(e,a,t)=>{const r=e;t.forEach((e=>{const t=b(a,e),{availability_zone_type:n,cloud_provider:o,resource_name:l,product:i,billing_model:c="standard"}=e,u="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,a])=>{c!==e&&"any"!==c||Object.entries(a).forEach((([e,a])=>{i!==e&&i!==s.Po.ANY||Object.entries(a).forEach((([e,a])=>{o!==e&&"any"!==o||Object.entries(a).forEach((([e,a])=>{u!==e&&"any"!==u||Object.entries(a).forEach((([e,a])=>{`${n}AZ`!==e&&"any"!==n||(a[l]=t)}))}))}))}))}))}))},h=(e,a,t)=>{const r=e;t.forEach((e=>{const t=b(a,e),{availability_zone_type:n,cloud_provider:o,resource_name:l,product:i,billing_model:c="standard"}=e,u="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,a])=>{c!==e&&"any"!==c||Object.entries(a).forEach((([e,a])=>{i!==e&&i!==s.Po.ANY||Object.entries(a).forEach((([e,a])=>{o!==e&&"any"!==o||Object.entries(a).forEach((([e,a])=>{u!==e&&"any"!==u||Object.entries(a).forEach((([e,a])=>{`${n}AZ`!==e&&"any"!==n||(a[l]=t)}))}))}))}))}))}))},f=(e,a,t)=>{const r=e;t.forEach((e=>{const t=b(a,e);if(0===a.allowed&&e.cost>0)return;const{availability_zone_type:n,cloud_provider:o,resource_name:l,product:i,billing_model:c}=e,u="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,a])=>{c!==e&&"any"!==c||Object.entries(a).forEach((([e,a])=>{i!==e&&i!==s.Po.ANY||Object.entries(a).forEach((([e,a])=>{o!==e&&"any"!==o||Object.entries(a).forEach((([e,r])=>{u!==e&&"any"!==u||Object.entries(r).forEach((([e,o])=>{`${n}Az`===e&&(o[l]=t,o.available+=t,r.totalAvailable+=t),"any"===n&&"totalAvailable"!==e&&(o[l]=t,o.available+=t,r.totalAvailable+=t/2),r.totalAvailable>0&&(a.isAvailable=!0)}))}))}))}))}))}))},p=()=>({items:[],clustersQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1},gcp:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1}}})),e})()})),e})(),nodesQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{available:0},rhInfra:{available:0}},gcp:{byoc:{available:0},rhInfra:{available:0}}}})),e})()})),e})(),storageQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1},gcp:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1}}})),e})()})),e})(),loadBalancerQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1},gcp:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1}}})),e})()})),e})(),addOnsQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1},gcp:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1}}})),e})()})),e})()}),y=e=>{const a=p(),t=n()(e.data,"items",[]).map(i.ME);return a.items=t,t.forEach((e=>{const t=n()(e,"related_resources",[]);if(!(t.length<1))switch(t[0].resource_type){case"cluster":u(a.clustersQuota,e,t);break;case"compute.node":d(a.nodesQuota,e,t);break;case"pv.storage":v(a.storageQuota,e,t);break;case"network.loadbalancer":h(a.loadBalancerQuota,e,t);break;case"add-on":f(a.addOnsQuota,e,t)}})),a},A=e=>l.BJ.getOrganizationQuota(e).then(y),m=()=>({payload:l.BJ.getCurrentAccount().then((e=>{const a=n()(e.data,"organization.id");if(void 0!==a){const e={quota:void 0,organization:void 0},t=[A(a).then((a=>{e.quota=a})),l.BJ.getOrganization(a).then((a=>{e.organization=a}))];return Promise.all(t).then((()=>e))}return Promise.reject(Error("No organization"))})),type:o.AQ.e_});function O(){return e=>e({type:o.AQ.Zu,payload:l.FR.selfTermsReview()})}const g={userInfoResponse:c,getOrganizationAndQuota:m,processClusterQuota:u,processNodeQuota:d,processStorageQuota:v,processLoadBalancerQuota:h,processAddOnQuota:f,emptyQuota:p,processQuota:y,selfTermsReview:O}},158:(e,a,t)=>{"use strict";t.d(a,{h:()=>p});var r=t(35592),n=t(53894),o=t(57283),l=t.n(o),i=t(10810),s=t(90071),c=t(84885),b=t(11109),u=t(79932);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function v(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const h=(0,s.lX)(),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.compose,p=(0,r.createStore)((0,b.aA)(h),f((0,r.applyMiddleware)((0,i.Z)(h),n.Z,l(),(0,c.uv)(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){v(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},{dispatchDefaultFailure:!1})),u.Z)))}}]);
//# sourceMappingURL=bundle.494.js.map