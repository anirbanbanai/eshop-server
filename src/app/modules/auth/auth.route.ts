// routes/auth.routes.ts
import { Router } from 'express';
import { authController } from './auth.controller';
import { userValidate } from '../User/user.validation';

const router = Router();

router.post('/register', userValidate.validateUser, authController.register);
router.post('/login', authController.login);

export const AuthRoutes = router;
