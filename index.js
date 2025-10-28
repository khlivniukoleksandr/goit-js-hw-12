import{a as u,S as h,i as a}from"./assets/vendor-CIu9XFSi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const y="52958686-1557e7ea2156d90b306934aa7",m=15;u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m};const L=async(r,t=1)=>(await u.get("",{params:{q:r,page:t}})).data,c=document.querySelector(".gallery"),g=document.querySelector(".loader"),b=document.querySelector(".load-more-button"),q=({webformatURL:r,largeImageURL:t,tags:s,likes:n,views:e,comments:o,downloads:i})=>`
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
                <p class="info-item"><strong>Likes</strong> ${n}</p>
                <p class="info-item"><strong>Views</strong> ${e}</p>
                <p class="info-item"><strong>Comments</strong> ${o}</p>
                <p class="info-item"><strong>Downloads</strong> ${i}</p>
            </div>
        </li>
    `,w=()=>{c&&(c.innerHTML="")},P=r=>{if(!c)return;const t=r.map(q).join("");c.insertAdjacentHTML("beforeend",t),$.refresh()},S=()=>{g.classList.remove("hidden")},v=()=>{g.classList.add("hidden")},R=()=>{b.classList.remove("hidden")};let $=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const B=document.querySelector(".form"),p=document.querySelector(".load-more-button");let l=1,d="";const f=(r,t)=>{S(),L(r,t).then(s=>{if(console.log(s),s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}P(s.hits);const n=document.querySelector(".gallery-item");if(n){const o=n.getBoundingClientRect().height;window.scrollBy({top:o*3,behavior:"smooth"})}const e=Math.ceil(s.totalHits/m);t>=e?(p.classList.add("hidden"),a.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):R()}).catch(s=>{console.error("Request failed:",s),a.error({message:"Failed to fetch images. Please check your network connection.",position:"topRight"})}).finally(()=>{v()})};B.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements["search-text"].value.trim();if(t===""){a.error({message:"Search field cannot be empty!",position:"topRight"});return}d=t,l=1,w(),f(d,l),r.target.reset()});p.addEventListener("click",()=>{l+=1,f(d,l)});
//# sourceMappingURL=index.js.map
