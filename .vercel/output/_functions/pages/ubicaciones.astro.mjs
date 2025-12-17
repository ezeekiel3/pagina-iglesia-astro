/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWYKJYLk.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BMnV3y73.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const locationIcon = new Proxy({"src":"/pagina-iglesia-astro/_astro/location.DMixO1nW.png","width":16,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/location.png";
							}
							
							return target[name];
						}
					});

const clockIcon = new Proxy({"src":"/pagina-iglesia-astro/_astro/clock.CUboc8-T.png","width":16,"height":16,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/img/clock.png";
							}
							
							return target[name];
						}
					});

function Location({ barrio, ubicacion, horario }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-logo xl:text-2xl text-lg font-semibold", children: barrio }),
    /* @__PURE__ */ jsxs("div", { className: "flex text-logo font-semibold text-sm items-center", children: [
      /* @__PURE__ */ jsx("img", { src: locationIcon.src, alt: "", className: "xl:h-4 h-3" }),
      /* @__PURE__ */ jsx("p", { children: ubicacion })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex text-logo font-semibold text-sm items-center", children: [
      /* @__PURE__ */ jsx("img", { src: clockIcon.src, alt: "", className: "xl:h-4 h-3" }),
      /* @__PURE__ */ jsx("p", { children: horario })
    ] })
  ] });
}

