import{a as u,S as h,i as a}from"./assets/vendor-CIu9XFSi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const y="52958686-1557e7ea2156d90b306934aa7",g=15;u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g};const L=async(r,t=1)=>(await u.get("",{params:{q:r,page:t}})).data,c=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=document.querySelector(".load-more-button");m.classList.add("hidden");const q=({webformatURL:r,largeImageURL:t,tags:s,likes:i,views:e,comments:o,downloads:n})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img 
                    class="gallery-image"
                    src="${r}" 
                    alt="${s}" 
                    width="360"
                    height="200"
                />
            </a>
            <div class="info flex">
                <p class="info-item"><strong>Likes</strong> ${i}</p>
                <p class="info-item"><strong>Views</strong> ${e}</p>
                <p class="info-item"><strong>Comments</strong> ${o}</p>
                <p class="info-item"><strong>Downloads</strong> ${n}</p>
            </div>
        </li>
    `,w=()=>{c&&(c.innerHTML="")},P=r=>{if(!c)return;const t=r.map(q).join("");c.insertAdjacentHTML("beforeend",t),$.refresh()},S=()=>{m.classList.remove("hidden")},v=()=>{m.classList.add("hidden")},R=()=>{b.classList.remove("hidden")};let $=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const B=document.querySelector(".form"),p=document.querySelector(".load-more-button");let l=1,d="";const f=(r,t)=>{S(),L(r,t).then(s=>{if(console.log(s),s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(s.hits);const i=document.querySelector(".gallery-item");if(i){const o=i.getBoundingClientRect().height;window.scrollBy({top:o*3,behavior:"smooth"})}const e=Math.ceil(s.totalHits/g);t>=e?(p.classList.add("hidden"),a.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):R()}).catch(s=>{console.error("Request failed:",s),a.error({message:"Failed to fetch images. Please check your network connection.",position:"topRight"})}).finally(()=>{v()})};B.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements["search-text"].value.trim();if(t===""){a.error({message:"Search field cannot be empty!",position:"topRight"});return}d=t,l=1,w(),f(d,l),r.target.reset()});p.addEventListener("click",()=>{l+=1,f(d,l)});
//# sourceMappingURL=index.js.map
