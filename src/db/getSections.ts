import { db } from './index'
import { sections, items, pdfs } from './schema'

export async function getSections() {
    const sectionsResult = await db
        .select({
            titleSection: sections.title,
            descriptionSection: sections.description,
            emoji: sections.emoji,
        })
        .from(sections)
    console.log(sectionsResult)
}
