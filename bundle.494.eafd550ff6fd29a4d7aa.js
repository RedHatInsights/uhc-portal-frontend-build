(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[494],{16494:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var r=a(92950),n=a.n(r),o=a(334),s=a(12167),i=a(96533),c=a(22248),l=a(33646),d=a(39666),u=a(90351),h=a(57689),b=a(9047),f=a(38080),p=a(69693),y=a(42282),v=a(79920),m=a(99205),E=a(43363),g=a(66789);const{Api:O,Config:_}=h.I;O.setAuthInterceptor(E.w),_.setRouteBasePath("/assisted-installer");class A extends n().Component{constructor(...e){var t,a;super(...e),a={ready:!1},(t="state")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("").then((()=>{insights.chrome.appNavClick((0,f.Z)(window.location.pathname))})),insights.chrome.auth.getUser().then((e=>{m.h.dispatch((0,y._z)(e&&e.identity&&e.identity.user)),b.ZP.fetchConfig().then((()=>{m.h.dispatch((0,v.c)()),this.setState({ready:!0}),!b.ZP.override&&b.ZP.configData.sentryDSN&&(c.S1({dsn:b.ZP.configData.sentryDSN,integrations:[new u.x,new l.jK.GlobalHandlers({onerror:!0,onunhandledrejection:!1})]}),e&&e.identity&&e.identity.user&&d.e((t=>{const{email:a,username:r}=e.identity.user;t.setUser({email:a,username:r})})))}))}))}render(){const{ready:e}=this.state;return e?n().createElement(s.Provider,{store:m.h},n().createElement(i.ZP,{store:m.h}),n().createElement(o.BrowserRouter,{basename:(0,p.ZP)()},n().createElement(g.Z,null))):null}}const j=A},69693:(e,t,a)=>{"use strict";a.d(t,{uF:()=>o,ZP:()=>s});const{insights:r}=a(60306);function n(){return`/beta/${r.appname}`}function o(e){return e.replace(new RegExp(`^${n()}`,"i"),"")}const s=n},38080:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(69693);function n(e){const t=(0,r.uF)(e).replace(/^\//,"").split("/");switch(t[0]){case"downloads":case"token":return{id:"downloads"};case"quota":return{id:t[1]||"openshift-quota",parentId:"subscriptions",secondaryNav:!0};case"subscriptions":return{id:t[1],parentId:"subscriptions",secondaryNav:!0};case"overview":case"releases":return{id:t[0]};default:return{id:""}}}},66789:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var r=a(92950),n=a.n(r),o=a(45697),s=a.n(o),i=a(12167),c=a(9725),l=a(46568),d=a(83626),u=a(9047);const h=({children:e})=>n().createElement(n().Fragment,null,n().createElement("span",{id:"scrollToTop"}),u.ZP.override&&n().createElement(d.Z,{env:u.ZP.override}),n().createElement(l.Z,null,e||n().createElement(c.Z,null)));h.propTypes={children:s().oneOfType([s().arrayOf(s().node),s().node])};const b=(0,i.connect)((e=>({userProfile:e.userProfile})))(h)},79920:(e,t,a)=>{"use strict";a.d(t,{R:()=>i,c:()=>c});var r=a(41447),n=a(6176);const o=(e,t)=>({type:r.Bc,payload:{feature:e,enabled:t}}),s=(e,t)=>({name:t,action:()=>n.Z.selfFeatureReview(e).then((e=>e.data.enabled))}),i=[s("osd-trial",r.vC),s("assisted-installer-sno",r.Vs),s("assisted-installer-ocs",r.D9),s("assisted-installer-cnv",r.nc),s("assisted-installer-merge-lists",r.xf),s("assisted-installer-network-type-selection",r.ZY),s("assisted-installer-platform-integration",r.S9),s("osd-creation-wizard",r.Q3),{name:r.vu,action:()=>Promise.all([n.Z.selfAccessReview({action:"create",resource_type:"BareMetalCluster"}),n.Z.selfFeatureReview("assisted-installer")]).then((([e,t])=>e.data.allowed&&t.data.enabled))}],c=()=>e=>{i.forEach((({name:t,action:a})=>a().then((a=>e(o(t,a)))).catch((()=>e(o(t,!1))))))}},42282:(e,t,a)=>{"use strict";a.d(t,{hI:()=>A,_z:()=>u,nh:()=>O,c3:()=>_});var r=a(27361),n=a.n(r),o=a(99205),s=a(45205),i=a(85935),c=a(97875),l=a(94784),d=a(39317);const u=e=>({payload:e,type:s.AQ.LX}),h=(e,t)=>0===t.cost?1/0:Math.floor((e.allowed-e.consumed)/t.cost),b=(e,t,a)=>{const r=e,n=t.allowed-t.consumed;a.forEach((e=>{const{availability_zone_type:t,cloud_provider:a,resource_name:o,product:s,billing_model:i}=e,c="rhinfra"===e.byoc?"rhInfra":e.byoc;s!==l.Po.ROSA&&Object.entries(r).forEach((([e,r])=>{i!==e&&"any"!==i||Object.entries(r).forEach((([e,r])=>{s!==e&&s!==l.Po.ANY||Object.entries(r).forEach((([e,r])=>{a!==e&&"any"!==a||Object.entries(r).forEach((([e,a])=>{c!==e&&"any"!==c||Object.entries(a).forEach((([e,s])=>{`${t}Az`===e&&(s[o]=n,s.available+=n,a.totalAvailable+=n),"any"===t&&"totalAvailable"!==e&&(s[o]=n,s.available+=n,a.totalAvailable+=n/2),a.totalAvailable>0&&(r.isAvailable=!0)}))}))}))}))}))}))},f=(e,t,a)=>{const r=e,n=t.allowed-t.consumed;a.forEach((e=>{const{cloud_provider:t,resource_name:a,product:o,billing_model:s}=e,i="rhinfra"===e.byoc?"rhInfra":e.byoc;o!==l.Po.ROSA&&Object.entries(r).forEach((([r,c])=>{s!==r&&"any"!==s||Object.entries(c).forEach((([r,s])=>{o!==r&&o!==l.Po.ANY||Object.entries(s).forEach((([r,o])=>{t!==r&&"any"!==t||Object.entries(o).forEach((([t,r])=>{i!==t&&"any"!==i||(r[a]={available:n,cost:e.cost})}))}))}))}))}))},p=(e,t,a)=>{const r=e;a.forEach((e=>{const a=h(t,e),{availability_zone_type:n,cloud_provider:o,resource_name:s,product:i,billing_model:c="standard"}=e,d="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,t])=>{c!==e&&"any"!==c||Object.entries(t).forEach((([e,t])=>{i!==e&&i!==l.Po.ANY||Object.entries(t).forEach((([e,t])=>{o!==e&&"any"!==o||Object.entries(t).forEach((([e,t])=>{d!==e&&"any"!==d||Object.entries(t).forEach((([e,t])=>{`${n}AZ`!==e&&"any"!==n||(t[s]=a)}))}))}))}))}))}))},y=(e,t,a)=>{const r=e;a.forEach((e=>{const a=h(t,e),{availability_zone_type:n,cloud_provider:o,resource_name:s,product:i,billing_model:c="standard"}=e,d="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,t])=>{c!==e&&"any"!==c||Object.entries(t).forEach((([e,t])=>{i!==e&&i!==l.Po.ANY||Object.entries(t).forEach((([e,t])=>{o!==e&&"any"!==o||Object.entries(t).forEach((([e,t])=>{d!==e&&"any"!==d||Object.entries(t).forEach((([e,t])=>{`${n}AZ`!==e&&"any"!==n||(t[s]=a)}))}))}))}))}))}))},v=(e,t,a)=>{const r=e;a.forEach((e=>{const a=h(t,e);if(0===t.allowed&&e.cost>0)return;const{availability_zone_type:n,cloud_provider:o,resource_name:s,product:i,billing_model:c}=e,d="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,t])=>{c!==e&&"any"!==c||Object.entries(t).forEach((([e,t])=>{i!==e&&i!==l.Po.ANY||Object.entries(t).forEach((([e,t])=>{o!==e&&"any"!==o||Object.entries(t).forEach((([e,r])=>{d!==e&&"any"!==d||Object.entries(r).forEach((([e,o])=>{`${n}Az`===e&&(o[s]=a,o.available+=a,r.totalAvailable+=a),"any"===n&&"totalAvailable"!==e&&(o[s]=a,o.available+=a,r.totalAvailable+=a/2),r.totalAvailable>0&&(t.isAvailable=!0)}))}))}))}))}))}))},m=e=>{const t=(0,d.z)(),a=n()(e.data,"items",[]).map(c.ME);return t.items=a,a.forEach((e=>{const a=n()(e,"related_resources",[]);if(!(a.length<1))switch(a[0].resource_type){case"cluster":b(t.clustersQuota,e,a);break;case"compute.node":f(t.nodesQuota,e,a);break;case"pv.storage":p(t.storageQuota,e,a);break;case"network.loadbalancer":y(t.loadBalancerQuota,e,a);break;case"add-on":v(t.addOnsQuota,e,a)}})),t},E=e=>i.BJ.getOrganizationQuota(e).then(m),g=(e,t)=>{const a={quota:void 0,organization:void 0!==t?t.details:t},r=[E(e).then((e=>{a.quota=e}))];return void 0===t&&r.push(i.BJ.getOrganization(e).then((e=>{a.organization=e.data}))),Promise.all(r).then((()=>a))},O=()=>{var e,t;const{userProfile:a}=o.h.getState(),r=null==a||null===(e=a.organization)||void 0===e||null===(t=e.details)||void 0===t?void 0:t.id;return e=>e({payload:void 0!==r?g(r,null==a?void 0:a.organization):i.BJ.getCurrentAccount().then((e=>{const t=n()(e.data,"organization.id");return void 0!==t?g(t):Promise.reject(Error("No organization"))})),type:s.AQ.e_})};function _(){return e=>e({type:s.AQ.Zu,payload:i.FR.selfTermsReview()})}const A={userInfoResponse:u,getOrganizationAndQuota:O,processClusterQuota:b,processNodeQuota:f,processStorageQuota:p,processLoadBalancerQuota:y,processAddOnQuota:v,processQuota:m,selfTermsReview:_}}}]);
//# sourceMappingURL=bundle.494.eafd550ff6fd29a4d7aa.js.map