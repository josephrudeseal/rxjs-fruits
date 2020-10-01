!function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{eyxc:function(t,i,a){"use strict";a.r(i),a.d(i,"DistinctuntilchangedModule",(function(){return I}));var c=a("iInd"),r=function n(){e(this,n),this.fruits=["banana","apple","apple","banana","banana"],this.expectedFruits=["banana","apple","banana"],this.code='const fruits = from([\n    "banana",\n    "apple",\n    "apple",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2},o=a("8Y7J"),s=a("VIrA"),b=a("TSSN"),p=a("SVse"),d=a("dJsq"),u=a("uzYf");function l(n,e){if(1&n&&(o.Mb(0,"div"),o.Mb(1,"p"),o.pc(2,"Eins nach dem anderen! Einige Fr\xfcchte kommen doppelt hintereinander. Wir brauchen allerdings die Fr\xfcchte abwechselnd."),o.Lb(),o.Mb(3,"p"),o.pc(4,"In unserem Fall hilft uns der "),o.Mb(5,"code",4),o.pc(6,"distinctUntilChanged"),o.Lb(),o.pc(7,"-Operator. Er verhindert, dass in unserem Datenstrom doppelte Fr\xfcchte direkt hintereinander geliefert werden. "),o.Mb(8,"a",5),o.pc(9,"(Mehr Infos zu distinctUntilChanged)"),o.Lb(),o.Lb(),o.Lb()),2&n){o.Yb();var t=o.fc(9);o.zb(5),o.dc("appTooltip",t)}}function h(n,e){if(1&n&&(o.Mb(0,"div"),o.Mb(1,"p"),o.pc(2,"One after the other! Some fruits come twice in a row. However, we need the fruits alternately."),o.Lb(),o.Mb(3,"p"),o.pc(4,"In our case, the "),o.Mb(5,"code",4),o.pc(6,"distinctUntilChanged"),o.Lb(),o.pc(7," operator helps us. It prevents duplicate fruits from being delivered one after the other in our data stream. "),o.Mb(8,"a",5),o.pc(9,"(Learn more about distinctUntilChanged)"),o.Lb(),o.Lb(),o.Lb()),2&n){o.Yb();var t=o.fc(9);o.zb(5),o.dc("appTooltip",t)}}function f(n,e){if(1&n&&(o.Mb(0,"div"),o.Mb(1,"p"),o.pc(2,"\u6c34\u679c\u4f1a\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u51fa\u73b0\uff0c\u6709\u4e9b\u6c34\u679c\u8fde\u7eed\u51fa\u73b0\u4e86\u4e24\u6b21\u3002\u4f46\u662f\uff0c\u6211\u4eec\u9700\u8981\u4ea4\u66ff\u4f7f\u7528\u4e0d\u540c\u7684\u6c34\u679c\u3002"),o.Lb(),o.Mb(3,"p"),o.pc(4,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c"),o.Mb(5,"code",4),o.pc(6,"distinctUntilChanged"),o.Lb(),o.pc(7," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u5e2e\u52a9\u3002\u5b83\u53ef\u4ee5\u9632\u6b62\u91cd\u590d\u7684\u6c34\u679c\u5728\u6570\u636e\u6d41\u4e2d\u8fde\u7eed\u5730\u4f20\u9012\u3002 "),o.Mb(8,"a",5),o.pc(9,"\uff08\u4e86\u89e3\u5173\u4e8e distinctUntilChanged \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),o.Lb(),o.Lb(),o.Lb()),2&n){o.Yb();var t=o.fc(9);o.zb(5),o.dc("appTooltip",t)}}function g(n,e){if(1&n&&(o.Mb(0,"div"),o.Mb(1,"p"),o.pc(2,"\u041e\u0434\u0438\u043d \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c! \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u0440\u0430\u0437\u0430 \u043f\u043e\u0434\u0440\u044f\u0434. \u041e\u0434\u043d\u0430\u043a\u043e \u043d\u0430\u043c \u043f\u043e\u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e \u043d\u0443\u0436\u043d\u044b \u0444\u0440\u0443\u043a\u0442\u044b."),o.Lb(),o.Mb(3,"p"),o.pc(4,"\u0412 \u043d\u0430\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0430\u043c \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "),o.Mb(5,"code",4),o.pc(6,"distinctUntilChanged"),o.Lb(),o.pc(7,". \u042d\u0442\u043e \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u0444\u0440\u0443\u043a\u0442\u043e\u0432 \u043e\u0434\u0438\u043d \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c \u0432 \u043d\u0430\u0448\u0435\u043c \u043f\u043e\u0442\u043e\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. "),o.Mb(8,"a",5),o.pc(9,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e DifferentUntilChanged)"),o.Lb(),o.Lb(),o.Lb()),2&n){o.Yb();var t=o.fc(9);o.zb(5),o.dc("appTooltip",t)}}function L(n,e){if(1&n&&(o.Mb(0,"div"),o.Mb(1,"p"),o.pc(2,"Una tras otra! Algunas frutas vienen dos veces consecutivas. Sin embargo, necesitamos las frutas alternadamente.."),o.Lb(),o.Mb(3,"p"),o.pc(4,"En nuestro caso, el operador "),o.Mb(5,"code",4),o.pc(6,"distinctUntilChanged"),o.Lb(),o.pc(7," nos ayuda. Evita que se entreguen frutas duplicadas una tras otra en nuestro flujo de datos. "),o.Mb(8,"a",5),o.pc(9,"(Aprende m\xe1s acerca de distinctUntilChanged)"),o.Lb(),o.Lb(),o.Lb()),2&n){o.Yb();var t=o.fc(9);o.zb(5),o.dc("appTooltip",t)}}var v,M,m,C=[{path:"",component:(v=function(){function t(n,i){e(this,t),this.exerciseService=n,this.translateService=i,this.exerciseTitle="distinctUntilChanged",this.distinctUntilChangedCode="\n  of(1, 1, 2, 1, 3, 4).pipe(\n    distinctUntilChanged()\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 1\n  // 3\n  // 4\n  ",this.currentLanguage=""}var i,a,c;return i=t,(a=[{key:"ngOnInit",value:function(){var n=this;this.exerciseService.newExercise(new r),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){n.currentLanguage=n.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}])&&n(i.prototype,a),c&&n(i,c),t}(),v.\u0275fac=function(n){return new(n||v)(o.Jb(s.a),o.Jb(b.d))},v.\u0275cmp=o.Db({type:v,selectors:[["app-distinctuntilchanged"]],decls:14,vars:10,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/distinctUntilChanged","target","_blank"]],template:function(n,e){1&n&&(o.Mb(0,"h3"),o.pc(1),o.Zb(2,"translate"),o.Lb(),o.oc(3,l,10,1,"div",0),o.oc(4,h,10,1,"div",0),o.oc(5,f,10,1,"div",0),o.oc(6,g,10,1,"div",0),o.oc(7,L,10,1,"div",0),o.Mb(8,"div",1,2),o.Mb(10,"pre"),o.pc(11,"        "),o.Kb(12,"code",3),o.pc(13,"\n    "),o.Lb(),o.Lb()),2&n&&(o.zb(1),o.sc("",o.ac(2,8,"EXERCISES.EXERCISETITLE"),": ",e.exerciseTitle,""),o.zb(2),o.dc("ngIf","de"===e.currentLanguage),o.zb(1),o.dc("ngIf","en"===e.currentLanguage),o.zb(1),o.dc("ngIf","zh_CN"===e.currentLanguage),o.zb(1),o.dc("ngIf","ru"===e.currentLanguage),o.zb(1),o.dc("ngIf","es"===e.currentLanguage),o.zb(5),o.dc("highlight",e.distinctUntilChangedCode))},directives:[p.j,d.b,u.a],pipes:[b.c],styles:[""]}),v)}],w=((M=function n(){e(this,n)}).\u0275mod=o.Hb({type:M}),M.\u0275inj=o.Gb({factory:function(n){return new(n||M)},imports:[[c.d.forChild(C)],c.d]}),M),y=a("PCNd"),I=((m=function n(){e(this,n)}).\u0275mod=o.Hb({type:m}),m.\u0275inj=o.Gb({factory:function(n){return new(n||m)},imports:[[y.a,w]]}),m)}}])}();