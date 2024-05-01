/* empty css                          */
import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, j as renderSlot, h as createAstro, m as maybeRenderHead, k as renderComponent } from '../astro_C0-KnMkO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { sql, eq } from '@astrojs/db/dist/runtime/virtual.js';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="container mx-auto px-8 font-sans antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav> <ul> <li><strong>tcg deck randomizer!</strong></li> </ul> <ul> <li><a class="underline decoration-2 underline-offset-2 decoration-indigo-400" href="/index.html">reshuffle</a></li> <!-- <li><a class="underline underline-offset-8" href="/inventory">inventory</a></li> --> </ul> </nav>`;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/components/Nav.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Cards = asDrizzleTable("Cards", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Cards", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Cards", "primaryKey": false, "optional": false } }, "selected": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "selected", "collection": "Cards" } }, "available": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "available", "collection": "Cards" } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="space-y-4"> <p>૮ ˶ᵔ ᵕ ᵔ˶ ა</p> <p>
hi ~ i'm <a class="underline decoration-2 underline-offset-2 decoration-indigo-400" href="https://jillian.cloud">jillian</a> &amp; i made this
      randomizer to play genius invocation with my friends. i'll do my best to
      keep it updated when new cards come out. i hope it's useful to you!
</p> <p><strong>last updated:</strong> april 30, 2024</p> <p>♥️</p> </footer>`;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Deck = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Deck;
  const cards = await db.select().from(Cards).orderBy(sql`random()`).limit(3).where(
    eq(Cards.selected, true)
  );
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-4 grid-cols-3" data-astro-cid-edphp673> ${cards.map(({ name }) => renderTemplate`<div class="card" data-astro-cid-edphp673> <img${addAttribute(`/images/${name}.webp`, "src")} decoding="async" loading="lazy"${addAttribute(`The ${name} TCG card from Genshin Impact`, "alt")} data-astro-cid-edphp673> </div>`)} </div> `;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/components/Deck.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u{1F0CF} genius invocation tcg deck randomizer", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })} </header> <main data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Deck", $$Deck, { "data-astro-cid-j7pv25f6": true })} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/pages/index.astro", void 0);

const $$file = "/Users/jilliangmeehan/Documents/projects/gh/tcg/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Nav as $, Cards as C, $$Footer as a, $$Layout as b, db as d, index as i };
