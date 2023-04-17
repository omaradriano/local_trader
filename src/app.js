//Se van a usar ESM
import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'
import { PORT } from './config.js'


const app = express()
app.use(express.json())

app.use(indexRoutes)
app.use('/api/', usuariosRoutes)

// 404
app.use('/api/usuarios/', (req, res, next) => {
    res.status(404).json({ message: 'Usuario no encontrado xd' })
})
console.log('Corriendo en el puerto', PORT);

export default app