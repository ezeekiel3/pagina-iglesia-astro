import 'dotenv/config'
import { usersTable } from './src/db/schema'
import { drizzle } from 'drizzle-orm/node-postgres'

async function main() {
    const db = drizzle(process.env.DATABASE_URL!)

    const result = await db.select().from(usersTable)

    console.log(result)
}

main()
