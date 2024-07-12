// controllers/auth.controller.ts
import { Request, Response } from 'express';
import { UserService } from '../User/user.service';

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

const register = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const token = await UserService.loginUser(
      req.body.email,
      req.body.password,
    );
    // console.log(token);
    res.status(200).json({ token });
  } catch (error: unknown) {
    if (isErrorWithMessage(error)) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error' });
    }
  }
};

export const authController = {
  register,
  login,
};
