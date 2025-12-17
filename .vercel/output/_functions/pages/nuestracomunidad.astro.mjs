/* empty css                                  */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, e as addAttribute, r as renderComponent } from '../chunks/astro/server_CWYKJYLk.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BMnV3y73.mjs';
import 'clsx';
import { a as getImage, $ as $$Image } from '../chunks/_astro_assets_KnOEv-c4.mjs';
export { renderers } from '../renderers.mjs';

const $$GBC = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-full w-full justify-center text-center container"> <div class="w-full mt-7 flex items-center flex-col"> <h2 class="xl:text-[22px] text-lg font-bold font-roboto text-logo">Grupos de Bendición y Crecimiento (GBC)</h2> <p class="font-normal mt-4 font-merriweather xl:w-auto w-11/12 leading-8 xl:text-center text-start opacity-80">
Los Grupos Bendición y Crecimiento, así llamados en nuestra iglesia, fueron creados para extender el reino
            de Dios por medio de la bendición y el crecimiento. Dentro de esta declaración general se encierra la visión
            de estos grupos celulares, que consta de tres partes: Cada célula y cada uno de sus participantes debe:
</p> </div> <div class="w-full mt-7 flex items-center flex-col"> <h2 class="text-logo font-roboto text-xl xl:text-xl font-bold">Crecer en la comunión con Dios.</h2> <p class="font-merriweather font-normal xl:text-lg/9 leading-8 mt-4 xl:w-auto w-11/12 xl:text-center text-start opacity-80">
En primer lugar, descubriendo el pensamiento de Dios por medio de un estudio bíblico inductivo, donde todos
            pueden responder a las preguntas, investigar y descubrir por sí mismos las grandes verdades de la teología,
            la eclesiología, arqueología, geografía e historia bíblica. En segundo lugar, cada uno puede crecer en la
            comunión con Dios por medio de la oración en grupo, donde todos son aceptados y estimulados a seguir
            avanzando paso a paso. En tercer lugar, para fortalecer este crecimiento, cada persona que ingresa a un
            grupo debe ser guiada por medio de un tutor a completar dos cursos de discipulado que son esenciales para el
            desarrollo personal: El primero es: “Los Primeros Pasos de la Vida Cristiana” y el segundo “Didáktikos”.
</p> </div> <div class="w-full mt-7 flex items-center flex-col"> <h2 class="text-logo font-roboto xl:text-xl text-xl font-bold">
Crecer en la comunión los unos con los otros.
</h2> <p class="font-merriweather font-normal xl:text-lg/9 leading-8 mt-4 xl:w-auto w-11/12 xl:text-center text-start opacity-80">
La comunión y el compañerismo con otros creyentes es vital no solo para nuestro crecimiento sino para
            nuestra salvación. Porque la Palabra de Dios dice “Nosotros sabemos que hemos pasado de muerte a vida” ¿cómo
            lo sabemos? “en que amamos a los hermanos. El que no ama a su hermano, permanece en muerte.” (1 Juan 3:14)
            Así de simple. La visión que Dios nos ha dado en este sentido es que debemos tener, no solo comunión (o
            amor) los unos con los otros, sino que debemos crecer en esta comunión. Para crecer en la comunión los unos
            con los otros, uno debe asistir a todas las reuniones de su célula y las reuniones de la iglesia. La vida
            cristiana no es para solitarios, es para convivir en familia. Cuando uno crece en la comunión con otros se
            hace más comprensivo y misericordioso y no condena con facilidad. Aprende a callar y a escuchar con interés.
</p> </div> <div class="w-full mt-7 flex items-center flex-col"> <h2 class="text-logo font-roboto text-xl xl:text-xl font-bold">
Crecer en número y multiplicarse en otro grupo.
</h2> <p class="font-merriweather font-medium xl:text-lg/9 leading-8 mt-4 mb-10 xl:w-auto w-11/12 xl:text-center text-start opacity-80">
Este objetivo debe convertirse en un estilo de vida de cada Célula de bendición y crecimiento, hasta
            alcanzar con el evangelio de Cristo al barrio, la ciudad, la provincia, el país y las naciones del mundo.
            Porque este crecimiento permite el avance del Reino de Dios para transformar, no solo a las personas, sino
            también a toda la sociedad por medio del poder del evangelio de Jesucristo.
