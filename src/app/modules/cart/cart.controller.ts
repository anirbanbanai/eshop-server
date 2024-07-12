import { Request, Response } from "express";
import { CartService } from "./cart.service";

const createCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await CartService.createCart(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: "Error creating Product", error });
  }
};

const getCartById = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await CartService.getCartById(req.params.id);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting Product", error });
  }
};

const getAllCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const menus = await CartService.getAllCart();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: "Error getting Products", error });
  }
};

const updateCarts = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await CartService.updateCart(req.params.id, req.body);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating products", error });
  }
};

const deleteCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const menu = await CartService.deleteCart(req.params.id);
    if (menu) {
      res.status(200).json({ message: "Products deleted successfully" });
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting Products", error });
  }
};

export const CartController = {
  createCart,
  getAllCart,
  getCartById,
  updateCarts,
  deleteCart,
};
