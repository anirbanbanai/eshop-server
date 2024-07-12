// models/User.ts
import mongoose, { Schema } from "mongoose";
import { ICart } from "./cart.interface";

const cartSchema: Schema<ICart> = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_image: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
  }

});

export const Cart = mongoose.model<ICart>("cart", cartSchema);
