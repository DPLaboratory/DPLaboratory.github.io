/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/post-1_B_DwDkvR.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_Xqn3gwuG.mjs';
import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_ozBPBAhi.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_DBdZ4YOB.mjs';
import 'clsx';
import { $ as $$Sidebar } from '../chunks/Sidebar_AbzY-gQ4.mjs';
import { $ as $$Footer } from '../chunks/Footer_C-IRnf3P.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/components/BlogPost.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = Object.values(await /* #__PURE__ */ Object.assign({"./posts/post-1.md": __vite_glob_0_0,"./posts/post-2.md": __vite_glob_0_1}));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "TERMINAL://BLOG - Green Screen Computing", "message": "RETRO TERMINAL DPLab [BLOG] v1.0a" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 relative z-10"> <div class="grid lg:grid-cols-4 gap-8"> <!-- Main Content --> <main class="lg:col-span-3 space-y-8"> <!-- Welcome Message --> <div class="terminal-card p-6 bg-green-900/10"> <div class="mb-4"> <span class="text-green-400 terminal-glow">SYSTEM READY</span> <span class="blinking-cursor ml-2">█</span> </div> <!-- <h2 class="text-2xl font-bold text-green-400 mb-3 terminal-glow uppercase tracking-wide">
            > WELCOME TO THE TERMINAL
          </h2> --> <p class="text-green-300 leading-relaxed"></p> <div class="mt-4 flex items-center space-x-4 text-sm text-green-300"> <span>USERS_ONLINE: 0.0</span> <span>UPTIME: 99.9%</span> <span>STATUS: OPERATIONAL</span> </div> </div> <!-- Blog Posts --> <div class="space-y-6"> <h3 class="text-green-400 uppercase tracking-wider terminal-glow text-lg">
[RECENT_POSTS]
</h3> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> <!-- {blogPosts.map((post) => (
            <BlogCard {...post} />
          ))} --> </div> <!-- Load More Button --> <div class="text-center"> <!-- <button class="terminal-border bg-green-900/30 text-green-400 hover:bg-green-900/50 hover:terminal-glow transition-all uppercase tracking-wider px-8 py-3">
            [LOAD_MORE_DATA] >>
          </button> --> </div> </main> <!-- Sidebar --> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/pages/blog/index.astro", void 0);

const $$file = "C:/Develop/DPBlog/Astro_DPLabBlog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
