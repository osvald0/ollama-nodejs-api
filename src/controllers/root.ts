import type { Context } from "hono";

async function get(c: Context) {
  return c.text('OK!');
};

async function handle(c: Context) {

  // const body = ['GET', 'HEAD'].includes(c.req.method) ? c.req.raw.body : undefined;
  //
  // const response = await fetch(targetUrl, {
  //   headers: { ...c.req.raw.headers },
  //   method: c.req.method,
  //   duplex: 'half',
  //   body,
  // });
  //
  // return new Response(response.body, {
  //   headers: response.headers,
  //   status: response.status,
  // });
  c.text('Hello!')
}

export default { get, handle };
