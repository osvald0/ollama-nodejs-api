
import { Hono } from "hono";

import all from '../controllers/all'

const allRouter = new Hono();

allRouter.all('*', all.handle);

export default allRouter;
