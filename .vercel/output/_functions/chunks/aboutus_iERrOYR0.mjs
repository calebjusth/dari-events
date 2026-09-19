import { c as createComponent } from './astro-component_Cg8QvRv7.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_CvkTXUjl.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DVSqM3uZ.mjs';

const $$Aboutus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Aboutus;
  const pageTitle = "About Dari Events | Premium Event Agency in Addis Ababa";
  const pageDescription = "Dari Events is an experience-first events agency reshaping entertainment, brands, and culture in Ethiopia. Discover our story, impact, and featured projects.";
  const services = [
    {
      title: "BTL Activations",
      desc: "Immersive brand experiences that connect directly with audiences through innovative activations.",
      image: "/static/image8.jpg"
    },
    {
      title: "Corporate Events",
      desc: "Flawless execution for high-stakes brand moments and corporate gatherings.",
      image: "/static/cor.jpg"
    },
    {
      title: "Concert & Entertainment",
      desc: "World-class music experiences and live productions that set the standard.",
      image: "/static/image5.jpg"
    },
    {
      title: "Community Events",
      desc: "Meaningful gatherings that foster genuine connection and shared experiences.",
      image: "/static/image3.jpg"
    },
    {
      title: "Event Production",
      desc: "End-to-end operational excellence from concept to completion.",
      image: "/static/image4.jpg"
    },
    {
      title: "Sponsorship",
      desc: "Strategic partnerships that amplify impact and elevate every event.",
      image: "/static/image7.jpg"
    },
    {
      title: "Analytics",
      desc: "Data-driven insights for measurable impact and future growth.",
      image: "/static/image6.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen overflow-x-hidden selection:bg-[#f5bd02] selection:text-black  text-off-white"> <section class="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-start md:items-end justify-center pb-20 md:pb-24 px-6 md:px-12 lg:px-24 pt-32 overflow-hidden bg-cover bg-center" style="background-image: url('/hero-main.jpg');"> <div class="absolute inset-0 bg-black/65"></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90"></div> <div class="relative z-10 max-w-7xl mx-auto w-full"> <div class="max-w-5xl"> <span class="inline-block text-[#f5bd02] font-bold uppercase tracking-[0.4em] text-xs mb-6">Who We Are</span> <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-main font-bold tracking-tighter leading-tight mb-8">
Experience First.
<span class="block text-[#f5bd02]/80">Always.</span> </h1> <p class="text-base sm:text-lg md:text-xl text-off-white/80 font-body max-w-3xl leading-relaxed">
Reshaping how audiences connect with entertainment, brands, and culture in Ethiopia.
</p> </div> </div> </section> <section class="py-24 md:py-44 px-4 md:px-10 lg:px-20 relative overflow-hidden"> <div class="max-w-[1600px] mx-auto"> <div class="w-full h-[1px] bg-off-white/10 mb-16 md:mb-24 flex justify-between items-end"> <span class="text-[10px] uppercase tracking-[0.8em] text-off-white/20 pb-4 hidden md:block">Dari Events Archive</span> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start"> <div class="lg:col-span-7 mb-20 lg:mb-0"> <h2 class="text-6xl md:text-[9vw] font-main font-bold uppercase leading-[0.8] tracking-tighter text-off-white italic">
Born from <br> <span class="text-gold not-italic">Passion.</span> </h2> <div class="mt-16 md:mt-24 max-w-xl border-l-2 border-gold pl-8 md:pl-16"> <p class="text-xl md:text-3xl text-off-white font-medium leading-tight tracking-tight mb-10">
Addis Ababa was ready for more. More soul. More precision. More disruption.
</p> <p class="text-off-white/50 text-base md:text-lg leading-relaxed">
We stripped the agency model down to its core: global execution paired with unfiltered local creativity. We don't just host events; we engineer cinematic moments.
</p> </div> </div> <div class="lg:col-span-5 relative lg:pl-12"> <div class="relative aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-off-white/10"> <img src="/DSC05738.jpg" alt="Event Atmosphere" class="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"> </div> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 mt-32 md:mt-56 border-t border-off-white/10"> <div class="pt-8 pr-4 border-r border-off-white/10"> <span class="block text-off-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold italic">Strategy</span> <span class="text-2xl md:text-4xl font-main font-bold text-off-white uppercase">Rooted</span> </div> <div class="pt-8 pl-6 md:pl-10 md:pr-4 border-r border-off-white/10"> <span class="block text-off-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold italic">Core</span> <span class="text-2xl md:text-4xl font-main font-bold text-off-white uppercase">Driven</span> </div> <div class="hidden md:block pt-8 pl-10 pr-4 border-r border-off-white/10"> <span class="block text-off-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold italic">Standard</span> <span class="text-2xl md:text-4xl font-main font-bold text-off-white uppercase">Global</span> </div> <div class="hidden md:block pt-8 pl-10"> <span class="block text-off-white/30 text-[10px] uppercase tracking-widest mb-2 font-bold italic">Output</span> <span class="text-2xl md:text-4xl font-main font-bold text-off-white uppercase">Cinematic</span> </div> </div> </div> </section> <div class="relative w-full pb-[10vh]" id="services-container"> ${services.map((service, i) => renderTemplate`<div class="service-card sticky top-0 h-[100dvh] w-full overflow-hidden bg-black shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"${addAttribute(i, "data-index")}> <div class="service-bg absolute inset-0 w-full h-full bg-cover bg-center origin-top will-change-transform transition-transform duration-75"${addAttribute(`background-image: url('${service.image}');`, "style")}></div> <div class="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10 pointer-events-none"></div> <div class="service-content relative z-20 h-full w-full flex flex-col justify-end pb-16 md:pb-24"> <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full"> <div class="grid lg:grid-cols-12 gap-6 lg:gap-16 items-end border-t border-white/10 pt-8"> <div class="lg:col-span-3"> <span class="inline-block font-main text-xs md:text-sm uppercase tracking-[0.3em] text-[#f5bd02] mb-4">
0${i + 1} // ${service.title.split(" ")[0]} </span> </div> <div class="lg:col-span-6"> <h2 class="text-4xl md:text-6xl lg:text-7xl font-main font-bold tracking-tighter text-white leading-none"> ${service.title} </h2> </div> <div class="lg:col-span-3"> <p class="text-base md:text-lg text-white/80 font-body leading-relaxed max-w-xs"> ${service.desc} </p> </div> </div> </div> </div> </div>`)} </div> <section class="relative z-30 py-32 px-6 md:px-12 lg:px-24 border-t border-white/5"> <div class="max-w-4xl mx-auto text-center"> <span class="inline-block font-main text-[11px] uppercase tracking-[0.5em] text-[#f5bd02] mb-6">Why Choose Us</span> <h2 class="text-5xl md:text-6xl lg:text-7xl font-main font-bold tracking-tighter text-white mb-8">
Bold Creativity.<br>Operational Mastery.
</h2> <div class="w-16 h-px bg-[#f5bd02] mx-auto mb-10"></div> <p class="text-lg md:text-xl text-white/60 font-body leading-relaxed mb-12 max-w-2xl mx-auto">
We merge bold creativity with operational mastery to deliver standout experiences that live in culture, not just in memory. For brands ready to elevate their presence, inspire audiences, and create moments that matter.
</p> <a href="/" class="animated-border-button group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full bg-transparent transition-all duration-300"> <span class="relative z-10 font-main font-bold uppercase tracking-[0.2em] text-xs text-white group-hover:text-black transition-colors duration-300">Explore Our Events</span> <span class="absolute inset-0 rounded-full bg-[#f5bd02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> </a> </div> </section> </main> ` })} ${renderScript($$result, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/aboutus.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/aboutus.astro", void 0);

const $$file = "C:/Users/MOAZE TECH/Desktop/work/websites/dari-events/src/pages/aboutus.astro";
const $$url = "/aboutus";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aboutus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
