
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from './user.model';
import { IUser } from './user.interface';

const SECRET_KEY = 'your_secret_key43jndcvndfgkjrut56vfghty6767dfds8'; // Replace with your actual secret key

const createUser = async (userData: IUser) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new User({
    ...userData,
    password: hashedPassword,
  });
  await newUser.save();
  return newUser;
};


const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  // console.log(user);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, {
    expiresIn: '1h',
  });
  return { message: 'Login successful', token };
};

const getUserById = async (id: string) => {
  return User.findById(id);
};

const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

const getAllUsers = async () => {
  return User.find();
};

const updateUser = async (id: string, updateData: Partial<IUser>) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id: string) => {
  return User.findByIdAndDelete(id);
};

export const UserService = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  loginUser,
  findUserByEmail
};
