// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

export const User = mongoose.model<IUser>('User', userSchema);
