const pool = require('../config/db');

const CompanyModel = {
  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM company WHERE email = $1', [email]);
    return result.rows[0];
  },

  async findByNit(nit) {
    const result = await pool.query('SELECT * FROM company WHERE nit = $1', [nit]);
    return result.rows[0];
  },

  async existsByNitOrEmail(nit, email) {
    const result = await pool.query('SELECT * FROM company WHERE nit = $1 OR email = $2', [nit, email]);
    return result.rows.length > 0;
  },

  async create({ nit, name, email, password, address }) {
    await pool.query(
      'INSERT INTO company (nit, name, email, password, address) VALUES ($1, $2, $3, $4, $5)',
      [nit, name, email, password, address]
    );
  }
};

module.exports = CompanyModel;