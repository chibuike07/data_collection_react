(this.webpackJsonpcovid_statistic=this.webpackJsonpcovid_statistic||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),l=n.n(r),o=(n(14),n(2)),i=n(8),u=n(5),m=n(1),f=a.a.createContext([{},function(){},function(){},function(){},function(){},function(){},function(){},function(){}]),s=function(e){var t=localStorage.getItem("itemCollection"),n=Object(c.useState)({item:"",num:"",price:"",totalPrice:"",keyHolder:null,collection:t?JSON.parse(t):[]}),r=Object(o.a)(n,2),l=r[0],s=r[1];return Object(c.useEffect)((function(){!function(){var e=l.collection;try{var t=JSON.stringify(e);localStorage.setItem("itemCollection",t)}catch(n){console.error(n)}}()})),a.a.createElement(f.Provider,{value:[l,s,function(e){var t=e.target;s((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},t.name,t.value))}))},function(e){e.preventDefault();var t=l.item,n=l.num,c=l.price,a=l.totalPrice;s((function(e){return Object(m.a)(Object(m.a)({},e),{},{collection:[].concat(Object(i.a)(e.collection),[{item:t,num:n,price:c,totalPrice:a}])})}))},function(){var e=JSON.parse(t),n=l.keyHolder,c=e.filter((function(e,t){return t!==n})),a=JSON.stringify(c);localStorage.setItem("itemCollection",a),s((function(e){return Object(m.a)(Object(m.a)({},e),{},{collection:c})}))},function(){var e=JSON.parse(t),n=l.keyHolder,c=l.item,a=l.num,r=l.price,o=l.totalPrice,i=e.findIndex((function(e,t){return t===n}));e.splice(i,1,{item:c,num:a,price:r,totalPrice:o});var u=JSON.stringify(e);localStorage.setItem("itemCollection",u),s((function(t){return Object(m.a)(Object(m.a)({},t),{},{collection:e})}))},function(e){var t=e.target,n=Number(l.num)*Number(t.value);return l.num?s((function(e){return Object(m.a)(Object(m.a)({},e),{},{totalPrice:n})})):0},function(){return s((function(e){return Object(m.a)(Object(m.a)({},e),{},{collection:[]})})),localStorage.setItem("itemCollection",[])}]},e.children)},d=function(){var e=Object(c.useContext)(f),t=Object(o.a)(e,1)[0].collection;return a.a.createElement("thead",null,a.a.createElement("tr",null,t&&["Item","Num","Price","Total Price"].map((function(e,t){return a.a.createElement("th",{key:t},e)}))))},b=function(){var e=Object(c.useContext)(f),t=Object(o.a)(e,2),n=t[0],r=t[1],l=n.collection;return a.a.createElement("tbody",null,l&&l.map((function(e,t){return a.a.createElement("tr",{key:t,onClick:function(){return function(e){var t=e.index,n=e.values,c=n.item,a=n.num,l=n.price,o=n.totalPrice;r((function(e){return Object(m.a)(Object(m.a)({},e),{},{item:c,num:a,price:l,totalPrice:o,keyHolder:t})}))}({index:t,values:e})}},a.a.createElement("td",null,e.item),a.a.createElement("td",null,e.num),a.a.createElement("td",null,e.price),a.a.createElement("td",null,e.totalPrice))})))},v=function(){return a.a.createElement("table",null,a.a.createElement(d,null),a.a.createElement(b,null))},E=function(){var e=Object(c.useContext)(f),t=Object(o.a)(e,8),n=t[0],r=t[2],l=t[3],i=t[4],u=t[5],m=t[6],s=t[7];return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:l},a.a.createElement("input",{type:"text",name:"item",value:n.item,onChange:r,required:!0}),a.a.createElement("input",{type:"number",name:"num",value:n.num,onChange:r,required:!0}),a.a.createElement("input",{type:"number",name:"price",value:n.price,onChange:r,onInput:m,required:!0}),a.a.createElement("input",{type:"number",name:"totalPrice",value:n.totalPrice,required:!0,readOnly:!0}),a.a.createElement("div",null,a.a.createElement("button",null,"add"))),a.a.createElement("div",null,a.a.createElement("button",{onClick:u},"edit"),a.a.createElement("button",{onClick:i},"del"),a.a.createElement("button",{onClick:s},"clear cache")))},p=function(){return a.a.createElement("div",null,a.a.createElement(E,null),a.a.createElement(v,null))},O=function(){return a.a.createElement(s,null,a.a.createElement("div",{className:"container"},a.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.65940865.chunk.js.map