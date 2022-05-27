import { Router } from 'express'
import * as userController from '../controllers/userController'
const User = Router()

User.get('/', userController.fetchUsers)

User.get('/:id', userController.fetchUserbyId)

User.post('/signup', userController.createUser)

User.put('/:id', userController.updateUser)

User.delete('/:id', userController.deleteUser)

export default User
