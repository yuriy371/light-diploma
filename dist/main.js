(()=>{"use strict";document.querySelector(".top-menu").addEventListener("click",(e=>{let t=e.target;e.target.matches("ul>li>a")&&(e.preventDefault(),(e=>{let t=e.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})(t))}))})();