import { Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await ProductService.createProduct(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Product', error });
  }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await ProductService.getProductById(req.params.id);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting Product', error });
  }
};

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const menus = await ProductService.getAllProducts();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: 'Error getting Products', error });
  }
};

const updateProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await ProductService.updateProduct(req.params.id, req.body);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating products', error });
  }
};

const deleteProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await ProductService.deleteProduct(req.params.id);
    if (menu) {
      res.status(200).json({ message: 'Products deleted successfully' });
    } else {
      res.status(404).json({ message: 'Products not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Products', error });
  }
};

export const ProductsController = {
 createProduct,
 getAllProducts,
 getProductById,
 updateProducts,
 deleteProducts
};
