import { pool } from '../db.js'

export const getUsuario = async (req, res) => {
    try {
        const [data] = await pool.query(`select * from local_trader.usuario`)
        res.send(data)
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error inesperado'
        })
    }
}

export const getUsuarioById = async (req, res) => {
    try {
        // throw new Error('kk')
        console.log(req.params);
        // res.send('Se ha consultado un usuario')
        const [data] = await pool.query(`select * from local_trader.usuario where n_control = ${req.params.n_control}`)
        //En caso que de buscar un usuario que no pueda encontrar lanzar un error 404 a la pagina
        data.length <= 0 ? res.status(404).json({
            message: 'Usuario no encontrado'
        }) : 'null'
        res.send(...data)
    } catch (error) {
        res.status(500).json({
            message: 'Eres lo más bonito que se ha cruzado por mi vida, te amo mucho mi amor <3'
        })
    }
}

// export const createUsuario = async (req, res) => {
//     console.log(req.body);
//     const { n_control, nombre, telefono, email, tipo_usuario } = req.body
//     const [rows] = await pool.query(`insert into local_trader.usuario (n_control, nombre, telefono, email, tipo_usuario) values (?,?,?,?,?)`, [n_control, nombre, telefono, email, tipo_usuario])
//     res.send({ rows })
// }
export const createUsuario = async (req, res) => {
    const { n_control, nombre, telefono, email, tipo_usuario } = req.body

    try {
        const [rows] = await pool.query(`insert into local_trader.usuario (n_control, nombre, telefono, email, tipo_usuario) values ('${n_control}','${nombre}','${telefono}','${email}','${tipo_usuario}')`)
        res.send({ rows })
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error inesperado'
        })
    }
}


export const updateUsuario = async (req, res) => {
    const { n_control, nombre, telefono } = req.body
    const [result] = await pool.query(`update local_trader.usuario set nombre = ifnull(?, nombre), telefono = ifnull(?, telefono) where n_control = '${n_control}'`, [nombre, telefono])

    try {
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No se ha encontrado ningun usuario para modificar'
            })
        } else {
            const [data] = await pool.query(`select * from local_trader.usuario where n_control = '${n_control}'`)
            return res.json(...data)
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error inesperado'
        })
    }
}

export const deleteUsuario = async (req, res) => {
    const { n_control } = req.body
    const [data] = await pool.query(`delete from local_trader.usuario where n_control = ?`, [n_control])

    try {
        if (data.affectedRows <= 0) {
            return res.status(404).json({
                message: `No se ha encontrado usuario ${n_control}`
            })
        } else {
            return res.status(200).json({
                message: `Usuario ${n_control} eliminado con exito`
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error inesperado'
        })
    }

    // console.log(data);
    // res.send(data)
    // console.log('Borrado con exito');
}