(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{zcjo:function(e,n,i){"use strict";i.r(n),i.d(n,"SkipTakeMapModule",(function(){return q}));var t=i("iInd");class c{constructor(){this.fruits=["dirty-apple","apple","dirty-banana","dirty-banana","apple"],this.expectedFruits=["banana"],this.code='const fruits = from([\n    "dirty-apple",\n    "apple",\n    "dirty-banana",\n    "dirty-banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2}}var a=i("8Y7J"),o=i("VIrA"),r=i("TSSN"),s=i("SVse"),p=i("dJsq"),b=i("uzYf");function u(e,n){if(1&e&&(a.Pb(0,"div"),a.Pb(1,"p"),a.qc(2,"Eine \xfcberm\xe4\xdfige Lieferung!"),a.Ob(),a.Pb(3,"p"),a.qc(4,"Du m\xf6chtest einfach nur eine Banane. Die Lieferung beinhaltet allerdings zu viel unn\xf6tige Fr\xfcchte. Verwende jetzt alle bisher gelernten Operatoren "),a.Pb(5,"code",6),a.qc(6,"skip"),a.Ob(),a.qc(7,", "),a.Pb(8,"code",6),a.qc(9,"take"),a.Ob(),a.qc(10," und "),a.Pb(11,"code",6),a.qc(12,"map"),a.Ob(),a.qc(13," nacheinander in der Pipe-Funktion."),a.Ob(),a.Ob()),2&e){a.bc();const e=a.ic(7),n=a.ic(13),i=a.ic(19);a.Bb(5),a.gc("appTooltip",e),a.Bb(3),a.gc("appTooltip",n),a.Bb(3),a.gc("appTooltip",i)}}function d(e,n){if(1&e&&(a.Pb(0,"div"),a.Pb(1,"p"),a.qc(2,"An excessive delivery!"),a.Ob(),a.Pb(3,"p"),a.qc(4,"You just want a banana. However, the delivery contains too much unnecessary fruit. Now use all operators that have been learned so far "),a.Pb(5,"code",6),a.qc(6,"skip"),a.Ob(),a.qc(7,", "),a.Pb(8,"code",6),a.qc(9,"take"),a.Ob(),a.qc(10," and "),a.Pb(11,"code",6),a.qc(12,"map"),a.Ob(),a.qc(13," one after the other in the pipe function."),a.Ob(),a.Ob()),2&e){a.bc();const e=a.ic(7),n=a.ic(13),i=a.ic(19);a.Bb(5),a.gc("appTooltip",e),a.Bb(3),a.gc("appTooltip",n),a.Bb(3),a.gc("appTooltip",i)}}function l(e,n){if(1&e&&(a.Pb(0,"div"),a.Pb(1,"p"),a.qc(2,"\u6c34\u679c\u8fd0\u9001\u8fc7\u591a\uff01"),a.Ob(),a.Pb(3,"p"),a.qc(4,"\u4f60\u53ea\u60f3\u8981\u4e00\u6839\u9999\u8549\u3002\u7136\u800c\uff0c\u5728\u6c34\u679c\u8fd0\u9001\u4e2d\u8fd8\u5305\u542b\u8fc7\u591a\u4e0d\u5fc5\u8981\u7684\u6c34\u679c\u3002\u5728 pipe \u51fd\u6570\u4e2d\u4f7f\u7528\u5230\u76ee\u524d\u4e3a\u6b62\u5df2\u638c\u63e1\u7684\u6240\u6709\u8fd0\u7b97\u7b26 "),a.Pb(5,"code",6),a.qc(6,"skip"),a.Ob(),a.qc(7,"\uff0c "),a.Pb(8,"code",6),a.qc(9,"take"),a.Ob(),a.qc(10," \u548c "),a.Pb(11,"code",6),a.qc(12,"map"),a.Ob(),a.qc(13," \u3002"),a.Ob(),a.Ob()),2&e){a.bc();const e=a.ic(7),n=a.ic(13),i=a.ic(19);a.Bb(5),a.gc("appTooltip",e),a.Bb(3),a.gc("appTooltip",n),a.Bb(3),a.gc("appTooltip",i)}}const g=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="skip-take-map",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.mapCode="\n  const source = from([1, 2, 3, 4, 5]);\n  source.pipe(\n    map(data => 'My Number is ' + data)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // My Number is 1\n  // My Number is 2\n  // My Number is 3\n  // My Number is 4\n  // My Number is 5\n    ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(a.Mb(o.a),a.Mb(r.d))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-skip-take-map"]],decls:24,vars:10,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["takeTooltip",""],["mapTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(a.Pb(0,"h3"),a.qc(1),a.cc(2,"translate"),a.Ob(),a.pc(3,u,14,3,"div",0),a.pc(4,d,14,3,"div",0),a.pc(5,l,14,3,"div",0),a.Pb(6,"div",1,2),a.Pb(8,"pre"),a.qc(9,"        "),a.Nb(10,"code",3),a.qc(11,"\n    "),a.Ob(),a.Ob(),a.Pb(12,"div",1,4),a.Pb(14,"pre"),a.qc(15,"        "),a.Nb(16,"code",3),a.qc(17,"\n    "),a.Ob(),a.Ob(),a.Pb(18,"div",1,5),a.Pb(20,"pre"),a.qc(21,"        "),a.Nb(22,"code",3),a.qc(23,"\n    "),a.Ob(),a.Ob()),2&e&&(a.Bb(1),a.tc("",a.dc(2,8,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),a.Bb(2),a.gc("ngIf","de"===n.currentLanguage),a.Bb(1),a.gc("ngIf","en"===n.currentLanguage),a.Bb(1),a.gc("ngIf","zh_CN"===n.currentLanguage),a.Bb(5),a.gc("highlight",n.skipCode),a.Bb(6),a.gc("highlight",n.takeCode),a.Bb(6),a.gc("highlight",n.mapCode))},directives:[s.j,p.b,b.a],pipes:[r.c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(n){return new(n||e)},imports:[[t.d.forChild(g)],t.d]}),e})();var f=i("PCNd");let q=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(n){return new(n||e)},imports:[[f.a,h]]}),e})()}}]);