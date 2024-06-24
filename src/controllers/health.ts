import type { Context } from "hono";
import type { Health } from "../types/health";

async function check(c: Context) {
  const { PROJECT_NAME, PROJECT_VERSION } = process.env;
  const ollamaStatus = process.env.OLLAMA_API_URL ? await fetch(process.env.OLLAMA_API_URL) : null;

  const response: Health = {
    name: PROJECT_NAME as string,
    version: PROJECT_VERSION as string,
    alive: ollamaStatus?.status === 200,
  };

  return c.json(response);
};

export default { check };
