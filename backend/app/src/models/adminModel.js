const pool = require('../config/db');

const AdminModel = {
  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM public.admin WHERE email = $1', [email]);
    return result.rows[0];
    
  },
  async create({ name, email, password }) {
  await pool.query(
    'INSERT INTO public.admin (name, email, password) VALUES ($1, $2, $3)',
    [name, email, password]
);
  },
  
};



module.exports = AdminModel;