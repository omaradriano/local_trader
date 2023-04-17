import { Router } from 'express'
import { testUsuarios } from '../controllers/index.controllers.js'

const router = Router()

router.get('/test', testUsuarios)

export default router