import{a as u,A as w,S as f,N as p,K as g,M as b,P as E}from"./assets/vendor-1d5ddc5a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}})();u.defaults.baseURL="https://portfolio-js.b.goit.study/api";u.defaults.headers.common.Accept="application/json";u.defaults.headers.common["Content-Type"]="application/json";function S(){return u.get("/reviews")}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".menu-btn-desctab"),e=document.querySelector(".header-menu-list"),i=document.querySelector(".header-menu"),o=document.querySelector(".header-burger-btn"),n=document.querySelector(".header-menu-container"),t=document.querySelector(".menu-btn-close"),r=document.querySelector(".header-button-link");s.addEventListener("mouseenter",function(){e.classList.add("header-menu-list_active")}),i.addEventListener("mouseleave",function(){e.classList.remove("header-menu-list_active")}),o.addEventListener("click",function(){n.classList.toggle("is-open"),o.classList.toggle("visually-hidden"),t.classList.remove("visually-hidden"),r.classList.remove("btn-link-none"),e.classList.remove("header-menu-list"),e.classList.add("header-menu-list-mobile")}),t.addEventListener("click",function(){n.classList.add("menu-close-animate"),setTimeout(function(){n.classList.remove("menu-close-animate"),n.classList.remove("is-open"),o.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),t.classList.add("header-button-link-none"),r.classList.add("btn-link-none"),e.classList.remove("header-menu-list-mobile"),e.classList.add("header-menu-list")},300)}),document.querySelectorAll(".header-menu-item-link").forEach(function(m){m.addEventListener("click",function(){t.click()})}),r.addEventListener("click",function(){t.click()})});document.querySelector(".accordion-button-up-down");new w(".accordion-info-list",{duration:700,showMultiple:!1,openOnInit:[0],onOpen:s=>{s.querySelector(".ac-trigger").classList.add("button-roll")},onClose:s=>{s.querySelector(".ac-trigger").classList.remove("button-roll")}});const l=new f(".skills-container",{modules:[p,g,b],slidesPerView:"auto",loop:!0,speed:700,grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{invert:!1},on:{init:function(){const s=this.activeIndex;this.slides.forEach((e,i)=>{i===s?e.classList.add("active"):e.classList.remove("active")})},slideChange:function(){const s=this.activeIndex;this.slides.forEach((e,i)=>{i===s?e.classList.add("active"):e.classList.remove("active")})}}}),q=document.querySelector(".skills-button-next");q.addEventListener("click",function(){const s=l.slides.filter(i=>i.isVisible());l.isEnd&&s.length===l.slides.length||s.length===l.slides.lengthVisible?l.slideTo(0):l.slideNext()});document.addEventListener("DOMContentLoaded",function(){new f(".projects .swiper",{loop:!1,slidesPerView:1,spaceBetween:0,centeredSlides:!0,navigation:{nextEl:".projects-swiper-button-next",prevEl:".projects-swiper-button-prev",disabledClass:"disabled"},modules:[p,E]})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".ac-faq-li");s.forEach((o,n)=>{const t=o.querySelector(".ac-panel");t.style.maxHeight="0",t.style.overflow="hidden",t.style.transition="max-height 0.7s ease"});const e=document.querySelectorAll(".fqa-btn-open");function i(o){const n=o.currentTarget.closest(".ac-faq-li"),t=n.querySelector(".ac-panel"),r=n.classList.contains("active");s.forEach(a=>{if(a!==n){const m=a.querySelector(".ac-panel");a.classList.remove("active"),m.style.maxHeight="0"}}),n.classList.toggle("active"),r?t.style.maxHeight="0":t.style.maxHeight=t.scrollHeight+"px"}e.forEach(o=>{o.addEventListener("click",i)}),window.addEventListener("scroll",()=>{Array.from(s).some(n=>{const t=n.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight})||s.forEach(n=>{const t=n.querySelector(".ac-panel");n.classList.remove("active"),t.style.maxHeight="0"})}),new w(".faq-list",{duration:700,showMultiple:!1,onOpen:o=>{o.querySelector(".ac-trigger").classList.add("button-roll")},onClose:o=>{o.querySelector(".ac-trigger").classList.remove("button-roll")}})});function x(s){const e=s.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth,n=e.top<=i&&e.top+e.height>=0,t=e.left<=o&&e.left+e.width>=0;return n&&t}function k(){const s=document.querySelector("#covers"),e=document.querySelectorAll(".marquee-line");window.addEventListener("scroll",function(){x(s)?e.forEach(function(i){i.classList.add("animate")}):e.forEach(function(i){i.classList.remove("animate")})})}document.addEventListener("DOMContentLoaded",k);const h=document.querySelector(".reviews-list");S().then(s=>{if(!s.statusText==="OK")throw new Error("Empty response data");y(s.data,h,!0)}).catch(()=>{P("Server error. Please try again!"),y([],h,!1)});function y(s,e,i){if(i){const o=s.map(({_id:n,author:t,avatar_url:r,review:a})=>`<li class="reviews-list-item swiper-slide" id="review-${n}" aria-label="review">
          <picture>
            <source srcset="${r}" 
              type="image/jpeg">
              <img 
                class="review-photo" 
                src="${r}" 
                alt="${t} photo" 
                width="48" 
                height="48" 
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${t}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${a}</p>
          </div>
          
      </li>`).join("");e.insertAdjacentHTML("beforeend",o)}else e.insertAdjacentHTML("beforeend","<h3>Not found :(</h3>")}function P(s){const e=document.createElement("div");e.className="popup-server-error",e.textContent=s,document.body.appendChild(e),setTimeout(()=>{e.classList.add("activate-popup-animation")},50),setTimeout(()=>{e.classList.remove("activate-popup-animation")},4e3),setTimeout(e.remove.bind(e),5e3)}new f(".reviews-swiper",{modules:[p,g],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const c=document.querySelector(".prev-review-btn"),d=document.querySelector(".next-review-btn");function v(){const s=c.disabled,e=d.disabled;c.style.color=s?"#fafafa33":"#fafafa",c.style.borderColor=s?"#fafafa33":"#fafafa",d.style.color=e?"#fafafa33":"#fafafa",d.style.borderColor=e?"#fafafa33":"#fafafa"}v();c.addEventListener("click",v);d.addEventListener("click",v);const L=document.querySelector(".form");L.addEventListener("submit",C);function C(s){s.preventDefault();const i={email:document.querySelector('.input-footer[type="email"]').value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(o=>{if(o.ok)return document.getElementById("modalW").classList.remove("visually-hidden"),document.addEventListener("keydown",function(t){t.key==="Escape"&&document.getElementById("modalW").classList.add("visually-hidden")}),document.querySelector(".modal-button").addEventListener("click",function(){document.getElementById("modalW").classList.add("visually-hidden")}),L.reset(),o.json();throw new Error("An error occurred when sending it. Please try again.")}).then(o=>{console.log(o)}).catch(o=>{alert("An error occurred when sending it. Please check your internet connection.")})}
//# sourceMappingURL=commonHelpers.js.map
