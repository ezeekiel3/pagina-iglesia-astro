/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWYKJYLk.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BMnV3y73.mjs';
export { renderers } from '../renderers.mjs';

const $$Agenda = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full h-full flex items-center flex-col"> <h1 class="text-logo xl:text-3xl text-2xl font-bold mt-5 mb-10">Agenda</h1> <iframe src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&mode=AGENDA&hl=es_419&title=Agenda%20Pueblo%20Nuevo&src=cHVlYmxvbnVldm9pZ2xlc2lhYmF1dGlzdGFAZ21haWwuY29t&color=%23E67C73" width="1000" height="800" class="xl:block hidden rounded-xl"></iframe> <iframe src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&mode=AGENDA&hl=es_419&title=Agenda%20Pueblo%20Nuevo&src=cHVlYmxvbnVldm9pZ2xlc2lhYmF1dGlzdGFAZ21haWwuY29t&color=%23E67C73" width="350" height="800" class="xl:hidden block rounded mb-10"></iframe> </main> ` })}`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Agenda.astro", void 0);

const $$file = "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Agenda.astro";
const $$url = "/pagina-iglesia-astro/Agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Agenda,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
