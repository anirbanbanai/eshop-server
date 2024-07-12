import { IProducts } from "./product.interface";
import { Products } from "./product.models";

const createProduct = async (data: IProducts): Promise<IProducts> => {
  const product = new Products(data);
  return await product.save();
};

const getProductById = async (id: string): Promise<IProducts | null> => {
  return await Products.findById(id);
};

const getAllProducts = async (): Promise<IProducts[]> => {
  return await Products.find();
};

const updateProduct = async (
  id: string,
  data: Partial<IProducts>
): Promise<IProducts | null> => {
  return await Products.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id: string): Promise<IProducts | null> => {
  return await Products.findByIdAndDelete(id);
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
