/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWYKJYLk.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BMnV3y73.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { $ as $$Image } from '../chunks/_astro_assets_KnOEv-c4.mjs';
export { renderers } from '../renderers.mjs';

const logoBody = new Proxy({"src":"/pagina-iglesia-astro/_astro/logo2.BOkTE7tv.png","width":2448,"height":633,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/logo2.png";
							}
							
							return target[name];
						}
					});

const showConocenos = atom(false);
atom(false);
atom(false);

function Conocenos() {
  const $showConocenos = useStore(showConocenos);
  const conocenosRef = useRef(null);
  const handleScroll = () => {
    showConocenos.set(true);
    setTimeout(() => {
      conocenosRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "xl:text-3xl text-2xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 hover:bg-logo my-12",
        onClick: () => handleScroll(),
        children: [
          /* @__PURE__ */ jsx("span", { className: "z-10 relative", children: "Conocenos" }),
          /* @__PURE__ */ jsx("div", { className: "bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col items-center w-full transition-opacity duration-500 ease-out ${$showConocenos ? "h-auto opacity-100 overflow-visible translate-y-0" : "h-0 opacity-0 overflow-hidden translate-y-10"}`,
        children: [
          /* @__PURE__ */ jsx("h2", { className: "xl:text-4xl text-2xl text-logo font-bold font-sans", ref: conocenosRef, children: "¡Queremos que nos conozcas!" }),
          /* @__PURE__ */ jsxs("p", { className: "xl:text-2xl text-center opacity-80 my-6 font-merriweather leading-7", children: [
            "La mayoría de la gente rechaza lo que no conoce, por ",
            /* @__PURE__ */ jsx("b", { children: "mala información, prejuicios o temor." })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "xl:text-2xl/10 opacity-80 font-merriweather xl:font-normal text-center xl:w-2/3 w-3/4 text-base/8 xl:h-72 my-6", children: [
            "Aquello de ",
            /* @__PURE__ */ jsx("b", { className: "italic", children: '"Mejor es malo conocido que bueno por conocer"' }),
            "; es una triste realidad y un tremendo error de principios. Porque nunca puede ser ",
            /* @__PURE__ */ jsx("b", { className: "italic", children: '"mejor"' }),
            "; lo que se considera malo; ni el conformarse en la ignorancia puede ser garantía de una vida exitosa y feliz. Pero hay otro tipo de personas, entre las cuales tal vez te encontrás, que no se dejan llevar por los rumores ni por los prejuicios, personas íntegras y profundamente honestas consigo mismas, que no aceptarían ni rechazarían una información sin haberla analizado y comparado a fin de comprobar su veracidad."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "xl:text-2xl/10 my-6 text-center font-merriweather opacity-80 font-normal w-2/3 text-base/8", children: "Si vos perteneces a este segundo grupo, te invitamos a leer nuestras creencias y a sacar tus propias conclusiones." })
        ]
      }
    )
  ] });
}

function Creencia({ titulo, informacion }) {
  return /* @__PURE__ */ jsxs("div", { className: "p-5 my-4 font-normal flex items-center justify-evenly flex-col rounded-lg xl:w-2/3 w-11/12", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-logo xl:text-3xl text-2xl text-center font-bold font-roboto mb-5", children: titulo }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg w-11/12", children: /* @__PURE__ */ jsx("p", { className: "xl:text-xl/9 text-lg/9 text-center font-merriweather opacity-80", children: informacion }) })
  ] });
}

const bautismoImg = new Proxy({"src":"/pagina-iglesia-astro/_astro/bautismo1.B2MSXaUA.jpg","width":230,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/bautismo1.jpg";
							}
							
							return target[name];
						}
					});

const bautismoImg2 = new Proxy({"src":"/pagina-iglesia-astro/_astro/bautismo2.DyHUYVl7.jpg","width":632,"height":631,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/bautismo2.jpg";
							}
							
							return target[name];
						}
					});

