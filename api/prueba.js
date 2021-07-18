
const { conn,Diet,Recipe } = require('./src/db.js');
const { Op } = require("sequelize");
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
// var lim= 9
// var title=""
// var filter={}
// if(title) filter={title:{[Op.like]: `%${title}%`}};
// Recipe.findAll({ limit: lim,
//   where:filter  
// ,include: Diet,nest:true}).then(r=>console.log(r[1].dataValues.diets[0]))

//Recipe.findByPk('bdfc91b5-6f2c-4a1f-bcc3-c1f1a22b611d',{include: Diet}).then(r=>console.log(r));

// arr = ['Vegetarian','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian','Paleo','Primal','Whole30']

// arr.forEach(element => Diet.findOrCreate({
//   where: { name: element }}
// ));

const initialState = {
  recipes: [],
  recipeNameFilter:'',
  recipeDetail: {},
  currentPage:1,
  itemsPerPage:2,
  recipeOrder:{order:'',dir:''},
  recipeDiets:[],
  dietsFilter:[],
  recipeForm:{
    tilte:'Pedro',
    summary:'sas',
    score:'99',
    healthyness:'1',
    diets:["jorge"]
  }
};


const pipe = {
  ...initialState,
  recipeForm:{
    ...initialState.recipeForm,
    diets:[1,2,3,4]
  }
}
  
;
console.log(pipe)