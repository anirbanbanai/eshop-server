import { Router } from 'express';
import { ProductsController } from './product.controller';

const router = Router();

router.post('/', ProductsController.createProduct);
router.get('/:id', ProductsController.getProductById);
router.get('/', ProductsController.getAllProducts);
router.put('/:id', ProductsController.updateProducts);
router.delete('/:id',ProductsController.deleteProducts);


export const ProductRouter = router;
