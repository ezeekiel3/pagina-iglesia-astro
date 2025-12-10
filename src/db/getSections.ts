import { eq } from 'drizzle-orm'
import { db } from './index'
import { sections, items, pdfs } from './schema'

export async function getSections() {
    const sectionResult = await db.query.sections.findMany({
        with: {
            items: {
                with: { pdfs: true },
            },
        },
    })
    return sectionResult
}

export type Section = Awaited<ReturnType<typeof getSections>>[number]
