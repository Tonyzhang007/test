(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CXQP:function(t,e,i){"use strict";i.r(e),i.d(e,"ShoppingListModule",(function(){return h}));var n=i("3Pt+"),s=i("tyNb"),o=i("fXoL"),r=i("ozzT"),c=i("7F1V"),b=i("9rNa"),d=i("ofXK");const u=["f"];function l(t,e){if(1&t){const t=o.Nb();o.Mb(0,"button",13),o.Ub("click",(function(){return o.cc(t),o.Wb().onDelete()})),o.hc(1,"Delete"),o.Lb()}}let a=(()=>{class t{constructor(t){this.slService=t,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.slService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=t.value,i=new b.a(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,i):this.slService.addIngredient(i),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(r.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var i;1&t&&o.lc(u,!0),2&t&&o.ac(i=o.Vb())&&(e.slForm=i.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){if(1&t){const t=o.Nb();o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"form",2,3),o.Ub("ngSubmit",(function(){o.cc(t);const i=o.bc(3);return e.onSubmit(i)})),o.Mb(4,"div",0),o.Mb(5,"div",4),o.Mb(6,"label",5),o.hc(7,"Name"),o.Lb(),o.Kb(8,"input",6),o.Lb(),o.Mb(9,"div",7),o.Mb(10,"label",8),o.hc(11,"Amount"),o.Lb(),o.Kb(12,"input",9),o.Lb(),o.Lb(),o.Mb(13,"div",0),o.Mb(14,"div",1),o.Mb(15,"button",10),o.hc(16),o.Lb(),o.gc(17,l,2,0,"button",11),o.Mb(18,"button",12),o.Ub("click",(function(){return e.onClear()})),o.hc(19,"Clear"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()}if(2&t){const t=o.bc(3);o.zb(15),o.Xb("disabled",!t.valid),o.zb(1),o.ic(e.editMode?"Update":"Add"),o.zb(1),o.Xb("ngIf",e.editMode)}},directives:[n.u,n.m,n.n,n.a,n.l,n.o,n.s,n.p,n.q,d.i],styles:[""]}),t})();function p(t,e){if(1&t){const t=o.Nb();o.Mb(0,"a",4),o.Ub("click",(function(){o.cc(t);const i=e.index;return o.Wb().onEditItem(i)})),o.hc(1),o.Lb()}if(2&t){const t=e.$implicit;o.zb(1),o.kc(" ",t.name," (",t.amount,") ")}}let m=(()=>{class t{constructor(t,e){this.slService=t,this.loggingService=e}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe(t=>{this.ingredients=t}),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit")}onEditItem(t){this.slService.startedEditing.next(t)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(r.a),o.Jb(c.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Kb(2,"app-shopping-edit"),o.Kb(3,"hr"),o.Mb(4,"ul",2),o.gc(5,p,2,2,"a",3),o.Lb(),o.Lb(),o.Lb()),2&t&&(o.zb(5),o.Xb("ngForOf",e.ingredients))},directives:[a,d.h],styles:[""]}),t})();var g=i("PCNd");let h=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[g.a,n.j,s.e.forChild([{path:"",component:m}])]]}),t})()}}]);