(this.webpackJsonpdisney=this.webpackJsonpdisney||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),i=n.n(r),s=(n(26),n(27),n(3)),o=n(4),u=n(0),l=c.a.createContext({});function j(){return Object(a.useContext)(l)}var h=function(e){var t=e.children,n=Object(a.useState)(!0),c=Object(o.a)(n,2),r=c[0],i=c[1],j=Object(a.useState)(1),h=Object(o.a)(j,2),d=h[0],b=h[1],g=Object(a.useState)([]),O=Object(o.a)(g,2),v=O[0],f=O[1];return Object(u.jsx)(l.Provider,{value:{showAll:r,updateShowAll:i,currentPage:d,updateCurrentPage:b,favourites:v,toggleFavouriteForCharacter:function(e){if(0===v.filter((function(t){return t._id===e._id})).length)f([].concat(Object(s.a)(v),[e]));else{var t=v.filter((function(t){return t._id!==e._id}));f(Object(s.a)(t))}}},children:t})},d=n(10),b=n.n(d),g=n(20),O=n(21),v=n.n(O),f=function(){var e=j().currentPage;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{className:"header__container",children:[Object(u.jsx)("h1",{className:"header__title",children:"The World of Disney"}),Object(u.jsxs)("p",{className:"header__page-count ",children:["Page: ",e]})]})})},x=function(){var e=j().currentPage,t=j().updateCurrentPage,n=j().showAll,a=j().updateShowAll;return Object(u.jsxs)("div",{className:"navigation",children:[Object(u.jsx)("div",{className:"navigation__item",children:Object(u.jsx)("button",{className:n?"navigation__button":"navigation__button--hidden",onClick:function(){e>1&&t(e-1)},children:"Prev Page"})}),Object(u.jsx)("div",{className:"navigation__item",children:Object(u.jsx)("button",{className:"navigation__button",onClick:function(){t(1),a(!n)},children:n?"Show Favourites":"Show All"})}),Object(u.jsx)("div",{className:"navigation__item",children:Object(u.jsx)("button",{className:n?"navigation__button":"navigation__button--hidden",onClick:function(){n&&t(e+1)},children:"Next Page"})})]})},m=function(e){var t=e.character,n=j().favourites,a=j().toggleFavouriteForCharacter,c="https://picsum.photos/300/200/?blur";if(t.imageUrl){var r=t.imageUrl.indexOf("/revision");c=t.imageUrl.substring(0,-1===r?t.imageUrl.length:r)}return Object(u.jsxs)("article",{className:"character-item",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("div",{className:"character-item__actions",onClick:function(){return a(t)},children:0===n.filter((function(e){return e._id===t._id})).length?"Add to Favourites":"Selected as Favourite"}),Object(u.jsx)("img",{className:"character-item__img",src:c,alt:t.name})]})},_=function(){var e=Object(s.a)(Object(a.useContext)(p)),t=j().favourites,n=j().showAll,c=j().updateShowAll,r=j().currentPage,i=j().updateCurrentPage;Object(a.useEffect)((function(){n||0!==t.length||c(!0)}));var o=[];o=n?Object(s.a)(e):Object(s.a)(t);var l=function(){var e=[],t=[];return o.forEach((function(n,a){t.push(Object(u.jsx)(m,{character:n},n._id)),(a+1)%5===0&&(e.push(Object(u.jsx)("div",{className:"character-row",children:t},a)),t=[])})),t.length>0&&e.push(Object(u.jsx)("div",{className:"character-row",children:t},o.length)),e};return 0===l().length&&r>1&&i(r-1),Object(u.jsx)("div",{className:"character-container",children:l()})},p=c.a.createContext([]),N=function(){var e=j().currentPage,t=j().showAll,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],i=c[1],s=function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://api.disneyapi.dev/characters?page=".concat(t));case 2:n=e.sent,i(n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s(e)}),[e,t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(x,{}),Object(u.jsx)(p.Provider,{value:r,children:Object(u.jsx)(_,{})})]})},C=function(){return Object(u.jsx)("div",{className:"page",children:Object(u.jsx)(h,{children:Object(u.jsx)(N,{})})})},P=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(C,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.20b78652.chunk.js.map