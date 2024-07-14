import { Router } from 'express';
import { messageController } from './message.controller';

const router: Router = Router();

router.post('/', messageController.createMessage);
router.get('/user/:userId', messageController.getMessagesByUserId);
router.get('/', messageController.getAllMessages);
router.put('/:id', messageController.markMessageAsSeen);

export const MessageRouter = router;
