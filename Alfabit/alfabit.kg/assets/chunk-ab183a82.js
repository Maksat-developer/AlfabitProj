import{_ as c,U as l,aj as u,i as _,B as d,r as a,o as y,e as m,w as n,b as v,m as f,a as U,g}from"./chunk-e8d35fff.js";const B={components:{UiButton:l,UiTooltip:u},props:{value:{type:[String,Number],required:!0}},setup(e){const o=_(!1),s=d(()=>o.value?"copied":"make_copy");return{isCopied:o,copyText:s,copyValue:()=>{navigator.clipboard.writeText(e.value),o.value=!0}}}};function C(e,o,s,t,b,x){const p=a("UiButton"),i=a("UiTooltip");return y(),m(i,{class:"ui-copy",position:"top"},{trigger:n(()=>[v(p,f({class:"ui-copy__button",icon:"copy"},e.$attrs,{onClick:o[0]||(o[0]=r=>t.copyValue()),onMouseleave:o[1]||(o[1]=r=>t.isCopied=!1)}),null,16)]),default:n(()=>[U("span",null,g(e.$t(t.copyText)),1)]),_:1})}const V=c(B,[["render",C],["__scopeId","data-v-137ed33b"]]);export{V as U};