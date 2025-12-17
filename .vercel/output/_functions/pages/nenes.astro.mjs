/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWYKJYLk.mjs';
import 'piccolore';
import { g as getSections, S as SeccionBiblica } from '../chunks/SeccionBiblica_INWbOlg4.mjs';
import { $ as $$Layout } from '../chunks/Layout_BMnV3y73.mjs';
export { renderers } from '../renderers.mjs';

const $$Nenes = createComponent(async ($$result, $$props, $$slots) => {
  const sections = await getSections();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center h-auto w-full"> <h1 class="font-logo text-2xl text-logo font-bold mt-7">Nuestros Niños y Niñas</h1> <div class="flex flex-col items-center mt-5 xl:w-1/2 w-3/4"> <p class="text-lg font-merriweather">
Jesús dijo: “Dejen que los niños vengan a mí, y no se lo impidan, porque el reino de Dios es de quienes
                son como ellos.”
</p> <p class="font-merriweather mt-1">Lucas 18:16</p> <p class="text-lg mt-7 font-merriweather">
Nuestro compromiso en el ministerio infantil no es solo dejar que los niños y niñas vengan, sino
                también, tomarlos de la mano y guiarlos a Jesús.
</p> <p class="text-lg font-merriweather mt-5 leading-10">
Además de contar con los Grupos de Bendición y Crecimiento, clases especiales los días domingos con
                dedicación especial a los niños, la iglesia incorporó el programa denominado PEPE (Programa Educación
                Pre Escolar) cuyo lema “Llevando esperanza al corazón del niño”, es precisamente nuestro mensaje a los
                hogares con hijos, que anhelan una educación que los lleve en un futuro a tener una mejor calidad de
                vida.
</p> <button class="xl:text-3xl text-2xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 hover:bg-logo my-12"> <a href="https://pepeglobal.org/es/descargas/" target="_blank">Pepe Network</a> <div class="bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0"></div> </button> <h2 class="text-logo font-bold font-logo text-2xl text-center xl:text-left">Material de Estudio para Niños</h2> </div> ${sections.map((sections2) => renderTemplate`${renderComponent($$result2, "SeccionBiblica", SeccionBiblica, { "section": sections2, "pageValue": "kids", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/SeccionBiblica", "client:component-export": "default" })}`)} </main> ` })}`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Nenes.astro", void 0);

const $$file = "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Nenes.astro";
const $$url = "/pagina-iglesia-astro/Nenes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nenes,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
