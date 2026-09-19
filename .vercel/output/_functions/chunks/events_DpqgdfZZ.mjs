import { c as createComponent } from './astro-component_OeEvRREN.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_B2WFXLJS.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_Bkfq0zuA.mjs';

const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Upcoming Events | Dari Events - Cinematic Experiences in Addis Ababa";
  const pageDescription = "Discover upcoming cinematic events, nightlife experiences, and cultural gatherings in Addis Ababa. Join us for unforgettable moments curated by Dari Events.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#042425] overflow-hidden selection:bg-[#f5bd02] selection:text-[#042425]"> <section class="relative py-32 px-6 md:px-12 lg:px-24"> <div class="max-w-7xl mx-auto"> <div class="text-center max-w-4xl mx-auto"> <span class="inline-block text-[#f5bd02] font-bold uppercase tracking-[0.4em] text-xs mb-6">The Calendar</span> <h1 class="text-6xl md:text-7xl lg:text-8xl font-main font-bold tracking-tighter text-[#F8FAF9] mb-6">
Upcoming Events
</h1> <div class="w-20 h-px bg-[#f5bd02]/50 mx-auto mb-6"></div> <p class="text-[#F8FAF9]/60 text-lg font-body leading-relaxed max-w-2xl mx-auto">
Curated cinematic moments designed for those who appreciate the intersection of culture and atmosphere.
</p> </div> </div> </section> <section class="px-6 md:px-12 lg:px-24 pb-28"> <div class="max-w-7xl mx-auto"> <div class="mb-16"> <div class="flex items-center gap-4 mb-4"> <div class="w-12 h-px bg-[#f5bd02]"></div> <span class="text-[#f5bd02] text-sm uppercase tracking-[0.3em] font-main font-bold">Upcoming</span> </div> <h2 class="text-4xl md:text-5xl font-main font-bold tracking-tighter text-[#F8FAF9]">
What's Next
</h2> </div> <div id="upcoming-loading" class="text-center py-20 text-white/20 animate-pulse">Loading experiences...</div> <div id="upcoming-empty" class="hidden text-center py-20 bg-[#F8FAF9]/5 rounded-3xl border border-[#F8FAF9]/10"> <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5bd02]/10 mb-6"> <svg class="w-10 h-10 text-[#f5bd02]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> </div> <h3 class="text-2xl font-main font-bold text-[#F8FAF9] mb-2">No Upcoming Events</h3> <p class="text-[#F8FAF9]/50 font-body">Check back soon. Something exciting is being curated.</p> </div> <div id="upcoming-grid" class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 opacity-0 transition-opacity duration-700"></div> </div> </section> <section id="past-section" class="px-6 md:px-12 lg:px-24 pb-28 hidden"> <div class="max-w-7xl mx-auto"> <div class="mb-16"> <div class="flex items-center gap-4 mb-4"> <div class="w-12 h-px bg-[#F8FAF9]/30"></div> <span class="text-[#F8FAF9]/40 text-sm uppercase tracking-[0.3em] font-main">Archive</span> </div> <h2 class="text-4xl md:text-5xl font-main font-bold tracking-tighter text-[#F8FAF9]/80">
Past Experiences
</h2> </div> <div id="past-grid" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"></div> </div> </section> </main> ` })} ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/events.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/events.astro", void 0);

const $$file = "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
