import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show )
router.put('/:id', checkAuth, profilesCtrl.updateProfile)
router.post('/todos',checkAuth, profilesCtrl.create)
router.put('/todos/:todoId', checkAuth, profilesCtrl.update)
router.delete('/todos/:todoId',checkAuth, profilesCtrl.delete )
router.put('/friends/:id', checkAuth, profilesCtrl.addFriend)
router.patch('/friends/:id', checkAuth, profilesCtrl.unaddFriend)


export { router }

