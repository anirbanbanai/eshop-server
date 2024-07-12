import { ICart } from "./cart.interface";
import { Cart } from "./cart.models";

const createCart = async (data: ICart): Promise<ICart> => {
  const cart = new Cart(data);
  return await cart.save();
};

const getCartById = async (id: string): Promise<ICart | null> => {
  return await Cart.findById(id);
};

const getAllCart = async (): Promise<ICart[]> => {
  return await Cart.find();
};

const updateCart = async (
  id: string,
  data: Partial<ICart>
): Promise<ICart | null> => {
  return await Cart.findByIdAndUpdate(id, data, { new: true });
};

const deleteCart = async (id: string): Promise<ICart | null> => {
  return await Cart.findByIdAndDelete(id);
};

export const CartService = {
  createCart,
  getAllCart,
  getCartById,
  updateCart,
  deleteCart,
};
