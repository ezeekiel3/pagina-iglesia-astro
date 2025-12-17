/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWYKJYLk.mjs';
import 'piccolore';
import { g as getSections, S as SeccionBiblica } from '../chunks/SeccionBiblica_INWbOlg4.mjs';
import { $ as $$Layout } from '../chunks/Layout_BMnV3y73.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Material = createComponent(async ($$result, $$props, $$slots) => {
  const sections = await getSections();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-auto w-full flex flex-col items-center"> <div class="flex flex-col items-center mt-10 gap-4"> <h1 class="text-logo font-roboto font-bold xl:text-3xl text-2xl">Materiales de Estudio Bíblico</h1> <p class="xl:text-xl opacity-75 text-base text-center xl:text-start">
Recursos para profundizar en la Palabra de Dios y crecer en tu fe
</p> </div> ${sections.map((section) => renderTemplate`${renderComponent($$result2, "SeccionBiblica", SeccionBiblica, { "section": section, ",": true, "pageValue": "main", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/SeccionBiblica.tsx", "client:component-export": "default" })}`)} </main> ` })}`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Material.astro", void 0);

const $$file = "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Material.astro";
const $$url = "/pagina-iglesia-astro/Material";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Material,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
