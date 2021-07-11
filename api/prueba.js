
const { conn,Diet } = require('./src/db.js');
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

console.log(DB_HOST)

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://postgres:1234@localhost/food`, {
  logging: console.log, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
console.log(1,sequelize.options.host)
console.log(2,conn.options.host)
//console.log(Recipe.findAll({ limit: 10}))
// async function tryconection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// tryconection()
console.log


