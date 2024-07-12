"use strict";
// /* eslint-disable no-console */
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import config from '../config';
// dotenv.config();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
// let connection: typeof mongoose | null = null;
// export const connectDB = async () => {
//   try {
//     if (connection) return;
//     connection = await mongoose.connect(config.database_url as string);
//     console.log('Successfully connected to MongoDB');
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Ensure this is called before accessing process.env
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined in the environment variables.");
}
let connection = null;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (connection)
            return;
        connection = yield mongoose_1.default.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
