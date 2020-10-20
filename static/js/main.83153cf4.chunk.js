(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(11),a(2)),i=a.n(o),u=a(5),s=a(1),m=(a(13),a(14),function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients,l=e.url,o=e.categories,i=Math.floor(a);return c.a.createElement("div",{className:"recipe"},c.a.createElement("h1",null,t),c.a.createElement("img",{className:"image",src:n,alt:t}),c.a.createElement("h2",null,"Categories"),o.map((function(e){return c.a.createElement("p",null,e)})),c.a.createElement("p",null,c.a.createElement("span",{className:"calories"},"Total Recipe Calories:")," ",i),c.a.createElement("h2",{className:"ingredient"},"Ingredients"),c.a.createElement("ul",null,r.map((function(e){return c.a.createElement("li",{key:e.index},e.text)}))),c.a.createElement("button",{className:"recipe-link",href:l},"Click Here for the full recipe"))}),p=(a(15),function(e){return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"low-carb",checked:!0===e.lowCarb,onChange:!0===e.lowCarb?function(){return e.setLowCarb(!1)}:function(){return e.setLowCarb(!0)}}),"Low-Carb")),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"low-fat",checked:!0===e.lowFat,onChange:!0===e.lowFat?function(){return e.setLowFat(!1)}:function(){return e.setLowFat(!0)}}),"Low-Fat")),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"vegan",checked:!0===e.vegan,onChange:!0===e.vegan?function(){return e.setVegan(!1)}:function(){return e.setVegan(!0)}}),"Vegan")),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"vegetarian",checked:!0===e.vegetarian,onChange:!0===e.vegetarian?function(){return e.setVegetarian(!1)}:function(){return e.setVegetarian(!0)}}),"Vegetarian")),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"peanut-free",checked:!0===e.peanutFree,onChange:!0===e.peanutFree?function(){return e.setPeanutFree(!1)}:function(){return e.setPeanutFree(!0)}}),"Peanut-Free")),c.a.createElement("div",{className:"checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"tree-nut-free",checked:!0===e.treeNutFree,onChange:!0===e.treeNutFree?function(){return e.setTreeNutFree(!1)}:function(){return e.setTreeNutFree(!0)}}),"Tree-nut-Free"))))}),h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),h=o[0],b=o[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),E=g[0],d=g[1],v=Object(n.useState)(!1),w=Object(s.a)(v,2),k=w[0],N=w[1],F=Object(n.useState)(!1),j=Object(s.a)(F,2),O=j[0],x=j[1],C=Object(n.useState)(!1),y=Object(s.a)(C,2),S=y[0],L=y[1],V=Object(n.useState)(!1),P=Object(s.a)(V,2),T=P[0],R=P[1],I=Object(n.useState)(!1),B=Object(s.a)(I,2),J=B[0],M=B[1],W=Object(n.useState)(!1),_=Object(s.a)(W,2),q=_[0],A=_[1],D="https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("326357f3","&app_key=").concat("562ff76fbd2e4b9eb13bc248f24c9ec5");k&&(D+="&diet=low-carb"),O&&(D+="&diet=low-fat"),S&&(D+="&health=vegan"),T&&(D+="&health=vegetarian"),J&&(D+="&health=peanut-free"),q&&(D+="&health=tree-nut-free"),console.log(D),Object(n.useEffect)((function(){H()}),[E]);var H=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(D);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=""===E?c.a.createElement("p",null):c.a.createElement("h2",{className:"recipes-head"},"Recipes");return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:""===E?"div-down":null},c.a.createElement("h1",{className:"title"},"Find your perfect Recipe"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d(h),b("")},className:"search-form"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Particular Ingredient? Full Recipe?",value:h,onChange:function(e){var t=e.target;b(t.value),console.log(h)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement(p,{lowCarb:k,setLowCarb:N,lowFat:O,setLowFat:x,vegan:S,setVegan:L,vegetarian:T,setVegetarian:R,peanutFree:J,setPeanutFree:M,treeNutFree:q,setTreeNutFree:A})),c.a.createElement("div",{className:"recipes"},$,a.map((function(e){return c.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url,categories:e.recipe.healthLabels})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.83153cf4.chunk.js.map