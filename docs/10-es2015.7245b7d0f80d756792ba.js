(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{eyxc:function(e,n,t){"use strict";t.r(n),t.d(n,"DistinctuntilchangedModule",(function(){return f}));var i=t("tyNb");class r{constructor(){this.fruits=["banana","apple","apple","banana","banana"],this.expectedFruits=["banana","apple","banana"],this.code='const fruits = from([\n    "banana",\n    "apple",\n    "apple",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2}}var a=t("fXoL"),c=t("VIrA"),s=t("sYmb"),o=t("ofXK"),b=t("OtPg"),l=t("uzYf");function d(e,n){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"p"),a.lc(2,"Eins nach dem anderen! Einige Fr\xfcchte kommen doppelt hintereinander. Wir brauchen allerdings die Fr\xfcchte abwechselnd."),a.Mb(),a.Nb(3,"p"),a.lc(4,"In unserem Fall hilft uns der "),a.Nb(5,"code",4),a.lc(6,"distinctUntilChanged"),a.Mb(),a.lc(7,"-Operator. Er verhindert, dass in unserem Datenstrom doppelte Fr\xfcchte direkt hintereinander geliefert werden. "),a.Nb(8,"a",5),a.lc(9,"(Mehr Infos zu distinctUntilChanged)"),a.Mb(),a.Mb(),a.Mb()),2&e){a.Yb();const e=a.dc(6);a.Ab(5),a.bc("appTooltip",e)}}function p(e,n){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"p"),a.lc(2,"One after the other! Some fruits come twice in a row. However, we need the fruits alternately."),a.Mb(),a.Nb(3,"p"),a.lc(4,"In our case, the "),a.Nb(5,"code",4),a.lc(6,"distinctUntilChanged"),a.Mb(),a.lc(7," operator helps us. It prevents duplicate fruits from being delivered one after the other in our data stream. "),a.Nb(8,"a",5),a.lc(9,"(Learn more about distinctUntilChanged)"),a.Mb(),a.Mb(),a.Mb()),2&e){a.Yb();const e=a.dc(6);a.Ab(5),a.bc("appTooltip",e)}}const u=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="distinctUntilChanged",this.distinctUntilChangedCode="\n  of(1, 1, 2, 1, 3, 4).pipe(\n    distinctUntilChanged()\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 1\n  // 3\n  // 4\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new r),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(a.Kb(c.a),a.Kb(s.d))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-distinctuntilchanged"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/distinctUntilChanged","target","_blank"]],template:function(e,n){1&e&&(a.Nb(0,"h3"),a.lc(1),a.Zb(2,"translate"),a.Mb(),a.kc(3,d,10,1,"div",0),a.kc(4,p,10,1,"div",0),a.Nb(5,"div",1,2),a.Nb(7,"pre"),a.lc(8,"        "),a.Lb(9,"code",3),a.lc(10,"\n    "),a.Mb(),a.Mb()),2&e&&(a.Ab(1),a.oc("",a.ac(2,5,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),a.Ab(2),a.bc("ngIf","de"===n.currentLanguage),a.Ab(1),a.bc("ngIf","en"===n.currentLanguage),a.Ab(5),a.bc("highlight",n.distinctUntilChangedCode))},directives:[o.j,b.b,l.a],pipes:[s.c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(n){return new(n||e)},imports:[[i.b.forChild(u)],i.b]}),e})();var g=t("PCNd");let f=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(n){return new(n||e)},imports:[[g.a,h]]}),e})()}}]);