import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_CONNECTION_STRING || '';
const databaseName = process.env.DATABASE_NAME || '';

export default function initDBConnection() {
  mongoose.connect(`${connectionString}/${databaseName}`, {
    authSource: "admin",
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD
  });
};