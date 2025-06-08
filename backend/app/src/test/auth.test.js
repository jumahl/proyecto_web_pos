const request = require('supertest');
const app = require('../app');

describe('Pruebas de autenticación', () => {
  describe('Login de empresa', () => {
    test('Login exitoso empresa', async () => {
      const res = await request(app)
        .post('/api/auth/login/company')
        .send({
          email: 'empresa@eje.co',
          password: 'empresa'
        });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
    });

    test('Login fallido empresa', async () => {
      const res = await request(app)
        .post('/api/auth/login/company')
        .send({
          email: 'empresa@eje.co',
          password: 'incorrecta'
        });
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Credenciales inválidas');
    });
  });

  describe('Login de administración', () => {
    test('Login exitoso admin', async () => {
      const res = await request(app)
        .post('/api/auth/login/admin')
        .send({
          email: 'admin@admin.com',
          password: 'juanma23'
        });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
    });

    test('Login fallido admin', async () => {
      const res = await request(app)
        .post('/api/auth/login/admin')
        .send({
          email: 'admin@admin.com',
          password: 'incorrecta'
        });
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Credenciales inválidas');
    });
  });

    describe('Registro de empresa', () => {
    test('Registro exitoso de empresa', async () => {
      const res = await request(app)
        .post('/api/auth/register/company')
        .send({
          nit: Math.floor(Math.random() * 1000000000),
          name: 'Empresa Test',
          email: 'empresa_test_' + Date.now() + '@eje.co', 
          password: 'test1234',
          address: 'Calle Falsa 123',
          plan_id: 1 
        });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Empresa y suscripción creadas correctamente');
    });
  });

  describe('Registro de administrador', () => {
    test('Registro exitoso de admin', async () => {
      const res = await request(app)
        .post('/api/auth/register/admin')
        .send({
          name: 'Admin Test',
          email: 'admin_test_' + Date.now() + '@admin.com', // Email único
          password: 'admin1234'
        });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toBe('Administrador registrado correctamente');
    });
  });
});