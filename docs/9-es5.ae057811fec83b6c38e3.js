function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Vwex:function(e,t,n){"use strict";n.r(t),n.d(t,"DistinctModule",(function(){return C}));var i=n("tyNb"),c=function e(){_classCallCheck(this,e),this.fruits=["apple","apple","banana","apple"],this.expectedFruits=["apple","banana"],this.code='const fruits = from([\n    "apple",\n    "apple",\n    "banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe({\n    next: fruit => toConveyorBelt(fruit)\n});\n',this.minPositionLineNumber=7,this.positionColumnNumber=2,this.recipeDescription=""},r=n("fXoL"),s=n("VIrA"),a=n("sYmb"),o=n("ofXK"),b=n("uzYf"),l=n("OtPg");function p(e,t){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.lc(2,"The "),r.Nb(3,"code",1),r.lc(4,"distinct"),r.Mb(),r.lc(5," operator returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items. "),r.Nb(6,"a",2),r.lc(7,"Mehr Infos zu distinct."),r.Mb(),r.Mb(),r.Nb(8,"div",3,4),r.Nb(10,"pre"),r.lc(11,"            "),r.Lb(12,"code",5),r.lc(13,"\n       "),r.Mb(),r.Mb(),r.Mb()),2&e){var n=r.ec(9),i=r.Zb();r.Ab(3),r.cc("appTooltip",n),r.Ab(9),r.cc("highlight",i.distinctCode)}}function u(e,t){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.lc(2,"The "),r.Nb(3,"code",1),r.lc(4,"distinct"),r.Mb(),r.lc(5," operator returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items. "),r.Nb(6,"a",2),r.lc(7,"Mehr Infos zu distinct."),r.Mb(),r.Mb(),r.Nb(8,"div",3,4),r.Nb(10,"pre"),r.lc(11,"            "),r.Lb(12,"code",5),r.lc(13,"\n       "),r.Mb(),r.Mb(),r.Mb()),2&e){var n=r.ec(9),i=r.Zb();r.Ab(3),r.cc("appTooltip",n),r.Ab(9),r.cc("highlight",i.distinctCode)}}var h,f,d,g=[{path:"",component:(h=function(){function e(t,n){_classCallCheck(this,e),this.exerciseService=t,this.translateService=n,this.exerciseTitle="distinct",this.distinctCode="\n  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(\n    distinct()\n  ).subscribe(x => console.log(x)); // 1, 2, 3, 4\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),h.\u0275fac=function(e){return new(e||h)(r.Kb(s.a),r.Kb(a.d))},h.\u0275cmp=r.Eb({type:h,selectors:[["app-distinct"]],decls:5,vars:6,consts:[[4,"ngIf"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/distinct","target","_blank"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"]],template:function(e,t){1&e&&(r.Nb(0,"h3"),r.lc(1),r.ac(2,"translate"),r.Mb(),r.kc(3,p,14,2,"div",0),r.kc(4,u,14,2,"div",0)),2&e&&(r.Ab(1),r.oc("",r.bc(2,4,"EXERCISES.EXERCISETITLE"),": ",t.exerciseTitle,""),r.Ab(2),r.cc("ngIf","de"===t.currentLanguage),r.Ab(1),r.cc("ngIf","en"===t.currentLanguage))},directives:[o.j,b.a,l.b],pipes:[a.c],styles:[""]}),h)}],v=((f=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:f}),f.\u0275inj=r.Hb({factory:function(e){return new(e||f)},imports:[[i.b.forChild(g)],i.b]}),f),m=n("PCNd"),C=((d=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:d}),d.\u0275inj=r.Hb({factory:function(e){return new(e||d)},imports:[[m.a,v]]}),d)}}]);