webpackJsonp([5],{1886:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u,i=n(2),c=r(i),o=n(61),s=r(o),f=n(4),d=r(f),l=n(10),p=r(l),m=n(7),h=r(m),v=n(8),k=r(v),y=n(0),x=(r(y),n(289)),w=n(704),g=r(w),b=(a=(0,x.wrapper)(g.default))(u=function(e){function t(){return(0,d.default)(this,t),(0,h.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,k.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),t}(y.Component))||u;t.default=b,e.exports=t.default},1887:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new g.action(e),n=new j((0,d.default)({},e,{metaAction:t})),r=(0,d.default)({},t,n);return t.config({metaHandlers:r}),r}Object.defineProperty(t,"__esModule",{value:!0});var u,i,c,o=n(16),s=r(o),f=n(2),d=r(f),l=n(91),p=r(l),m=n(631),h=r(m),v=n(632),k=r(v),y=n(4),x=r(y);t.default=a;var w=n(0),g=(r(w),n(289)),b=n(651),_=r(b),A=n(2055),P=r(A),j=(i=u=function e(t){(0,x.default)(this,e),c.call(this),this.metaAction=t.metaAction,this.config=_.default.current,this.webapi=this.config.webapi},c=function(){var e=this;this.onInit=function(t){var n=t.component,r=t.injections;e.component=n,e.injections=r,r.reduce("init"),e.load()},this.load=(0,k.default)(h.default.mark(function t(){var n,r,a;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.config.apps["mk-app-login"]){t.next=4;break}return n={user:{id:1,mobile:"13334445556",nickname:"齐天大圣",password:"1"},securityLevel:1},e.injections.reduce("load",n),t.abrupt("return");case 4:return r=e.metaAction.context.get("currentUser"),t.next=7,e.webapi.mySetting.init(r.id);case 7:a=t.sent,e.injections.reduce("load",a);case 9:case"end":return t.stop()}},t,e)})),this.saveBaseInfo=(0,k.default)(h.default.mark(function t(){var n,r;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.metaAction.gf("data.form").toJS(),t.next=3,e.check([{path:"data.form.nickname",value:n.nickname}]);case 3:if(r=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,e.webapi.user.update({id:n.id,mobile:n.mobile,sex:n.sex,nickname:n.nickname,birthday:n.birthday});case 8:e.component.props.onPortalReload&&e.component.props.onPortalReload(),e.metaAction.toast("success","保存个人资料成功");case 10:case"end":return t.stop()}},t,e)})),this.modifyPassword=(0,k.default)(h.default.mark(function t(){var n;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.config.apps["mk-app-modify-password"]){t.next=2;break}throw"网站中存在mk-app-modify-password才可使用这个功能";case 2:return t.next=4,e.metaAction.modal("show",{title:"修改密码",children:e.metaAction.loadApp("mk-app-modify-password",{store:e.component.props.store})});case 4:n=t.sent,n&&e.load();case 6:case"end":return t.stop()}},t,e)})),this.upload=function(){e.metaAction.toast("error","纯静态网站，上传目前不可用")},this.getPhoto=function(){return P.default},this.getSecurityLevelText=function(){var t=e.metaAction.gf("data.form.securityLevel");return 1==t?"低":2==t?"中低":3==t?"中":4==t?"中高":"高"},this.getSecurityLevelClassName=function(){var t=e.metaAction.gf("data.form.securityLevel"),n="mk-app-my-setting-security-level ";return n+=1==t?"mk-app-my-setting-security-level-error":2==t?"mk-app-my-setting-security-level-warn":3==t?"mk-app-my-setting-security-level-normal":4==t?"mk-app-my-setting-security-level-good":"mk-app-my-setting-security-level-success"},this.menuSelected=function(t){var n=(t.item,t.key);e.metaAction.sf("data.other.selectedMenuItem",n)},this.fieldChange=function(){var t=(0,k.default)(h.default.mark(function t(n,r){return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.check([{path:n,value:r}]);case 2:case"end":return t.stop()}},t,e)}));return function(e,n){return t.apply(this,arguments)}}(),this.check=function(){var t=(0,k.default)(h.default.mark(function t(n){var r,a,u,i,c,o,f,l,m,v;return h.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:r=[],a=!0,u=!1,i=void 0,t.prev=6,c=(0,p.default)(n);case 8:if(a=(o=c.next()).done){t.next=22;break}if(f=o.value,l=(0,d.default)({},f),"data.form.nickname"!=f.path){t.next=18;break}return t.t0=s.default,t.t1=l,t.next=16,e.checkNickname(f.value);case 16:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 18:r.push(l);case 19:a=!0,t.next=8;break;case 22:t.next=28;break;case 24:t.prev=24,t.t3=t.catch(6),u=!0,i=t.t3;case 28:t.prev=28,t.prev=29,!a&&c.return&&c.return();case 31:if(t.prev=31,!u){t.next=34;break}throw i;case 34:return t.finish(31);case 35:return t.finish(28);case 36:return m={},v=!0,r.forEach(function(e){m[e.path]=e.value,m[e.errorPath]=e.message,e.message&&(v=!1)}),e.metaAction.sfs(m),t.abrupt("return",v);case 41:case"end":return t.stop()}},t,e,[[6,24,28,36],[29,,31,35]])}));return function(e){return t.apply(this,arguments)}}(),this.checkNickname=function(){var t=(0,k.default)(h.default.mark(function t(n){var r;return h.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n||(r="请录入昵称"),e.abrupt("return",{errorPath:"data.other.error.nickname",message:r});case 2:case"end":return e.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}()},i);e.exports=t.default},1888:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=new f.reducer(e),n=new m((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),i=r(u),c=n(4),o=r(c);t.default=a;var s=n(189),f=n(289),d=n(651),l=r(d),p=n(705),m=function e(t){var n=this;(0,o.default)(this,e),this.init=function(e,t){var r=(0,p.getInitState)();return n.metaReducer.init(e,r)},this.load=function(e,t){var r=t.user,a=t.securityLevel;return r.sex=r.sex||"1",r.nickname=r.nickname||r.mobile,n.metaReducer.sf(e,"data.form",(0,s.fromJS)((0,i.default)({},r,{securityLevel:a})))},this.metaReducer=t.metaReducer,this.config=l.default.current};e.exports=t.default},2055:function(e,t,n){e.exports=n.p+"photo.36d29d9e.png"}});