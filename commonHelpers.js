import{a as l,A as v,S as c,N as d,K as p,M as y,P as h}from"./assets/vendor-1d5ddc5a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();l.defaults.baseURL="https://portfolio-js.b.goit.study/api";l.defaults.headers.common.Accept="application/json";l.defaults.headers.common["Content-Type"]="application/json";function w(){return l.get("/reviews")}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".menu-btn-desctab"),e=document.querySelector(".header-menu-list"),i=document.querySelector(".header-burger-btn"),o=document.querySelector(".header-menu-container"),t=document.querySelector(".menu-btn-close"),s=document.querySelector(".header-button-link");n.addEventListener("click",function(){e.classList.contains("header-menu-list_active")?e.classList.remove("header-menu-list_active"):e.classList.add("header-menu-list_active")}),i.addEventListener("click",function(){o.classList.toggle("is-open"),i.classList.toggle("visually-hidden"),t.classList.remove("visually-hidden"),s.classList.remove("btn-link-none"),e.classList.remove("header-menu-list"),e.classList.add("header-menu-list-mobile")}),t.addEventListener("click",function(){o.classList.add("menu-close-animate"),setTimeout(function(){o.classList.remove("menu-close-animate"),o.classList.remove("is-open"),i.classList.remove("visually-hidden"),t.classList.add("visually-hidden"),t.classList.add("header-button-link-none"),s.classList.add("btn-link-none"),e.classList.remove("header-menu-list-mobile"),e.classList.add("header-menu-list")},300)}),document.querySelectorAll(".header-menu-item-link").forEach(function(a){a.addEventListener("click",function(){t.click()})}),s.addEventListener("click",function(){t.click()})});document.querySelector(".accordion-button-up-down");new v(".accordion-info-list",{duration:700,showMultiple:!0,openOnInit:[0],onOpen:n=>{n.querySelector(".ac-trigger").classList.add("button-roll")},onClose:n=>{n.querySelector(".ac-trigger").classList.remove("button-roll")}});new c(".skills-container",{modules:[d,p,y],navigation:{nextEl:".skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{invert:!0},loop:!0});document.addEventListener("DOMContentLoaded",function(){new c(".projects .swiper",{loop:!1,navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-button-prev",disabledClass:"disabled"},modules:[d,h]})});document.querySelector(".faq-list");const L=document.querySelectorAll(".faq-li"),b=document.querySelectorAll(".fqa-btn-open");function g(n){const e=n.currentTarget.closest(".faq-li"),i=e.querySelector(".panel");e.classList.toggle("active"),i.style.display==="none"||i.style.display===""?i.style.display="block":i.style.display="none"}b.forEach(n=>{n.addEventListener("click",g)});L.forEach(n=>{const e=n.querySelector(".panel");e.style.display="none"});const u=document.querySelector(".reviews-list");w().then(n=>{if(!n.statusText==="OK")throw new Error("Empty response data");m(n.data,u,!0)}).catch(()=>{q("Server error. Please try again!"),m([],u,!1)});function m(n,e,i){if(i){const o=n.map(({_id:t,author:s,avatar_url:r,review:a})=>`<li class="reviews-list-item swiper-slide" id="review-${t}" aria-label="review">
          <picture>
            <source srcset="${r}" 
              type="image/jpeg">
              <img 
                class="review-photo" 
                src="${r}" 
                alt="${s} photo" 
                width="48" 
                height="48" 
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${s}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${a}</p>
          </div>
          
      </li>`).join("");e.insertAdjacentHTML("beforeend",o)}else e.insertAdjacentHTML("beforeend","<h3>Not found :(</h3>")}function q(n){const e=document.createElement("div");e.className="popup-server-error",e.textContent=n,document.body.appendChild(e),setTimeout(()=>{e.classList.add("activate-popup-animation")},50),setTimeout(()=>{e.classList.remove("activate-popup-animation")},4e3),setTimeout(e.remove.bind(e),5e3)}new c(".reviews-swiper",{modules:[d,p],speed:800,grabCursor:!0,allowTouchMove:!0,direction:"horizontal",watchOverflow:!0,spaceBetween:16,navigation:{nextEl:".next-review-btn",prevEl:".prev-review-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:4,slidesPerView:4}}});const f=document.querySelector(".form");f.addEventListener("submit",E);function E(n){n.preventDefault();const i={email:document.querySelector('.input-footer[type="email"]').value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(o=>{if(o.ok)return document.getElementById("modalW").classList.remove("visually-hidden"),document.addEventListener("keydown",function(s){s.key==="Escape"&&document.getElementById("modalW").classList.add("visually-hidden")}),document.querySelector(".modal-button").addEventListener("click",function(){document.getElementById("modalW").classList.add("visually-hidden")}),f.reset(),o.json();throw new Error("An error occurred when sending it. Please try again.")}).then(o=>{console.log(o)}).catch(o=>{alert("An error occurred when sending it. Please check your internet connection.")})}
//# sourceMappingURL=commonHelpers.js.map