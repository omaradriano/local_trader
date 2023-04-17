import { pool } from '../db.js'
export const testUsuarios = async (req, res) => {
    let [result] = await pool.query('SELECT * FROM local_trader.usuario')
    res.json(result)
}