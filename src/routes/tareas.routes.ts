import { Router } from 'express';
import { obtenerTareas } from '../controllers/tareas.controller';

const router = Router();

// Ruta: GET /tareas
router.get('/tareas', obtenerTareas);

export default router;
