(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[374],{58077:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(85893),c=a(54069),r=a.n(c);function i(e){let{text:t}=e;return(0,n.jsxs)("div",{className:r().noData,children:[(0,n.jsx)("img",{src:"/images/EmptyImage.png",alt:"",className:r().img}),(0,n.jsx)("div",{className:r().text,children:t})]})}},86374:function(e,t,a){"use strict";a.r(t);var n=a(85893),c=a(67294),r=a(58077),i=a(63978),o=a.n(i),s=a(45007),l=a(33803),g=a(41664),m=a.n(g),u=a(91608),d=a(54927),p=a(34934);t.default=function(){let[e,t]=(0,c.useState)([]),[a,i]=(0,c.useState)(!1),[g,_]=(0,c.useState)({pageNumber:1,pageSize:20,total:0,totalPage:0}),h=(0,s.I0)(),[f,N]=(0,c.useState)(0),[x,S]=(0,c.useState)(0);(0,c.useEffect)(()=>{let e=(0,d.Ph)("userId");e&&v(e)},[g.pageNumber]);let v=async e=>{i(!0);try{let a=await fetch("".concat(u.JW,"/comment/replies?pageNumber=").concat(g.pageNumber,"&pageSize=").concat(g.pageSize,"&userId=").concat(e),{headers:{Origin:u.JW}}),n=await a.json();if(200===n.code){i(!1),n.data.data.map(e=>{e.showBig=!1}),t(n.data.data);let e=n.data.total;_({...g,total:e,totalPage:Math.ceil(e/g.pageSize)})}else i(!1),h((0,l.vU)(n.message)),console.log("fetchUserInfoData",n)}catch(e){i(!1),console.error(e),h((0,l.vU)(e.message))}},j=a=>{let n=JSON.parse(JSON.stringify(e));n[a].showBig=!n[a].showBig,t(n)};return(0,n.jsxs)("div",{className:o().wrap,children:[(0,n.jsx)("div",{className:o().commentTip,children:"Only you can view your replies"}),(0,n.jsx)("div",{className:o().commentList,children:a?(0,n.jsx)("div",{className:"centerProgress",children:(0,n.jsx)(p.Z,{color:"inherit",size:25})}):e.map((e,t)=>(0,n.jsxs)("div",{className:o().item,children:[(0,n.jsx)(m(),{href:"/userDetail?address=".concat(e.account?e.account.address:""),children:(0,n.jsx)("img",{src:e.account?e.account.avatar:"",alt:"",className:o().img})}),(0,n.jsxs)("div",{className:o().rightWrap,children:[(0,n.jsxs)("div",{className:o().message,children:[(0,n.jsx)("div",{className:o().name,children:e.account&&"".concat(e.account.firstName," ").concat(e.account.lastName?e.account.lastName:"")}),e.direction?(0,n.jsxs)("div",{className:"".concat(o().tag," ").concat("Buy"===e.direction?o().active:""),children:["Buy"===e.direction?"bought":"sold"," ",e.amount," TON"]}):""]}),e.parentId>0?(0,n.jsxs)("div",{className:o().metions,children:["Mentions:"," ",(0,n.jsxs)("div",{className:o().replyTo,children:["#",e.parentId]})]}):"",(0,n.jsx)("div",{className:o().comment,children:e.content}),(0,n.jsx)("img",{src:e.image,alt:"",className:"".concat(e.showBig?o().commentImg1:o().commentImg),onClick:()=>{j(t)}}),(0,n.jsxs)("div",{className:o().replyColumn,children:[(0,n.jsxs)("div",{className:o().left,children:[(0,n.jsxs)("div",{className:o().like,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"/images/comment.png",alt:"",className:"".concat(o().icon)})}),(0,n.jsxs)("div",{children:["#",e.id]})]}),(0,n.jsxs)("div",{className:o().like,children:[(0,n.jsx)("div",{children:e.isLiked?(0,n.jsx)("img",{src:"/images/likeActive.png",alt:"",className:"".concat(o().icon," ").concat(o().iconLike)}):(0,n.jsx)("img",{src:"/images/like.png",alt:"",className:"".concat(o().icon," ").concat(o().iconLike)})}),e.likeCount]})]}),(0,n.jsx)("div",{className:o().time,children:(0,d.mr)(e.createdAt)})]})]})]},e.name+t))}),0!==e.length?(0,n.jsxs)("div",{className:"pageWrap",onClickCapture:e=>{a&&e.stopPropagation()},children:[(0,n.jsx)("div",{className:"pageLeft ".concat(1===g.pageNumber?"active":""),onClick:()=>{1!==g.pageNumber&&_({...g,pageNumber:g.pageNumber-1})},children:(0,n.jsx)("img",{src:"/images/pageLeft.png",className:"pageLeftImg",alt:""})}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",value:g.pageNumber,readOnly:!0,className:"pageInput ".concat(g.totalPage<2?"active":"")})}),(0,n.jsx)("div",{className:"pageLeft pageRight ".concat(g.pageNumber<g.totalPage?"":"active"),onClick:()=>{g.pageNumber<g.totalPage&&_({...g,pageNumber:g.pageNumber+1})},children:(0,n.jsx)("img",{src:"/images/pageRight.png",className:"pageLeftImg",alt:""})})]}):(0,n.jsx)(r.Z,{text:"Empty"})]})}},54927:function(e,t,a){"use strict";a.d(t,{Bq:function(){return f},Ph:function(){return s},RX:function(){return d},Uk:function(){return N},d8:function(){return i},fP:function(){return p},gf:function(){return u},mr:function(){return l},oH:function(){return _},p6:function(){return g},qL:function(){return o},wb:function(){return h},zC:function(){return m}});var n=a(76104),c=a(91608);a(13550);var r=a(70794);let i=e=>{if(e)return e.slice(0,4)+"..."+e.slice(44)};function o(e,t){let a;try{a=n.Address.parse(e).toString({bounceable:!1,testOnly:"testnet"===c.L5})}catch(a){return console.log(a,"toUQAddressError"),t&&t(a.toString()),e}return a}function s(e){return new URLSearchParams(window.location.search).get(e)}function l(e){if(!e)return"";let t=new Date(e),a=t.getUTCFullYear(),n=String(t.getUTCMonth()+1).padStart(2,"0"),c=String(t.getUTCDate()).padStart(2,"0"),r=String(t.getUTCHours()).padStart(2,"0"),i=String(t.getUTCMinutes()).padStart(2,"0"),o=String(t.getUTCSeconds()).padStart(2,"0"),s="".concat(a,"-").concat(n,"-").concat(c),l=function(){let e=new Date,t=e.getUTCFullYear(),a=String(e.getUTCMonth()+1).padStart(2,"0"),n=String(e.getUTCDate()).padStart(2,"0");return"".concat(t,"-").concat(a,"-").concat(n)}(),g="".concat(r,":").concat(i,":").concat(o);return s===l?g:s}function g(e){if(!e)return"";let t=new Date(e),a=t.getUTCFullYear(),n=String(t.getUTCMonth()+1).padStart(2,"0"),c=String(t.getUTCDate()).padStart(2,"0");return String(t.getUTCHours()).padStart(2,"0"),String(t.getUTCMinutes()).padStart(2,"0"),String(t.getUTCSeconds()).padStart(2,"0"),"".concat(a,"-").concat(n,"-").concat(c)}function m(e){if(!e)return"";let t=new Date(e),a=new Date,n=a.getTime()-t.getTime();console.log(a.getTime(),t.getTime());let c=Math.floor(n/1e3),r=Math.floor(c/60),i=Math.floor(r/60),o=Math.floor(i/24);return o>0?"".concat(o,"d ago"):i>0?"".concat(i,"h ago"):r>0?"".concat(r,"m ago"):"".concat(c,"s ago")}let u=(e,t)=>{let a=Math.pow(10,t);return e.toString().split(".").length<2?e:(Math.floor(e*a)/a).toFixed(t)},d=(e,t)=>{let a=t||6;if(!e)return"";let n=Math.pow(10,a);return u(Number(e.toString())/n,a)},p=e=>{let t=e.length-6;return e.slice(0,18)+"..."+e.slice(t)},_=e=>{if(!e)return"";let t=Number(e)*localStorage.coinPrice;return t<1e3?(0,r.Z)(t).toFormat(2):t>=1e4?t>=1e7?(t/1e6).toFixed(2)+"M":(t/1e3).toFixed(2)+"K":(0,r.Z)(t).toFormat(0)},h=e=>{if(!e&&0!==e)return"";let t=Number(e);return t>=1e4?t>=1e7?(t/1e6).toFixed(0)+"M":(t/1e3).toFixed(0)+"K":(0,r.Z)(t).toFormat(0)},f=e=>{if(!e)return"";let t=Number(e);return t<1e3?(0,r.Z)(t).toFormat(2):t>=1e4?t>=1e7?(t/1e6).toFixed(2)+"M":(t/1e3).toFixed(2)+"K":(0,r.Z)(t).toFormat(0)},N=e=>{if(!e)return"";let t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate(),r=t.getHours(),i=t.getMinutes(),o=t.getSeconds();return"".concat(a,"/").concat(n,"/").concat(c," ").concat(r,":").concat(i,":").concat(o)}},54069:function(e){e.exports={noData:"NoData_noData__LhlAK",img:"NoData_img__BiT46",text:"NoData_text__wfqri"}},63978:function(e){e.exports={wrap:"page_wrap__sTbCt",commentTip:"page_commentTip__VHPuM",commentList:"page_commentList__koUZz",item:"page_item__nqa11",img:"page_img__y0tiT",rightWrap:"page_rightWrap__WSNMc",message:"page_message__DD7Lk",name:"page_name__DAEDV",tag:"page_tag__oihWU",active:"page_active___BciB",metions:"page_metions__0SMke",replyTo:"page_replyTo__DoJD1",comment:"page_comment__4TTmx",commentImg:"page_commentImg__SswPm",commentImg1:"page_commentImg1__lqW5_",replyColumn:"page_replyColumn__h7iy1",left:"page_left__cvW6x",like:"page_like__P9UHR",icon:"page_icon__EYsq0",time:"page_time__xrn39"}}}]);