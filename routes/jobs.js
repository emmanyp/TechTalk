import { Router } from 'express'
import * as jobsCtrl from '../controllers/jobs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', jobsCtrl.index)

export {router}