var Ee=Object.defineProperty,Me=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var q=(n,r,e)=>r in n?Ee(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,N=(n,r)=>{for(var e in r||={})De.call(r,e)&&q(n,e,r[e]);if(Y)for(var e of Y(r))Ce.call(r,e)&&q(n,e,r[e]);return n},W=(n,r)=>Me(n,Te(r));import*as i from"@angular/core";import{ɵglobal as f,ɵRuntimeError as g,InjectionToken as C,APP_ID as K,CSP_NONCE as ne,PLATFORM_ID as _,Optional as Re,ViewEncapsulation as b,RendererStyleFlags2 as A,ɵinternalCreateApplication as re,ErrorHandler as oe,ɵsetDocument as be,PLATFORM_INITIALIZER as Ae,createPlatformFactory as Oe,platformCore as Ie,ɵTESTABILITY_GETTER as H,ɵTESTABILITY as _e,Testability as L,NgZone as x,TestabilityRegistry as X,ɵINJECTOR_SCOPE as Ne,RendererFactory2 as He,ApplicationModule as Le,ɵɵinject as se,ApplicationRef as Pe,ɵConsole as ke,SecurityContext as y,ɵallowSanitizationBypassAndThrow as v,ɵunwrapSafeValue as w,ɵ_sanitizeUrl as je,ɵ_sanitizeHtml as xe,ɵbypassSanitizationTrustHtml as Fe,ɵbypassSanitizationTrustStyle as Ue,ɵbypassSanitizationTrustScript as Be,ɵbypassSanitizationTrustUrl as Ve,ɵbypassSanitizationTrustResourceUrl as $e,Injector as ze,ENVIRONMENT_INITIALIZER as xt,inject as Ft,ɵformatRuntimeError as Ut,makeEnvironmentProviders as Ze,ɵwithDomHydration as Ke,Version as Ge,makeStateKey as Ye,TransferState as qe}from"@angular/core";import{ɵDomAdapter as We,ɵsetRootDomAdapter as Xe,ɵparseCookieValue as Je,ɵgetDOM as R,isPlatformServer as ie,DOCUMENT as d,ɵPLATFORM_BROWSER_ID as Qe,XhrFactory as et,CommonModule as tt}from"@angular/common";import{ɵgetDOM as sn}from"@angular/common";import{ɵwithHttpTransferCache as ae}from"@angular/common/http";var F=class extends We{constructor(){super(...arguments),this.supportsDOMEvents=!0}},U=class n extends F{static makeCurrent(){Xe(new n)}onAndCancel(r,e,t){return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=nt();return e==null?null:rt(e)}resetBaseElement(){S=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Je(document.cookie,r)}},S=null;function nt(){return S=S||document.querySelector("base"),S?S.getAttribute("href"):null}function rt(n){return new URL(n,document.baseURI).pathname}var B=class{addToWindow(r){f.getAngularTestability=(t,o=!0)=>{let s=r.findTestabilityInTree(t,o);if(s==null)throw new g(5103,!1);return s},f.getAllAngularTestabilities=()=>r.getAllTestabilities(),f.getAllAngularRootElements=()=>r.getAllRootElements();let e=t=>{let o=f.getAllAngularTestabilities(),s=o.length,a=function(){s--,s==0&&t()};o.forEach(c=>{c.whenStable(a)})};f.frameworkStabilizers||(f.frameworkStabilizers=[]),f.frameworkStabilizers.push(e)}findTestabilityInTree(r,e,t){if(e==null)return null;let o=r.getTestability(e);return o??(t?R().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}},ot=(()=>{class n{build(){return new XMLHttpRequest}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),O=new C("EventManagerPlugins"),ce=(()=>{class n{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o){return this._findPluginFor(t).addEventListener(e,t,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new g(5101,!1);return this._eventNameToPlugin.set(e,t),t}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(O),i.ɵɵinject(i.NgZone))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),E=class{constructor(r){this._doc=r}},P="ng-app-id",ue=(()=>{class n{constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ie(s),this.resetHostNodes()}addStyles(e){for(let t of e)this.changeUsageCount(t,1)===1&&this.onStyleAdded(t)}removeStyles(e){for(let t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(let t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){let t=this.styleRef;t.get(e)?.elements?.forEach(o=>o.remove()),t.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${P}="${this.appId}"]`);if(e?.length){let t=new Map;return e.forEach(o=>{o.textContent!=null&&t.set(o.textContent,o)}),t}return null}changeUsageCount(e,t){let o=this.styleRef;if(o.has(e)){let s=o.get(e);return s.usage+=t,s.usage}return o.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){let o=this.styleNodesInDOM,s=o?.get(t);if(s?.parentNode===e)return o.delete(t),s.removeAttribute(P),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(P,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){let o=this.getStyleElement(e,t),s=this.styleRef,a=s.get(t)?.elements;a?a.push(o):s.set(t,{elements:[o],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d),i.ɵɵinject(K),i.ɵɵinject(ne,8),i.ɵɵinject(_))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),k={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},G=/%COMP%/g,de="%COMP%",st=`_nghost-${de}`,it=`_ngcontent-${de}`,at=!0,ct=new C("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>at});function ut(n){return it.replace(G,n)}function dt(n){return st.replace(G,n)}function le(n,r){return r.map(e=>e.replace(G,n))}var J=(()=>{class n{constructor(e,t,o,s,a,c,u,l=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=c,this.ngZone=u,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=ie(c),this.defaultRenderer=new M(e,a,u,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===b.ShadowDom&&(t=W(N({},t),{encapsulation:b.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof I?o.applyToHost(e):o instanceof T&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let a=this.doc,c=this.ngZone,u=this.eventManager,l=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(t.encapsulation){case b.Emulated:s=new I(u,l,t,this.appId,p,a,c,m);break;case b.ShadowDom:return new V(u,l,e,t,a,c,this.nonce,m);default:s=new T(u,l,t,p,a,c,m);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(ce),i.ɵɵinject(ue),i.ɵɵinject(K),i.ɵɵinject(ct),i.ɵɵinject(d),i.ɵɵinject(_),i.ɵɵinject(i.NgZone),i.ɵɵinject(ne))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),M=class{constructor(r,e,t,o){this.eventManager=r,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(r,e){return e?this.doc.createElementNS(k[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Q(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(Q(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new g(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,o){if(o){e=o+":"+e;let s=k[o];s?r.setAttributeNS(s,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let o=k[t];o?r.removeAttributeNS(o,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,o){o&(A.DashCase|A.Important)?r.style.setProperty(e,t,o&A.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&A.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t){if(typeof r=="string"&&(r=R().getGlobalEventTarget(this.doc,r),!r))throw new Error(`Unsupported event target ${r} for event ${e}`);return this.eventManager.addEventListener(r,e,this.decoratePreventDefault(t))}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;(this.platformIsServer?this.ngZone.runGuarded(()=>r(e)):r(e))===!1&&e.preventDefault()}}};function Q(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var V=class extends M{constructor(r,e,t,o,s,a,c,u){super(r,s,a,u),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=le(o.id,o.styles);for(let p of l){let m=document.createElement("style");c&&m.setAttribute("nonce",c),m.textContent=p,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},T=class extends M{constructor(r,e,t,o,s,a,c,u){super(r,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=u?le(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},I=class extends T{constructor(r,e,t,o,s,a,c,u){let l=o+"-"+t.id;super(r,e,t,s,a,c,u,l),this.contentAttr=ut(l),this.hostAttr=dt(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}},lt=(()=>{class n extends E{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o){return e.addEventListener(t,o,!1),()=>this.removeEventListener(e,t,o)}removeEventListener(e,t,o){return e.removeEventListener(t,o)}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),ee=["alt","control","meta","shift"],ft={"\b":"Backspace","\t":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ht={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},pt=(()=>{class n extends E{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,o){let s=n.parseEventName(t),a=n.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>R().onAndCancel(e,s.domEventName,a))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),ee.forEach(l=>{let p=t.indexOf(l);p>-1&&(t.splice(p,1),a+=l+".")}),a+=s,t.length!=0||s.length===0)return null;let u={};return u.domEventName=o,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let o=ft[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),ee.forEach(a=>{if(a!==o){let c=ht[a];c(e)&&(s+=a+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{n.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})();function $t(n,r){return re(N({rootComponent:n},fe(r)))}function zt(n){return re(fe(n))}function fe(n){return{appProviders:[...me,...(n?.providers??[])],platformProviders:he}}function Zt(){return[...pe]}function mt(){U.makeCurrent()}function yt(){return new oe}function gt(){return be(document),document}var he=[{provide:_,useValue:Qe},{provide:Ae,useValue:mt,multi:!0},{provide:d,useFactory:gt,deps:[]}],Kt=Oe(Ie,"browser",he),vt=new C(""),pe=[{provide:H,useClass:B,deps:[]},{provide:_e,useClass:L,deps:[x,X,H]},{provide:L,useClass:L,deps:[x,X,H]}],me=[{provide:Ne,useValue:"root"},{provide:oe,useFactory:yt,deps:[]},{provide:O,useClass:lt,multi:!0,deps:[d,x,_]},{provide:O,useClass:pt,multi:!0,deps:[d]},J,ue,ce,{provide:He,useExisting:J},{provide:et,useClass:ot,deps:[]},[]],Gt=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:K,useValue:e.appId}]}}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(vt,12))}}static{this.ɵmod=i.ɵɵdefineNgModule({type:n})}static{this.ɵinj=i.ɵɵdefineInjector({providers:[...me,...pe],imports:[tt,Le]})}}return n})();function wt(){return new St(se(d))}var St=(()=>{class n{constructor(e){this._doc=e,this._dom=R()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((o,s)=>(s&&o.push(this._getOrCreateElement(s,t)),o),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);let o=this.getTag(t);return o?this._setMetaElementAttributes(e,o):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){let a=this._parseSelector(e),c=this.getTags(a).filter(u=>this._containsAttributes(e,u))[0];if(c!==void 0)return c}let o=this._dom.createElement("meta");return this._setMetaElementAttributes(e,o),this._doc.getElementsByTagName("head")[0].appendChild(o),o}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(o=>t.setAttribute(this._getMetaKeyMap(o),e[o])),t}_parseSelector(e){let t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(o=>t.getAttribute(this._getMetaKeyMap(o))===e[o])}_getMetaKeyMap(e){return Et[e]||e}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:function(t){let o=null;return t?o=new t:o=wt(),o},providedIn:"root"})}}return n})(),Et={httpEquiv:"http-equiv"};function Mt(){return new Tt(se(d))}var Tt=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:function(t){let o=null;return t?o=new t:o=Mt(),o},providedIn:"root"})}}return n})();function ye(n,r){if(typeof COMPILED>"u"||!COMPILED){let e=f.ng=f.ng||{};e[n]=r}}var h=typeof window<"u"&&window||{},$=class{constructor(r,e){this.msPerTick=r,this.numTicks=e}},z=class{constructor(r){this.appRef=r.injector.get(Pe)}timeChangeDetection(r){let e=r&&r.record,t="Change Detection",o=h.console.profile!=null;e&&o&&h.console.profile(t);let s=j(),a=0;for(;a<5||j()-s<500;)this.appRef.tick(),a++;let c=j();e&&o&&h.console.profileEnd(t);let u=(c-s)/a;return h.console.log(`ran ${a} change detection cycles`),h.console.log(`${u.toFixed(2)} ms per check`),new $(u,a)}};function j(){return h.performance&&h.performance.now?h.performance.now():new Date().getTime()}var ge="profiler";function Yt(n){return ye(ge,new z(n)),n}function qt(){ye(ge,null)}var te=class{static all(){return()=>!0}static css(r){return e=>e.nativeElement!=null?Dt(e.nativeElement,r):!1}static directive(r){return e=>e.providerTokens.indexOf(r)!==-1}};function Dt(n,r){return R().isElementNode(n)?n.matches&&n.matches(r)||n.msMatchesSelector&&n.msMatchesSelector(r)||n.webkitMatchesSelector&&n.webkitMatchesSelector(r):!1}var Ct={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},Z=new C("HammerGestureConfig"),ve=new C("HammerLoader"),Rt=(()=>{class n{constructor(){this.events=[],this.overrides={}}buildHammer(e){let t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(let o in this.overrides)t.get(o).set(this.overrides[o]);return t}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),bt=(()=>{class n extends E{constructor(e,t,o,s){super(e),this._config=t,this.console=o,this.loader=s,this._loaderPromise=null}supports(e){return!(!Ct.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,o){let s=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||s.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return s.runOutsideAngular(()=>this._loaderPromise.then(()=>{if(!window.Hammer){c=()=>{};return}a||(c=this.addEventListener(e,t,o))}).catch(()=>{c=()=>{}})),()=>{c()}}return s.runOutsideAngular(()=>{let a=this._config.buildHammer(e),c=function(u){s.runGuarded(function(){o(u)})};return a.on(t,c),()=>{a.off(t,c),typeof a.destroy=="function"&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d),i.ɵɵinject(Z),i.ɵɵinject(i.ɵConsole),i.ɵɵinject(ve,8))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),Wt=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:n})}static{this.ɵinj=i.ɵɵdefineInjector({providers:[{provide:O,useClass:bt,multi:!0,deps:[d,Z,ke,[new Re,ve]]},{provide:Z,useClass:Rt,deps:[]}]})}}return n})(),At=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=i.ɵɵinject(we),o},providedIn:"root"})}}return n})();function Ot(n){return new we(n.get(d))}var we=(()=>{class n extends At{constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case y.NONE:return t;case y.HTML:return v(t,"HTML")?w(t):xe(this._doc,String(t)).toString();case y.STYLE:return v(t,"Style")?w(t):t;case y.SCRIPT:if(v(t,"Script"))return w(t);throw new g(5200,!1);case y.URL:return v(t,"URL")?w(t):je(String(t));case y.RESOURCE_URL:if(v(t,"ResourceURL"))return w(t);throw new g(5201,!1);default:throw new g(5202,!1)}}bypassSecurityTrustHtml(e){return Fe(e)}bypassSecurityTrustStyle(e){return Ue(e)}bypassSecurityTrustScript(e){return Be(e)}bypassSecurityTrustUrl(e){return Ve(e)}bypassSecurityTrustResourceUrl(e){return $e(e)}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(d))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:function(t){let o=null;return t?o=new t:o=Ot(i.ɵɵinject(ze)),o},providedIn:"root"})}}return n})(),D=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(D||{});function Se(n,r=[],e={}){return{ɵkind:n,ɵproviders:r}}function Xt(){return Se(D.NoHttpTransferCache)}function Jt(n){return Se(D.HttpTransferCacheOptions,ae(n))}function Qt(...n){let r=[],e=new Set,t=e.has(D.HttpTransferCacheOptions);for(let{ɵproviders:o,ɵkind:s}of n)e.add(s),o.length&&r.push(o);return Ze([[],Ke(),e.has(D.NoHttpTransferCache)||t?[]:ae({}),r])}var en=new Ge("17.1.0"),tn=Ye,nn=qe;export{Gt as BrowserModule,te as By,At as DomSanitizer,O as EVENT_MANAGER_PLUGINS,ce as EventManager,E as EventManagerPlugin,Z as HAMMER_GESTURE_CONFIG,ve as HAMMER_LOADER,Rt as HammerGestureConfig,Wt as HammerModule,D as HydrationFeatureKind,St as Meta,ct as REMOVE_STYLES_ON_COMPONENT_DESTROY,Tt as Title,nn as TransferState,en as VERSION,$t as bootstrapApplication,zt as createApplication,qt as disableDebugTools,Yt as enableDebugTools,tn as makeStateKey,Kt as platformBrowser,Qt as provideClientHydration,Zt as provideProtractorTestingSupport,Jt as withHttpTransferCacheOptions,Xt as withNoHttpTransferCache,U as ɵBrowserDomAdapter,B as ɵBrowserGetTestability,lt as ɵDomEventsPlugin,J as ɵDomRendererFactory2,we as ɵDomSanitizerImpl,bt as ɵHammerGesturesPlugin,he as ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,pt as ɵKeyEventsPlugin,ue as ɵSharedStylesHost,sn as ɵgetDOM,mt as ɵinitDomAdapter};/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v17.1.0
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/