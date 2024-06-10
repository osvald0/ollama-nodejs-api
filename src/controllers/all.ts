import type { Context } from "hono";

async function handle(c: Context) {
  const targetUrl = `http://localhost:11434${c.req.path}`;
  const body = c.req.method !== 'GET' && c.req.method !== 'HEAD' ? c.req.raw.body : undefined;

  const response = await fetch(targetUrl, {
    headers: { ...c.req.raw.headers },
    method: c.req.method,
    duplex: 'half',
    body,
  });

  return new Response(response.body, {
    headers: response.headers,
    status: response.status,
  });
}

export default { handle }
