(()=>{"use strict";((e,t,l,a="active",o="dot-active")=>{let s,c=document.querySelector(e),r=document.querySelectorAll(t),n=document.querySelector(l),d=document.querySelectorAll(".item"),i=[],m=0,u=(e,t,l)=>{"item"===e[t].classList[0]?e[t].style.display="none":e[t].classList.remove(l)},y=(e,t,l)=>{"item"===e[t].classList[0]?e[t].style.display="block":e[t].classList.add(l)},h=()=>{u(r,m,a),u(d,m),u(i,m,o),m++,m>=r.length&&(m=0),y(r,m,a),y(d,m),y(i,m,o)},p=(e=1500)=>{s=setInterval(h,e),r.forEach(((e,t)=>{0===t&&e.classList.add(a)}))};"."===e[0]&&""!==e&&"."===t[0]&&""!==t&&(c.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(u(r,m,a),u(i,m,o),u(d,m),e.target.matches("#arrow-right")?m++:e.target.matches("#arrow-left")?m--:e.target.classList.contains("dot")&&i.forEach(((t,l)=>{e.target===t&&(m=l)})),m>=r.length&&(m=0),m<0&&(m=r.length-1),y(r,m,a),y(i,m,o),y(d,m))})),c.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),c.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&p(3e3)}),!0),r.forEach(((e,t)=>{let l=document.createElement("li");l.className=0===t?`dot ${o}`:"dot",n.append(l),i.push(l)})),p(3e3))})(".top-slider",".table",".dots"),document.body.addEventListener("click",(e=>{const t=e.target;((e,t)=>{let l=t;t.matches("ul>li>a")&&(e.preventDefault(),(e=>{let t=e.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})(l))})(e,t),((e,t)=>{let l=document.querySelector(".modal-callback"),a=document.querySelector(".modal-overlay");if(t.matches(".callback-btn"))e.preventDefault(),l.style.display="block",a.style.display="block";else{if(t.closest(".modal-overlay")&&t.classList.contains("modal-close"))return;l.style.display="none",a.style.display="none"}})(e,t)}))})();