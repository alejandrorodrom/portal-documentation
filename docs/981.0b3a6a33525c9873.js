"use strict";(self.webpackChunkdividelo_documentation=self.webpackChunkdividelo_documentation||[]).push([[981],{42:(E,C,l)=>{l.d(C,{r:()=>f});var o=l(3020);const y=["*"];let f=(()=>{class p{constructor(){this.disabled=!1,this.line=!1}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-button"]],inputs:{disabled:"disabled",line:"line"},ngContentSelectors:y,decls:2,vars:3,consts:[[1,"button",3,"disabled"]],template:function(c,d){1&c&&(o.F$t(),o.TgZ(0,"button",0),o.Hsn(1),o.qZA()),2&c&&(o.ekj("button__line",d.line),o.Q6J("disabled",d.disabled))},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .button[_ngcontent-%COMP%]{background-color:#05be50;color:#fff;transition:.2s;outline:0;border:none;border-radius:4px;padding:14px 0;width:100%;font-size:14px;font-family:Geometria-Regular,monospace}[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#37cb73}[_nghost-%COMP%]   .button[_ngcontent-%COMP%]:disabled{background-color:#d9dadb;cursor:default}[_nghost-%COMP%]   .button__line[_ngcontent-%COMP%]{background-color:transparent;color:#05be50;border:solid 2px #05be50}[_nghost-%COMP%]   .button__line[_ngcontent-%COMP%]:hover{cursor:pointer;color:#3fd15a;border-color:#3fd15a;background-color:transparent}"]}),p})()},3080:(E,C,l)=>{function o(c,d,h,a,u,g,D){try{var O=c[g](D),b=O.value}catch(M){return void h(M)}O.done?d(b):Promise.resolve(b).then(a,u)}l.d(C,{P:()=>_});var f=l(3020),p=l(1015);let _=(()=>{class c{constructor(){this.textButton="Copiar"}copyCode(){var h=this;return function y(c){return function(){var d=this,h=arguments;return new Promise(function(a,u){var g=c.apply(d,h);function D(b){o(g,a,u,D,O,"next",b)}function O(b){o(g,a,u,D,O,"throw",b)}D(void 0)})}}(function*(){yield navigator.clipboard.writeText(h.code),h.textButton="\xa1Copiado!",setTimeout(()=>{h.textButton="Copiar"},1500)})()}}return c.\u0275fac=function(h){return new(h||c)},c.\u0275cmp=f.Xpm({type:c,selectors:[["app-code-block"]],inputs:{code:"code"},decls:9,vars:2,consts:[[1,"code-block"],[3,"highlight"],[1,"button"],[1,"button__action",3,"click"]],template:function(h,a){1&h&&(f.TgZ(0,"div",0)(1,"pre"),f._uU(2,"    "),f.TgZ(3,"code",1),f._uU(4,"\n    "),f.qZA(),f._uU(5,"\n  "),f.qZA(),f.TgZ(6,"div",2)(7,"button",3),f.NdJ("click",function(){return a.copyCode()}),f._uU(8),f.qZA()()()),2&h&&(f.xp6(3),f.Q6J("highlight",a.code),f.xp6(5),f.hij(" ",a.textButton," "))},dependencies:[p.y$],styles:[".code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin-bottom:-15px}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Geometria-Regular,monospace;background-color:#f5f7ff}.button[_ngcontent-%COMP%]{display:flex;justify-content:right}.button__action[_ngcontent-%COMP%]{font-size:12px;background-color:#d7d7d7;border:none;border-radius:5px;padding:8px 8px 5px;cursor:pointer;width:72px}.button__action[_ngcontent-%COMP%]:hover{background-color:#b2b5b6}"]}),c})()},360:(E,C,l)=>{l.d(C,{D:()=>d});var o=l(3020),y=l(4755),f=l(3080);function p(h,a){if(1&h&&(o.TgZ(0,"div",2)(1,"span",3),o._uU(2),o.qZA(),o.TgZ(3,"span",4),o._uU(4),o.qZA()()),2&h){const u=o.oxw();o.xp6(2),o.Oqu(u.verb),o.xp6(2),o.Oqu(u.link)}}const _=function(h,a){return{line__green:h,line__red:a}};function c(h,a){if(1&h&&(o.TgZ(0,"div",2)(1,"span",4),o._uU(2,"Response"),o.qZA(),o.TgZ(3,"span",5),o._uU(4),o.qZA()()),2&h){const u=o.oxw();o.xp6(3),o.Q6J("ngClass",o.WLB(2,_,"success"===u.responseType,"error"===u.responseType)),o.xp6(1),o.Oqu(u.responseCode)}}let d=(()=>{class h{}return h.\u0275fac=function(u){return new(u||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["app-http-block"]],inputs:{type:"type",verb:"verb",link:"link",responseType:"responseType",responseCode:"responseCode",code:"code"},decls:3,vars:3,consts:[["class","line",4,"ngIf"],[3,"code"],[1,"line"],[1,"line__green"],[1,"line__blue"],[3,"ngClass"]],template:function(u,g){1&u&&(o.YNc(0,p,5,2,"div",0),o.YNc(1,c,5,5,"div",0),o._UZ(2,"app-code-block",1)),2&u&&(o.Q6J("ngIf","request"===g.type),o.xp6(1),o.Q6J("ngIf","response"===g.type),o.xp6(1),o.Q6J("code",g.code))},dependencies:[y.mk,y.O5,f.P],styles:[".line[_ngcontent-%COMP%]{font-family:Geometria-Regular,monospace}.line[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;padding:1px 7px;color:#fff}.line[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.line__green[_ngcontent-%COMP%]{background-color:#05be50}.line__blue[_ngcontent-%COMP%]{background-color:#0039a6}.line__red[_ngcontent-%COMP%]{background-color:#f44336}"]}),h})()},8283:(E,C,l)=>{l.d(C,{a:()=>c});var o=l(3020),y=l(5030),f=l(4755);function p(d,h){1&d&&(o.TgZ(0,"span",4),o._uU(1,"*"),o.qZA())}function _(d,h){if(1&d&&(o.TgZ(0,"label",2),o.YNc(1,p,2,0,"span",3),o.TgZ(2,"span"),o._uU(3),o.qZA()()),2&d){const a=o.oxw();o.xp6(1),o.Q6J("ngIf",a.required),o.xp6(1),o.ekj("label__error",a.error),o.xp6(1),o.Oqu(a.label)}}let c=(()=>{class d{constructor(){this.type="text",this.required=!1,this.error=!1,this.disabled=!1,this.onTouch=()=>{},this.onChange=a=>{},this.onBlur=a=>{},this.onFocus=a=>{}}writeValue(a){this.value=`${a}`||""}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouch=a}setDisabledState(a){this.disabled=a}onInput(a){this.value=a.target.value,this.onChange(this.value),this.onTouch()}}return d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-input"]],inputs:{label:"label",type:"type",placeholder:"placeholder",required:"required",error:"error",disabled:"disabled"},features:[o._Bn([{provide:y.JU,useExisting:(0,o.Gpc)(()=>d),multi:!0}])],decls:2,vars:7,consts:[["class","label",4,"ngIf"],[1,"input",3,"type","placeholder","disabled","value","input"],[1,"label"],["class","label__required",4,"ngIf"],[1,"label__required"]],template:function(a,u){1&a&&(o.YNc(0,_,4,4,"label",0),o.TgZ(1,"input",1),o.NdJ("input",function(D){return u.onInput(D)}),o.qZA()),2&a&&(o.Q6J("ngIf",u.label),o.xp6(1),o.ekj("input__error",u.error),o.Q6J("type",u.type)("placeholder",u.placeholder)("disabled",u.disabled)("value",u.value?u.value:""))},dependencies:[f.O5],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{display:block;font-family:Geometria-Regular,monospace;margin-top:8px}[_nghost-%COMP%]   .label__required[_ngcontent-%COMP%]{margin-right:5px;color:red}[_nghost-%COMP%]   .label__error[_ngcontent-%COMP%]{color:red}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]{margin:8px 0;outline:0;border:solid 1px #D9DADB;border-radius:4px;padding:10px 15px;font-family:Geometria-Medium,monospace;font-size:14px;caret-color:#05be50;width:100%;box-sizing:border-box}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]::placeholder{color:#d9dadb}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]:focus{border-color:#05be50}[_nghost-%COMP%]   .input__error[_ngcontent-%COMP%]{color:red;caret-color:red;border-color:red}[_nghost-%COMP%]   .input__error[_ngcontent-%COMP%]:focus{border-color:red}[_nghost-%COMP%]   .input__error[_ngcontent-%COMP%]::placeholder{color:#ff000080}"]}),d})()},2225:(E,C,l)=>{l.d(C,{N:()=>h});var o=l(3020),y=l(4755),f=l(9744);function p(a,u){1&a&&o._UZ(0,"img",4)}function _(a,u){if(1&a&&(o.ynx(0),o.TgZ(1,"a",2),o._uU(2),o.YNc(3,p,1,0,"img",3),o.qZA(),o.BQk()),2&a){const g=o.oxw();o.xp6(1),o.ekj("link__no-underline",g.noUnderline),o.uIk("href",g.href,o.LSH),o.xp6(1),o.hij(" ",g.text," "),o.xp6(1),o.Q6J("ngIf",g.withArrow)}}function c(a,u){1&a&&o._UZ(0,"img",4)}function d(a,u){if(1&a&&(o.TgZ(0,"a",5),o._uU(1),o.YNc(2,c,1,0,"img",3),o.qZA()),2&a){const g=o.oxw();o.ekj("link__no-underline",g.noUnderline),o.Q6J("routerLink",g.href),o.xp6(1),o.hij(" ",g.text," "),o.xp6(1),o.Q6J("ngIf",g.withArrow)}}let h=(()=>{class a{constructor(){this.text="Ver m\xe1s",this.withArrow=!1,this.noUnderline=!1,this.download=!1}}return a.\u0275fac=function(g){return new(g||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-link"]],inputs:{text:"text",href:"href",withArrow:"withArrow",noUnderline:"noUnderline",download:"download"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notDownload",""],["download","",1,"link"],["class","link__arrow","src","assets/icons/arrow.svg","alt","arrow",4,"ngIf"],["src","assets/icons/arrow.svg","alt","arrow",1,"link__arrow"],[1,"link",3,"routerLink"]],template:function(g,D){if(1&g&&(o.YNc(0,_,4,5,"ng-container",0),o.YNc(1,d,3,5,"ng-template",null,1,o.W1O)),2&g){const O=o.MAs(2);o.Q6J("ngIf",D.download)("ngIfElse",O)}},dependencies:[y.O5,f.rH],styles:[".link[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;color:#05be50;font-family:Geometria-Medium,monospace;font-size:16px;cursor:pointer}.link__arrow[_ngcontent-%COMP%]{vertical-align:middle}.link__no-underline[_ngcontent-%COMP%]{text-decoration:none}"]}),a})()},5581:(E,C,l)=>{l.d(C,{w:()=>f});var o=l(3020);const y=["*"];let f=(()=>{class p{constructor(){this.opaque=!1,this.noMargin=!1}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-paragraph"]],inputs:{opaque:"opaque",noMargin:"noMargin"},ngContentSelectors:y,decls:2,vars:4,consts:[[1,"paragraph"]],template:function(c,d){1&c&&(o.F$t(),o.TgZ(0,"p",0),o.Hsn(1),o.qZA()),2&c&&o.ekj("paragraph__opaque",d.opaque)("paragraph__no-margin",d.noMargin)},styles:[".paragraph{font-family:Geometria-Regular,monospace;font-size:16px}.paragraph__opaque{color:gray;font-style:italic}.paragraph__no-margin{margin:0}.paragraph .blue{font-family:Geometria-Medium,monospace;color:#0039a6}.paragraph .bold{font-family:Geometria-Medium,monospace}.paragraph a{color:#05be50;font-family:Geometria-Medium,monospace}\n"],encapsulation:2}),p})()},1094:(E,C,l)=>{l.d(C,{H:()=>f});var o=l(3020);const y=["*"];let f=(()=>{class p{constructor(){this.noMargin=!1,this.noMarginBottom=!1,this.opaque=!1,this.secondLevel=!1}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-subtitle"]],inputs:{noMargin:"noMargin",noMarginBottom:"noMarginBottom",opaque:"opaque",secondLevel:"secondLevel"},ngContentSelectors:y,decls:2,vars:8,consts:[[1,"subtitle"]],template:function(c,d){1&c&&(o.F$t(),o.TgZ(0,"h3",0),o.Hsn(1),o.qZA()),2&c&&o.ekj("subtitle__no-margin",d.noMargin)("subtitle__no-margin-bottom",d.noMarginBottom)("subtitle__opaque",d.opaque)("subtitle__second-level",d.secondLevel)},styles:[".subtitle[_ngcontent-%COMP%]{font-family:Geometria-Medium,monospace;font-size:19px}.subtitle__no-margin[_ngcontent-%COMP%]{margin:0}.subtitle__no-margin-bottom[_ngcontent-%COMP%]{margin-bottom:0}.subtitle__second-level[_ngcontent-%COMP%]{font-size:16px}.subtitle__opaque[_ngcontent-%COMP%]{color:gray}"]}),p})()},9896:(E,C,l)=>{l.d(C,{r:()=>f});var o=l(3020);const y=["*"];let f=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=o.Xpm({type:p,selectors:[["app-title"]],ngContentSelectors:y,decls:2,vars:0,consts:[[1,"title"]],template:function(c,d){1&c&&(o.F$t(),o.TgZ(0,"h1",0),o.Hsn(1),o.qZA())},styles:[".title[_ngcontent-%COMP%]{font-family:Geometria-Medium,monospace;font-size:32px;padding-bottom:15px;border-bottom:1px solid #9a9a9a}"]}),p})()},5030:(E,C,l)=>{l.d(C,{NI:()=>pe,u:()=>_e,cw:()=>W,sg:()=>Q,u5:()=>Vn,JU:()=>M,JJ:()=>Ye,JL:()=>We,UX:()=>bn,Q7:()=>K,kI:()=>Nt,_Y:()=>st});var o=l(3020),y=l(4755),f=l(2076),p=l(9751),_=l(4742),c=l(8421),d=l(7669),h=l(5403),a=l(3268),u=l(1810),D=l(4004);let O=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),b=(()=>{class n extends O{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const M=new o.OlP("NgValueAccessor"),Ot={provide:M,useExisting:(0,o.Gpc)(()=>ee),multi:!0},Ft=new o.OlP("CompositionEventMode");let ee=(()=>{class n extends O{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Et(){const n=(0,y.q)()?(0,y.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Ft,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ot]),o.qOj]}),n})();function F(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function be(n){return null!=n&&"number"==typeof n.length}const v=new o.OlP("NgValidators"),w=new o.OlP("NgAsyncValidators"),wt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Nt{static min(t){return function Me(n){return t=>{if(F(t.value)||F(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function Ae(n){return t=>{if(F(t.value)||F(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return De(t)}static requiredTrue(t){return function Oe(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ee(n){return F(n.value)||wt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Fe(n){return t=>F(t.value)||!be(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function we(n){return t=>be(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Ne(n){if(!n)return R;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(F(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return ke(t)}static composeAsync(t){return Te(t)}}function De(n){return F(n.value)?{required:!0}:null}function R(n){return null}function Se(n){return null!=n}function xe(n){return(0,o.QGY)(n)?(0,f.D)(n):n}function Pe(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Be(n,t){return t.map(e=>e(n))}function Ge(n){return n.map(t=>function St(n){return!n.validate}(t)?t:e=>t.validate(e))}function ke(n){if(!n)return null;const t=n.filter(Se);return 0==t.length?null:function(e){return Pe(Be(e,t))}}function te(n){return null!=n?ke(Ge(n)):null}function Te(n){if(!n)return null;const t=n.filter(Se);return 0==t.length?null:function(e){return function g(...n){const t=(0,d.jO)(n),{args:e,keys:r}=(0,_.D)(n),i=new p.y(s=>{const{length:m}=e;if(!m)return void s.complete();const A=new Array(m);let P=m,G=m;for(let X=0;X<m;X++){let ve=!1;(0,c.Xf)(e[X]).subscribe((0,h.x)(s,Mn=>{ve||(ve=!0,G--),A[X]=Mn},()=>P--,void 0,()=>{(!P||!ve)&&(G||s.next(r?(0,u.n)(r,A):A),s.complete())}))}});return t?i.pipe((0,a.Z)(t)):i}(Be(e,t).map(xe)).pipe((0,D.U)(Pe))}}function ne(n){return null!=n?Te(Ge(n)):null}function Ie(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ue(n){return n._rawValidators}function He(n){return n._rawAsyncValidators}function oe(n){return n?Array.isArray(n)?n:[n]:[]}function L(n,t){return Array.isArray(n)?n.includes(t):n===t}function Re(n,t){const e=oe(t);return oe(n).forEach(i=>{L(e,i)||e.push(i)}),e}function Le(n,t){return oe(t).filter(e=>!L(n,e))}class je{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=te(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class V extends je{get formDirective(){return null}get path(){return null}}class N extends je{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class qe{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ye=(()=>{class n extends qe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(N,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),We=(()=>{class n extends qe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(V,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const k="VALID",q="INVALID",B="PENDING",T="DISABLED";function se(n){return(Y(n)?n.validators:n)||null}function ae(n,t){return(Y(t)?t.asyncValidators:n)||null}function Y(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Je{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===k}get invalid(){return this.status===q}get pending(){return this.status==B}get disabled(){return this.status===T}get enabled(){return this.status!==T}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Re(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Re(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Le(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Le(t,this._rawAsyncValidators))}hasValidator(t){return L(this._rawValidators,t)}hasAsyncValidator(t){return L(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=B,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=T,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=k,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===B)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=B,this._hasOwnPendingAsyncValidator=!0;const e=xe(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?T:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(B)?B:this._anyControlsHaveStatus(q)?q:k}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Y(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Gt(n){return Array.isArray(n)?te(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function kt(n){return Array.isArray(n)?ne(n):n||null}(this._rawAsyncValidators)}}class W extends Je{constructor(t,e,r){super(se(e),ae(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function Ze(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function ze(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const S=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>I}),I="always";function U(n,t,e=I){le(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Ut(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Qe(n,t)})}(n,t),function Rt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Ht(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function It(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function z(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),J(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Z(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function le(n,t){const e=Ue(n);null!==t.validator?n.setValidators(Ie(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=He(n);null!==t.asyncValidator?n.setAsyncValidators(Ie(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();Z(t._rawValidators,i),Z(t._rawAsyncValidators,i)}function J(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ue(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(m=>m!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=He(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(m=>m!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return Z(t._rawValidators,r),Z(t._rawAsyncValidators,r),e}function Qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function et(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function tt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const pe=class extends Je{constructor(t=null,e,r){super(se(e),ae(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=tt(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){et(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){et(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){tt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const fe=new o.OlP("NgModelWithFormControlWarning"),tn={provide:V,useExisting:(0,o.Gpc)(()=>Q)};let Q=(()=>{class n extends V{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(J(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return U(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){z(e.control||null,e,!1),function Yt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function Xe(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(z(r||null,e),(n=>n instanceof pe)(i)&&(U(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Ke(n,t){le(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Lt(n,t){return J(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){le(this.form,this),this._oldForm&&J(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(v,10),o.Y36(w,10),o.Y36(S,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([tn]),o.qOj,o.TTD]}),n})();const rn={provide:N,useExisting:(0,o.Gpc)(()=>_e)};let _e=(()=>{class n extends N{set isDisabled(e){}constructor(e,r,i,s,m){super(),this._ngModelWarningConfig=m,this._added=!1,this.name=null,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function de(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===ee?e=s:function qt(n){return Object.getPrototypeOf(n.constructor)===b}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function ce(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function $(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(V,13),o.Y36(v,10),o.Y36(w,10),o.Y36(M,10),o.Y36(fe,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([rn]),o.qOj,o.TTD]}),n})(),x=(()=>{class n{constructor(){this._validator=R}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):R,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const fn={provide:v,useExisting:(0,o.Gpc)(()=>K),multi:!0};let K=(()=>{class n extends x{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=e=>De}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([fn]),o.qOj]}),n})(),At=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[lt]}),n})(),Vn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:S,useValue:e.callSetDisabledState??I}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[At]}),n})(),bn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:fe,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:S,useValue:e.callSetDisabledState??I}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[At]}),n})()}}]);