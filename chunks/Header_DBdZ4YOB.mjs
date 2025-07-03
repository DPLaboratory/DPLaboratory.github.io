import { c as createComponent, b as createAstro, d as addAttribute, i as renderHead, e as renderSlot, j as renderScript, a as renderTemplate, m as maybeRenderHead, s as spreadAttributes, r as renderComponent } from './astro/server_ozBPBAhi.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, message = "RETRO TERMINAL DPLab v1.0a", description = "Welcome to the Terminal" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden" data-astro-cid-sckkx6r4> <!-- CRT Screen Effect --> <div class="fixed inset-0 pointer-events-none z-50" data-astro-cid-sckkx6r4> <div class="crt-overlay" data-astro-cid-sckkx6r4></div> <div class="scanlines" data-astro-cid-sckkx6r4></div> <div class="crt-flicker" data-astro-cid-sckkx6r4></div> </div> <!-- Terminal Grid Background --> <div class="fixed inset-0 opacity-20" data-astro-cid-sckkx6r4> <div class="terminal-grid" data-astro-cid-sckkx6r4></div> </div> <!-- Boot Sequence (optional) --> <div id="boot-screen" class="fixed inset-0 bg-black z-40 flex items-center justify-center" data-astro-cid-sckkx6r4> <div class="text-center" data-astro-cid-sckkx6r4> <div class="text-green-400 font-mono text-lg mb-4 typing-animation" data-astro-cid-sckkx6r4> ${message} </div> <div class="text-green-300 text-sm" data-astro-cid-sckkx6r4> <span class="blinking-cursor" data-astro-cid-sckkx6r4>█</span> </div> </div> </div> <div id="main-content" class="relative z-10 opacity-0" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div>  ${renderScript($$result, "C:/Develop/DPBlog/Astro_DPLabBlog/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="terminal-card border-b-2 border-green-400 bg-black/90 backdrop-blur-sm sticky top-0 z-30"> <div class="container mx-auto px-4 py-4"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-4"> <div class="relative"> <div class="w-10 h-10 terminal-border bg-black flex items-center justify-center terminal-glow"> <span class="text-green-400 font-bold text-xl">█</span> </div> </div> <div> <h1 class="text-2xl font-bold terminal-glow tracking-wider">
TERMINAL://DPLab BLOG
</h1> <p class="text-green-300 text-sm">
> system_ready_
<span class="blinking-cursor">█</span> </p> </div> </div> <!-- Nav Bar --> <nav class="hidden md:flex items-center space-x-6"> <div class="internal-links"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider hover:terminal-glow" }, { "default": ($$result2) => renderTemplate`[Home]` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "class": "text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider hover:terminal-glow" }, { "default": ($$result2) => renderTemplate`[Blog]` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider hover:terminal-glow" }, { "default": ($$result2) => renderTemplate`[About]` })} </div> </nav> <!-- Mobile Menu Button --> <button class="md:hidden text-green-400 hover:text-green-300 transition-colors terminal-glow" id="mobile-menu-btn"> <span class="block w-6 h-0.5 bg-current mb-1"></span> <span class="block w-6 h-0.5 bg-current mb-1"></span> <span class="block w-6 h-0.5 bg-current"></span> </button> </div> <!-- Mobile Menu --> <nav class="md:hidden mt-4 space-y-2 hidden border-t border-green-400 pt-4" id="mobile-menu"> <a href="/" class="block text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider py-2">
[HOME]
</a> <a href="/articles" class="block text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider py-2">
[ARTICLES]
</a> <a href="/about" class="block text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider py-2">
[ABOUT]
</a> <a href="/contact" class="block text-green-400 hover:text-green-300 transition-colors uppercase tracking-wider py-2">
[CONTACT]
</a> </nav> </div> </header> ${renderScript($$result, "C:/Develop/DPBlog/Astro_DPLabBlog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/components/Header.astro", void 0);

export { $$Layout as $, $$Header as a };
