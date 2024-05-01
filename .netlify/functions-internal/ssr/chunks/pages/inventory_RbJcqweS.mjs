/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, k as renderComponent } from '../astro_C0-KnMkO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as db, C as Cards, $ as $$Nav, a as $$Footer, b as $$Layout } from './index_D2wQRfmV.mjs';
import 'clsx';
/* empty css                              */

const $$Astro$1 = createAstro();
const $$Inventory$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Inventory$1;
  const cards = await db.select().from(Cards);
  return renderTemplate`${maybeRenderHead()}<div class="grid" data-astro-cid-iwi2vsts> ${cards.map(({ name }) => renderTemplate`<div class="card" data-astro-cid-iwi2vsts> <img${addAttribute(`/images/${name}.webp`, "src")} decoding="async" loading="lazy"${addAttribute(`The ${name} TCG card from Genshin Impact`, "alt")} data-astro-cid-iwi2vsts> </div>`)} </div> `;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/components/Inventory.astro", void 0);

const $$Astro = createAstro();
const $$Inventory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Inventory;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u{1F0CF} genius invocation tcg deck randomizer", "data-astro-cid-hpa7ckla": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-hpa7ckla> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-hpa7ckla": true })} </header> <main class="container" data-astro-cid-hpa7ckla> <section data-astro-cid-hpa7ckla> ${renderComponent($$result2, "Inventory", $$Inventory$1, { "data-astro-cid-hpa7ckla": true })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hpa7ckla": true })} ` })} `;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/pages/inventory.astro", void 0);

const $$file = "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/pages/inventory.astro";
const $$url = "/inventory";

export { $$Inventory as default, $$file as file, $$url as url };
