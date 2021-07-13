
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
// Diet.create({            // estas tienen que estar definidas
//   name: 'Vegetarian'
// });
// Diet.create({            // estas tienen que estar definidas
//   name: 'Lacto-Vegetarian'
// });
// Diet.create({            // estas tienen que estar definidas
//   name: 'Ovo-Vegetarian'
// });
// Diet.create({            // estas tienen que estar definidas
//   name: 'Vegan'
// });  
//   Diet.create({            // estas tienen que estar definidas
//   name: 'Pescetarian'
// });  
//   Diet.create({            // estas tienen que estar definidas
//   name: 'Paleo'
// });  
//     Diet.create({            // estas tienen que estar definidas
//   name: 'Primal'
// });  
//     Diet.create({            // estas tienen que estar definidas
//   name: 'Whole30'
// });  

arr = ['Vegetarian','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian','Paleo','Primal','Whole30']

arr.forEach(element => Diet.findOrCreate({
  where: { name: element }}
));