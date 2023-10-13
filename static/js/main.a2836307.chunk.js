(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(9),n=c.n(s),r=(c(14),c(15),c(6)),i=c(8),l=c(4),d=(c(16),c(3)),o=c.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=c(0);var u=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{category:(t=e.categoryId,h.find((function(e){return e.id===t})))});var t})).map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:(t=e.category.ownerId,j.find((function(e){return e.id===t})))});var t}));var m=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),l=Object(r.a)(n,2),d=l[0],m=l[1],x=Object(a.useState)([]),O=Object(r.a)(x,2),f=O[0],p=O[1],y=function(e,t,c,a){var s=Object(i.a)(e);return t&&(s=s.filter((function(e){return e.user.name===t}))),s=s.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})),a.length>0&&(s=s.filter((function(e){return a.includes(e.category.title)}))),s}(u,c,d,f);return Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{className:o()({"is-active":!c}),"data-cy":"FilterAllUsers",href:"#/",onClick:function(){return s()},children:"All"}),j.map((function(e){return Object(b.jsx)("a",{className:o()({"is-active":c===e.name}),"data-cy":"FilterUser",href:"#/",onClick:function(){s(e.name)},children:e.name})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{value:d,"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(b.jsx)("span",{className:"icon is-right",children:d&&Object(b.jsx)("button",{onClick:function(){return m("")},"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:o()("button","is-success","mr-6",{"is-outlined":f.length>0}),onClick:function(){return p([])},children:"All"}),h.map((function(e){return Object(b.jsx)("a",{"data-cy":"Category",className:o()("button mr-2","my-1",{"is-info":f.includes(e.title)}),href:"#/",onClick:function(){return p(f.includes(e.title)?f.filter((function(t){return t!==e.title})):[].concat(Object(i.a)(f),[e.title]))},children:e.title})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){p([]),s(!1),m("")},children:"Reset all filters"})})]})}),Object(b.jsxs)("div",{className:"box table-container",children:[0===y.length&&Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(b.jsx)("tbody",{children:y.map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(b.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(b.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:"has-text-link",children:e.user.name})]})})}))})]})]})]})})};n.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a2836307.chunk.js.map