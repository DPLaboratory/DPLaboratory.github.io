import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_ozBPBAhi.mjs';
import 'kleur/colors';
import 'clsx';

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const categories = ["SYSTEM", "HARDWARE", "SOFTWARE", "NETWORK", "SECURITY", "RETRO"];
  const popularTags = ["#terminal", "#crt", "#retro", "#computing", "#80s", "#green"];
  const trendingPosts = [
    "The Rise of Terminal Culture",
    "CRT Monitors: A Love Story",
    "Green Screen Revolution"
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="space-y-6"> <!-- Search Terminal --> <div class="terminal-card p-4"> <h3 class="text-green-400 uppercase tracking-wider mb-3 terminal-glow">
[SEARCH_MODULE]
</h3> <div class="relative"> <span class="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-400">></span> <input type="text" placeholder="enter_search_query_" class="w-full pl-6 pr-4 py-2 bg-black terminal-border text-green-400 placeholder-green-600 focus:outline-none focus:terminal-glow transition-all"> </div> </div> <!-- Categories --> <div class="terminal-card p-4"> <h3 class="text-green-400 uppercase tracking-wider mb-3 terminal-glow">
[CATEGORIES]
</h3> <div class="space-y-1"> ${categories.map((category) => renderTemplate`<a${addAttribute(`/category/${category.toLowerCase()}`, "href")} class="block text-green-300 hover:text-green-400 transition-colors border-l-2 border-transparent hover:border-green-400 pl-3 py-1 hover:terminal-glow">
> ${category} </a>`)} </div> </div> <!-- System Status --> <div class="terminal-card p-4"> <h3 class="text-green-400 uppercase tracking-wider mb-3 terminal-glow">
[SYSTEM_STATUS]
</h3> <div class="space-y-2 text-sm"> <div class="flex justify-between"> <span class="text-green-300">CPU:</span> <span class="text-green-400">█████████░ 90%</span> </div> <div class="flex justify-between"> <span class="text-green-300">RAM:</span> <span class="text-green-400">███████░░░ 70%</span> </div> <div class="flex justify-between"> <span class="text-green-300">DISK:</span> <span class="text-green-400">████░░░░░░ 40%</span> </div> <div class="flex justify-between"> <span class="text-green-300">NET:</span> <span class="text-green-400 blinking-cursor">ONLINE</span> </div> </div> </div> <!-- Popular Tags --> <div class="terminal-card p-4"> <h3 class="text-green-400 uppercase tracking-wider mb-3 terminal-glow">
[TAGS]
</h3> <div class="flex flex-wrap gap-2"> ${popularTags.map((tag) => renderTemplate`<span class="px-2 py-1 text-xs terminal-border text-green-300 hover:text-green-400 cursor-pointer hover:terminal-glow transition-all"> ${tag} </span>`)} </div> </div> <!-- Trending --> <div class="terminal-card p-4"> <h3 class="text-green-400 uppercase tracking-wider mb-3 flex items-center terminal-glow">
[TRENDING_DATA]
</h3> <div class="space-y-2"> ${trendingPosts.map((post, index) => renderTemplate`<div class="flex items-center space-x-2"> <div class="w-2 h-2 bg-green-400 animate-pulse"></div> <a href="#" class="text-green-300 hover:text-green-400 transition-colors text-sm hover:terminal-glow"> ${post} </a> </div>`)} </div> </div> <!-- Terminal Newsletter --> <div class="terminal-card p-4 bg-green-900/10"> <h3 class="text-green-400 uppercase tracking-wider mb-2 terminal-glow">
[SUBSCRIBE_MODULE]
</h3> <p class="text-green-300 text-sm mb-3">
> join_mailing_list_for_updates_
</p> <div class="space-y-2"> <input type="email" placeholder="enter_email_address_" class="w-full px-3 py-2 bg-black terminal-border text-green-400 placeholder-green-600 focus:outline-none focus:terminal-glow transition-all"> <button class="w-full py-2 terminal-border bg-green-900/30 text-green-400 hover:bg-green-900/50 hover:terminal-glow transition-all uppercase tracking-wider">
[EXECUTE]
</button> </div> </div> </aside>`;
}, "C:/Develop/DPBlog/Astro_DPLabBlog/src/components/Sidebar.astro", void 0);

export { $$Sidebar as $ };
