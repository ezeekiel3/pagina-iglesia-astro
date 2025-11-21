import { pgEnum, pgTable, varchar, serial, integer, text } from 'drizzle-orm/pg-core'

export const itemTypeEnum = pgEnum('item_type', ['folder', 'file'])

export const sections = pgTable('sections', {
    id: serial('id').primaryKey(),
    title: text().notNull(),
    description: text().notNull(),
    emoji: varchar({ length: 8 }).notNull(),
})

export const items = pgTable('items', {
    id: serial('id').primaryKey(),
    sectionId: integer('section_id')
        .notNull()
        .references(() => sections.id, { onDelete: 'cascade' }),
    name: text().notNull(),
    type: itemTypeEnum().notNull(),
    url: text(),
})

export const pdfs = pgTable('pdfs', {
    id: serial('id').primaryKey(),
    itemId: integer('item_id')
        .notNull()
        .references(() => items.id, { onDelete: 'cascade' }),
    name: text().notNull(),
    url: text().notNull(),
})
