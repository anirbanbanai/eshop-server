// validations/user.validation.ts
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { isErrorWithMessage } from '../../utils/error';


const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  image: z.string().url().optional(),
  role: z.enum(['admin', 'user']).optional(),
});

const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  image: z.string().url().optional(),
  role: z.enum(['admin', 'user']).optional(),
});

const loginSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(6),
});

 const validateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

 const validateUpdateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    updateUserSchema.parse(req.body);
    next();
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};


export const userValidate = {
  validateUser,
  validateLogin,
  validateUpdateUser
}