(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{zcjo:function(e,n,t){"use strict";t.r(n),t.d(n,"SkipTakeMapModule",(function(){return g}));var i=t("tyNb");class c{constructor(){this.fruits=["dirty-apple","apple","dirty-banana","dirty-banana","apple"],this.expectedFruits=["banana"],this.code='const fruits = from([\n    "dirty-apple",\n    "apple",\n    "dirty-banana",\n    "dirty-banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe({\n    next: fruit => toConveyorBelt(fruit)\n});\n',this.minPositionLineNumber=8,this.positionColumnNumber=2}}var a=t("fXoL"),r=t("VIrA"),o=t("sYmb"),s=t("ofXK"),b=t("OtPg"),p=t("uzYf");function u(e,n){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"p"),a.mc(2,"Eine \xfcberm\xe4\xdfige Lieferung!"),a.Mb(),a.Nb(3,"p"),a.mc(4,"Du m\xf6chtest einfach nur eine Banane. Die Lieferung beinhaltet allerdings zu viel unn\xf6tige Fr\xfcchte. Verwende jetzt alle bisher gelernten Operatoren "),a.Nb(5,"code",6),a.mc(6,"skip"),a.Mb(),a.mc(7,", "),a.Nb(8,"code",6),a.mc(9,"take"),a.Mb(),a.mc(10," und "),a.Nb(11,"code",6),a.mc(12,"map"),a.Mb(),a.mc(13," nacheinander in der Pipe-Funktion."),a.Mb(),a.Mb()),2&e){a.Zb();const e=a.ec(6),n=a.ec(12),t=a.ec(18);a.Ab(5),a.cc("appTooltip",e),a.Ab(3),a.cc("appTooltip",n),a.Ab(3),a.cc("appTooltip",t)}}function l(e,n){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"p"),a.mc(2,"An excessive delivery!"),a.Mb(),a.Nb(3,"p"),a.mc(4,"You just want a banana. However, the delivery contains too much unnecessary fruit. Now use all operators that have been learned so far "),a.Nb(5,"code",6),a.mc(6,"skip"),a.Mb(),a.mc(7,", "),a.Nb(8,"code",6),a.mc(9,"take"),a.Mb(),a.mc(10," and "),a.Nb(11,"code",6),a.mc(12,"map"),a.Mb(),a.mc(13," one after the other in the pipe function."),a.Mb(),a.Mb()),2&e){a.Zb();const e=a.ec(6),n=a.ec(12),t=a.ec(18);a.Ab(5),a.cc("appTooltip",e),a.Ab(3),a.cc("appTooltip",n),a.Ab(3),a.cc("appTooltip",t)}}const d=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="skip-take-map",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe({\n    next: data => console.log(data)\n  });\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe({\n    next: x => console.log(x)\n  });\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.mapCode="\nconst source = from([1, 2, 3, 4, 5]);\nsource.pipe(\n  map(data => 'My Number is ' + data)\n).subscribe({\n  next: data => console.log(data)\n});\n\n// Logs:\n// My Number is 1\n// My Number is 2\n// My Number is 3\n// My Number is 4\n// My Number is 5\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(a.Kb(r.a),a.Kb(o.d))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-skip-take-map"]],decls:23,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["takeTooltip",""],["mapTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(a.Nb(0,"h3"),a.mc(1),a.ac(2,"translate"),a.Mb(),a.lc(3,u,14,3,"div",0),a.lc(4,l,14,3,"div",0),a.Nb(5,"div",1,2),a.Nb(7,"pre"),a.mc(8,"        "),a.Lb(9,"code",3),a.mc(10,"\n    "),a.Mb(),a.Mb(),a.Nb(11,"div",1,4),a.Nb(13,"pre"),a.mc(14,"        "),a.Lb(15,"code",3),a.mc(16,"\n    "),a.Mb(),a.Mb(),a.Nb(17,"div",1,5),a.Nb(19,"pre"),a.mc(20,"        "),a.Lb(21,"code",3),a.mc(22,"\n    "),a.Mb(),a.Mb()),2&e&&(a.Ab(1),a.pc("",a.bc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),a.Ab(2),a.cc("ngIf","de"===n.currentLanguage),a.Ab(1),a.cc("ngIf","en"===n.currentLanguage),a.Ab(5),a.cc("highlight",n.skipCode),a.Ab(6),a.cc("highlight",n.takeCode),a.Ab(6),a.cc("highlight",n.mapCode))},directives:[s.j,b.b,p.a],pipes:[o.c],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(n){return new(n||e)},imports:[[i.b.forChild(d)],i.b]}),e})();var h=t("PCNd");let g=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(n){return new(n||e)},imports:[[h.a,m]]}),e})()}}]);