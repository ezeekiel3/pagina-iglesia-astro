import { db } from './index'
import { sections, items, pdfs } from './schema'

export async function getSections() {
    const sectionsResult = await db.select().from(sections)

    return sectionsResult
}
