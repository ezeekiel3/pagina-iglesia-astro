import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import 'dotenv/config'

const client = new Client({
    connectionString: process.env.POSTGRES_URL!,
    password: 'lolomta321',
})

await client.connect()

export const db = drizzle(client)

console.log('DATABASE_URL RAW =', JSON.stringify(process.env.POSTGRES_URL))
