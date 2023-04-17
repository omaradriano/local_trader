import { Router } from 'express';
import { getUsuario, createUsuario, updateUsuario, deleteUsuario, getUsuarioById } from '../controllers/usuarios.controllers.js'

const router = Router()

router.get('/usuarios', getUsuario)
router.get('/usuarios/:n_control', getUsuarioById)
router.post('/usuarios', createUsuario)
router.patch('/usuarios', updateUsuario)
router.delete('/usuarios', deleteUsuario)

export default router 