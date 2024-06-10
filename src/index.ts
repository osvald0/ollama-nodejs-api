import 'dotenv/config'
import { serve } from "@hono/node-server";
import app from './app';

const PORT: number = process.env.ENV_PORT ? Number.parseInt(process.env.ENV_PORT as string, 10) : 3000;

console.log(`Server is running on port ${PORT}`);

serve({
  fetch: app.fetch,
  port: PORT,
});
