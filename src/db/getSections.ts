import { sections, items, pdfs } from './schema'
import { db } from './index'

const SectionsArr = [
    {
        titleSection: 'Estudios del Nuevo Testamento',
        descriptionSection: 'Profundiza en las enseñanzas y mensajes del Nuevo Testamento',
        emojiSection: '📖',
    },
    {
        titleSection: 'Estudios Nombres de Jesús',
        descriptionSection: 'Descubre el significado profundo de cada nombre de Cristo',
        emojiSection: '✝️',
    },
    {
        titleSection: 'Discipulados',
        descriptionSection: 'Recursos para el crecimiento y formación de discípulos',
        emojiSection: '🙏',
    },
    {
        titleSection: 'Cristo el Fundamento en toda la Biblia',
        descriptionSection: 'Explorando a Cristo desde Génesis hasta Apocalipsis',
        emojiSection: '⛪',
    },
    {
        titleSection: 'Todo el Consejo de Dios',
        descriptionSection: 'Estudio panorámico de las Escrituras',
        emojiSection: '📚',
    },
    {
        titleSection: 'Experimentando a Dios',
        descriptionSection: 'Conociendo y viviendo en la presencia de Dios',
        emojiSection: '🕊️',
    },
    {
        titleSection: 'Sigamos Adelante en la Misión',
        descriptionSection: 'Equipamiento para el servicio y la evangelización',
        emojiSection: '🌍',
    },
    {
        titleSection: 'Levántate y Edifica tu Nueva Vida',
        descriptionSection: 'Recursos para el nuevo creyente y crecimiento espiritual',
        emojiSection: '🌱',
    },
    {
        titleSection: 'GIGANTES DE LA FE',
        descriptionSection: 'Guía de oración inspirada en los grandes héroes de la fe.',
        emojiSection: '💪',
    },
    {
        titleSection: 'MAS QUE VENCEDORES',
        descriptionSection: 'Oraciones para superar cada desafío y vivir en victoria.',
        emojiSection: '🏆',
    },
]
console.log('DATABASE_URL RAW =', JSON.stringify(process.env.POSTGRES_URL))

async function main() {
    for (const section of SectionsArr) {
        await db.insert(sections).values({
            title: section.titleSection,
            description: section.descriptionSection,
            emoji: section.emojiSection,
        })
    }
}
