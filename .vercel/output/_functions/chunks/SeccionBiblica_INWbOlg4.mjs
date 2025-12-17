import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { pgEnum, pgTable, varchar, text, serial, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const itemTypeEnum = pgEnum("item_type", ["folder", "file"]);
const pageEnum = pgEnum("page", ["main", "kids"]);
const sections = pgTable("sections", {
  id: serial("id").primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  emoji: varchar({ length: 8 }).notNull(),
  page: pageEnum().notNull()
});
const items = pgTable("items", {
  id: serial("id").primaryKey(),
  sectionId: integer("section_id").notNull().references(() => sections.id, { onDelete: "cascade" }),
  name: text().notNull(),
  type: itemTypeEnum().notNull(),
  url: text()
});
const pdfs = pgTable("pdfs", {
  id: serial("id").primaryKey(),
  itemId: integer("item_id").notNull().references(() => items.id, { onDelete: "cascade" }),
  name: text().notNull(),
  url: text().notNull()
});
const sectionsRelations = relations(sections, ({ many }) => ({
  items: many(items)
}));
const itemsRelations = relations(items, ({ one, many }) => ({
  section: one(sections, {
    fields: [items.sectionId],
    references: [sections.id]
  }),
  pdfs: many(pdfs)
}));
const pdfsRelations = relations(pdfs, ({ one }) => ({
  item: one(items, {
    fields: [pdfs.itemId],
    references: [items.id]
  })
}));

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    itemTypeEnum,
    items,
    itemsRelations,
    pageEnum,
    pdfs,
    pdfsRelations,
    sections,
    sectionsRelations
}, Symbol.toStringTag, { value: 'Module' }));

console.log(process.env.POSTGRES_URL);
const connection = postgres(process.env.POSTGRES_URL);
const db = drizzle(connection, { schema });

async function getSections() {
  const sectionResult = await db.query.sections.findMany({
    with: {
      items: {
        with: { pdfs: true }
      }
    }
  });
  return sectionResult;
}

function SectionItem({ itemSection, showMore }) {
  const [openFolder, setOpenFolder] = useState(false);
  const [hoveringTitle, setHoveringTitle] = useState(false);
  const [editingTitle, setEditingTitle] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `border border-logo hover:bg-logo hover:bg-opacity-10 duration-100 border-opacity-30 rounded-lg h-min w-11/12 ${showMore ? "visible" : "invisible"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex flex-row pl-7 gap-3 ${itemSection.type === "folder" ? "py-4" : ""} items-center`,
            onClick: () => {
              if (itemSection.type === "folder" && hoveringTitle === false) {
                setOpenFolder(!openFolder);
              }
            },
            children: [
              itemSection.type === "folder" ? /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  viewBox: "0 -960 960 960",
                  width: "24px",
                  fill: "#b22c2d",
                  children: /* @__PURE__ */ jsx("path", { d: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" })
                }
              ) : /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  viewBox: "0 -960 960 960",
                  width: "24px",
                  fill: "#b22c2d",
                  children: /* @__PURE__ */ jsx("path", { d: "M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" })
                }
              ),
              itemSection.type === "folder" ? /* @__PURE__ */ jsx(
                "p",
                {
                  className: "xl:text-xl text-lg text-logo font-semibold",
                  onMouseEnter: () => setHoveringTitle(true),
                  onMouseLeave: () => setHoveringTitle(false),
                  children: itemSection.name
                }
              ) : /* @__PURE__ */ jsx(
                "a",
                {
                  href: itemSection.url,
                  className: "xl:text-xl text-lg text-logo font-semibold w-full h-full py-4",
                  target: "_blank",
                  children: itemSection.name
                }
              ),
              itemSection.type === "folder" ? openFolder ? /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  viewBox: "0 -960 960 960",
                  width: "24px",
                  fill: "#b22c2d",
                  className: "mt-1",
                  children: /* @__PURE__ */ jsx("path", { d: "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" })
                }
              ) : /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  viewBox: "0 -960 960 960",
                  width: "24px",
                  fill: "#b22c2d",
                  className: "mt-1",
                  children: /* @__PURE__ */ jsx("path", { d: "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" })
                }
              ) : null
            ]
          }
        ),
        openFolder ? /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5 items-center mb-5", children: itemSection.pdfs?.map((element) => /* @__PURE__ */ jsx(
          "a",
          {
            href: element.url,
            className: "text-logo border xl:w-1/2 w-3/4 border-opacity-25 text-center border-black hover:bg-logo hover:text-white pl-5 py-3 text-lg font-medium rounded-lg duration-200",
            target: "_blank",
            children: element.name
          }
        )) }) : ""
      ]
    }
  );
}

function SeccionBiblica({ section, pageValue }) {
  const [showMore, setShowMore] = useState(false);
  function countPdf() {
    let cantidad = 0;
    for (let i = 0; i < section.items.length; i++) {
      if (section.items[i].type === "file") {
        cantidad++;
      } else {
        for (let j = 0; j < section.items[i].pdfs.length; j++) {
          cantidad++;
        }
      }
    }
    return cantidad;
  }
  if (section.page === pageValue) {
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-col mt-10 bg-orange-200 h-auto pb-4 xl:w-2/3 w-11/12 rounded-2xl border-opacity-30 shadow-md border-logo border-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-orange-100 bg-opacity-70 mt-7 mb-7 h-1/5 w-full flex flex-row items-center pl-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl", children: section.emoji }),
        /* @__PURE__ */ jsxs("div", { className: "ml-5 flex flex-col gap-2 h-auto py-5", children: [
          /* @__PURE__ */ jsxs("p", { className: "opacity-50 font-sans xl:text-base text-sm", children: [
            "Seccion ",
            section.id
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "xl:text-2xl text-logo font-semibold opacity-90 text-xl", children: section.title }),
          /* @__PURE__ */ jsx("p", { className: "opacity-65 xl:text-base text-sm xl:text-start pr-1", children: section.description })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full flex items-center flex-col gap-4 overflow-hidden", children: showMore ? section.items.map((element) => /* @__PURE__ */ jsx(SectionItem, { itemSection: element, showMore }, element.id)) : section.items.map((element, i) => {
        if (i < 3) {
          return /* @__PURE__ */ jsx(SectionItem, { itemSection: element, showMore: true }, element.id);
        }
      }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "font-medium border border-logo h-min py-2 px-3 rounded-lg hover:bg-orange-800 hover:bg-opacity-15 duration-100 mt-6 text-logo",
          onClick: () => setShowMore(!showMore),
          children: showMore ? "Ver Menos" : "Ver Mas"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-11/12 border-t mt-5 border-black border-opacity-20" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm mt-4 opacity-50", children: [
        "Total de Recursos: ",
        countPdf(),
        " PDFs"
      ] })
    ] });
  }
}

export { SeccionBiblica as S, getSections as g };
