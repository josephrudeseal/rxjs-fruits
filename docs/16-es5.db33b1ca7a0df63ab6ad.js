function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"lJ+N":function(e,n,t){"use strict";t.r(n),t.d(n,"SkipLastModule",(function(){return C}));var i=t("iInd"),a=function e(){_classCallCheck(this,e),this.fruits=["apple","apple","banana","apple","banana"],this.expectedFruits=["apple","apple","banana"],this.code='const fruits = from([\n        "apple",\n        "apple",\n        "banana",\n        "apple",\n        "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2},s=t("8Y7J"),c=t("VIrA"),r=t("TSSN"),o=t("SVse"),p=t("dJsq"),b=t("uzYf");function u(e,n){if(1&e&&(s.Pb(0,"div"),s.Pb(1,"p"),s.qc(2,"Auf die letzten zwei Fr\xfcchte k\xf6nnen wir verzichten."),s.Ob(),s.Pb(3,"p"),s.qc(4,"Der "),s.Pb(5,"code",4),s.qc(6,"skipLast"),s.Ob(),s.qc(7,"-Operator erm\xf6glicht uns das Ignorieren von den letzten Fr\xfcchten. "),s.Pb(8,"a",5),s.qc(9,"(Mehr Infos zu skipLast)"),s.Ob(),s.Ob(),s.Ob()),2&e){s.bc();var t=s.ic(7);s.Bb(5),s.gc("appTooltip",t)}}function l(e,n){if(1&e&&(s.Pb(0,"div"),s.Pb(1,"p"),s.qc(2,"We can do without the last two fruits."),s.Ob(),s.Pb(3,"p"),s.qc(4,"The "),s.Pb(5,"code",4),s.qc(6,"skipLast"),s.Ob(),s.qc(7," operator enables us to ignore the last fruits. "),s.Pb(8,"a",5),s.qc(9,"(Learn more about skipLast)"),s.Ob(),s.Ob(),s.Ob()),2&e){s.bc();var t=s.ic(7);s.Bb(5),s.gc("appTooltip",t)}}function h(e,n){if(1&e&&(s.Pb(0,"div"),s.Pb(1,"p"),s.qc(2,"\u6211\u4eec\u4e0d\u9700\u8981\u6700\u540e\u4e24\u4e2a\u6c34\u679c\u3002"),s.Ob(),s.Pb(3,"p"),s.Pb(4,"code",4),s.qc(5,"skipLast"),s.Ob(),s.qc(6," \u8fd0\u7b97\u7b26\u80fd\u591f\u8df3\u8fc7\u6700\u540e\u7684\u6c34\u679c\u3002 "),s.Pb(7,"a",5),s.qc(8,"\uff08\u4e86\u89e3\u5173\u4e8e skipLast \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),s.Ob(),s.Ob(),s.Ob()),2&e){s.bc();var t=s.ic(7);s.Bb(4),s.gc("appTooltip",t)}}var f,g,d,v=[{path:"",component:(f=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="skipLast",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(s.Mb(c.a),s.Mb(r.d))},f.\u0275cmp=s.Gb({type:f,selectors:[["app-skip-last"]],decls:12,vars:8,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/skipLast","target","_blank"]],template:function(e,n){1&e&&(s.Pb(0,"h3"),s.qc(1),s.cc(2,"translate"),s.Ob(),s.pc(3,u,10,1,"div",0),s.pc(4,l,10,1,"div",0),s.pc(5,h,9,1,"div",0),s.Pb(6,"div",1,2),s.Pb(8,"pre"),s.qc(9,"        "),s.Nb(10,"code",3),s.qc(11,"\n    "),s.Ob(),s.Ob()),2&e&&(s.Bb(1),s.tc("",s.dc(2,6,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),s.Bb(2),s.gc("ngIf","de"===n.currentLanguage),s.Bb(1),s.gc("ngIf","en"===n.currentLanguage),s.Bb(1),s.gc("ngIf","zh_CN"===n.currentLanguage),s.Bb(5),s.gc("highlight",n.skipLastCode))},directives:[o.j,p.b,b.a],pipes:[r.c],styles:[""]}),f)}],L=((g=function e(){_classCallCheck(this,e)}).\u0275mod=s.Kb({type:g}),g.\u0275inj=s.Jb({factory:function(e){return new(e||g)},imports:[[i.d.forChild(v)],i.d]}),g),k=t("PCNd"),C=((d=function e(){_classCallCheck(this,e)}).\u0275mod=s.Kb({type:d}),d.\u0275inj=s.Jb({factory:function(e){return new(e||d)},imports:[[k.a,L]]}),d)}}]);