require("dotenv").config();

module.exports = {
  HOST: process.env.HOST || 'localhost',
  USER: process.env.USER || 'postgres',
  PASSWORD: process.env.PASSWORD || '',
  DB: process.env.DB || 'postgres',
  dialect: process.env.dialect || 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
