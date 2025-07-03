/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ozBPBAhi.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_DBdZ4YOB.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_AbzY-gQ4.mjs';
import { $ as $$Footer } from '../chunks/Footer_C-IRnf3P.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TERMINAL://BLOG - Green Screen Computing", "message": "RETRO TERMINAL DPLab [Home] v1.0a" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 relative z-10"> <div class="grid lg:grid-cols-4 gap-8"> <!-- Main Content --> <main class="lg:col-span-3 space-y-8"> <!-- Welcome Message --> <div class="terminal-card p-6 bg-green-900/10"> <div class="mb-4"> <span class="text-green-400 terminal-glow">SYSTEM READY</span> <span class="blinking-cursor ml-2">█</span> </div> <h2 class="text-2xl font-bold text-green-400 mb-3 terminal-glow uppercase tracking-wide">
> WELCOME TO THE TERMINAL
</h2> <p class="text-green-300 leading-relaxed">
Questo blog non ha la pretesa di essere qualcosa di strutturato o definitivo. È semplicemente un archivio personale, un taccuino digitale dove raccolgo esperimenti, test e prove condotte nel mio piccolo laboratorio: il DPLab. Quando il tempo me lo permette, mi piace smanettare con nuove tecnologie, per passione, per curiosità, o semplicemente per il gusto di sperimentare.
</p> <div class="mt-4 flex items-center space-x-4 text-sm text-green-300"> <span>USERS_ONLINE: 0.0</span> <span>UPTIME: 99.9%</span> <span>STATUS: OPERATIONAL</span> </div> </div> <!-- Blog Posts --> <div class="space-y-6"> <!-- <h3 class="text-green-400 uppercase tracking-wider terminal-glow text-lg">
            [RECENT_POSTS]
          </h3>
          {blogPosts.map((post) => (
            <BlogCard {...post} />
          ))} --> </div> <!-- Load More Button --> <div class="text-center"> <!-- <button class="terminal-border bg-green-900/30 text-green-400 hover:bg-green-900/50 hover:terminal-glow transition-all uppercase tracking-wider px-8 py-3">
            [LOAD_MORE_DATA] >>
          </button> --> </div> </main> <!-- Sidebar --> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/pages/index.astro", void 0);

const $$file = "C:/Develop/DPBlog/Astro_DPLabBlog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
