import { c as createComponent } from './astro-component_C0wE0kuq.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, n as renderComponent } from './entrypoint_BzTfj7US.mjs';
import { r as renderScript, $ as $$Layout } from './Layout_Dz5mJC4E.mjs';
import 'clsx';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-4 py-12 md:px-12 md:py-24" data-astro-cid-bbe6dxrz> <section id="hero-section" class="relative min-h-[90vh] md:min-h-[100vh] w-full overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#080e0d] shadow-2xl" data-astro-cid-bbe6dxrz> <div class="absolute inset-0" data-astro-cid-bbe6dxrz> <img id="hero-bg" src="/IMG_3759.JPG" alt="Dari Events hero" class="h-full w-full object-cover object-center " data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#080e0d]/80" data-astro-cid-bbe6dxrz></div> </div> <div class="relative z-10 mx-auto max-w-7xl px-8 pt-32 pb-16 md:pt-48" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start" data-astro-cid-bbe6dxrz> <div class="text-[#F8FAF9]" data-astro-cid-bbe6dxrz> <h1 class="hero-reveal-wrapper relative overflow-hidden text-5xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl" data-astro-cid-bbe6dxrz> <span class="hero-reveal-item inline-block" data-astro-cid-bbe6dxrz>Dari Events</span> </h1> </div> <div class="text-[#F8FAF9] lg:mt-12" data-astro-cid-bbe6dxrz> <div class="hero-reveal-wrapper relative overflow-hidden" data-astro-cid-bbe6dxrz> <p class="hero-reveal-item mt-2 text-lg md:text-2xl opacity-90 font-medium leading-relaxed max-w-md" data-astro-cid-bbe6dxrz>
An Experinece curation agency based in Addis Ababa Ethiopia. We disrtup the norm and deliver the extraordinary.
</p> </div> </div> </div> <div class="mt-20 flex justify-start md:justify-center" data-astro-cid-bbe6dxrz> <div class="hero-reveal-wrapper relative overflow-hidden rounded-xl" data-astro-cid-bbe6dxrz> <a href="/events" class="hero-reveal-item flex items-center gap-3 bg-[#042425] border border-white/10 px-10 py-5 text-lg font-bold text-[#F8FAF9] shadow-xl transition-all hover:bg-[#f5bd02] hover:text-black active:scale-95" data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz>Explore Our Events</span> <span class="text-xl" data-astro-cid-bbe6dxrz>→</span> </a> </div> </div> </div> <div class="absolute bottom-10 left-10 opacity-30 pointer-events-none hidden md:block" data-astro-cid-bbe6dxrz> <svg width="300" height="120" viewBox="0 0 400 200" fill="none" data-astro-cid-bbe6dxrz> <path d="M0 150Q100 100 200 150T400 150" stroke="#f5bd02" stroke-width="1.5" data-astro-cid-bbe6dxrz></path> <path d="M0 170Q100 120 200 170T400 170" stroke="#f5bd02" stroke-width="1" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> </div>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Hero.astro", void 0);

