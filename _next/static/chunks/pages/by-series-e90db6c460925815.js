(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{823:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/by-series",function(){return n(99853)}])},2403:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),s=n(67294);async function a(e,t){return fetch("https://oqnrvfog.api.sanity.io/v2023-01-01/data/mutate/production",{method:"post",headers:{"Content-type":"application/json",Authorization:"Bearer sksxS3zOGy6LkWjC78X7SZk3FJXpeD0F0XKm0IAoCwXQWmGyCgPF1rs0O8Y9UvFEhqVtmSlvS4ohqZuezV0gBCICjFH2QhLso6KQesOEutq2Iw5BWhOSI8lLc5EAN7QstEgVoD5l2clUhM4iTatXwpfLFrkOCCLgi7q5AWp54QJk3twOsAU6"},body:JSON.stringify({mutations:[{patch:{id:e,set:{owned:t}}}]})})}var i=n(25675),l=n.n(i),o=n(89583);function c(e){let{data:t,markAsOwned:n}=e;return(0,r.jsxs)("div",{className:"relative m-2 w-40 cursor-pointer rounded border border-black p-1 md:w-52",onClick:()=>n(!t.owned),children:[(0,r.jsx)("h2",{className:"text-l mb-1 text-center",children:t.name}),t.superTreasureHunt&&(0,r.jsx)(l(),{alt:"super treasure hunt",className:"absolute top-1 right-1",width:20,height:20,src:"/super_treasurehunt.jpg"}),t.treasureHunt&&(0,r.jsx)(l(),{alt:"treasure hunt",className:"absolute top-1 right-1",width:20,height:20,src:"/treasurehunt.jpg"}),t.imageUrl?(0,r.jsx)(l(),{alt:"image",width:200,height:100,src:t.imageUrl}):(0,r.jsx)(l(),{alt:"empty",width:200,height:200,src:"/coming-soon.webp"}),t.owned&&(0,r.jsx)("div",{className:"absolute top-0 left-0 h-full w-full backdrop-brightness-50",children:(0,r.jsx)(o.l_A,{style:{position:"absolute",transform:"translate(-50%, -50%)",left:"50%",top:"50%",color:"lightgreen"},size:100})})]},t._id)}function h(e){let{func:t,onOwned:n}=e,[i,l]=(0,s.useState)(t()),o=(e,t)=>{a(e,t).then(()=>{l(i.map(n=>n=n._id===e?{...n,owned:t}:n)),n&&n(e,t)}).catch(console.error)};return(0,r.jsx)("div",{className:"flex flex-wrap justify-center p-2",children:null==i?void 0:i.map(e=>(0,r.jsx)(c,{data:e,markAsOwned:t=>o(e._id,t)},e._id))})}},29523:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893),s=n(25675),a=n.n(s),i=n(41664),l=n.n(i),o=[{name:"All",href:"/"},{name:"Manufacturer",href:"by-manufacturer"},{name:"Series",href:"by-series"},{name:"Year",href:"by-year"},{name:"Owned",href:"owned"}];function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex justify-center pt-5",children:[(0,r.jsx)(a(),{alt:"hw",height:50,width:100,src:"/hotwheels.jpeg",style:{objectFit:"contain"}}),(0,r.jsx)("h1",{className:"pl-3 pr-3 text-center text-2xl",children:"Lizzy's Hot Wheels Collection"}),(0,r.jsx)(a(),{alt:"hw",height:50,width:100,src:"/hotwheels.jpeg",style:{objectFit:"contain"}})]}),(0,r.jsx)("div",{className:"flex justify-center pt-1",children:o.map(e=>(0,r.jsx)("div",{className:"pl-1 pr-1 underline underline-offset-4",children:(0,r.jsx)(l(),{href:e.href,children:e.name})},e.name))})]})}},99853:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o},default:function(){return c}});var r=n(85893),s=n(67294),a=n(2403);function i(e){let{data:t}=e,[n,i]=(0,s.useState)(t),l=e=>{i(n.map(t=>t._id===e._id?e:t))};return(0,r.jsx)("div",{className:"pl-4 pr-4 pt-5",children:n.map(e=>(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h2",{className:"border-b-2 border-solid border-black pb-1 text-center text-xl",children:"".concat(e.name," (").concat(e.hotwheels.filter(e=>e.owned).length,"/").concat(e.hotwheels.length,")")}),(0,r.jsx)(a.Z,{func:()=>e.hotwheels,onOwned:(t,n)=>{l({...e,hotwheels:e.hotwheels.map(e=>(e.owned=e._id===t?n:e.owned,e))})}})]},e._id))})}var l=n(29523),o=!0;function c(e){let{series:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(i,{data:t})]})}}},function(e){e.O(0,[445,865,774,888,179],function(){return e(e.s=823)}),_N_E=e.O()}]);