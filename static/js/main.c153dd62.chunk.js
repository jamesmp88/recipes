(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/pepper.e7beef3e.svg"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(12),a(2)),i=a.n(o),s=a(5),u=a(1),m=(a(14),a(15),function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,l=e.url,o=e.categories,i=Math.floor(a);return r.a.createElement("div",{className:"recipe"},r.a.createElement("h1",null,t),r.a.createElement("img",{className:"image",src:n,alt:t}),r.a.createElement("h2",null,"Categories"),o.map((function(e){return r.a.createElement("p",null,e)})),r.a.createElement("p",null,r.a.createElement("span",{className:"calories"},"Total Recipe Calories:")," ",i),r.a.createElement("h2",{className:"ingredient"},"Ingredients"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e.index},e.text)}))),r.a.createElement("a",{className:"recipe-link",target:"_blank",rel:"noreferrer noopener",href:l},"CLICK HERE FOR THE FULL RECIPE"))}),p=(a(16),function(e){return r.a.createElement("div",null,r.a.createElement("form",{className:"health-form"},r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"low-carb",checked:!0===e.lowCarb,onChange:!0===e.lowCarb?function(){return e.setLowCarb(!1)}:function(){return e.setLowCarb(!0)}}),"Low-Carb")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"low-fat",checked:!0===e.lowFat,onChange:!0===e.lowFat?function(){return e.setLowFat(!1)}:function(){return e.setLowFat(!0)}}),"Low-Fat")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"vegan",checked:!0===e.vegan,onChange:!0===e.vegan?function(){return e.setVegan(!1)}:function(){return e.setVegan(!0)}}),"Vegan")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"vegetarian",checked:!0===e.vegetarian,onChange:!0===e.vegetarian?function(){return e.setVegetarian(!1)}:function(){return e.setVegetarian(!0)}}),"Vegetarian")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"peanut-free",checked:!0===e.peanutFree,onChange:!0===e.peanutFree?function(){return e.setPeanutFree(!1)}:function(){return e.setPeanutFree(!0)}}),"Peanut-Free")),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"tree-nut-free",checked:!0===e.treeNutFree,onChange:!0===e.treeNutFree?function(){return e.setTreeNutFree(!1)}:function(){return e.setTreeNutFree(!0)}}),"Tree-nut-Free"))))}),b=a(6),h=a.n(b),f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),b=o[0],f=o[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),d=g[0],v=g[1],k=Object(n.useState)(!1),N=Object(u.a)(k,2),w=N[0],F=N[1],j=Object(n.useState)(!1),C=Object(u.a)(j,2),O=C[0],x=C[1],y=Object(n.useState)(!1),S=Object(u.a)(y,2),L=S[0],V=S[1],R=Object(n.useState)(!1),P=Object(u.a)(R,2),T=P[0],I=P[1],_=Object(n.useState)(!1),A=Object(u.a)(_,2),B=A[0],H=A[1],J=Object(n.useState)(!1),M=Object(u.a)(J,2),W=M[0],q=M[1],D="https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("326357f3","&app_key=").concat("562ff76fbd2e4b9eb13bc248f24c9ec5");w&&(D+="&diet=low-carb"),O&&(D+="&diet=low-fat"),L&&(D+="&health=vegan"),T&&(D+="&health=vegetarian"),B&&(D+="&health=peanut-free"),W&&(D+="&health=tree-nut-free"),console.log(D),Object(n.useEffect)((function(){K()}),[d]);var K=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(D);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=""===d?r.a.createElement("p",null):r.a.createElement("h2",{className:"recipes-head"},"Recipes");return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:""===d?"div-down":null},r.a.createElement("img",{className:"pepper",src:h.a,alt:"Pepper Logo"}),r.a.createElement("h1",{className:"title"},"Find your perfect Recipe"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(b)},className:"search-form"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search by Ingredients or Recipe",value:b,onChange:function(e){var t=e.target;f(t.value),console.log(b)}}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search"),r.a.createElement("button",{className:"clear-button",onClick:function(){f(""),v(""),c([])}},"Start Again")),r.a.createElement(p,{lowCarb:w,setLowCarb:F,lowFat:O,setLowFat:x,vegan:L,setVegan:V,vegetarian:T,setVegetarian:I,peanutFree:B,setPeanutFree:H,treeNutFree:W,setTreeNutFree:q})),r.a.createElement("div",{className:"filter"},r.a.createElement("button",{onClick:function(){v(b),K()},className:"filter-button"},"Filter")),r.a.createElement("div",{className:"recipes"},U,a.map((function(e){return r.a.createElement(m,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url,categories:e.recipe.healthLabels})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c153dd62.chunk.js.map