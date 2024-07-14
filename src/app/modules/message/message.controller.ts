// src/controllers/message.controller.ts
import { Request, Response } from 'express';
import { MessageService } from './message.servicee';

export const createMessage = async (req: Request, res: Response) => {
  try {
    const message = await MessageService.createMessage(req.body);
    res.status(201).json(message);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getMessagesByUserId = async (req: Request, res: Response) => {
  try {
    const messages = await MessageService.getMessagesByUserId(req.params.userId);
    res.status(200).json(messages);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await MessageService.getAllMessages();
    res.status(200).json(messages);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const markMessageAsSeen = async (req: Request, res: Response) => {
  try {
    const message = await MessageService.markMessageAsSeen(req.params.id);
    res.status(200).json(message);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const messageController  = {
    createMessage,
    getAllMessages,
    getMessagesByUserId,
    markMessageAsSeen

}
