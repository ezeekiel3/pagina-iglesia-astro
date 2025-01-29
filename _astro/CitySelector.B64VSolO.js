import{r as b}from"./index.BL7xzsR_.js";var h={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function m(){if(x)return l;x=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(t,i,e){var c=null;if(e!==void 0&&(c=""+e),i.key!==void 0&&(c=""+i.key),"key"in i){e={};for(var d in i)d!=="key"&&(e[d]=i[d])}else e=i;return i=e.ref,{$$typeof:r,type:t,key:c,ref:i!==void 0?i:null,props:e}}return l.Fragment=n,l.jsx=s,l.jsxs=s,l}var u;function j(){return u||(u=1,h.exports=m()),h.exports}var a=j();const g={src:"/_astro/location.DMixO1nW.png",width:16,height:16,format:"png"},f={src:"/_astro/clock.CUboc8-T.png",width:16,height:16,format:"png"};function o({barrio:r,ubicacion:n,horario:s}){return a.jsxs("div",{className:"flex flex-col items-center justify-center",children:[a.jsx("h2",{className:"text-logo text-2xl font-semibold",children:r}),a.jsxs("div",{className:"flex text-logo font-semibold items-center",children:[a.jsx("img",{src:g.src,alt:"",className:"h-4"}),a.jsx("p",{children:n})]}),a.jsxs("div",{className:"flex text-logo font-semibold items-center",children:[a.jsx("img",{src:f.src,alt:"",className:"h-4"}),a.jsx("p",{children:s})]})]})}const C=["Berisso","Ensenada","La Plata","CABA","PBA"];function v(){const[r,n]=b.useState("Berisso");return a.jsx("div",{className:"flex justify-center items-center w-full flex-grow",children:a.jsxs("div",{className:"h-full w-full flex items-center flex-col",children:[a.jsx("div",{className:"h-16 w-1/3 font-sans flex justify-evenly items-center font-bold text-logo text-xl",children:C.map((s,t)=>a.jsx("button",{onClick:()=>n(s),className:`h-2/3 transition-all duration-500 border-b-2 ${r===s?"border-logo":"border-transparent"}`,children:s},t))}),a.jsxs("div",{className:"flex flex-col w-full h-2/3 justify-center items-center",children:[a.jsxs("div",{className:`${r==="Berisso"?"grid":"hidden"} xl:grid-rows-3 xl:grid-cols-3 h-2/3 w-2/3 transition-all duration-500`,children:[a.jsx(o,{barrio:"Templo Central",ubicacion:"Calle 165 (Ostende) Nº 861 entre 10 y 11",horario:"Domingos 10 hs y 19 hs"}),a.jsx(o,{barrio:"Villa San Carlos",ubicacion:"Calle 22 entre 166 y 167",horario:"Domingos 19 hs"}),a.jsx(o,{barrio:"Villa Zula",ubicacion:"Calle 175 entre 35 y 36",horario:"Domingos 10 hs"}),a.jsx(o,{barrio:"Barrio Obrero",ubicacion:"Calle Homero Manzi (31) casa N° 419 entre Zapiola (162) y Viamonte (163)",horario:"Indefinido"}),a.jsx(o,{barrio:"Villa Paula",ubicacion:"Calle 12  entre 149 y 149 Norte",horario:"Domingos 10:30 hs"}),a.jsx(o,{barrio:"Villa Nueva",ubicacion:"Calle 140 entre 7 y 8",horario:"Domingos 10 hs"}),a.jsx(o,{barrio:"Villa Arguello",ubicacion:"Calle 9 entre 130 y 131",horario:"Domingos 10 hs"}),a.jsx(o,{barrio:"El Carmen",ubicacion:"Calle 123 entre 34 (93 bis) y 35 (94)",horario:"Domingos 10 hs"})]}),a.jsxs("div",{className:`${r==="Ensenada"?"grid":"hidden"} xl:grid-rows-3 xl:grid-cols-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0`,children:[a.jsx(o,{barrio:"Ensenada Centro",ubicacion:"Avenida Horacio Cestino Nº 430",horario:"Domingos 10 hs y 19 hs"}),a.jsx(o,{barrio:"Villa Tranquila",ubicacion:"Calle Quintana Nº 924 entre Saavedra y Contarelli",horario:"Domingos 10 hs"}),a.jsx(o,{barrio:"Villa Rubén Sito",ubicacion:"Avenida Altemirante Brown y 6",horario:"Domingos 19 hs"}),a.jsx(o,{barrio:"Punta Lara B° La Pergola",ubicacion:"Calle 98 entre 11 y 13",horario:"Domingos 10 hs"})]}),a.jsxs("div",{className:`${r==="La Plata"?"grid":"hidden"} xl:grid-cols-3 xl:grid-rows-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0`,children:[a.jsx(o,{barrio:"En Tu Presencia",ubicacion:"Avenida 72 Nº 150 entre 516 y 517",horario:"Domingos 10 hs y 18 hs"}),a.jsx(o,{barrio:"Sud Este",ubicacion:"Calle 86 entre 12 y 13",horario:"Domingos 10 hs y 19 hs"}),a.jsx(o,{barrio:"Camino, Verdad y Vida",ubicacion:"Av. 72 e/10 y 11 N° 796",horario:"Domingos 10 hs"}),a.jsx(o,{barrio:"Montahue",ubicacion:"Indefinido",horario:"Domingos 17 hs"}),a.jsx(o,{barrio:"Las Rosas",ubicacion:"Calle 516 entre 157 y 158",horario:"Domingos 10 hs"}),a.jsx(o,{barrio:"Hernandez",ubicacion:"Avenida 508 entre 30 y 31",horario:"Domingos 10 hs y 19 hs"}),a.jsx(o,{barrio:"Tolosa",ubicacion:"119 Nº 1047 e/ 521 y 522",horario:"Domingos 19 hs"}),a.jsx(o,{barrio:"City Bell",ubicacion:"Calle 480 N° 1582 entre 10 y 11",horario:"Domingos 17 hs"})]}),a.jsxs("div",{className:`${r==="CABA"?"grid":"hidden"} xl:grid-cols-3 xl:grid-rows-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0`,children:[a.jsx(o,{barrio:"Villa Soldati",ubicacion:"Avenida Pergamino Nº 3010",horario:"Domingos 17 hs"}),a.jsx(o,{barrio:"Parque Indoamericano",ubicacion:"Avenida Escalada Nº 3035/7",horario:"Domingos 10 hs y 18:30 hs"}),a.jsx(o,{barrio:"Ramos Mejía",ubicacion:"Calle Colombia N° 1193 Ramos Mejía, Prov. de Bs.As",horario:"Miercoles 19:30 hs, Sabados 15 hs y Domingos 10 hs"}),a.jsx(o,{barrio:"Villa 20",ubicacion:"Calle Barros Paso y esquina Pola, Maz. 7, Casa 78, Villa 20 Lugano CABA",horario:"Miercoles y Viernes 19 hs, Domingos 10 y 18 hs"}),a.jsx(o,{barrio:"Humberto 1°",ubicacion:"Calle Humberto 1º 1163 CABA",horario:"Domingos 19 hs"})]}),a.jsxs("div",{className:`${r==="PBA"?"grid":"hidden"} xl:grid-cols-3 xl:grid-rows-3 h-2/3 w-2/3 transition-all duration-500 translate-x-0`,children:[a.jsx(o,{barrio:"Hudson",ubicacion:"Calle 53 Nº 5564 bis entre 155 y 156",horario:"Domingos 10:30 hs"}),a.jsx(o,{barrio:"Florencio Varela - Bº Santa Rosa",ubicacion:"Pasaje 1º de Mayo (613) Nº 125",horario:"Domingos 20 hs"}),a.jsx(o,{barrio:"Lezama",ubicacion:"Calle Sargento Cabral y Libertad",horario:"Sábados 19 hs"}),a.jsx(o,{barrio:"Mar del Plata - Tarantino",ubicacion:"Avenida Tarantino Nº 1826 - Mar Del Plata",horario:"Domingos 11 hs"}),a.jsx(o,{barrio:"Mar del Plata - Av. Colón",ubicacion:"Avenida Colón N° 11695 - Mar Del Plata",horario:"Sábados 18 hs"})]})]})]})})}export{v as default};
