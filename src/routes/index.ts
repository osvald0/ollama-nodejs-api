import { Hono } from "hono";
import healthRoutes from './heath';
import allRoutes from './all'

const app = new Hono();

app.route('/health', healthRoutes);

app.route('/', allRoutes);

export default app;
