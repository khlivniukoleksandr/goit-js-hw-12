import{a as u,S as h,i as n}from"./assets/vendor-CIu9XFSi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const y="52958686-1557e7ea2156d90b306934aa7",g=15;u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g};const L=async(o,e=1)=>(await u.get("",{params:{q:o,page:e}})).data,c=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=document.querySelector(".load-more-button");m.classList.add("hidden");const w=({webformatURL:o,largeImageURL:e,tags:s,likes:a,views:t,comments:r,downloads:i})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img 
                    class="gallery-image"
                    src="${o}" 
                    alt="${s}" 
                    width="360"
                    height="200"
                />
            </a>
            <div class="info flex">
                <p class="info-item"><strong>Likes</strong> ${a}</p>
                <p class="info-item"><strong>Views</strong> ${t}</p>
                <p class="info-item"><strong>Comments</strong> ${r}</p>
                <p class="info-item"><strong>Downloads</strong> ${i}</p>
            </div>
        </li>
    `,q=()=>{c&&(c.innerHTML="")},P=o=>{if(!c)return;const e=o.map(w).join("");c.insertAdjacentHTML("beforeend",e),$.refresh()},S=()=>{m.classList.remove("hidden")},v=()=>{m.classList.add("hidden")},R=()=>{b.classList.remove("hidden")};let $=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const B=document.querySelector(".form"),p=document.querySelector(".load-more-button");let l=1,d="";const f=async(o,e)=>{S();try{const s=await L(o,e);if(console.log(s),s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(s.hits);const a=Math.ceil(s.totalHits/g);e>=a?(p.classList.add("hidden"),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):R()}catch(s){console.error("Request failed:",s),n.error({message:"Failed to fetch images. Please check your network connection.",position:"topRight"})}finally{v()}};B.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements["search-text"].value.trim();if(e===""){n.error({message:"Search field cannot be empty!",position:"topRight"});return}d=e,l=1,q(),f(d,l),o.target.reset()});p.addEventListener("click",async()=>{l+=1,await f(d,l);const o=document.querySelector(".gallery-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*3,behavior:"smooth"})}});
//# sourceMappingURL=index.js.map
