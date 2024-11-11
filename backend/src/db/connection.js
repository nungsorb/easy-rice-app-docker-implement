import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_CONNECTION_STRING || '';
const databaseName = process.env.DATABASE_NAME || '';

function initDBConnection() {
  console.log('initDBConnection');
  return mongoose.createConnection(`${connectionString}/${databaseName}`, {
    authSource: "admin",
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASSWORD
  });
};

const connection = initDBConnection();

export default connection;