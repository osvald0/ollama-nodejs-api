import { Hono } from "hono";
import allRoutes from './all';
import healthRoutes from './health';

const app = new Hono();

app.route('/health', healthRoutes);

app.route('/', allRoutes);

export default app;
