// /* eslint-disable no-console */
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import config from '../config';
// dotenv.config();

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


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ensure this is called before accessing process.env

const databaseUrl = process.env.DATABASE_URL as string;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

let connection: typeof mongoose | null = null;

export const connectDB = async () => {
  try {
    if (connection) return;
    connection = await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
