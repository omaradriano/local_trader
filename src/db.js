import { createPool } from 'mysql2/promise'
import {DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE, DB_PORT} from './config.js'
//Create connection es para crear un solo hilo de conexion
//Create pool es para un conjunto de conexiones y que sea usado facilmente en produccion

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

// pool.query('SELECT * FROM local_trader.usuario', (err, result)=> {
//     console.log(result);
// })

