import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute } from './astro/server_ozBPBAhi.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header } from './Header_DBdZ4YOB.mjs';
import { $ as $$Footer } from './Footer_C-IRnf3P.mjs';

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<!-- <Layout title={frontmatter.title}> -->${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "message": "RETRO TERMINAL DPLab [POST] - " + frontmatter.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<p><em>${frontmatter.description}</em></p> <p>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p>Written by: ${frontmatter.author}</p> ${frontmatter.image && frontmatter.image.url && renderTemplate`<img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt || "Immagine", "alt")}>`} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
