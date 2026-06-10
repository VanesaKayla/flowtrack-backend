const db = require('../config/database');

class Cycle {
  static async findAll() {
    const result = await db.query('SELECT * FROM cycles ORDER BY start_date DESC');
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query('SELECT * FROM cycles WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create({ start_date, duration, cycle_length, notes }) {
    const result = await db.query(
      'INSERT INTO cycles (start_date, duration, cycle_length, notes) VALUES ($1, $2, $3, $4) RETURNING *',
      [start_date, duration, cycle_length || null, notes || null]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM cycles WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }

  static async getAverageCycleLength() {
    const result = await db.query(
      'SELECT AVG(cycle_length) AS avg_length FROM cycles WHERE cycle_length IS NOT NULL'
    );
    return parseFloat(result.rows[0].avg_length) || 28;
  }

  static async getLatest() {
    const result = await db.query('SELECT * FROM cycles ORDER BY start_date DESC LIMIT 1');
    return result.rows[0];
  }
}

module.exports = Cycle;