(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0/Qz":function(e,t,n){"use strict";n.r(t),n.d(t,"TakeLastModule",(function(){return g}));var a=n("tyNb");class s{constructor(){this.fruits=["apple","apple","banana","apple","banana"],this.expectedFruits=["banana","apple","banana"],this.code='const fruits = from([\n        "apple",\n        "apple",\n        "banana",\n        "apple",\n        "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2}}var r=n("fXoL"),i=n("VIrA"),c=n("sYmb"),o=n("ofXK"),b=n("OtPg"),l=n("uzYf");function p(e,t){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.lc(2,"Nur das letzte bitte!"),r.Mb(),r.Nb(3,"p"),r.lc(4,"Verwende den "),r.Nb(5,"code",4),r.lc(6,"takeLast"),r.Mb(),r.lc(7," Operator, um nur eine bestimmte Anzahl der letzten Fr\xfcchte auf das Flie\xdfband zu legen. "),r.Nb(8,"a",5),r.lc(9,"(Mehr Infos zu takeLast)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Yb();const e=r.dc(6);r.Ab(5),r.bc("appTooltip",e)}}function u(e,t){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.lc(2,"Only the last please!"),r.Mb(),r.Nb(3,"p"),r.lc(4,"Use the "),r.Nb(5,"code",4),r.lc(6,"takeLast"),r.Mb(),r.lc(7," operator to put only a certain number of the last fruits on the conveyor belt. "),r.Nb(8,"a",5),r.lc(9," (Learn more about takeLast)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Yb();const e=r.dc(6);r.Ab(5),r.bc("appTooltip",e)}}const h=[{path:"",component:(()=>{class e{constructor(e,t){this.exerciseService=e,this.translateService=t,this.exerciseTitle="takeLast",this.takeLastCode="\n  of(1, 2, 3, 4, 5).pipe(\n    takeLast(1)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 5\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new s),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(i.a),r.Kb(c.d))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-take-last"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/takeLast","target","_blank"]],template:function(e,t){1&e&&(r.Nb(0,"h3"),r.lc(1),r.Zb(2,"translate"),r.Mb(),r.kc(3,p,10,1,"div",0),r.kc(4,u,10,1,"div",0),r.Nb(5,"div",1,2),r.Nb(7,"pre"),r.lc(8,"        "),r.Lb(9,"code",3),r.lc(10,"\n    "),r.Mb(),r.Mb()),2&e&&(r.Ab(1),r.oc("",r.ac(2,5,"EXERCISES.EXERCISETITLE"),": ",t.exerciseTitle,""),r.Ab(2),r.bc("ngIf","de"===t.currentLanguage),r.Ab(1),r.bc("ngIf","en"===t.currentLanguage),r.Ab(5),r.bc("highlight",t.takeLastCode))},directives:[o.j,b.b,l.a],pipes:[c.c],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[a.b.forChild(h)],a.b]}),e})();var f=n("PCNd");let g=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[f.a,d]]}),e})()}}]);