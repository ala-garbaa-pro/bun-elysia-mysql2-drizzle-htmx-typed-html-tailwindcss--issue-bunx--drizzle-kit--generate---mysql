import type { Config } from "drizzle-kit";
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env'
});

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing');
}

export default {
  schema: "./src/db/schema.ts",
  driver: "mysql2",
  out: './migrations',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
