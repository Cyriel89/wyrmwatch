import express, { type Express } from 'express';
import catalog from './routes/catalog.routes.js';

const app: Express = express();
app.use(catalog);

export default app;