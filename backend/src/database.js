const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Add this option to avoid deprecation warning
};

// MongoDB environment variables
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env;

const dbConnectionURL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
mongoose.connect(dbConnectionURL, options)
  .then(() => {
    console.log('MongoDB connection successful');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:'));
db.once('open', () => {
  console.log('Mongodb Connection Successful');
});