</p> </div> </div>`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/GBC.astro", void 0);

const $$Astro = createAstro("https://ezeekiel3.github.io");
const $$Objetivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Objetivo;
  const { titulo, img, className } = Astro2.props;
  const objetiveImg = await getImage({
    src: img,
    format: "png"
  });
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col xl:gap-4 items-center xl:justify-between mb-10"> <h2${addAttribute(`font-roboto text-logo font-semibold xl:text-lg text-center ${className}`, "class")}>${titulo}</h2> <picture class="xl:block flex justify-center mt-7"> <img${addAttribute(objetiveImg.src, "src")} alt="" class="rounded-lg xl:h-[296px] h-56 border-2 shadow border-black"> </picture> </div>`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/Objetivo.astro", void 0);

const AFimg = new Proxy({"src":"/pagina-iglesia-astro/_astro/logo_asociacion.OdyHBUi9.png","width":1333,"height":1128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/logo_asociacion.png";
							}
							
							return target[name];
						}
					});

const objetivo1 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo1.C2jC1C4W.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo1.png";
							}
							
							return target[name];
						}
					});

const objetivo2 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo2.Ck6Ip-Gk.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo2.png";
							}
							
							return target[name];
						}
					});

const objetivo3 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo3.CjPqvOFh.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo3.png";
							}
							
							return target[name];
						}
					});

const objetivo4 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo4.CsG6-Sfm.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo4.png";
							}
							
							return target[name];
						}
					});

const objetivo5 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo5.CkmYNUTr.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo5.png";
							}
							
							return target[name];
						}
					});

const objetivo6 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo6.BBnb--Qj.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo6.png";
							}
							
							return target[name];
						}
					});

const objetivo7 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo7.De7Shzoy.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo7.png";
							}
							
							return target[name];
						}
					});

const objetivo8 = new Proxy({"src":"/pagina-iglesia-astro/_astro/objetivo8.Cx1bosTm.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/objetivo8.png";
							}
							
							return target[name];
						}
					});

