(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7970],{37645:function(e,n,t){"use strict";var r=t(87462),o=t(63366),i=t(67294),l=t(86010),a=t(27192),s=t(15861),c=t(11496),u=t(33616),p=t(4472),d=t(34182),f=t(85893);const m=["className","id"],g=(0,c.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,n)=>n.root})({padding:"16px 24px",flex:"0 0 auto"}),h=i.forwardRef((function(e,n){const t=(0,u.Z)({props:e,name:"MuiDialogTitle"}),{className:s,id:c}=t,h=(0,o.Z)(t,m),b=t,v=(e=>{const{classes:n}=e;return(0,a.Z)({root:["root"]},p.a,n)})(b),{titleId:x=c}=i.useContext(d.Z);return(0,f.jsx)(g,(0,r.Z)({component:"h2",className:(0,l.Z)(v.root,s),ownerState:b,ref:n,variant:"h6",id:x},h))}));n.Z=h},40108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/seasonal/create",function(){return t(83931)}])},83931:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return be}});var r=t(34051),o=t.n(r),i=t(85893),l=t(67294),a=t(9473),s=t(16327),c=t(30560),u=t(87006),p=t(87682),d=t(53063),f=t(12671),m=t(61690),g=t(59111),h=t(23766),b=t(76490),v=t(15113),x=t(33050),y=t(68193);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){var n=(0,l.useState)([]),t=n[0],r=n[1],o=(0,l.useState)(""),i=o[0],a=o[1];(0,l.useEffect)((function(){if(a(""),e.length>0)try{var n=e.map((function(e){return{impact:e.impact,impact_tagalog:e.impact_tagalog}})).filter((function(e){return""!==e.impact&&""!==e.impact_tagalog}));return n=c(n),void r([{impact:s(n.impact),impact_tagalog:s(n.impact_tagalog)}])}catch(t){a(t)}else r([])}),[e]);var s=function(e){var n="-",t=e.reduce((function(e,t){return t.includes("<p>")?("list"===n&&(e+="</ul>"),e+=t,n="p"):(["-","p"].includes(n)&&(e+="<ul>"),e+=t,n="list"),e}),"");return"list"===n&&(t+="</ul>"),t},c=function(e){var n=[];return e.reduce((function(e,t){return Object.keys(e).forEach((function(r){var o=t[r].replace(/<ul>/g,"");(o=(o=o.replace(/<\/ul>/g,"")).replace(/<li>/g,"")).split("</li>").forEach((function(t){t.includes("<p>")?t.replace(/<p>/g,"").split("</p>").forEach((function(t){n.includes(t)||""===t||(n.push(t),e[r].push("<p>".concat(t,"</p>")))})):n.includes(t)||""===t||(n.push(t),e[r].push("<li>".concat(t,"</li>")))}))})),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}({},e)}),{impact:[],impact_tagalog:[]})};return{group:t,error:i}}var Z=t(99306),S=t(41375),O=t(901),w=t(16013),E=t(47426),P=t(27392),C=t(95243),k=t(11163),A=t(45697),T=t.n(A),L=t(21023),R=t(93946),I=t(41664),N=t(76295),B=t(87357),M=t(98456),z=t(11057),D=t(56863),F=t(87918),G=t(67720),W=t(86886),q=t(61903),V=t(15861),H=t(88409),U=t(40044),Y=t(87784),$=t(11829),X=t(19227),K=t(22094),J=t(27692),Q=t(79316),ee=t(22757);function ne(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ne(e,n,t[n])}))}return e}function re(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function oe(e){var n=function(e){var n=e.children,t=e.value,r=e.index,o=re(e,["children","value","index"]);return(0,i.jsx)("div",te({role:"tabpanel",hidden:t!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o,{children:t===r&&(0,i.jsx)(B.Z,{sx:{p:3},children:n})}))},t=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},r=(0,l.useState)(!1),o=r[0],s=r[1],c=(0,l.useRef)(!0),u=(0,k.useRouter)(),p=(0,a.I0)(),d=(0,l.useState)(0),m=d[0],g=d[1],h=e.sel_options,b=e.recommendations,v=e.recommendationsImpacts,x=e.optsprovinces,y=e.optsmunicipalities,j=e.optsactivities,_=e.optscrops,Z=e.optsmonths,S=e.monthForecast,O=e.open,w=e.isTagalog,P=e.loading,C=e.isloadingreport,A=e.message,ne=e.smstext,oe=e.pdfPreview,ie=e.handleSave,le=e.handlePreview,ae=e.togglePrompt,se=e.toggleViewerOpen,ce=e.toggleGlobalLanguage,ue=e.onSelectItemChange,pe=e.resetSelections;(0,l.useEffect)((function(){return c.current=!0,function(){c.current=!1}}),[]),(0,l.useEffect)((function(){null===h.sel_month&&!0===o&&s(!1)}),[h.sel_month,o]);var de=function(){p((0,f.s_)()),u.push("/admin/bulletins/crops/report/view/?docId=".concat(A.docId))},fe=function(){var e="Loading...";return x.length>0&&(e=null===h.sel_province?"Select a province":"Province"),e};return n.propTypes={children:T().node,index:T().number.isRequired,value:T().number.isRequired},(0,i.jsxs)("div",{children:[(0,i.jsx)(X.Z,{isOpen:A.isOpen,maxWidth:"xs",openButtonText:null,title:A.title,contentText:A.msg,loading:A.loading,modalCancelHandlerCB:function(){A.savesuccess?de():ae()},modalConfirmHandlerCB:function(){A.savesuccess?de():ie()}}),(0,i.jsx)(K.Z,{open:O,pdfPreview:oe,error:h.error,loading:h.loading,toggleViewerOpen:se}),(0,i.jsxs)(W.ZP,{container:!0,sx:ee.Z.container,children:[(0,i.jsxs)(B.Z,{sx:ee.Z.headerText,children:[(0,i.jsxs)(B.Z,{children:[(0,i.jsx)(V.Z,{variant:"h5",children:"Regional Seasonal Climate Outlook and Advisory Crop Recommendations Bulletin"}),(0,i.jsxs)("p",{children:["Create ",(0,i.jsx)("strong",{children:"Seasonal"})," crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download."]})]}),(0,i.jsx)(B.Z,{children:(0,i.jsx)(R.Z,{"aria-label":"exit",size:"medium",children:(0,i.jsx)(I.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(L.Z,{fontSize:"inherit"})})})})]}),(0,i.jsxs)(W.ZP,{item:!0,sx:ee.Z.item,xs:12,lg:4,children:[(0,i.jsx)(V.Z,{variant:"h6",children:"Selection Options"}),(0,i.jsx)(N.Z,{disablePortal:!0,id:"province",size:"small",value:h.sel_province,disabled:0===x.length||P,options:x,sx:ee.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(q.Z,te({},e,{label:fe()}))},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return ue(e,te({},n,{from:"province"}))}}),(0,i.jsx)(N.Z,{disablePortal:!0,id:"municipality",size:"small",value:h.sel_municipality,disabled:0===y.length||P,options:y,sx:ee.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(q.Z,te({},e,{label:null===h.sel_municipality?"Select a municipality":"Municipality"}))},getOptionDisabled:function(e){return e.disabled||void 0!==e.iscalendar},isOptionEqualToValue:function(e,n){return e.label===n},onChange:function(e,n){return ue(e,te({},n,{from:"municipality"}))}}),(0,i.jsx)(N.Z,{disablePortal:!0,id:"crop",size:"small",value:h.sel_crop,disabled:0===_.length||P,options:_,sx:ee.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(q.Z,te({},e,{label:null===h.sel_crop?"Select a crop type":"Crop"}))},isOptionEqualToValue:function(e,n){return e.label===n},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){return ue(e,te({},n,{from:"crop"}))}}),(0,i.jsx)(N.Z,{disablePortal:!0,id:"month",size:"small",value:h.sel_month,disabled:0===Z.length||null===h.sel_crop||P,options:Z,sx:ee.Z.autocomplete,PaperComponent:$.Z,renderInput:function(e){return(0,i.jsx)(q.Z,te({},e,{label:null===h.sel_month?"Select a Month":"Month"}))},isOptionEqualToValue:function(e,n){return e.label===n.label},getOptionDisabled:function(e){return e.disabled},onChange:function(e,n){ue(e,te({},n,{from:"month"})),s(!1)}}),(0,i.jsxs)(D.Z,{disableElevation:!0,size:"small","aria-label":"outlined button controls group",disabled:C||null===h.sel_municipality||null===h.sel_crop||null===h.sel_month,sx:{marginTop:"16px",float:"right"},children:[(0,i.jsx)(z.Z,{variant:"outlined",disabled:P||C,onClick:pe,children:"Reset"}),(0,i.jsx)(z.Z,{variant:"contained",onClick:function(){return s((function(e){return!e}))},disabled:P||null===h.sel_month||o,children:"Generate"})]})]}),(0,i.jsx)(W.ZP,{item:!0,sx:ee.Z.item,xs:12,lg:8,children:(0,i.jsx)(Q.Z,{selecteditems:h,farmoperations:j.map((function(e){return e.label})).toString().split(",").join(", "),loading:P})})]}),(0,i.jsxs)(W.ZP,{container:!0,sx:ee.Z.container,gap:3,style:{marginTop:"24px"},children:[(0,i.jsxs)(W.ZP,{item:!0,sx:ee.Z.item,xs:12,lg:12,children:[(0,i.jsxs)(B.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)(V.Z,{variant:"h6",children:"Crop Recommendations"}),(0,i.jsx)(M.Z,{size:24,color:"primary",sx:{display:P?"block":"none"}})]}),null!==h.sel_crop&&null!==h.sel_month&&o&&(0,i.jsxs)(B.Z,{children:[(0,i.jsxs)(B.Z,{sx:{display:{md:"block",lg:"flex"}},children:[(0,i.jsxs)(V.Z,{variant:"h5",sx:{display:"block",flexGrow:{xs:12,sm:3}},children:[h.sel_crop," Recommendations"]}),(0,i.jsx)(B.Z,{sx:{flexGrow:{xs:12,sm:1}},children:null!==h.sel_month&&(0,i.jsxs)(B.Z,{sx:ee.Z.conditionLegend,style:{color:[E.MW.ABOVE_NORMAL.label,E.MW.WAY_BELOW_NORMAL.label].includes(S.forecast)?"#fff":"#000",backgroundColor:E.tN[S.forecast]},children:[(0,i.jsx)(V.Z,{variant:"subtitle2",children:"Rainfall Condition"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:h.sel_month.label})," \xa0",(0,i.jsxs)("span",{children:[S.label," ","(",(0,Y.aS)(S.value),"%)"]})]})]})})]}),S.forecast!==E.DD&&(0,i.jsxs)(B.Z,{sx:{width:"100%",marginTop:{xs:"85px",lg:"0px"},"& hr":{marginBottom:"32px"}},children:[(0,i.jsx)(B.Z,{sx:{borderBottom:1,borderColor:"divider","& hr":{color:"red"}},children:(0,i.jsxs)(H.Z,{value:m,onChange:function(e,n){g(n)},"aria-label":"basic tabs example",children:[(0,i.jsx)(U.Z,te({label:"PDF FORM"},t(0))),(0,i.jsx)(U.Z,te({label:"SMS FORM"},t(1)))]})}),(0,i.jsxs)(n,{value:m,index:0,children:[(0,i.jsxs)(B.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[(0,i.jsx)(V.Z,{variant:"h4",children:"Impact Outlooks"}),(0,i.jsx)(F.Z,{size:"medium",variant:"outlined",label:w?"English":"Tagalog",onClick:function(){return ce()},sx:{width:"90px"}})]}),(0,i.jsx)(B.Z,{sx:ee.Z.recSeasonal,children:(0,i.jsx)(J.Z,{recommendations:v,title:"",subtitle:"",titleFontSize:"h6",recommendationsEng:"impact",recommendationsTag:"impact_tagalog",isTagalog:w,isShowTitle:!1})}),(0,i.jsx)("hr",{}),(0,i.jsx)(V.Z,{variant:"h4",children:"Practices"}),Object.keys(b).map((function(e){return Object.keys(b[e]).map((function(n,t){return(0,i.jsxs)(B.Z,{sx:ee.Z.recSeasonal,children:[(0,i.jsxs)(V.Z,{variant:"h6",children:[e," - ",n]}),(0,i.jsx)(J.Z,{recommendations:b[e][n],title:"",subtitle:"",titleFontSize:"h6",recommendationsEng:"practice",recommendationsTag:"practice_tagalog",isTagalog:w})]},"rec-".concat(t))}))}))]}),(0,i.jsx)(n,{value:m,index:1,children:ne})]})]})]}),(0,i.jsxs)(B.Z,{sx:{marginBottom:"16px",width:"100%",display:o?"block":"none"},children:[(0,i.jsx)("br",{}),(0,i.jsx)(G.Z,{}),(0,i.jsx)("br",{}),""!==h.error&&(0,i.jsxs)(V.Z,{variant:"caption",sx:{color:"red"},children:["Error: ",h.error]}),(0,i.jsxs)(D.Z,{size:"large","aria-label":"large button group",disabled:C||S.forecast===E.DD,sx:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:[(0,i.jsx)(I.default,{href:"/admin/bulletins/crops",passHref:!0,children:(0,i.jsx)(z.Z,{disabled:h.loading,children:"Cancel"})}),(0,i.jsxs)(z.Z,{disabled:h.loading,onClick:le,children:[(0,i.jsx)("span",{style:{display:C?"none":"block"},children:"Preview"})," ","\xa0",(0,i.jsx)(M.Z,{size:24,color:"secondary",sx:{display:C?"block":"none"}})]}),(0,i.jsx)(z.Z,{variant:"contained",onClick:ae,disableElevation:!0,disabled:h.loading,children:"Save"})]})]})]})]})}oe.propTypes={optsprovinces:T().array,optsmunicipalities:T().array,optscrops:T().array,optsmonths:T().array,optsactivities:T().array,sel_options:T().object,monthForecast:T().object,recommendations:T().object,recommendationsImpacts:T().array,loading:T().bool,isloadingreport:T().bool,open:T().bool,isTagalog:T().bool,message:T().object,smstext:T().string,pdfPreview:T().object,onSelectItemChange:T().func,handlePreview:T().func,handleSave:T().func,toggleViewerOpen:T().func,toggleGlobalLanguage:T().func,resetSelections:T().func,togglePrompt:T().func};var ie=oe,le=t(66383),ae=t(87661);function se(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ce(e,n,t,r,o,i,l){try{var a=e[i](l),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,o)}function ue(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){ce(i,r,o,l,a,"next",e)}function a(e){ce(i,r,o,l,a,"throw",e)}l(void 0)}))}}function pe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function de(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){pe(e,n,t[n])}))}return e}function fe(e){return function(e){if(Array.isArray(e))return se(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return se(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var me=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var ge={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,sel_condition:{id:0,from:"weather_condition",label:E.MW.WAY_BELOW_NORMAL.label},loading:!1,error:"",success:""},he={url:"",filename:""};var be=(0,C.Z)((function(e){var n=e.user,t=e.onBtnLogoutClick,r=e.loading,j=(0,l.useState)(ge),C=j[0],k=j[1],A=(0,l.useState)({}),T=A[0],L=A[1],R=(0,l.useState)({}),I=R[0],N=R[1],B=(0,l.useState)([]),M=B[0],z=B[1],D=(0,l.useState)([]),F=D[0],G=D[1],W=(0,l.useState)([]),q=W[0],V=W[1],H=(0,l.useState)([]),U=H[0],Y=H[1],$=(0,l.useState)(null),X=$[0],K=$[1],J=(0,l.useState)(!0),Q=J[0],ee=J[1],ne=(0,l.useState)(!1),te=ne[0],re=ne[1],oe=(0,l.useRef)(!1),se=(0,h.Z)(C.sel_province,U),ce=(0,p.m$)(c.M.WEATHER_FORECASTS,"calabarzon",c.M.SUB_SEASONAL,"name"),be=ce.documents,ve=ce.loading,xe=ce.error,ye=(0,Z.Z)(I,C.sel_month).forecast,je=(0,x.Z)(C.sel_province),_e=je.cropcalendar,Ze=je.loading,Se=je.error,Oe=(0,b.Z)(_e,C.sel_municipality),we=(0,v.Z)(T,M,C.sel_crop),Ee=we.months,Pe=we.uniquecropstages,Ce=we.error,ke=(0,y.Z)(X,ye,w.q.SEASONAL,!0),Ae=ke.recommendations,Te=ke.farmoperations,Le=ke.loading,Re=ke.error,Ie=(0,S.Z)(Ae),Ne=Ie.group,Be=Ie.error,Me=_(Ae),ze=Me.group,De=Me.error,Fe=(0,l.useState)(he),Ge=Fe[0],We=Fe[1],qe=(0,l.useState)(!1),Ve=qe[0],He=qe[1],Ue=(0,l.useState)(P.BF),Ye=Ue[0],$e=Ue[1],Xe=(0,l.useState)(""),Ke=Xe[0],Je=Xe[1],Qe=(0,a.v9)((function(e){return e.dashboard.reportType})),en=(0,a.I0)(),nn=(0,a.v9)((function(e){return e.reports})),tn=nn.report,rn=nn.status,on=nn.error;(0,l.useEffect)((function(){oe.current=!0;var e=function(){var e=ue(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.$m)();case 3:n=e.sent,oe&&Y(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){oe.current=!1}}),[]),(0,l.useEffect)((function(){en((0,f.s_)())}),[en]),(0,l.useEffect)((function(){U.length>0&&!ve&&!r&&(V((0,g.m)(U)),z(be[0].mos.reduce((function(e,n){return fe(e).concat([{id:E.re[n.toUpperCase()].code,label:E.re[n.toUpperCase()].format,disabled:!1}])}),[])))}),[U,be,ve,r]),(0,l.useEffect)((function(){ee(r||ve||Le||Ze)}),[r,ve,Le,Ze]),(0,l.useEffect)((function(){if(""!==Ce||""!==Re||""!==xe||""!==Se||""!==Be||""!==on||""!==De){var e=Ce||Re||xe||Se||Be||on||De;k((function(n){return de({},n,{error:e})}))}else k((function(e){return de({},e,{error:""})}))}),[Ce,Re,xe,Se,Be,on,De]),(0,l.useEffect)((function(){rn===O.G.FULLFILLED&&null!==tn&&oe.current&&$e((function(e){return de({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:tn.id})}))}),[rn,tn]);var ln=function(){var e=ue(o().mark((function e(){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.values(E.re).find((function(e){return e.format===C.sel_month.label})).code,$e(de({},Ye,{loading:!0,msg:"Saving report..."}));try{r={region:"calabarzon",province:C.sel_province,municipality:C.sel_municipality,crop:C.sel_crop,month:t,stages:X.split(","),operation:"create",language:te?"tag":"en"},en((0,m.Br)(r)).unwrap().then((function(){Qe!==P.Ry.SEASONAL&&(en((0,d.uq)(P.Ry.SEASONAL)),en((0,m.RC)({uid:n.uid,type:P.Ry.SEASONAL})))})).catch((function(e){oe.current&&$e((function(n){return de({},n,{msg:e.message,loading:!1,savesuccess:!1,docId:null})}))}))}catch(o){i="",void 0!==o.response&&(i=void 0!==o.response.data&&"[object Blob]"===me(o.response.data)?o.response.data:""),""===i&&(i=o.message)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),an=function(){var e=ue(o().mark((function e(){var n,t,r,i,l,a,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Ge.url){e.next=4;break}return He(!0),e.abrupt("return");case 4:return k((function(e){return de({},e,{loading:!0,error:"",success:""})})),r=null!==(t=null===(n=C.sel_month)||void 0===n?void 0:n.id)&&void 0!==t?t:"-",e.prev=7,i={region:"calabarzon",province:C.sel_province,municipality:C.sel_municipality,crop:C.sel_crop,month:r,stages:X.split(","),operation:"preview",language:te?"tag":"en"},He(!0),k((function(e){return de({},e,{loading:!0,error:""})})),e.next=13,(0,u.pl)(i);case 13:l=e.sent,a=new Blob([l],{type:"application/pdf"}),(s={}).href=URL.createObjectURL(a),s.download="".concat(C.sel_province,"_").concat(C.sel_municipality,"-").concat(C.sel_crop,".pdf"),We((function(e){return de({},e,{url:s.href,filename:s.download})})),k((function(e){return de({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=28;break;case 22:e.prev=22,e.t0=e.catch(7),c="",void 0!==e.t0.response&&(c=void 0!==e.t0.response.data&&"[object Blob]"===me(e.t0.response.data)?e.t0.response.data:""),""===c&&(c=e.t0.message),k((function(e){return de({},e,{loading:!1,error:c})}));case 28:case"end":return e.stop()}}),e,null,[[7,22]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(le.Z,{loading:r,user:n,onBtnLogoutClick:t,accLevel:E.DW.ADMIN,children:(0,i.jsx)(ie,{optsprovinces:q,optsmunicipalities:se,optscrops:Oe,optsmonths:Ee,optsactivities:Te,sel_options:C,monthForecast:ye,recommendations:Ne,recommendationsImpacts:ze,loading:Q,isloadingreport:rn===O.G.PENDING,open:Ve,isTagalog:te,message:Ye,smstext:Ke,pdfPreview:Ge,onSelectItemChange:function(e,n){var t=n.from,r=n.label,o=n.id;if(We(he),F.length>0&&G([]),Object.keys(n).includes("id"))switch(t){case"province":K(null),N(be.find((function(e){return e.name===r}))),k(de({},ge,{sel_province:r}));break;case"municipality":K(null),k(de({},C,{sel_municipality:r,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null}));break;case"crop":L(_e.find((function(e){return e.municipality===C.sel_municipality&&e.crop===r}))),k(de({},C,{sel_crop:r,sel_month:null,sel_stage:null,sel_activity:null}));break;case"month":var i=Pe[o].map((function(e){return e.code})).toString(),l=Pe[o].map((function(e){return e.label})).toString();K(i),Je((function(e){return(0,ae.smsWriter)({type:ae.SMS_TYPE.SEASONAL,replacements:pe({},ae.REPLACE_KEYS.SEASONAL.MONTH,ae.MONTHS_TAGALOG[n.id])})})),k(de({},C,{sel_month:n,sel_stage:l,sel_activity:null}))}else"province"===t?(k(ge),K(null)):"municipality"===t?(k(de({},C,{sel_municipality:null,sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),K(null)):"crop"===t?(k(de({},C,{sel_crop:null,sel_month:null,sel_stage:null,sel_activity:null})),K(null)):"month"===t&&(k(de({},C,{sel_month:null,sel_stage:null,sel_activity:null})),K(null))},handlePreview:an,handleSave:ln,toggleViewerOpen:function(){He((function(e){return!e}))},toggleGlobalLanguage:function(){re((function(e){return!e})),We(he)},resetSelections:function(){k(ge),K(null),G([])},togglePrompt:function(){$e((function(e){return de({},P.BF,{isOpen:!e.isOpen})}))}})})}))}},function(e){e.O(0,[6284,2866,9964,9522,1903,6279,6295,4039,2882,6572,1050,3523,7702,1505,9774,2888,179],(function(){return n=40108,e(e.s=n);var n}));var n=e.O();_N_E=n}]);