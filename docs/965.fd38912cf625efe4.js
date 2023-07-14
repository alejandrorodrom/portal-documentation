"use strict";(self.webpackChunkdividelo_documentation=self.webpackChunkdividelo_documentation||[]).push([[965],{3080:(f,d,c)=>{function e(p,r,o,n,i,t,l){try{var u=p[t](l),g=u.value}catch(C){return void o(C)}u.done?r(g):Promise.resolve(g).then(n,i)}c.d(d,{P:()=>_});var s=c(3020),m=c(1015);let _=(()=>{class p{constructor(){this.textButton="Copiar"}copyCode(){var o=this;return function a(p){return function(){var r=this,o=arguments;return new Promise(function(n,i){var t=p.apply(r,o);function l(g){e(t,n,i,l,u,"next",g)}function u(g){e(t,n,i,l,u,"throw",g)}l(void 0)})}}(function*(){yield navigator.clipboard.writeText(o.code),o.textButton="\xa1Copiado!",setTimeout(()=>{o.textButton="Copiar"},1500)})()}}return p.\u0275fac=function(o){return new(o||p)},p.\u0275cmp=s.Xpm({type:p,selectors:[["app-code-block"]],inputs:{code:"code"},decls:9,vars:2,consts:[[1,"code-block"],[3,"highlight"],[1,"button"],[1,"button__action",3,"click"]],template:function(o,n){1&o&&(s.TgZ(0,"div",0)(1,"pre"),s._uU(2,"    "),s.TgZ(3,"code",1),s._uU(4,"\n    "),s.qZA(),s._uU(5,"\n  "),s.qZA(),s.TgZ(6,"div",2)(7,"button",3),s.NdJ("click",function(){return n.copyCode()}),s._uU(8),s.qZA()()()),2&o&&(s.xp6(3),s.Q6J("highlight",n.code),s.xp6(5),s.hij(" ",n.textButton," "))},dependencies:[m.y$],styles:[".code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin-bottom:-15px}.code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:Geometria-Regular,monospace;background-color:#f5f7ff}.button[_ngcontent-%COMP%]{display:flex;justify-content:right}.button__action[_ngcontent-%COMP%]{font-size:12px;background-color:#d7d7d7;border:none;border-radius:5px;padding:8px 8px 5px;cursor:pointer;width:72px}.button__action[_ngcontent-%COMP%]:hover{background-color:#b2b5b6}"]}),p})()},360:(f,d,c)=>{c.d(d,{D:()=>r});var e=c(3020),a=c(4755),s=c(3080);function m(o,n){if(1&o&&(e.TgZ(0,"div",2)(1,"span",3),e._uU(2),e.qZA(),e.TgZ(3,"span",4),e._uU(4),e.qZA()()),2&o){const i=e.oxw();e.xp6(2),e.Oqu(i.verb),e.xp6(2),e.Oqu(i.link)}}const _=function(o,n){return{line__green:o,line__red:n}};function p(o,n){if(1&o&&(e.TgZ(0,"div",2)(1,"span",4),e._uU(2,"Response"),e.qZA(),e.TgZ(3,"span",5),e._uU(4),e.qZA()()),2&o){const i=e.oxw();e.xp6(3),e.Q6J("ngClass",e.WLB(2,_,"success"===i.responseType,"error"===i.responseType)),e.xp6(1),e.Oqu(i.responseCode)}}let r=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-http-block"]],inputs:{type:"type",verb:"verb",link:"link",responseType:"responseType",responseCode:"responseCode",code:"code"},decls:3,vars:3,consts:[["class","line",4,"ngIf"],[3,"code"],[1,"line"],[1,"line__green"],[1,"line__blue"],[3,"ngClass"]],template:function(i,t){1&i&&(e.YNc(0,m,5,2,"div",0),e.YNc(1,p,5,5,"div",0),e._UZ(2,"app-code-block",1)),2&i&&(e.Q6J("ngIf","request"===t.type),e.xp6(1),e.Q6J("ngIf","response"===t.type),e.xp6(1),e.Q6J("code",t.code))},dependencies:[a.mk,a.O5,s.P],styles:[".line[_ngcontent-%COMP%]{font-family:Geometria-Regular,monospace}.line[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-block;border-radius:4px;padding:1px 7px;color:#fff}.line[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}.line__green[_ngcontent-%COMP%]{background-color:#05be50}.line__blue[_ngcontent-%COMP%]{background-color:#0039a6}.line__red[_ngcontent-%COMP%]{background-color:#f44336}"]}),o})()},2225:(f,d,c)=>{c.d(d,{N:()=>o});var e=c(3020),a=c(4755),s=c(9744);function m(n,i){1&n&&e._UZ(0,"img",4)}function _(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"a",2),e._uU(2),e.YNc(3,m,1,0,"img",3),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.ekj("link__no-underline",t.noUnderline),e.uIk("href",t.href,e.LSH),e.xp6(1),e.hij(" ",t.text," "),e.xp6(1),e.Q6J("ngIf",t.withArrow)}}function p(n,i){1&n&&e._UZ(0,"img",4)}function r(n,i){if(1&n&&(e.TgZ(0,"a",5),e._uU(1),e.YNc(2,p,1,0,"img",3),e.qZA()),2&n){const t=e.oxw();e.ekj("link__no-underline",t.noUnderline),e.Q6J("routerLink",t.href),e.xp6(1),e.hij(" ",t.text," "),e.xp6(1),e.Q6J("ngIf",t.withArrow)}}let o=(()=>{class n{constructor(){this.text="Ver m\xe1s",this.withArrow=!1,this.noUnderline=!1,this.download=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-link"]],inputs:{text:"text",href:"href",withArrow:"withArrow",noUnderline:"noUnderline",download:"download"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notDownload",""],["download","",1,"link"],["class","link__arrow","src","assets/icons/arrow.svg","alt","arrow",4,"ngIf"],["src","assets/icons/arrow.svg","alt","arrow",1,"link__arrow"],[1,"link",3,"routerLink"]],template:function(t,l){if(1&t&&(e.YNc(0,_,4,5,"ng-container",0),e.YNc(1,r,3,5,"ng-template",null,1,e.W1O)),2&t){const u=e.MAs(2);e.Q6J("ngIf",l.download)("ngIfElse",u)}},dependencies:[a.O5,s.rH],styles:[".link[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;color:#05be50;font-family:Geometria-Medium,monospace;font-size:16px;cursor:pointer}.link__arrow[_ngcontent-%COMP%]{vertical-align:middle}.link__no-underline[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()},5271:(f,d,c)=>{c.d(d,{H:()=>o});var e=c(3020),a=c(5030),s=c(4755);let m=(()=>{class n{constructor(t){this.el=t,this.outsideClick=new e.vpe}handleClick(t){this.el.nativeElement.contains(t.target)||this.outsideClick.emit(!0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","appClick",""]],hostBindings:function(t,l){1&t&&e.NdJ("click",function(g){return l.handleClick(g)},!1,e.evT)},outputs:{outsideClick:"outsideClick"}}),n})();function _(n,i){if(1&n&&(e.TgZ(0,"div",6),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.label,"\n")}}function p(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",9),e.NdJ("click",function(){const g=e.CHM(t).$implicit,C=e.oxw(2);return e.KtG(C.select(g.value))}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit;e.ekj("option__selected",t.selected),e.xp6(1),e.hij(" ",t.label," ")}}function r(n,i){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,p,2,3,"div",8),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.options)}}let o=(()=>{class n{constructor(){this.disabled=!1,this.selected=new e.vpe,this.openSelect=!1,this.onTouch=()=>{},this.onChange=t=>{},this.onBlur=t=>{},this.onFocus=t=>{}}writeValue(t){this.value=`${t}`||""}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouch=t}setDisabledState(t){this.disabled=t}ngOnInit(){this.selectedOption=this.getDefaultOption()}getDefaultOption(){return this.options.find(l=>!0===l.selected)||this.options[0]}swapSelect(){this.openSelect=!this.openSelect}close(){this.openSelect=!1}select(t){this.selectedOption=this.options.find(l=>l.value===t),this.options.map(l=>l.selected=!1),this.selectedOption.selected=!0,this.close(),this.value=this.selectedOption.value,this.onChange(this.selectedOption.value),this.onTouch(),this.selected.emit(!0)}outsideClick(){this.close()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-select"]],inputs:{label:"label",options:"options",disabled:"disabled"},outputs:{selected:"selected"},features:[e._Bn([{provide:a.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:7,vars:5,consts:[["class","label",4,"ngIf"],["appClick","",1,"select",3,"click","outsideClick"],[1,"select__label"],[1,"select__icon"],["src","assets/icons/arrow.svg","alt","arrow"],["class","select__options",4,"ngIf"],[1,"label"],[1,"select__options"],["class","option",3,"option__selected","click",4,"ngFor","ngForOf"],[1,"option",3,"click"]],template:function(t,l){1&t&&(e.YNc(0,_,2,1,"div",0),e.TgZ(1,"div",1),e.NdJ("click",function(){return l.swapSelect()})("outsideClick",function(){return l.outsideClick()}),e.TgZ(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"img",4),e.qZA(),e.YNc(6,r,2,1,"div",5),e.qZA()),2&t&&(e.Q6J("ngIf",l.label),e.xp6(3),e.hij(" ",l.selectedOption.label," "),e.xp6(2),e.Udp("transform",l.openSelect?"rotate(-90deg)":"rotate(90deg)"),e.xp6(1),e.Q6J("ngIf",l.openSelect))},dependencies:[s.sg,s.O5,m],styles:["[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{display:block;font-family:Geometria-Regular,monospace;margin-top:8px}[_nghost-%COMP%]   .select[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center;justify-content:space-between;transition:all .2s ease 0s;outline:none;border:1px solid rgb(217,218,219);border-radius:4px;background-color:#fff;cursor:pointer;padding:10px 8px 10px 13px;width:100%;font-family:Geometria-Medium,monospace;font-size:14px;box-sizing:border-box;margin:8px 0 16px;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   .select__label[_ngcontent-%COMP%]{max-width:calc(100% - 26px);overflow:hidden;white-space:nowrap;font-family:Geometria-Medium,monospace}[_nghost-%COMP%]   .select__icon[_ngcontent-%COMP%]{height:18px}[_nghost-%COMP%]   .select__icon[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:18px}[_nghost-%COMP%]   .select__options[_ngcontent-%COMP%]{position:absolute;left:0;z-index:100;background-color:#fff;width:100%;overflow-y:auto;max-height:178px;top:calc(100% + 1px);border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:#636363 0 2px 4px -2px;-webkit-user-select:none;user-select:none}[_nghost-%COMP%]   .select__options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{display:block;transition:all .2s ease 0s;padding:8px 8px 8px 13px;border-bottom:1px solid rgb(217,218,219);font-family:Geometria-Medium,monospace}[_nghost-%COMP%]   .select__options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover{cursor:pointer;color:#05be50;background-color:#f9f9f9}[_nghost-%COMP%]   .select__options[_ngcontent-%COMP%]   .option__selected[_ngcontent-%COMP%]{color:#05be50;background-color:#f9f9f9}"]}),n})()},257:(f,d,c)=>{c.d(d,{q:()=>m});var e=c(2910),a=c(3020);const s=["*"];let m=(()=>{class _{getToastColor(r){switch(r){case e.p.ERROR:return"#FBCCDA";case e.p.WARN:return"#FFEFCA";case e.p.INFO:return"#E0F0FA"}}getIconUrl(r){switch(r){case e.p.ERROR:return"assets/images/toast/error.svg";case e.p.WARN:return"assets/images/toast/info.svg";case e.p.INFO:return"assets/images/toast/info_blue.svg"}}}return _.\u0275fac=function(r){return new(r||_)},_.\u0275cmp=a.Xpm({type:_,selectors:[["app-toast"]],inputs:{type:"type"},ngContentSelectors:s,decls:4,vars:3,consts:[[1,"toast"],["alt","toast icon",1,"toast__icon",3,"src"],[1,"toast__message"]],template:function(r,o){1&r&&(a.F$t(),a.TgZ(0,"div",0),a._UZ(1,"img",1),a.TgZ(2,"div",2),a.Hsn(3),a.qZA()()),2&r&&(a.Udp("background-color",o.getToastColor(o.type)),a.xp6(1),a.Q6J("src",o.getIconUrl(o.type),a.LSH))},styles:[".toast[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;margin-top:23px;border-radius:4px;background-color:#ffefca;padding:16px;font-family:Geometria-Regular,monospace}.toast__icon[_ngcontent-%COMP%]{margin-right:7px}.toast__message[_ngcontent-%COMP%]{margin-top:2px;text-align:left;font-size:14px}"]}),_})()},2910:(f,d,c)=>{c.d(d,{p:()=>e});var e=(()=>((e=e||{}).ERROR="ERROR",e.WARN="WARN",e.INFO="INFO",e))()}}]);