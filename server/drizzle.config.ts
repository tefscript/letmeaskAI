import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';
config({ path: '../.env' });

export default defineConfig({
    dialect: 'postgresql',
    casing: 'snake_case',
    schema: './server/src/db/schema/**.ts',
    out: './server/src/db/migrations',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }
})