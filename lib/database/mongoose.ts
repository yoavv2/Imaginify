import mongoose, { Mongoose } from 'mongoose';

const MOGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MOGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise =
    cached.promise ||
    mongoose.connect(MOGODB_URL, {
      dbName: 'imaginify',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
