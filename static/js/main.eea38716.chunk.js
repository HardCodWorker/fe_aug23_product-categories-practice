(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(7),n=t.n(s),r=(t(13),t(14),t(6)),i=t(8),l=t(3),d=(t(15),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),o=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],j=t(0);var h=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{category:(a=e.categoryId,o.find((function(e){return e.id===a})))});var a})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:(a=e.category.ownerId,d.find((function(e){return e.id===a})))});var a}));var b=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(""),l=Object(r.a)(n,2),b=l[0],x=l[1],m=function(e,a,t){var c=Object(i.a)(e);return a&&(c=c.filter((function(e){return e.user.name===a}))),c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(h,t,b);return Object(j.jsx)("div",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Product Categories"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(j.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return s("")},children:"All"}),d.map((function(e){return Object(j.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){s(e.name)},children:e.name})}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(j.jsx)("span",{className:"icon is-right",children:Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(j.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(j.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),o.map((function(e){return Object(j.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:e.title})}))]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(j.jsxs)("div",{className:"box table-container",children:[Object(j.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(j.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(j.jsx)("a",{href:"#/",children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(j.jsx)("tbody",{children:m.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("tr",{"data-cy":"Product",children:[Object(j.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(j.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(j.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(j.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:e.user.name})]})})}))})]})]})]})})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eea38716.chunk.js.map