function Bautismo() {
  return /* @__PURE__ */ jsxs("div", { className: "xl:w-full w-11/12 h-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-logo xl:text-3xl text-2xl text-center my-3 font-sans font-bold", children: "Bautismo" }),
    /* @__PURE__ */ jsxs("div", { className: "xl:flex-col flex-col items-center xl:items-center flex px-3 pb-3", children: [
      /* @__PURE__ */ jsx("img", { src: bautismoImg.src, alt: "", className: "xl:h-64 h-40 rounded-lg" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-4 my-2 flex flex-col items-center h-auto", children: [
        /* @__PURE__ */ jsx("p", { className: "text-logo xl:text-xl/8 text-lg xl:w-1/2 font-roboto font-normal mt-4 mb-2", children: "Después de un genuino arrepentimiento seguido de una aceptación sincera a Jesucristo en el corazón y un decidido reconocimiento de su autoridad como Señor, (todo esto significa “creer en Cristo”) el siguiente paso es el bautismo." }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-center font-sans ", children: [
          "Jesucristo dijo:",
          " ",
          /* @__PURE__ */ jsx("q", { className: "italic", children: "El que creyere y fuere bautizado, será salvo; mas el que no creyere, será condenado." }),
          " ",
          /* @__PURE__ */ jsx("sub", { className: "text-lg", children: "(Marcos 16:16)" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "my-4 xl:text-xl xl:w-2/3 xl:h-2/3 gap-5 text-center text-lg font-roboto font-normal", children: [
          /* @__PURE__ */ jsxs("li", { className: "my-20", children: [
            /* @__PURE__ */ jsx("h3", { className: "m-3 text-logo font-bold", children: "ES POR INMERSION POR RAZONES ETIMOLOGICAS." }),
            /* @__PURE__ */ jsx("p", { className: "xl:text-lg text-base font-merriweather opacity-80", children: "Simplemente porque la palabra “bautismo” significa “inmersión”" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex flex-col items-center my-20", children: [
            /* @__PURE__ */ jsx("h3", { className: "m-4 text-logo font-bold", children: "ES POR INMERSION POR RAZONES TEOLOGICAS" }),
            /* @__PURE__ */ jsx("p", { className: "xl:text-lg/9 text-base/8 xl:w-1/2 opacity-80 font-merriweather", children: "El bautismo debe ser por inmersión porque interpreta la muerte, la sepultura y la resurrección de Jesucristo. Y dentro de este hecho histórico estamos incluidos todos aquellos que hemos creído en Él." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "mt-20 flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "m-4 text-logo font-bold", children: "ES POR INMERSION POR RAZONES ECLESIOLOGICAS." }),
            /* @__PURE__ */ jsx("p", { className: "xl:text-lg/9 text-base/8 xl:w-2/3 opacity-80 font-merriweather", children: "El bautismo por inmersión es también una figura que representa la incorporación del nuevo creyente a la iglesia, que es el Cuerpo de Cristo. El bautismo por inmersión es un bautizo efectuado sumergiendo totalmente en agua a la persona que se bautiza. El bautismo por inmersión es diferente al bautismo por aspersión. Al aceptar a Cristo nos identificamos con él en su muerte, su sepultura y su resurrección. Así que, en Cristo somos personas nuevas. El bautismo en agua simboliza la transformación que ocurrió en el momento de nuestra salvación. El bajar al agua, simboliza nuestra identificación con Cristo en su muerte y sepultura. El subir del agua simboliza nuestra resurrección a una vida nueva." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-3 pb-3 flex xl:flex-col flex-col items-center xl:items-center", children: [
      /* @__PURE__ */ jsx("img", { src: bautismoImg2.src, alt: "", className: "xl:h-80 h-64 xl:w-72 w-56 rounded-lg" }),
      /* @__PURE__ */ jsx("p", { className: "text-logo xl:text-2xl font-roboto font-bold py-6 text-center text-xl", children: "El bautismo no es opcional, sino es un mandato para ser obedecido por cada creyente. Con el bautismo damos testimonio público de que ya somos salvos." })
    ] })
  ] });
}

const santaCenaImg = new Proxy({"src":"/pagina-iglesia-astro/_astro/santacena1.DMqeGTlH.jpg","width":230,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/santacena1.jpg";
							}
							
							return target[name];
						}
					});

const santaCenaImg2 = new Proxy({"src":"/pagina-iglesia-astro/_astro/santacena2.CTQmXSy0.jpg","width":230,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/santacena2.jpg";
							}
							
							return target[name];
						}
					});

function SantaCena() {
  return /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-lg text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-logo text-3xl font-sans font-bold my-3", children: "Santa Cena" }),
    /* @__PURE__ */ jsxs("div", { className: "flex xl:flex-row flex-col justify-evenly items-center xl:py-6 py-3", children: [
      /* @__PURE__ */ jsx("img", { src: santaCenaImg.src, alt: "", className: "xl:h-56 rounded-lg" }),
      /* @__PURE__ */ jsxs("div", { className: "xl:w-1/2 py-7 xl:py-0", children: [
        /* @__PURE__ */ jsx("p", { className: "xl:text-xl text-lg font-merriweather xl:w-full opacity-80", children: "Después de la primer ordenanza del Señor Jesús, que es el bautismo, la segunda ordenanza es, como iglesia , participar de la Cena del Señor como Él mismo indicó horas antes de ir a la cruz." }),
        /* @__PURE__ */ jsx("sub", { className: "font-roboto text-base font-bold", children: "Mateo 26:26-30" })
      ] }),
      /* @__PURE__ */ jsx("img", { src: santaCenaImg2.src, alt: "", className: "xl:h-56 rounded-lg" })
    ] })
  ] });
}

function CreemosEn() {
  const [showCreencias, setShowCreencias] = useState(false);
  const $showConocenos = useStore(showConocenos);
  const creemosEnRef = useRef(null);
  const handleScroll = () => {
    setShowCreencias(true);
    setTimeout(() => {
      creemosEnRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: `xl:text-3xl text-2xl relative overflow-hidden font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 hover:bg-logo mt-12 mb-7 ${$showConocenos ? "h-auto opacity-100 overflow-visible" : "h-0 opacity-0 overflow-hidden"}`,
        onClick: () => handleScroll(),
        children: [
          /* @__PURE__ */ jsx("span", { className: "z-10 relative", children: "Creemos En ..." }),
          /* @__PURE__ */ jsx("div", { className: "bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex transition-opacity duration-500 flex-col items-center mb-16 ${showCreencias ? "h-auto opacity-100 overflow-visible" : "h-0 opacity-0 overflow-hidden"}`,
        ref: creemosEnRef,
        children: [
          /* @__PURE__ */ jsx(
            Creencia,
            {
              titulo: "Creemos en Dios",
              informacion: 'En un Dios personal, todopoderoso, creador del Universo que siente, piensa, decide y está presente en todas las circunstancias de nuestra vida; al cual oramos y a quien confiamos el cuidado de nuestras vidas sabiendo que todo lo que nos sucede resultará para nuestro bien. No solo creemos en su existencia sino también en su amor, demostrado al enviar a su único Hijo, Jesucristo, a la tierra a morir en nuestro lugar y adoptarnos para que nosotros también seamos llamados "hijos de Dios".'
            }
          ),
          /* @__PURE__ */ jsx(
            Creencia,
            {
              titulo: "Creemos en Jesucristo",
              informacion: "Siendo Dios se hizo hombre cuando nació de la virgen María. Predicó el arrepentimiento, el perdón de pecados, la libertad a los que estaban cautivos en sus angustias y enfermedades; prometió descanso a los fatigados, abundancia a los que nada tenían y vida eterna a los que creyeran en él. Fue crucificado, sepultado, resucitó al tercer día, venció a la muerte, ascendió al cielo para convertirse en el único mediador entre Dios y los hombres; juez de vivos y de muertos; Rey de reyes, Señor de señores; a quien amamos porque él nos amó primero y esperamos porque prometió regresar con poder y gloria para establecer su gobierno eterno."
            }
          ),
          /* @__PURE__ */ jsx(
            Creencia,
            {
              titulo: "Creemos en El Espíritu Santo",
              informacion: "Que tiene la misión de convencernos de nuestras faltas, infundir el deseo de cambiar de actitud, producir una vida nueva; de consolarnos en nuestras tribulaciones, ayudarnos en la oración, crear sentimientos de amor, gozo, paz, paciencia, bondad, fe, humildad y dominio propio y de capacitamos para servir a Dios. Creemos que cuando una persona se convierte a Dios, es sellada por el Espíritu Santo como propiedad divina y, el mismo Espíritu le da la seguridad de que es un hijo de Dios."
            }
          ),
          /* @__PURE__ */ jsx(Bautismo, {}),
          /* @__PURE__ */ jsx(SantaCena, {}),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: `xl:text-3xl text-2xl font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 m-9 hover:bg-logo ${showCreencias ? "h-auto opacity-100 overflow-visible" : "h-0 opacity-0 overflow-hidden"}`,
              children: [
                /* @__PURE__ */ jsx("a", { href: "/pagina-iglesia-astro/Ubicaciones", className: "z-10 relative", children: "Ubicaciones" }),
                /* @__PURE__ */ jsx("div", { className: "bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0" })
              ]
            }
          )
        ]
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center w-full min-h-full"> <div class="container flex items-center flex-col"> <div class="my-6"> ${renderComponent($$result2, "Image", $$Image, { "src": logoBody, "alt": "", "class": "xl:h-80 xl:w-full h-28" })} </div> <h2 class="text-logo xl:text-5xl my-6 text-2xl font-sans">Una Iglesia, muchos lugares</h2> ${renderComponent($$result2, "Conocenos", Conocenos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/Conocenos.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "CreemosEn", CreemosEn, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/CreemosEn.tsx", "client:component-export": "default" })} </div> </main> ` })}`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/index.astro", void 0);

const $$file = "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/index.astro";
const $$url = "/pagina-iglesia-astro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
