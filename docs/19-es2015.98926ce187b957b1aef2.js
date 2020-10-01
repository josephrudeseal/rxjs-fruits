(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7rQJ":function(e,n,p){"use strict";p.r(n),p.d(n,"SkiplastSkipMergeModule",(function(){return m}));var c=p("iInd");class a{constructor(){this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2}}var t=p("8Y7J"),i=p("VIrA"),o=p("TSSN"),s=p("SVse"),b=p("dJsq"),r=p("uzYf");function d(e,n){if(1&e&&(t.Mb(0,"div"),t.Mb(1,"p"),t.pc(2,"Gib dem Chaos keine Chance!"),t.Lb(),t.Mb(3,"p"),t.pc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),t.Mb(5,"code",6),t.pc(6,"skipLast"),t.Lb(),t.pc(7,"- und "),t.Mb(8,"code",6),t.pc(9,"skip"),t.Lb(),t.pc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),t.Mb(11,"code",6),t.pc(12,"merge"),t.Lb(),t.pc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),t.Lb(),t.Lb()),2&e){t.Yb();const e=t.fc(15),n=t.fc(9),p=t.fc(21);t.zb(5),t.dc("appTooltip",e),t.zb(3),t.dc("appTooltip",n),t.zb(3),t.dc("appTooltip",p)}}function l(e,n){if(1&e&&(t.Mb(0,"div"),t.Mb(1,"p"),t.pc(2,"Don't give chaos a chance!"),t.Lb(),t.Mb(3,"p"),t.pc(4,"You received two deliveries. Take only usable fruit with the "),t.Mb(5,"code",6),t.pc(6,"skipLast"),t.Lb(),t.pc(7," and "),t.Mb(8,"code",6),t.pc(9,"skip"),t.Lb(),t.pc(10," operator. Then replace the empty observable with the "),t.Mb(11,"code",6),t.pc(12,"merge"),t.Lb(),t.pc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),t.Lb(),t.Lb()),2&e){t.Yb();const e=t.fc(15),n=t.fc(9),p=t.fc(21);t.zb(5),t.dc("appTooltip",e),t.zb(3),t.dc("appTooltip",n),t.zb(3),t.dc("appTooltip",p)}}function u(e,n){if(1&e&&(t.Mb(0,"div"),t.Mb(1,"p"),t.pc(2,"\u4e0d\u8981\u628a\u6c34\u679c\u641e\u6df7\u4e71\u4e86\uff01"),t.Lb(),t.Mb(3,"p"),t.pc(4,"\u4f60\u6709\u4e24\u4e2a\u4f9b\u8d27\u5546\u3002\u4f7f\u7528 "),t.Mb(5,"code",6),t.pc(6,"skipLast"),t.Lb(),t.pc(7," \u548c "),t.Mb(8,"code",6),t.pc(9,"skip"),t.Lb(),t.pc(10," \u64cd\u4f5c\u7b26\uff0c\u53ea\u53d6\u53ef\u7528\u7684\u6c34\u679c\u3002\u7136\u540e\u7528 "),t.Mb(11,"code",6),t.pc(12,"merge"),t.Lb(),t.pc(13," \u64cd\u4f5c\u7b26\u66ff\u6362 empty observable\u3002\u6700\u540e\uff0c\u628a\u4e0d\u5e72\u51c0\u7684\u6c34\u679c\u6e05\u7406\u5e72\u51c0\uff0c\u518d\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002"),t.Lb(),t.Lb()),2&e){t.Yb();const e=t.fc(15),n=t.fc(9),p=t.fc(21);t.zb(5),t.dc("appTooltip",e),t.zb(3),t.dc("appTooltip",n),t.zb(3),t.dc("appTooltip",p)}}function L(e,n){if(1&e&&(t.Mb(0,"div"),t.Mb(1,"p"),t.pc(2,"\u041d\u0435 \u0434\u0430\u0439 \u0445\u0430\u043e\u0441\u0443 \u0448\u0430\u043d\u0441!"),t.Lb(),t.Mb(3,"p"),t.pc(4,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u0432\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438. \u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c "),t.Mb(5,"code",6),t.pc(6,"skipLast"),t.Lb(),t.pc(7," \u0438 "),t.Mb(8,"code",6),t.pc(9,"skip"),t.Lb(),t.pc(10,". \u0417\u0430\u0442\u0435\u043c \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u0443\u044e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e "),t.Mb(11,"code",6),t.pc(12,"merge"),t.Lb(),t.pc(13,". \u041f\u043e\u0434 \u043a\u043e\u043d\u0435\u0446 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u044f\u0437\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0438\u0445 \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440."),t.Lb(),t.Lb()),2&e){t.Yb();const e=t.fc(15),n=t.fc(9),p=t.fc(21);t.zb(5),t.dc("appTooltip",e),t.zb(3),t.dc("appTooltip",n),t.zb(3),t.dc("appTooltip",p)}}function g(e,n){if(1&e&&(t.Mb(0,"div"),t.Mb(1,"p"),t.pc(2,"No le des oportunidad al caos!"),t.Lb(),t.Mb(3,"p"),t.pc(4,"Recibiste dos entregas. Toma solo fruta utilizable con los operadores "),t.Mb(5,"code",6),t.pc(6,"skipLast"),t.Lb(),t.pc(7," y "),t.Mb(8,"code",6),t.pc(9,"skip"),t.Lb(),t.pc(10,". Luego reemplaza el observable EMPTY con la funci\xf3n "),t.Mb(11,"code",6),t.pc(12,"merge"),t.Lb(),t.pc(13,". Hacia el final, limpia las frutas sucias y col\xf3calas en la cinta transportadora."),t.Lb(),t.Lb()),2&e){t.Yb();const e=t.fc(15),n=t.fc(9),p=t.fc(21);t.zb(5),t.dc("appTooltip",e),t.zb(3),t.dc("appTooltip",n),t.zb(3),t.dc("appTooltip",p)}}const f=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Jb(i.a),t.Jb(o.d))},e.\u0275cmp=t.Db({type:e,selectors:[["app-skiplast-skip-merge"]],decls:26,vars:12,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(t.Mb(0,"h3"),t.pc(1),t.Zb(2,"translate"),t.Lb(),t.oc(3,d,14,3,"div",0),t.oc(4,l,14,3,"div",0),t.oc(5,u,14,3,"div",0),t.oc(6,L,14,3,"div",0),t.oc(7,g,14,3,"div",0),t.Mb(8,"div",1,2),t.Mb(10,"pre"),t.pc(11,"        "),t.Kb(12,"code",3),t.pc(13,"\n    "),t.Lb(),t.Lb(),t.Mb(14,"div",1,4),t.Mb(16,"pre"),t.pc(17,"        "),t.Kb(18,"code",3),t.pc(19,"\n    "),t.Lb(),t.Lb(),t.Mb(20,"div",1,5),t.Mb(22,"pre"),t.pc(23,"        "),t.Kb(24,"code",3),t.pc(25,"\n    "),t.Lb(),t.Lb()),2&e&&(t.zb(1),t.sc("",t.ac(2,10,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),t.zb(2),t.dc("ngIf","de"===n.currentLanguage),t.zb(1),t.dc("ngIf","en"===n.currentLanguage),t.zb(1),t.dc("ngIf","zh_CN"===n.currentLanguage),t.zb(1),t.dc("ngIf","ru"===n.currentLanguage),t.zb(1),t.dc("ngIf","es"===n.currentLanguage),t.zb(5),t.dc("highlight",n.skipCode),t.zb(6),t.dc("highlight",n.skipLastCode),t.zb(6),t.dc("highlight",n.mergeCode))},directives:[s.j,b.b,r.a],pipes:[o.c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=t.Hb({type:e}),e.\u0275inj=t.Gb({factory:function(n){return new(n||e)},imports:[[c.d.forChild(f)],c.d]}),e})();var M=p("PCNd");let m=(()=>{class e{}return e.\u0275mod=t.Hb({type:e}),e.\u0275inj=t.Gb({factory:function(n){return new(n||e)},imports:[[M.a,h]]}),e})()}}]);