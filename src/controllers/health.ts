import type { Context } from "hono";
import type { Health } from "../types/health";

async function check(c: Context) {
  const { PROJECT_NAME, PROJECT_VERSION } = process.env;
  const response: Health = {
    alive: true,
    name: PROJECT_NAME as string,
    version: PROJECT_VERSION as string,
  };
  return c.json(response);
};

export default { check };
