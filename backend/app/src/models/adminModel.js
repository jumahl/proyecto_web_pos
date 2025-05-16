const pool = require('../config/db');

const AdminModel = {
  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM admin WHERE email = $1', [email]);
    return result.rows[0];
  },
  async create({ name, email, password, role_id }) {
    await pool.query(
      'INSERT INTO admin (name, email, password, role_id) VALUES ($1, $2, $3, $4)',
      [name, email, password, role_id]
    );
  }
};

module.exports = AdminModel;