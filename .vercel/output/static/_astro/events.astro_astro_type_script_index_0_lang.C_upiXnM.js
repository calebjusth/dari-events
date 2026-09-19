const n="https://cms.darievents.com",g=t=>new Date(t).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),h=async()=>{const t=document.getElementById("upcoming-grid"),i=document.getElementById("upcoming-loading"),f=document.getElementById("upcoming-empty"),r=document.getElementById("past-grid"),d=document.getElementById("past-section");if(t)try{const c=(await(await fetch(`${n}/api/events?sort=date&depth=2`)).json()).docs||[],s=new Date;s.setHours(0,0,0,0);const p=c.filter(e=>new Date(e.date).setHours(0,0,0,0)>=s.getTime()).sort((e,o)=>new Date(e.date).getTime()-new Date(o.date).getTime()),u=c.filter(e=>new Date(e.date).setHours(0,0,0,0)<s.getTime()).sort((e,o)=>new Date(o.date).getTime()-new Date(e.date).getTime());i?.classList.add("hidden"),p.length===0?f?.classList.remove("hidden"):(t.innerHTML=p.map(e=>`
          <a href="/events/${e.id}" class="group relative flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 hover:border-[#f5bd02]/30 hover:-translate-y-2 cursor-pointer">
            <div class="relative overflow-hidden h-72">
              <img src="${n}${e.poster.url}" alt="${e.title}" class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#042425] via-transparent to-transparent opacity-60"></div>
              <div class="absolute top-4 right-4 bg-[#042425]/90 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span class="text-[#f5bd02] text-xs font-bold uppercase tracking-wide">${g(e.date)}</span>
              </div>
            </div>
            <div class="flex-1 flex flex-col p-8">
              <div class="mb-4">
                <div class="flex items-center gap-2 mb-3">
                  <svg class="w-4 h-4 text-[#f5bd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span class="text-white/60 text-sm font-body">${e.location}</span>
                </div>
                <h3 class="text-white text-2xl md:text-3xl font-bold leading-tight font-main group-hover:text-[#f5bd02] transition-colors">${e.title}</h3>
              </div>
              <div class="mt-auto pt-6 flex flex-wrap gap-2">
                ${(e.featuredArtists||[]).slice(0,3).map(o=>`
                  <span class="text-[10px] px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/50 font-body">${o.name}</span>
                `).join("")}
              </div>
            </div>
          </a>
        `).join(""),t.classList.remove("opacity-0")),u.length>0&&r&&d&&(d.classList.remove("hidden"),r.innerHTML=u.map(e=>`
          <a href="/events/${e.id}" class="group relative flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 opacity-80 hover:opacity-100">
            <div class="relative overflow-hidden h-64">
              <img src="${n}${e.poster.url}" alt="${e.title}" class="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#042425] via-[#042425]/50 to-transparent"></div>
              <div class="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
                <span class="text-white/60 text-[10px] font-bold uppercase tracking-wider">Past Event</span>
              </div>
            </div>
            <div class="flex-1 flex flex-col p-6">
              <h3 class="text-white/80 text-xl font-bold font-main">${e.title}</h3>
              <p class="text-white/40 text-xs mt-2">${g(e.date)} — ${e.location}</p>
            </div>
          </a>
        `).join(""))}catch(l){console.error("Failed to load events:",l),i.innerText="Failed to load events. Please try again."}};let m=!1;const a=()=>{m||(m=!0,h())};document.addEventListener("astro:page-load",a);document.addEventListener("DOMContentLoaded",a);window.addEventListener("load",a);(document.readyState==="complete"||document.readyState==="interactive")&&a();