const $$AsociacionF = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center xl:mt-10 mt-5 h-auto w-full"> ${renderComponent($$result, "Image", $$Image, { "src": AFimg, "alt": "", "class": "xl:h-[170px] xl:w-[200px] h-24 w-28" })} <h2 class="text-logo font-roboto text-center text-xl font-bold xl:text-[22px] xl:m-10 m-8">Asociación Filantrópica Bautista Pueblo Nuevo</h2> <p class="font-normal font-roboto xl:text-lg leading-9 text-center xl:w-[490px]">Hemos organizado una asociación sin fines de lucro, con personería jurídica: ASOCIACIÓN FILANTRÓPICA BAUTISTA PUEBLO NUEVO Sede legal: 165 (Ostende) N° 861 CP 1923 Berisso. Buenos Aires.</p> <p class="font-roboto font-normal xl:text-xl m-10">Algunos de sus objetivos son:</p> <div class="grid xl:grid-cols-3 xl:grid-rows-3 grid-cols-1 grid-rows-1"> ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Promover el progreso general de la zona donde ejerce su acci\xF3n.", "img": objetivo1, "className": "xl:w-80 w-11/12" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Enfocar la atenci\xF3n en el desarrollo integral de las personas, especialmente en lo f\xEDsico, emocional y espiritual.", "img": objetivo2, "className": "xl:w-auto w-11/12" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Ofrecer cursos de capacitaci\xF3n y perfeccionamiento.", "img": objetivo3, "className": "xl:w-80" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Brindar asesoramiento gratuito en cualquiera de las disciplinas por medio de profesionales habilitados.", "img": objetivo4, "className": "xl:w-5/6 w-11/12" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Desarrollar actividades recreativas", "img": objetivo5, "className": "xl:w-auto" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Organizar viajes misioneros", "img": objetivo6, "className": "xl:w-auto" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Relacionarse con diversas entidades y organismos para el logro de las finalidades", "img": objetivo7, "className": "xl:w-5/6" })} ${renderComponent($$result, "Objetivo", $$Objetivo, { "titulo": "Dar cobertura legal a las propiedades y templos de todas las congregaciones de Pueblo Nuevo", "img": objetivo8, "className": "xl:w-5/6 w-11/12" })} </div> </div>`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/AsociacionF.astro", void 0);

const pastorImg = new Proxy({"src":"/pagina-iglesia-astro/_astro/pastor.B8oqGe9I.png","width":934,"height":882,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/pastor.png";
							}
							
							return target[name];
						}
					});

const $$NuestroPastor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center mt-16"> <h2 class="text-logo font-merriweather xl:text-[27px] text-xl font-bold text-center xl:w-80 w-52 leading-10">Nuestro querido pastor, Alberto Prokopchuk</h2> ${renderComponent($$result, "Image", $$Image, { "src": pastorImg, "alt": "", "class": "xl:w-[480px] xl:h-[453px] rounded-lg mt-10 w-11/12" })} <p class="text-lg font-baskerville xl:w-1/3 mt-10 leading-10 text-center w-11/12">
Nació en un hogar de colonos europeos que emigraron desde Rusia trayendo consigo su fe cristiana. A los 17 años fue llamado al ministerio, y al año siguiente ingresó al Seminario Internacional Teológico Bautista. Después de su graduación contrajo matrimonio con Elisabet Romanenghi, antes de ser enviados por la Junta de Misiones a plantar una iglesia en Puerto Iguazú, Misiones.
</p> <p class="text-lg font-baskerville xl:w-1/3 mt-10 leading-10 text-center w-11/12">
Al dejar el campo misionero pastoreó brevemente la Iglesia de Los Hermanos, en la ciudad de Córdoba, y de allí se trasladó a Posadas para hacerse cargo de la Primera Iglesia Bautista de esa ciudad hasta el año 1979. A partir de esta fecha asumió el pastorado en la iglesia Bautista de Berisso (Iglesia Bautista Pueblo Nuevo), donde ejerce actualmente su ministerio. Es padre de dos hijos: Raquel y David, y abuelo de cinco nietos.
</p> <p class="text-lg font-baskerville xl:w-1/3 mt-10 leading-10 text-center w-11/12">
Fue profesor del Instituto Bíblico en Oberá (Misiones), en el Seminario Internacional Teológico Bautista de Buenos Aires; en la Escuela de Misiones y Plantación de Iglesias (EMPI) de Córdoba, y ha dado conferencias en instituciones e iglesias en varios países de América Latina y los Estados Unidos de América. Por varios años trabajó como Director de Evangelismo de la Unión Bautista Latinoamericana, y por más de 10 años fue su Secretario Ejecutivo, y Director para América Latina de la Alianza Bautista Mundial. Ha sido presidente de la Confederación Evangélica Bautista de Argentina, presidente de la Asociación de Pastores Bautistas de Argentina; del Consejo de Pastores de La Plata y alrededores, y también del Consejo de Pastores de Berisso.
</p> <p class="text-lg font-baskerville xl:w-1/3 mt-10 mb-16 text-center">
Actualmente Presidente de UBLA (Unión Bautista Latinoamericana).
</p> </div>`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/NuestroPastor.astro", void 0);

const $$NuestraComunidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-full justify-center w-full flex flex-col items-center"> <h1 class="xl:text-3xl text-2xl text-logo font-bold mt-10 font-roboto">Nuestra Comunidad</h1> ${renderComponent($$result2, "GBC", $$GBC, {})} ${renderComponent($$result2, "AsociacionF", $$AsociacionF, {})} ${renderComponent($$result2, "NuestroPastor", $$NuestroPastor, {})} </main> ` })}`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/NuestraComunidad.astro", void 0);

const $$file = "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/NuestraComunidad.astro";
const $$url = "/pagina-iglesia-astro/NuestraComunidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$NuestraComunidad,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
