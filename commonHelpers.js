import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-651d7991.js";const c=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),p=document.querySelector(".value[data-days]"),v=document.querySelector(".value[data-hours]"),S=document.querySelector(".value[data-minutes]"),b=document.querySelector(".value[data-seconds]");let n,a;o.disabled=!0;const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0];const e=new Date;n.getTime()<=e.getTime()&&y.error({title:"Error",message:"Please choose a date in the future!",position:"topRight"}),o.disabled=!1}};h(c,T);const g={start(){!n||a||(c.disabled=!0,a=setInterval(()=>{const t=Date.now(),e=n-t;if(e<=0)clearInterval(a),a=null,u({days:0,hours:0,minutes:0,seconds:0}),c.disabled=!1,o.disabled=!1;else{const r=q(e);u(r)}},1e3))}};o.addEventListener("click",()=>{o.disabled=!0,n&&g.start()});function q(t){const d=s(Math.floor(t/864e5)),l=s(Math.floor(t%864e5/36e5)),m=s(Math.floor(t%864e5%36e5/6e4)),f=s(Math.floor(t%864e5%36e5%6e4/1e3));return{days:d,hours:l,minutes:m,seconds:f}}function s(t){return String(t).padStart(2,"0")}function u({days:t,hours:e,minutes:r,seconds:i}){p.textContent=t,v.textContent=e,S.textContent=r,b.textContent=i}
//# sourceMappingURL=commonHelpers.js.map