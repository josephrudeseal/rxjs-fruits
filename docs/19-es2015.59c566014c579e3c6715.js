(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7rQJ":function(e,n,t){"use strict";t.r(n),t.d(n,"SkiplastSkipMergeModule",(function(){return m}));var i=t("iInd");class a{constructor(){this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2}}var c=t("8Y7J"),s=t("VIrA"),o=t("TSSN"),p=t("SVse"),r=t("dJsq"),b=t("uzYf");function d(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Gib dem Chaos keine Chance!"),c.Ob(),c.Pb(3,"p"),c.qc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),c.Pb(5,"code",6),c.qc(6,"skipLast"),c.Ob(),c.qc(7,"- und "),c.Pb(8,"code",6),c.qc(9,"skip"),c.Ob(),c.qc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),c.Pb(11,"code",6),c.qc(12,"merge"),c.Ob(),c.qc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),c.Ob(),c.Ob()),2&e){c.bc();const e=c.ic(13),n=c.ic(7),t=c.ic(19);c.Bb(5),c.gc("appTooltip",e),c.Bb(3),c.gc("appTooltip",n),c.Bb(3),c.gc("appTooltip",t)}}function l(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Don't give chaos a chance!"),c.Ob(),c.Pb(3,"p"),c.qc(4,"You received two deliveries. Take only usable fruit with the "),c.Pb(5,"code",6),c.qc(6,"skipLast"),c.Ob(),c.qc(7," and "),c.Pb(8,"code",6),c.qc(9,"skip"),c.Ob(),c.qc(10," operator. Then replace the empty observable with the "),c.Pb(11,"code",6),c.qc(12,"merge"),c.Ob(),c.qc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),c.Ob(),c.Ob()),2&e){c.bc();const e=c.ic(13),n=c.ic(7),t=c.ic(19);c.Bb(5),c.gc("appTooltip",e),c.Bb(3),c.gc("appTooltip",n),c.Bb(3),c.gc("appTooltip",t)}}function g(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"\u4e0d\u8981\u628a\u6c34\u679c\u641e\u6df7\u4e71\u4e86\uff01"),c.Ob(),c.Pb(3,"p"),c.qc(4,"\u4f60\u6709\u4e24\u4e2a\u4f9b\u8d27\u5546\u3002\u4f7f\u7528 "),c.Pb(5,"code",6),c.qc(6,"skipLast"),c.Ob(),c.qc(7," \u548c "),c.Pb(8,"code",6),c.qc(9,"skip"),c.Ob(),c.qc(10," \u64cd\u4f5c\u7b26\uff0c\u53ea\u53d6\u53ef\u7528\u7684\u6c34\u679c\u3002\u7136\u540e\u7528 "),c.Pb(11,"code",6),c.qc(12,"merge"),c.Ob(),c.qc(13," \u64cd\u4f5c\u7b26\u66ff\u6362 empty observable\u3002\u6700\u540e\uff0c\u628a\u4e0d\u5e72\u51c0\u7684\u6c34\u679c\u6e05\u7406\u5e72\u51c0\uff0c\u518d\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002"),c.Ob(),c.Ob()),2&e){c.bc();const e=c.ic(13),n=c.ic(7),t=c.ic(19);c.Bb(5),c.gc("appTooltip",e),c.Bb(3),c.gc("appTooltip",n),c.Bb(3),c.gc("appTooltip",t)}}const u=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(c.Mb(s.a),c.Mb(o.d))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-skiplast-skip-merge"]],decls:24,vars:10,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(c.Pb(0,"h3"),c.qc(1),c.cc(2,"translate"),c.Ob(),c.pc(3,d,14,3,"div",0),c.pc(4,l,14,3,"div",0),c.pc(5,g,14,3,"div",0),c.Pb(6,"div",1,2),c.Pb(8,"pre"),c.qc(9,"        "),c.Nb(10,"code",3),c.qc(11,"\n    "),c.Ob(),c.Ob(),c.Pb(12,"div",1,4),c.Pb(14,"pre"),c.qc(15,"        "),c.Nb(16,"code",3),c.qc(17,"\n    "),c.Ob(),c.Ob(),c.Pb(18,"div",1,5),c.Pb(20,"pre"),c.qc(21,"        "),c.Nb(22,"code",3),c.qc(23,"\n    "),c.Ob(),c.Ob()),2&e&&(c.Bb(1),c.tc("",c.dc(2,8,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Bb(2),c.gc("ngIf","de"===n.currentLanguage),c.Bb(1),c.gc("ngIf","en"===n.currentLanguage),c.Bb(1),c.gc("ngIf","zh_CN"===n.currentLanguage),c.Bb(5),c.gc("highlight",n.skipCode),c.Bb(6),c.gc("highlight",n.skipLastCode),c.Bb(6),c.gc("highlight",n.mergeCode))},directives:[p.j,r.b,b.a],pipes:[o.c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(n){return new(n||e)},imports:[[i.d.forChild(u)],i.d]}),e})();var f=t("PCNd");let m=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(n){return new(n||e)},imports:[[f.a,h]]}),e})()}}]);