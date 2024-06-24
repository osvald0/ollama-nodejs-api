import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { bearerAuth } from "hono/bearer-auth";
import { BEARER_TOKEN } from "./constants/auth";
import routes from './routes';

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

app.use("/*", cors());
app.use('/*', bearerAuth({ token: BEARER_TOKEN }));

app.route('/', routes);

export default app;
