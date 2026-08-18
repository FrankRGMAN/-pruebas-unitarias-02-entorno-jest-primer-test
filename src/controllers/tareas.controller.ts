import { Request, Response } from 'express';

// Modelo de una tarea
export interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  descripcion: string;
}

// Arreglo en memoria que simula la base de datos
export const tareas: Tarea[] = [
  {
    id: 1,
    titulo: 'Configurar entorno de pruebas',
    completada: true,
    descripcion: 'Instalar Jest, ts-jest y Supertest en el proyecto',
  },
  {
    id: 2,
    titulo: 'Crear el endpoint GET /tareas',
    completada: false,
    descripcion: 'Exponer el arreglo de tareas desde el controlador',
  },
  {
    id: 3,
    titulo: 'Escribir la primera prueba unitaria',
    completada: false,
    descripcion: 'Validar código 200, tipo arreglo y propiedades de cada tarea',
  },
];

// GET /tareas -> devuelve el listado completo
export const obtenerTareas = (_req: Request, res: Response): Response => {
  return res.status(200).json(tareas);
};
