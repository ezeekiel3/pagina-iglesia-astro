import { eq } from 'drizzle-orm'
import { db } from './index'
import { sections, items, pdfs } from './schema'

type ordeneredSectionsType = {
    id: number
    title: string
    description: string
    emoji: string
    contenido: {
        id: string
        name: string
        icon: 'folder' | 'file'
        pdfs?: { versiculo: string; filePath: string }[]
        pdfPath?: string | null
    }[]
}[]

const ordeneredSections: ordeneredSectionsType = []

export async function getSections() {
    const sectionsResult = await db.select().from(sections)
    const itemsResult = await db.select().from(items)

    for (const section of sectionsResult) {
        for (const item of itemsResult) {
            if (section.id === item.sectionId) {
                ordeneredSections.push({
                    ...section,
                    contenido: [{ id: `${item.id}`, name: item.name, icon: item.type, pdfPath: item.url }],
                })
            }
        }
    }

    return ordeneredSections
}
