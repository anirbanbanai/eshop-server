import { Router } from 'express';
import { CartController } from './cart.controller';

const router = Router();

router.post('/', CartController.createCart);
router.get('/:id', CartController.getCartById);
router.get('/', CartController.getAllCart );
router.put('/:id', CartController.updateCarts);
router.delete('/:id',CartController.deleteCart);


export const CartRouter = router;
