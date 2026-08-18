import express, { Application } from 'express';
import tareasRoutes from './routes/tareas.routes';

const app: Application = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/', tareasRoutes);

export default app;
