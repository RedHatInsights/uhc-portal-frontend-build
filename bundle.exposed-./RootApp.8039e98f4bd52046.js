"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f22201fa-3305-573a-95d5-23142a5a14b4")}catch(e){}}();
(self.webpackChunkopenshift=self.webpackChunkopenshift||[]).push([[178],{64236:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var s=n(28416),a=n.n(s),i=n(45007),r=n(84896),o=n(41724),l=n(55140),u=n(58390),d=n(19011),c=n(52136),h=n(64487),f=n(90351),p=n(73156),m=n(38432),g=n(98371),v=n(82502),y=n(34677),k=n(78913);n(26398);const{Api:C,Config:D}=r;C.setAuthInterceptor(y.w5),D.setRouteBasePath("/assisted-installer");class b extends a().Component{constructor(){super(...arguments),this.state={ready:!1}}componentDidMount(){const{chrome:e}=this.props;k.default.dateConfig(),e.auth.getUser().then((t=>{var n;(null===(n=null==t?void 0:t.identity)||void 0===n?void 0:n.user)&&v.h.dispatch((0,g.userInfoResponse)(t.identity.user)),k.default.fetchConfig(e).then((()=>{var e;if(v.h.dispatch((0,m.c6)()),this.setState({ready:!0}),!k.default.envOverride&&k.default.configData.sentryDSN&&(d.S1(Object.assign(Object.assign({dsn:k.default.configData.sentryDSN},{release:"ocm-uhc-portal-stage-391af85-insights"}),{autoSessionTracking:!1,integrations:[(0,f.r)(),c.k({onerror:!0,onunhandledrejection:!1})]})),null===(e=null==t?void 0:t.identity)||void 0===e?void 0:e.user)){const{email:e,username:n}=t.identity.user;h.nZ().setUser({email:e,username:n})}})),o.w.defaultProps={prefix:"pf-random-ocmui-id-",isRandom:!0}})),e.enable.segmentDev()}render(){const{ready:e}=this.state;return e?a().createElement(i.zt,{store:v.h},a().createElement(u.ZP,null),a().createElement(p.Z,null)):null}}const S=()=>{const e=(0,l.Z)();return e.initialized?a().createElement(b,{chrome:e}):null}}}]);
//# sourceMappingURL=RootApp.8039e98f4bd52046.js.map
//# debugId=f22201fa-3305-573a-95d5-23142a5a14b4
