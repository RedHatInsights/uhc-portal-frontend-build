(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[892],{49596:(e,t,n)=>{"use strict";n.r(t),n.d(t,{advisorBaseName:()=>r,default:()=>c,getResourcesBase:()=>s,removeOcmBaseName:()=>l});const{insights:{appname:a}}=n(4147),o=()=>(null===window||void 0===window?void 0:window.location.pathname.startsWith("/beta"))?"/beta":(null===window||void 0===window||window.location.pathname.startsWith("/preview"),"/preview"),r=()=>`${o()}/openshift/insights/advisor`,i=new RegExp(`^(/preview|/beta|)/${a}`,"i"),l=e=>e.replace(i,""),s=()=>`/beta/apps/${a}`,c=()=>`${o()}/${a}`},58995:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(49596);function o(e){const t=(0,a.removeOcmBaseName)(e).replace(/^\//,"").split("/");switch(t[0]){case"downloads":case"token":return{id:"downloads"};case"quota":return{id:t[1]||"openshift-quota",parentId:"subscriptions",secondaryNav:!0};case"subscriptions":return{id:t[1],parentId:"subscriptions",secondaryNav:!0};case"overview":case"releases":return{id:t[0]};default:return{id:""}}}},31611:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(92950),o=n.n(a),r=n(35356),i=n(40802);class l extends o().Component{constructor(){super(...arguments),this.state={}}componentDidCatch(e,t){this.setState({error:e.toString(),componentStack:t.componentStack}),i.$e((n=>{n.setExtras({componentStack:t.componentStack}),i.Tb(e)}))}render(){const{error:e,componentStack:t}=this.state;if(e)return o().createElement(r.EmptyState,null,o().createElement(r.Alert,{variant:"danger",isInline:!0,title:"Something went wrong"},o().createElement("div",{style:{whiteSpace:"pre-wrap",textAlign:"left",fontFamily:"monospace"}},e,t)));const{children:n}=this.props;return n}}const s=l},78913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ENV_OVERRIDE_LOCALSTORAGE_KEY:()=>a,default:()=>r});const a="ocmOverridenEnvironment",o={};o.production=Promise.resolve().then(n.t.bind(n,68923,19)),o.stageSSO=Promise.resolve().then(n.t.bind(n,93723,19)),o.staging=Promise.resolve().then(n.t.bind(n,90860,19)),o.integration=Promise.resolve().then(n.t.bind(n,16706,19)),o.default=o.disabled;const r={configData:{},envOverride:void 0,fakeOSD:!1,loadConfig(e){var t;this.configData=Object.assign(Object.assign({},e),{apiGateway:e.apiGateway.replace("$SELF_PATH$",window.location.host),insightsGateway:(null===(t=e.insightsGateway)||void 0===t?void 0:t.replace("$SELF_PATH$",window.location.host))||void 0}),window.ocmConfig=this},fetchConfig(){const e=this;return new Promise((t=>{var n;(()=>{let e=!1;return window.location.search.substring(1).split("&").forEach((t=>{const[n,a]=t.split("=");"fake"===n&&"true"===a&&(e=!0)})),e})()&&(e.fakeOSD=!0);const r=(()=>{let e;return window.location.search.substring(1).split("&").forEach((t=>{const[n,a]=t.split("=");"env"===n&&o[a]?e=a:"env"===n&&"mockserver"===a&&o.mockdata&&(e="mockdata")})),e})()||localStorage.getItem(a);r&&o[r]?o[r].then((n=>{this.loadConfig(n),console.info(`Loaded override config: ${r}`),e.envOverride=r,localStorage.setItem(a,r),t()})):null===(n=o.default)||void 0===n||n.then((e=>{this.loadConfig(e),console.info("Loaded default config: disabled"),t()}))}))}}},89976:(e,t,n)=>{"use strict";n.r(t);var a=n(92950),o=n.n(a),r=n(12181),i=n.n(r),l=n(32750),s=n.n(l),c=(n(26398),n(334)),p=n(12167),m=(n(62869),n(63416)),d=(n(78913),n(58995),n(49596),n(98371),n(38432),n(35592)),u=n(53894),E=n(57283),h=n.n(E),R=n(10810),v=n(42358),Z=n(72796),g=n(70315),S=n(45048);const w=(0,v.lX)(),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.compose;(0,d.createStore)((0,g.aA)(w),_((0,d.applyMiddleware)((0,R.Z)(w),u.Z,h(),(0,Z.uv)(Object.assign({},{dispatchDefaultFailure:!1})),S.Z)));var f=n(34677),P=n(17420),T=n(27361),A=n.n(T),b=n(55140),I=n(58045),O=n(43736),D=n(30517),k=n(71847),y=n(59228),F=n(90053),N=n(51930),L=n(1258),z=n(32839),C=n(55705),x=n(49541),U=n(62800),G=n(94845),W=n(27612),$=n(28275),j=n(36926),M=n(98452),H=n(13268),V=n(68575),q=n(64835),B=n(78456),K=n(44710),Y=n(58900),Q=n(94203),X=n(12691),J=n(6738),ee=n(23311),te=n(1214),ne=n(96134),ae=n(80635),oe=n(39048),re=n(24236),ie=n(34997),le=n(69733),se=n(64536),ce=n(59446),pe=n(57729),me=n(30726),de=n(14858),ue=n(74396),Ee=n(34782),he=n(57531),Re=n(57364),ve=n(720),Ze=n(95870),ge=n(92087),Se=n(83782),we=n(20239),_e=n(7100),fe=n(49758),Pe=n(357),Te=n(6309),Ae=n(97123),be=n(32677),Ie=n(17298),Oe=n(25822),De=n(41205),ke=n(49943),ye=n(77994),Fe=n(507),Ne=n(23664),Le=n(30832),ze=n(48249),Ce=n(38352),xe=n(35087),Ue=n(69817),Ge=n(95404),We=n(97636),$e=n(33378),je=n(75288),Me=n(39286),He=n(28986),Ve=n(52758),qe=n(52964),Be=n(36842),Ke=n(16551),Ye=n(59958),Qe=n(94634),Xe=n(6775),Je=n(77696),et=n(73531),tt=n(18097),nt=n(30116),at=n(96106);const{AssistedUiRouter:ot}=m,rt=(0,Le.default)(ot,Ce.ASSISTED_INSTALLER_FEATURE),it=(0,Le.default)(M.Z,Ce.ASSISTED_INSTALLER_FEATURE,Ue.ZP);(0,p.connect)((e=>{const{cluster:t}=e.clusters.details;return{planType:A()(t,"subscription.plan.type",Ve.normalizedProducts.UNKNOWN),clusterId:A()(t,"subscription.cluster_id"),externalClusterId:A()(t,"subscription.external_cluster_id")}}))((0,c.withRouter)((({history:e,planType:t,clusterId:n,externalClusterId:r})=>{const{pathname:i}=(0,c.useLocation)(),{segment:{setPageMetadata:l}}=(0,b.Z)(),s=(0,at.useFeatureGate)(Ce.HYPERSHIFT_WIZARD_FEATURE),p=(0,at.useFeatureGate)(Ce.OSD_WIZARD_V2_FEATURE),{[Ce.OSD_WIZARD_V1]:m}=(0,ze.h)();return o().useEffect((()=>{console.info("---------------Features---------------\n",`HYPERSHIFT_WIZARD_FEATURE: ${s?"Enabled":"Disabled"}\n`,`OSD_WIZARD_V2_FEATURE: ${p?"Enabled":"Disabled"}\n`,`OSD_WIZARD_V1: ${m?"Enabled":"Disabled"}\n`,"-------------------------------------")}),[s,p,m]),(0,a.useEffect)((()=>{l(Object.assign(Object.assign({},(0,nt.Z)(i,t,n,r)),(0,nt.b)()?{title:"404 Not Found"}:{}))}),[i,t,n,r,l]),o().createElement(o().Fragment,null,o().createElement(Ne.Z,null),o().createElement(P.xI,{history:e},o().createElement(O.Z,{apiRequest:f.Z},o().createElement(c.Switch,null,o().createElement(c.Redirect,{from:"/install/osp/installer-provisioned",to:"/install/openstack/installer-provisioned"}),o().createElement(c.Redirect,{from:"/install/crc/installer-provisioned",to:"/create/local"}),o().createElement(c.Redirect,{from:"/token/moa",to:"/token/rosa"}),o().createElement(c.Redirect,{from:"/insights",to:"/overview"}),o().createElement(c.Redirect,{from:"/subscriptions",to:"/quota"}),o().createElement(c.Route,{path:"/downloads",component:Oe.Z}),o().createElement(I.Z,{path:"/token/rosa/show",history:e,render:()=>o().createElement(o().Fragment,null,o().createElement(ke.Z,{show:!0}),o().createElement(Ye.Z,null))}),o().createElement(I.Z,{path:"/token/rosa",history:e,render:()=>o().createElement(o().Fragment,null,o().createElement(ke.Z,{show:!1,showPath:"/token/rosa/show"}),o().createElement(Ye.Z,null))}),o().createElement(c.Route,{path:"/token/show",render:()=>o().createElement(De.Z,{show:!0})}),o().createElement(c.Route,{path:"/token",render:()=>o().createElement(De.Z,{show:!1,showPath:"/token/show"})}),o().createElement(c.Route,{path:"/install/alibaba/installer-provisioned",component:z.ZP}),o().createElement(c.Route,{path:"/install/arm/installer-provisioned",component:$e.ZP}),o().createElement(c.Route,{path:"/install/arm/user-provisioned",component:je.ZP}),o().createElement(c.Route,{path:"/install/arm/pre-release",component:Ie.ZP}),o().createElement(c.Route,{path:"/install/arm",component:We.Z}),o().createElement(c.Route,{path:"/install/aws/installer-provisioned",component:$.ZP}),o().createElement(c.Route,{path:"/install/aws/user-provisioned",component:W.ZP}),o().createElement(c.Route,{path:"/install/aws/arm/installer-provisioned",component:x.ZP}),o().createElement(c.Route,{path:"/install/aws/arm/user-provisioned",component:U.ZP}),o().createElement(c.Route,{path:"/install/aws/arm",component:C.Z}),o().createElement(c.Route,{path:"/install/aws/multi/installer-provisioned",component:j.ZP}),o().createElement(c.Route,{path:"/install/aws",component:G.Z}),o().createElement(c.Route,{path:"/install/gcp/installer-provisioned",component:J.ZP}),o().createElement(c.Route,{path:"/install/gcp/user-provisioned",component:ee.ZP}),o().createElement(c.Route,{path:"/install/gcp",component:X.Z}),o().createElement(c.Route,{path:"/install/nutanix",exact:!0,component:Ee.Z}),o().createElement(c.Route,{path:"/install/nutanix/installer-provisioned",component:oe.ZP}),o().createElement(c.Route,{path:"/install/openstack/installer-provisioned",component:ie.ZP}),o().createElement(c.Route,{path:"/install/openstack/user-provisioned",component:le.ZP}),o().createElement(c.Route,{path:"/install/openstack",component:re.Z}),o().createElement(c.Route,{path:"/install/rhv/installer-provisioned",component:ce.ZP}),o().createElement(c.Route,{path:"/install/rhv/user-provisioned",component:pe.ZP}),o().createElement(c.Route,{path:"/install/rhv",component:se.Z}),o().createElement(c.Route,{path:"/install/azure/arm/installer-provisioned",component:B.ZP}),o().createElement(c.Route,{path:"/install/azure/multi/installer-provisioned",component:ne.ZP}),o().createElement(c.Route,{path:"/install/azure/installer-provisioned",component:Y.ZP}),o().createElement(c.Route,{path:"/install/azure/user-provisioned",component:Q.ZP}),o().createElement(c.Route,{path:"/install/azure",exact:!0,component:K.Z}),o().createElement(c.Route,{path:"/install/azure-stack-hub/installer-provisioned",exact:!0,component:V.ZP}),o().createElement(c.Route,{path:"/install/azure-stack-hub/user-provisioned",exact:!0,component:q.ZP}),o().createElement(c.Route,{path:"/install/azure-stack-hub",exact:!0,component:H.Z}),o().createElement(c.Route,{path:"/install/metal/user-provisioned",component:Ue.ZP}),o().createElement(c.Route,{path:"/install/metal/installer-provisioned",component:Ge.ZP}),o().createElement(c.Route,{path:"/install/metal/agent-based",component:xe.ZP}),o().createElement(c.Route,{path:"/install/metal/multi",component:Me.ZP}),o().createElement(c.Route,{path:"/install/metal",component:it}),o().createElement(c.Route,{path:"/install/multi/pre-release",component:ae.ZP}),o().createElement(c.Route,{path:"/install/vsphere",exact:!0,component:he.Z}),o().createElement(c.Route,{path:"/install/vsphere/agent-based",component:me.ZP}),o().createElement(c.Route,{path:"/install/vsphere/user-provisioned",component:de.ZP}),o().createElement(c.Route,{path:"/install/vsphere/installer-provisioned",component:ue.ZP}),o().createElement(c.Route,{path:"/install/ibm-cloud",component:te.ZP}),o().createElement(c.Route,{path:"/install/ibmz/user-provisioned",component:_e.ZP}),o().createElement(c.Route,{path:"/install/ibmz/pre-release",component:fe.ZP}),o().createElement(c.Route,{path:"/install/ibmz",exact:!0,component:Pe.Z}),o().createElement(c.Route,{path:"/install/power/user-provisioned",component:Te.ZP}),o().createElement(c.Route,{path:"/install/power/pre-release",component:Ae.ZP}),o().createElement(c.Route,{path:"/install/power",exact:!0,component:be.Z}),o().createElement(c.Route,{path:"/install/powervs/installer-provisioned",component:He.ZP}),o().createElement(c.Route,{path:"/install/platform-agnostic/agent-based",component:ve.ZP}),o().createElement(c.Route,{path:"/install/platform-agnostic/user-provisioned",component:Ze.ZP}),o().createElement(c.Route,{path:"/install/platform-agnostic",component:Re.Z}),o().createElement(c.Route,{path:"/install/pre-release",component:ge.ZP}),o().createElement(c.Route,{path:"/install/pull-secret",component:Se.ZP}),o().createElement(c.Route,{path:"/install/azure/aro-provisioned",component:we.ZP}),o().createElement(c.Redirect,{from:"/install",to:"/create"}),o().createElement(c.Redirect,{from:"/create/osd/aws",to:"/create/osd"}),o().createElement(c.Redirect,{from:"/create/osd/gcp",to:"/create/osd"}),o().createElement(c.Redirect,{from:"/create/osdtrial/aws",to:"/create/osdtrial"}),o().createElement(c.Redirect,{from:"/create/osdtrial/gcp",to:"/create/osdtrial"}),p&&!m?o().createElement(I.Z,{path:"/create/osdtrial",gobackPath:"/create",render:()=>o().createElement(tt.j,{product:Ve.normalizedProducts.OSDTrial}),history:e}):o().createElement(I.Z,{path:"/create/osdtrial",gobackPath:"/create",render:()=>o().createElement(et.Z,{product:Ve.normalizedProducts.OSDTrial}),history:e}),p&&!m?o().createElement(I.Z,{path:"/create/osd",gobackPath:"/create",component:tt.j,history:e}):o().createElement(I.Z,{path:"/create/osd",gobackPath:"/create",render:()=>o().createElement(et.Z,{product:Ve.normalizedProducts.OSD}),history:e}),o().createElement(c.Route,{path:"/create/cloud",render:e=>o().createElement(F.Z,Object.assign({activeTab:"cloud"},e))}),o().createElement(c.Route,{path:"/create/datacenter",render:e=>o().createElement(F.Z,Object.assign({activeTab:"datacenter"},e))}),o().createElement(c.Route,{path:"/create/local",render:e=>o().createElement(F.Z,Object.assign({activeTab:"local"},e))}),o().createElement(c.Redirect,{from:"/create/rosa/welcome",to:"/create/rosa/getstarted"}),o().createElement(I.Z,{path:"/create/rosa/getstarted",history:e,component:Ke.Z}),o().createElement(I.Z,{path:"/create/rosa/wizard",history:e,component:L.Z}),o().createElement(c.Route,{path:"/create",component:F.Z}),o().createElement(c.Route,{path:"/details/s/:id/insights/:reportId/:errorKey",component:Qe.default}),o().createElement(c.Route,{path:"/details/s/:id/add-idp/:idpTypeName",component:Be.Z}),o().createElement(c.Route,{path:"/details/s/:id/edit-idp/:idpName",render:({match:e})=>o().createElement(Be.Z,{isEditForm:!0,match:e})}),o().createElement(c.Route,{path:"/details/s/:id",component:Xe.Z}),o().createElement(c.Route,{path:"/details/:id/insights/:reportId/:errorKey",component:Qe.default}),o().createElement(c.Route,{path:"/details/:id",component:Je.Z}),o().createElement(c.Route,{path:"/register",component:N.Z}),o().createElement(c.Route,{path:"/quota/resource-limits",render:()=>o().createElement(Fe.Z,{marketplace:!0})}),o().createElement(c.Route,{path:"/quota",component:Fe.Z}),o().createElement(c.Route,{path:"/archived",component:y.Z}),o().createElement(c.Route,{path:"/overview",exact:!0,component:D.Z}),o().createElement(c.Route,{path:"/releases",exact:!0,component:qe.Z}),o().createElement(c.Route,{path:"/assisted-installer",component:rt}),o().createElement(c.Route,{path:"/",exact:!0,component:k.Z}),o().createElement(c.Route,{component:ye.Z})))))}))),n(31611),n(35356);const{Api:lt,Config:st}=m;lt.setAuthInterceptor(f.w),st.setRouteBasePath("/assisted-installer"),o().Component,Object.fromEntries||s().shim(),window.insights,i().render(o().createElement("div",{style:{margin:"25px"}},o().createElement("h1",null,"Unsupported environment"),o().createElement("h2",null,"OCM does not support this environment"),o().createElement("p",null,"Please use one of our supported environments."),o().createElement("p",null,"OCM is only being deployed to this environment to ensure navigation keeps working.")),document.getElementById("root"))},38432:(e,t,n)=>{"use strict";n.d(t,{R2:()=>s}),n(91757);var a=n(38352),o=n(84353),r=n(61810),i=n(40933);const l=(e,t)=>({name:t,action:()=>o.Z.selfFeatureReview(e).then((e=>e.data.enabled))}),s=[l("osd-trial",a.OSD_TRIAL_FEATURE),l("hypershift-creation-wizard",a.HYPERSHIFT_WIZARD_FEATURE),l("hcp-rosa-getting-started-page",a.HCP_ROSA_GETTING_STARTED_PAGE),l("assisted-installer-sno",a.ASSISTED_INSTALLER_SNO_FEATURE),l("assisted-installer-ocs",a.ASSISTED_INSTALLER_OCS_FEATURE),l("assisted-installer-cnv",a.ASSISTED_INSTALLER_CNV_FEATURE),l("assisted-installer-merge-lists",a.ASSISTED_INSTALLER_MERGE_LISTS_FEATURE),l("assisted-installer-network-type-selection",a.ASSISTED_INSTALLER_NETWORK_TYPE_SELECTION_FEATURE),l("assisted-installer-platform-integration",a.ASSISTED_INSTALLER_PLATFORM_INTEGRATION_FEATURE),l("osd-creation-wizard-v2",a.OSD_WIZARD_V2_FEATURE),l("rosa-creation-wizard",a.ROSA_CREATION_WIZARD_FEATURE),{name:a.ASSISTED_INSTALLER_FEATURE,action:()=>Promise.all([o.Z.selfAccessReview({action:i.J.action.CREATE,resource_type:"BareMetalCluster"}),o.Z.selfFeatureReview("assisted-installer")]).then((([e,t])=>e.data.allowed&&t.data.enabled))},{name:a.ASSISTED_INSTALLER_MULTIARCH_SUPPORTED,action:()=>{return e=void 0,t=void 0,a=function*(){var e,t;let n=!1;const a=null===(t=null===(e=(yield r.default.getCurrentAccount()).data)||void 0===e?void 0:e.organization)||void 0===t?void 0:t.id;if(a){const e=((yield r.default.getOrganization(a)).data.capabilities||[]).find((e=>"capability.organization.bare_metal_installer_multiarch"===e.name));n="true"===(null==e?void 0:e.value)}return n},new((n=void 0)||(n=Promise))((function(o,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}));var e,t,n,a}}]},98371:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getOrganizationAndQuota:()=>m,selfTermsReview:()=>d,userActions:()=>u,userInfoResponse:()=>l});var a=n(91757),o=n(51955),r=n(33047),i=n(11689);const l=e=>(0,a.action)(o.userConstants.USER_INFO_RESPONSE,e),s=e=>{var t,n;return{items:(null!==(n=null===(t=e.data)||void 0===t?void 0:t.items)&&void 0!==n?n:[]).map(i.ME)}},c=e=>r.accountsService.getOrganizationQuota(e).then(s),p=(e,t)=>{const n=[c(e),t?Promise.resolve({data:t}):r.accountsService.getOrganization(e)];return Promise.all(n).then((([e,t])=>({quota:e,organization:t.data})))},m=()=>(e,t)=>{var n;const{userProfile:i}=t(),l=(null==i?void 0:i.organization.fulfilled)?null===(n=null==i?void 0:i.organization)||void 0===n?void 0:n.details:void 0,s=null==l?void 0:l.id;var c;e((c=void 0!==s?p(s,l):r.accountsService.getCurrentAccount().then((e=>{var t,n;const a=null===(n=null===(t=e.data)||void 0===t?void 0:t.organization)||void 0===n?void 0:n.id;return void 0!==a?p(a):Promise.reject(Error("No organization"))})),(0,a.action)(o.userConstants.GET_ORGANIZATION,c)))},d=()=>(0,a.action)(o.userConstants.SELF_TERMS_REVIEW,r.authorizationsService.selfTermsReview()),u={userInfoResponse:l,getOrganizationAndQuota:m,processQuota:s,selfTermsReview:d}},97031:()=>{}}]);
//# sourceMappingURL=bundle.892.6a87a66218301086.js.map