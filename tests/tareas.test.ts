import request from 'supertest';
import app from '../src/app';

describe('GET /tareas', () => {
  it('debe responder con código de estado 200', async () => {
    const respuesta = await request(app).get('/tareas');
    expect(respuesta.status).toBe(200);
  });

  it('debe devolver un arreglo', async () => {
    const respuesta = await request(app).get('/tareas');
    expect(Array.isArray(respuesta.body)).toBe(true);
  });

  it('debe contener al menos una tarea', async () => {
    const respuesta = await request(app).get('/tareas');
    expect(respuesta.body.length).toBeGreaterThan(0);
  });

  it('cada tarea debe tener las propiedades id, titulo, completada y descripcion', async () => {
    const respuesta = await request(app).get('/tareas');

    respuesta.body.forEach((tarea: unknown) => {
      expect(tarea).toHaveProperty('id');
      expect(tarea).toHaveProperty('titulo');
      expect(tarea).toHaveProperty('completada');
      expect(tarea).toHaveProperty('descripcion');
    });
  });
});
