import*as i from"@angular/core";import{RendererFactory2 as l,NgZone as A,ANIMATION_MODULE_TYPE as c}from"@angular/core";import{ANIMATION_MODULE_TYPE as x}from"@angular/core";import{ɵDomRendererFactory2 as v,BrowserModule as d}from"@angular/platform-browser";import*as o from"@angular/animations/browser";import{ɵAnimationEngine as r,ɵWebAnimationsStyleNormalizer as N,ɵAnimationRendererFactory as y,ɵAnimationStyleNormalizer as D,AnimationDriver as u,ɵWebAnimationsDriver as M,NoopAnimationDriver as I}from"@angular/animations/browser";import{DOCUMENT as R}from"@angular/common";var O=(()=>{class e extends r{constructor(t,n,f,j){super(t,n,f)}ngOnDestroy(){this.flush()}static{this.ɵfac=function(n){return new(n||e)(i.ɵɵinject(R),i.ɵɵinject(o.AnimationDriver),i.ɵɵinject(o.ɵAnimationStyleNormalizer),i.ɵɵinject(i.ApplicationRef))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:e,factory:e.ɵfac})}}return e})();function g(){return new N}function E(e,p,t){return new y(e,p,t)}var m=[{provide:D,useFactory:g},{provide:r,useClass:O},{provide:l,useFactory:E,deps:[v,r,A]}],a=[{provide:u,useFactory:()=>new M},{provide:c,useValue:"BrowserAnimations"},...m],s=[{provide:u,useClass:I},{provide:c,useValue:"NoopAnimations"},...m],_=(()=>{class e{static withConfig(t){return{ngModule:e,providers:t.disableAnimations?s:a}}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:e})}static{this.ɵinj=i.ɵɵdefineInjector({providers:a,imports:[d]})}}return e})();function V(){return[...a]}var z=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:e})}static{this.ɵinj=i.ɵɵdefineInjector({providers:s,imports:[d]})}}return e})();function B(){return[...s]}export{x as ANIMATION_MODULE_TYPE,_ as BrowserAnimationsModule,z as NoopAnimationsModule,V as provideAnimations,B as provideNoopAnimations,O as ɵInjectableAnimationEngine};/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.1.0
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/