const $$Manifesto = createComponent(($$result, $$props, $$slots) => {
  const message = "Dari Events is an experience-first agency reshaping how audiences connect with URBAN culture in Ethiopia. Rooted in polite disruption, We craft cinematic moments that leave a lasting emotional impact.";
  const words = message.split(" ");
  return renderTemplate`${maybeRenderHead()}<section id="manifesto" class="manifesto-section relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#042425] overflow-hidden" data-astro-cid-5lwsku7t> <div class="max-w-[1500px] mx-auto text-left" data-astro-cid-5lwsku7t> <h2 class="manifesto-grid text-[clamp(2rem,4vw,5.5rem)] leading-[1.05] font-bold capitalize tracking-tighter text-[#F8FAF9] flex flex-wrap items-baseline" data-astro-cid-5lwsku7t> ${words.map((word, index) => renderTemplate`<span class="word-wrapper relative inline-block overflow-hidden mr-[0.3em] py-[0.1em]" data-astro-cid-5lwsku7t> <span class="word" data-astro-cid-5lwsku7t> ${word} </span>  ${index === 4 && renderTemplate`<span class="inline-jewel relative inline-block align-middle overflow-hidden bg-white/10" data-astro-cid-5lwsku7t> <img src="/hero-main.jpg" alt="Culture" class="absolute inset-0 w-full h-full object-cover" data-astro-cid-5lwsku7t> </span>`}  ${index === 11 && renderTemplate`<span class="inline-jewel relative inline-block align-middle overflow-hidden bg-white/10" data-astro-cid-5lwsku7t> <img src="/DSC05738.jpg" alt="Moment" class="absolute inset-0 w-full h-full object-cover" data-astro-cid-5lwsku7t> </span>`}  ${index === 15 && renderTemplate`<span class="inline-jewel relative inline-block align-middle overflow-hidden bg-white/10" data-astro-cid-5lwsku7t> <img src="/hero-main.jpg" alt="Impact" class="absolute inset-0 w-full h-full object-cover" data-astro-cid-5lwsku7t> </span>`}  ${index === 20 && renderTemplate`<span class="inline-icon relative inline-flex items-center justify-center bg-[#f5bd02] rounded-full align-middle" data-astro-cid-5lwsku7t> <img src="/hero-main.jpg" alt="Culture" class="absolute inset-0 w-full h-full object-cover" data-astro-cid-5lwsku7t> </span>`} </span>`)} </h2> <div class="mt-20" data-astro-cid-5lwsku7t> <a href="/aboutus" class="discover-link inline-flex items-center gap-2 text-xl font-medium text-[#F8FAF9] hover:gap-6 transition-all duration-500 border-b border-white/30 pb-2" data-astro-cid-5lwsku7t>
Build your experience <span class="text-3xl" data-astro-cid-5lwsku7t>→</span> </a> </div> </div> </section>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Manifesto.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Manifesto.astro", void 0);

const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const fallbackCompanies = [
    { name: "Sinqee", logo: "/sample/sinqee.png" },
    { name: "Ethio Telecom", logo: "/sample/ethio.png" },
    { name: "Telebirr", logo: "/sample/telebirr.png" },
    { name: "Arada", logo: "/sample/arada.png" }
  ];
  let companies = [];
  const PAYLOAD_URL = "https://cms.darievents.com";
  try {
    const response = await fetch(`${PAYLOAD_URL}/api/partners?depth=1&limit=100`);
    if (!response.ok) throw new Error(`CMS responded with ${response.status}`);
    const data = await response.json();
    if (data.docs && data.docs.length > 0) {
      companies = data.docs.map((doc) => {
        let logoUrl = "/sample/fallback-logo.png";
        if (doc.logo && doc.logo.url) {
          logoUrl = doc.logo.url.startsWith("http") ? doc.logo.url : `${PAYLOAD_URL}${doc.logo.url}`;
        }
        return {
          name: doc.name,
          logo: logoUrl
        };
      });
    } else {
      companies = fallbackCompanies;
    }
  } catch (e) {
    console.error("Partners Fetch Error:", e);
    companies = fallbackCompanies;
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-[var(--color-primary-green)] py-32 px-4" data-astro-cid-vnivfuh2> <div class="mx-auto max-w-7xl text-center mb-20" data-astro-cid-vnivfuh2> <h2 class="reveal text-4xl md:text-6xl font-bold text-[var(--color-off-white)] leading-tight" data-astro-cid-vnivfuh2>
Sponsors & <br data-astro-cid-vnivfuh2>
Collabs
</h2> </div> <div class="mx-auto max-w-7xl" data-astro-cid-vnivfuh2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" data-astro-cid-vnivfuh2> ${companies.map((company) => renderTemplate`<div class="reveal group flex items-center justify-center p-8 bg-[var(--color-off-white)]/10 backdrop-blur-sm rounded-2xl hover:bg-[var(--color-off-white)]/20 transition-all duration-300 hover:scale-105" data-astro-cid-vnivfuh2> <img${addAttribute(company.logo, "src")}${addAttribute(`${company.name} logo`, "alt")} class="max-w-full max-h-16 md:max-h-20 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300" loading="lazy" data-astro-cid-vnivfuh2> </div>`)} </div> </div> </section>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Features.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Features.astro", void 0);

const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const PAYLOAD_URL = "https://cms.darievents.com";
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const response = await fetch(
    `${PAYLOAD_URL}/api/events?where[date][greater_than_equal]=${now}&sort=date&depth=2`
  );
  const data = await response.json();
  const events = data.docs || [];
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };
  return renderTemplate`${maybeRenderHead()}<div class="py-20 px-6 md:px-12 lg:px-24 bg-primary-green" data-astro-cid-bqssetp2> <section class="max-w-[1400px] mx-auto" data-astro-cid-bqssetp2> <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-astro-cid-bqssetp2> <div class="max-w-xl" data-astro-cid-bqssetp2> <h2 class="text-4xl md:text-6xl font-bold tracking-tighter text-off-white font-main" data-astro-cid-bqssetp2>Upcoming Events</h2> <p class="mt-4 text-off-white/60 text-lg italic font-body" data-astro-cid-bqssetp2>Cinematic moments, curated for the bold.</p> </div> <div class="flex gap-3 self-end" data-astro-cid-bqssetp2> <button id="prev-btn" class="nav-arrow group" aria-label="Previous" data-astro-cid-bqssetp2> <svg class="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bqssetp2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" data-astro-cid-bqssetp2></path></svg> </button> <button id="next-btn" class="nav-arrow group" aria-label="Next" data-astro-cid-bqssetp2> <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bqssetp2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" data-astro-cid-bqssetp2></path></svg> </button> </div> </div> <div id="events-container" class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-10" data-astro-cid-bqssetp2> ${events.map((event) => renderTemplate`<a${addAttribute(`/events/${event.id}`, "href")} class="event-card group relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] aspect-[3/4] rounded-[2rem] overflow-hidden snap-start cursor-pointer block" data-astro-cid-bqssetp2> <img${addAttribute(`${PAYLOAD_URL}${event.poster.url}`, "src")}${addAttribute(event.poster.alt || event.title, "alt")} class="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" data-astro-cid-bqssetp2> <div class="absolute inset-0 bg-gradient-to-t from-primary-green via-transparent to-black/20" data-astro-cid-bqssetp2></div> <div class="absolute inset-0 p-8 md:p-10 flex flex-col justify-end overflow-hidden" data-astro-cid-bqssetp2> <div class="mb-2" data-astro-cid-bqssetp2> <span class="text-[#f5bd02] text-xs font-bold uppercase tracking-[0.2em] font-body" data-astro-cid-bqssetp2>${formatDate(event.date)}</span> <h3 class="text-off-white text-3xl md:text-4xl font-bold leading-none mt-2 font-main" data-astro-cid-bqssetp2>${event.title}</h3> </div> <div class="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out" data-astro-cid-bqssetp2> <p class="text-off-white/80 mt-4 text-sm md:text-base line-clamp-2 font-body" data-astro-cid-bqssetp2> ${event.location} </p> <div class="mt-6 flex items-center justify-between" data-astro-cid-bqssetp2> <div class="flex flex-wrap gap-2" data-astro-cid-bqssetp2> ${event.featuredArtists?.map((artist) => renderTemplate`<span class="text-[10px] px-2 py-1 border border-off-white/20 rounded-full text-off-white/60 font-body" data-astro-cid-bqssetp2> ${artist.name} </span>`)} </div> <div class="flex items-center gap-2 text-[#f5bd02] font-semibold text-sm font-body" data-astro-cid-bqssetp2>
View Event <span class="text-xl" data-astro-cid-bqssetp2>→</span> </div> </div> </div> </div> </a>`)} </div> </section> </div>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Events.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Events.astro", void 0);

const $$ParallaxSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-tiamqpcm> <div class="sticky top-0 h-screen w-full overflow-hidden z-0" data-astro-cid-tiamqpcm> <img src="/image1.jpg" alt="Medical center building" class="h-full w-full object-cover" data-astro-cid-tiamqpcm> <div class="absolute inset-0 bg-black/10" data-astro-cid-tiamqpcm></div> </div> <section class="relative z-10 bg-primary-green rounded-t-[60px] md:rounded-t-[100px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" data-astro-cid-tiamqpcm> <div class="mx-auto max-w-7xl px-8 py-32 text-center" data-astro-cid-tiamqpcm> <div class="max-w-4xl mx-auto mb-20" data-astro-cid-tiamqpcm> <h2 class="reveal-blur text-5xl md:text-8xl font-bold leading-[1] text-off-white tracking-tight" data-astro-cid-tiamqpcm>
Dari Events <br data-astro-cid-tiamqpcm> <span class="italic font-serif font-normal text-off-white" data-astro-cid-tiamqpcm>by the numbers</span> </h2> <p class="reveal-blur mt-12 text-xl md:text-2xl text-off-white/70 leading-relaxed max-w-2xl mx-auto" data-astro-cid-tiamqpcm>
Dari Events creates unforgettable experiences that bring people together and create lasting memories.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mt-32" data-astro-cid-tiamqpcm> <div class="reveal-blur flex flex-col items-center group" data-astro-cid-tiamqpcm> <div class="relative h-48 w-48 mb-8 flex items-center justify-center" data-astro-cid-tiamqpcm> <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" data-astro-cid-tiamqpcm> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="transparent" class="text-off-white/20" data-astro-cid-tiamqpcm></circle> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="282.7" stroke-dashoffset="206" class="text-off-white transition-all duration-1000 group-hover:stroke-dashoffset-[180]" data-astro-cid-tiamqpcm></circle> </svg> <span class="text-5xl font-bold text-off-white" data-astro-cid-tiamqpcm>70+</span> </div> <p class="text-off-white/80 font-medium text-sm leading-snug" data-astro-cid-tiamqpcm> <strong data-astro-cid-tiamqpcm>Successful events</strong> delivered worldwide
</p> </div> <div class="reveal-blur flex flex-col items-center group delay-100" data-astro-cid-tiamqpcm> <div class="relative h-48 w-48 mb-8 flex items-center justify-center" data-astro-cid-tiamqpcm> <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" data-astro-cid-tiamqpcm> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="transparent" class="text-off-white/20" data-astro-cid-tiamqpcm></circle> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="282.7" stroke-dashoffset="121" class="text-off-white transition-all duration-1000" data-astro-cid-tiamqpcm></circle> </svg> <span class="text-5xl font-bold text-off-white" data-astro-cid-tiamqpcm>1M+</span> </div> <p class="text-off-white/80 font-medium text-sm leading-snug" data-astro-cid-tiamqpcm> <strong data-astro-cid-tiamqpcm>Total digital</strong> Impressions
</p> </div> <div class="reveal-blur flex flex-col items-center group delay-200" data-astro-cid-tiamqpcm> <div class="relative h-48 w-48 mb-8 flex items-center justify-center" data-astro-cid-tiamqpcm> <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" data-astro-cid-tiamqpcm> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="transparent" class="text-off-white/20" data-astro-cid-tiamqpcm></circle> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="282.7" stroke-dashoffset="197" class="text-off-white transition-all duration-1000" data-astro-cid-tiamqpcm></circle> </svg> <span class="text-5xl font-bold text-off-white" data-astro-cid-tiamqpcm>900+</span> </div> <p class="text-off-white/80 font-medium text-sm leading-snug" data-astro-cid-tiamqpcm> <strong data-astro-cid-tiamqpcm>Guaranteed Attendees</strong> at our events
</p> </div> <div class="reveal-blur flex flex-col items-center group delay-300" data-astro-cid-tiamqpcm> <div class="relative h-48 w-48 mb-8 flex items-center justify-center" data-astro-cid-tiamqpcm> <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" data-astro-cid-tiamqpcm> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="transparent" class="text-off-white/20" data-astro-cid-tiamqpcm></circle> <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="282.7" stroke-dashoffset="223" class="text-off-white transition-all duration-1000" data-astro-cid-tiamqpcm></circle> </svg> <span class="text-5xl font-bold text-off-white" data-astro-cid-tiamqpcm>99%</span> </div> <p class="text-off-white/80 font-medium text-sm leading-snug" data-astro-cid-tiamqpcm> <strong data-astro-cid-tiamqpcm>Client satisfaction</strong> rating achieved
</p> </div> </div> </div> </section> </div>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/ParallaxSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/ParallaxSection.astro", void 0);

const $$InteractiveShowcase = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-4 py-2"> <section class="relative overflow-hidden rounded-[40px] py-24 px-8 md:px-16 min-h-[700px]"> <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="z-20"> <h2 class="text-off-white text-4xl md:text-6xl font-bold leading-tight mb-8">
Featured <br> <span class="italic font-main">Work</span> </h2> <div id="event-triggers-container" class="space-y-2 opacity-0 transition-opacity duration-700"></div> <a href="/work" class="inline-block mt-12 bg-off-white text-elegant-black px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95">
View Our Portfolio
</a> </div> <div id="event-images-container" class="relative h-[500px] md:h-[600px] w-full z-10 opacity-0 transition-opacity duration-700"></div> </div> </section> </div> ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/InteractiveShowcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/InteractiveShowcase.astro", void 0);

const $$FinalCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-6 py-24 md:px-12" data-astro-cid-66itwakk> <section class="relative min-h-[100vh] w-full overflow-hidden rounded-[40px] bg-[var(--color-off-white)] py-24 md:py-32 px-6" data-astro-cid-66itwakk> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[var(--color-primary-green)]/20 rounded-full blur-[120px] pointer-events-none" data-astro-cid-66itwakk></div> <div class="relative z-10 mx-auto max-w-6xl" data-astro-cid-66itwakk> <div class="text-center mb-12" data-astro-cid-66itwakk> <h2 class="reveal-blur text-4xl md:text-6xl font-bold text-[var(--color-elegant-black)] tracking-tight" data-astro-cid-66itwakk>
Contact Dari Events
</h2> <p class="reveal-blur mt-4 text-lg md:text-xl text-[var(--color-elegant-black)]/70 max-w-3xl mx-auto" data-astro-cid-66itwakk>
Reach out for questions, bookings, or collaborations. We’re here to build unforgettable experiences with you.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-66itwakk> <div class="reveal-blur rounded-2xl bg-white p-8 border border-[var(--color-primary-green)] shadow-sm" data-astro-cid-66itwakk> <h3 class="text-xl font-bold text-[var(--color-elegant-black)] mb-4" data-astro-cid-66itwakk>Phone</h3> <p class="text-[var(--color-elegant-black)]/80 mb-2" data-astro-cid-66itwakk>0935008618</p> <p class="text-[var(--color-elegant-black)]/80" data-astro-cid-66itwakk>0921605961</p> </div> <div class="reveal-blur rounded-2xl bg-white p-8 border border-[var(--color-primary-green)] shadow-sm" data-astro-cid-66itwakk> <h3 class="text-xl font-bold text-[var(--color-elegant-black)] mb-4" data-astro-cid-66itwakk>Email</h3> <p class="text-[var(--color-elegant-black)]/80 mb-2" data-astro-cid-66itwakk>info@darievents.com</p> <p class="text-[var(--color-elegant-black)]/80" data-astro-cid-66itwakk>partners@darievents.com</p> </div> <div class="reveal-blur rounded-2xl bg-white p-8 border border-[var(--color-primary-green)] shadow-sm" data-astro-cid-66itwakk> <h3 class="text-xl font-bold text-[var(--color-elegant-black)] mb-4" data-astro-cid-66itwakk>Office</h3> <p class="text-[var(--color-elegant-black)]/80" data-astro-cid-66itwakk>Addis Ababa, Ethiopia</p> <p class="text-[var(--color-elegant-black)]/80" data-astro-cid-66itwakk>Bole Atlas</p> </div> </div> <div class="reveal-blur mt-10 flex justify-center" data-astro-cid-66itwakk> <a href="mailto:info@darievents.com" class="rounded-lg bg-[var(--color-primary-green)] px-10 py-4 text-lg font-bold text-[var(--color-off-white)] hover:brightness-110 transition" data-astro-cid-66itwakk>
Get in Touch
</a> </div> </div> </section> </div>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/FinalCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/FinalCTA.astro", void 0);

const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const fallbackFaqs = [
    {
      question: "How far in advance should I book an event?",
      answer: "We recommend booking at least 3-6 months ahead for larger events."
    }
  ];
  let faqs = [];
  let error = false;
  try {
    const response = await fetch(`${undefined                            || "https://cms.darievents.com"}/api/faqs?limit=100`);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    faqs = data.docs;
  } catch (e) {
    console.error("Payload Fetch Error:", e);
    faqs = fallbackFaqs;
    error = true;
  }
  return renderTemplate`${maybeRenderHead()}<section class="px-4 py-16 md:py-24 bg-[var(--color-primary-green)]" data-astro-cid-al2ca2vr> <div class="mx-auto max-w-6xl reveal-blur" data-astro-cid-al2ca2vr> <div class="text-center mb-12" data-astro-cid-al2ca2vr> <h2 class="text-4xl md:text-6xl font-bold text-[var(--color-off-white)]" data-astro-cid-al2ca2vr>Frequently Asked Questions</h2> <p class="mt-4 text-lg md:text-xl text-[var(--color-off-white)]/80 max-w-3xl mx-auto" data-astro-cid-al2ca2vr> ${error ? "Information from our latest planning guide." : "Answers to common questions about how Dari Events brings your vision to life."} </p> </div> <div class="space-y-4" data-astro-cid-al2ca2vr> ${faqs.length > 0 ? faqs.map((item, index) => renderTemplate`<details class="group rounded-2xl border border-[var(--color-off-white)]/30 bg-[var(--color-off-white)]/10 p-6 text-[var(--color-off-white)] transition-all duration-300 hover:border-[var(--color-off-white)] hover:bg-[var(--color-off-white)]/20"${addAttribute(index === 0, "open")} data-astro-cid-al2ca2vr> <summary class="text-lg md:text-2xl font-bold cursor-pointer outline-none list-none" data-astro-cid-al2ca2vr> ${item.question} </summary> <p class="mt-4 text-[var(--color-off-white)]/90 text-base md:text-lg leading-relaxed" data-astro-cid-al2ca2vr> ${item.answer} </p> </details>`) : renderTemplate`<p class="text-center text-[var(--color-off-white)]" data-astro-cid-al2ca2vr>Check back soon for more updates.</p>`} </div> </div> </section>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/FAQ.astro", void 0);

const $$PreviousWorks = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="previous-works" class="relative w-full bg-[#042425] py-10 md:py-20" data-astro-cid-bhf4x7o7> <div class="px-8 mb-12 md:hidden" data-astro-cid-bhf4x7o7> <h2 class="text-4xl font-bold tracking-tighter text-[#F8FAF9] font-main" data-astro-cid-bhf4x7o7>Our Work</h2> <p class="text-[#F8FAF9]/60 mt-2 font-body italic" data-astro-cid-bhf4x7o7>Cinematic moments, curated.</p> </div> <div id="horizontal-scroll-section" class="relative w-full overflow-x-auto" data-astro-cid-bhf4x7o7> <div id="horizontal-container" class="flex flex-col md:flex-row w-full items-start gap-12 px-6 md:px-24 opacity-0 transition-opacity duration-700" data-astro-cid-bhf4x7o7></div> </div> </section>  ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/PreviousWorks.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/PreviousWorks.astro", void 0);

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const BACKEND_URL = "https://cms.darievents.com";
  const FALLBACK_GALLERY = [
    { id: "fallback-1", src: "/sample/event1.jpg", alt: "Event highlight", category: "Archive" },
    { id: "fallback-2", src: "/sample/event2.webp", alt: "Live moment", category: "Archive" },
    { id: "fallback-3", src: "/sample/event3.jpg", alt: "Event crowd", category: "Archive" },
    { id: "fallback-4", src: "/sample/aboutus.webp", alt: "About us moment", category: "Archive" },
    { id: "fallback-5", src: "/sample/arada.png", alt: "Event poster", category: "Archive" },
    { id: "fallback-6", src: "/sample/sinqee.png", alt: "Event brand", category: "Archive" }
  ];
  let galleryItems = FALLBACK_GALLERY;
  try {
    const response = await fetch(`${BACKEND_URL}/api/gallery?limit=12&depth=2`);
    if (response.ok) {
      const data = await response.json();
      const docs = Array.isArray(data.docs) ? data.docs : [];
      const items = docs.flatMap((gallery) => {
        return (gallery.mediaFiles || []).map((file) => ({
          src: `${BACKEND_URL}${file.url}`,
          alt: gallery.displayName || file.alt || file.filename || "Dari Event",
          category: gallery.eventLink?.title || gallery.legacyEventName || "Archive",
          id: file.id || file.filename || file.url
        }));
      }).slice(0, 12);
      if (items.length > 0) {
        galleryItems = items;
      }
    } else {
      console.warn(`Gallery fetch returned ${response.status}, using fallback images.`);
    }
  } catch (error) {
    console.error("Gallery fetch failed:", error);
  }
  return renderTemplate`${maybeRenderHead()}<section class="gallery-section w-full overflow-hidden" data-astro-cid-ihllb3az> <div class="px-6 py-12 md:px-12 border-b border-white/10" data-astro-cid-ihllb3az> <p class="text-[#f5bd02] text-xs font-bold tracking-[0.2em] uppercase" data-astro-cid-ihllb3az>Archive / Selected Works</p> </div> <div id="gallery-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full transition-opacity duration-700 opacity-100" data-astro-cid-ihllb3az> ${galleryItems.map((item) => renderTemplate`<div class="gallery-item group relative aspect-square overflow-hidden cursor-crosshair" data-astro-cid-ihllb3az> <div class="grain-overlay pointer-events-none absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay" data-astro-cid-ihllb3az></div> <img${addAttribute(item.src, "src")}${addAttribute(item.alt, "alt")} class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" loading="lazy" data-astro-cid-ihllb3az> <div class="absolute inset-0 z-10 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-8" data-astro-cid-ihllb3az> <p class="text-[#f5bd02] text-xs font-bold tracking-widest uppercase mb-2" data-astro-cid-ihllb3az>${item.category}</p> <h3 class="text-white text-xl md:text-2xl font-bold uppercase tracking-tighter leading-none" data-astro-cid-ihllb3az>${item.alt}</h3> </div> </div>`)} </div> </section>`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/components/Gallery.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Manifesto", $$Manifesto, {})} ${renderComponent($$result2, "PreviousWorks", $$PreviousWorks, {})} ${renderComponent($$result2, "Events", $$Events, {})} ${renderComponent($$result2, "ParallaxSection", $$ParallaxSection, {})} ${renderComponent($$result2, "Interactive", $$InteractiveShowcase, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ` })}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/index.astro", void 0);

const $$file = "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
