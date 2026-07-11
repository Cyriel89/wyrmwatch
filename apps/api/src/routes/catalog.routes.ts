import { Router } from 'express';
import health from './health/health.routes.js';  // attention au .js en ESM, même si le fichier est .ts

const catalog: Router = Router();

catalog.use(health);

export default catalog;