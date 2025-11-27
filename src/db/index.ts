import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

console.log(process.env.POSTGRES_URL)

const connection = postgres(process.env.POSTGRES_URL!)
export const db = drizzle(connection, { schema })
