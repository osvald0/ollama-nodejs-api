import { Hono } from "hono";
import health from '../controllers/health';

const healthRouter = new Hono();

healthRouter.get('/', health.check);

export default healthRouter;
