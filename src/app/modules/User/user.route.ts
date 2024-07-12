

import { Router } from 'express';
import { UserController } from './user.controller';
import { userValidate } from './user.validation';
const router = Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.get('/email/:email', UserController.findUserByEmail);
router.put(
  '/:id',
  userValidate.validateUpdateUser,
  UserController.updateUserDetails,
);
router.delete('/:id', UserController.removeUser);

export const UserRoutes = router;