const locations = ["Berisso", "Ensenada", "La Plata", "CABA", "PBA"];
function CitySelector() {
  const [activeTab, setActiveTab] = useState("Berisso");
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center w-full flex-grow", children: /* @__PURE__ */ jsxs("div", { className: "h-full w-full flex items-center flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "h-16 xl:w-1/3 w-full font-sans flex justify-evenly items-center font-bold text-logo xl:text-xl", children: locations.map((location, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setActiveTab(location),
        className: `h-2/3 transition-all duration-300 border-b-2 ${activeTab === location ? "border-logo" : "border-transparent"}`,
        children: location
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full xl:h-2/3 h-auto justify-center items-center", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${activeTab === "Berisso" ? "grid" : "hidden"} xl:grid-rows-3 xl:grid-cols-3 grid-rows-2 grid-cols-2 xl:h-2/3 xl:w-2/3 gap-2 text-center`,
          children: [
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Templo Central",
                ubicacion: "Calle 165 (Ostende) Nº 861 entre 10 y 11",
                horario: "Domingos 10 hs y 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa San Carlos",
                ubicacion: "Calle 22 entre 166 y 167",
                horario: "Domingos 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(Location, { barrio: "Villa Zula", ubicacion: "Calle 175 entre 35 y 36", horario: "Domingos 10 hs" }),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Barrio Obrero",
                ubicacion: "Calle Homero Manzi (31) casa N° 419 entre Zapiola (162) y Viamonte (163)",
                horario: "Indefinido"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa Paula",
                ubicacion: "Calle 12  entre 149 y 149 Norte",
                horario: "Domingos 10:30 hs"
              }
            ),
            /* @__PURE__ */ jsx(Location, { barrio: "Villa Nueva", ubicacion: "Calle 140 entre 7 y 8", horario: "Domingos 10 hs" }),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa Arguello",
                ubicacion: "Calle 9 entre 130 y 131",
                horario: "Domingos 10 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "El Carmen",
                ubicacion: "Calle 123 entre 34 (93 bis) y 35 (94)",
                horario: "Domingos 10 hs"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${activeTab === "Ensenada" ? "grid" : "hidden"} xl:grid-rows-3 xl:grid-cols-3 xl:h-2/3 grid-rows-2 grid-cols-2 text-center gap-2 h-auto w-auto xl:w-2/3`,
          children: [
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Ensenada Centro",
                ubicacion: "Avenida Horacio Cestino Nº 430",
                horario: "Domingos 10 hs y 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa Tranquila",
                ubicacion: "Calle Quintana Nº 924 entre Saavedra y Contarelli",
                horario: "Domingos 10 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa Rubén Sito",
                ubicacion: "Avenida Altemirante Brown y 6",
                horario: "Domingos 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Punta Lara B° La Pergola",
                ubicacion: "Calle 98 entre 11 y 13",
                horario: "Domingos 10 hs"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${activeTab === "La Plata" ? "grid" : "hidden"} xl:grid-rows-3 xl:grid-cols-3 xl:h-2/3 grid-rows-2 grid-cols-2 text-center gap-2 h-auto w-auto xl:w-2/3`,
          children: [
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "En Tu Presencia",
                ubicacion: "Avenida 72 Nº 150 entre 516 y 517",
                horario: "Domingos 10 hs y 18 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Sud Este",
                ubicacion: "Calle 86 entre 12 y 13",
                horario: "Domingos 10 hs y 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Camino, Verdad y Vida",
                ubicacion: "Av. 72 e/10 y 11 N° 796",
                horario: "Domingos 10 hs"
              }
            ),
            /* @__PURE__ */ jsx(Location, { barrio: "Montahue", ubicacion: "Indefinido", horario: "Domingos 17 hs" }),
            /* @__PURE__ */ jsx(Location, { barrio: "Las Rosas", ubicacion: "Calle 516 entre 157 y 158", horario: "Domingos 10 hs" }),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Hernandez",
                ubicacion: "Avenida 508 entre 30 y 31",
                horario: "Domingos 10 hs y 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(Location, { barrio: "Tolosa", ubicacion: "119 Nº 1047 e/ 521 y 522", horario: "Domingos 19 hs" }),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "City Bell",
                ubicacion: "Calle 480 N° 1582 entre 10 y 11",
                horario: "Domingos 17 hs"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${activeTab === "CABA" ? "grid" : "hidden"} xl:grid-rows-3 xl:grid-cols-3 xl:h-2/3 grid-rows-2 grid-cols-2 gap-2 text-center h-auto w-auto xl:w-2/3`,
          children: [
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa Soldati",
                ubicacion: "Avenida Pergamino Nº 3010",
                horario: "Domingos 17 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Parque Indoamericano",
                ubicacion: "Avenida Escalada Nº 3035/7",
                horario: "Domingos 10 hs y 18:30 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Ramos Mejía",
                ubicacion: "Calle Colombia N° 1193 Ramos Mejía, Prov. de Bs.As",
                horario: "Miercoles 19:30 hs, Sabados 15 hs y Domingos 10 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Villa 20",
                ubicacion: "Calle Barros Paso y esquina Pola, Maz. 7, Casa 78, Villa 20 Lugano CABA",
                horario: "Miercoles y Viernes 19 hs, Domingos 10 y 18 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Humberto 1°",
                ubicacion: "Calle Humberto 1º 1163 CABA",
                horario: "Domingos 19 hs"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `${activeTab === "PBA" ? "grid" : "hidden"} xl:grid-rows-3 xl:grid-cols-3 xl:h-2/3 grid-rows-2 grid-cols-2 gap-2 text-center h-auto w-auto xl:w-2/3`,
          children: [
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Hudson",
                ubicacion: "Calle 53 Nº 5564 bis entre 155 y 156",
                horario: "Domingos 10:30 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Florencio Varela - Bº Santa Rosa",
                ubicacion: "Pasaje 1º de Mayo (613) Nº 125",
                horario: "Domingos 20 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Lezama",
                ubicacion: "Calle Sargento Cabral y Libertad",
                horario: "Sábados 19 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Mar del Plata - Tarantino",
                ubicacion: "Avenida Tarantino Nº 1826 - Mar Del Plata",
                horario: "Domingos 11 hs"
              }
            ),
            /* @__PURE__ */ jsx(
              Location,
              {
                barrio: "Mar del Plata - Av. Colón",
                ubicacion: "Avenida Colón N° 11695 - Mar Del Plata",
                horario: "Sábados 18 hs"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("button", { className: "xl:text-3xl text-2xl relative font-semibold rounded-xl text-center text-logo bg-transparent p-4 border-4 border-logo hover:text-white transition-colors duration-300 mt-10 xl:mt-0 hover:bg-logo", children: [
      /* @__PURE__ */ jsx("a", { href: "/pagina-iglesia-astro/Agenda", className: "z-10 relative", children: "Agenda" }),
      /* @__PURE__ */ jsx("div", { className: "bg-logo transition-all top-0 left-0 duration-300 absolute h-full w-0" })
    ] })
  ] }) });
}

const $$Ubicaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full h-screen flex-col items-center"> <h1 class="xl:text-3xl font-bold font-sans xl:w-1/3 text-center xl:m-10 text-logo m-3 text-xl">Congregaciones de Pueblo Nuevo</h1> ${renderComponent($$result2, "CitySelector", CitySelector, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/CitySelector.tsx", "client:component-export": "default" })} </main> ` })}`;
}, "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Ubicaciones.astro", void 0);

const $$file = "/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Ubicaciones.astro";
const $$url = "/pagina-iglesia-astro/Ubicaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Ubicaciones,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
