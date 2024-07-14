// models/User.ts
import mongoose, { Schema } from "mongoose";
import { IProducts } from "./product.interface";

const productSchema: Schema<IProducts> = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  sub_category: {
    type: String,
  },
});

export const Products = mongoose.model<IProducts>("Products", productSchema);
