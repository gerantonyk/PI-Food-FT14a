/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  id:'47cc1f55-e367-4860-a620-f3306234c556',
  title: 'Milanea a la napolitana',
  summary:"Es un plato muy sabroso"
};
const recipe2 = {  title:"Fideos",
  summary:"es una comida rica con manteca", 
  score:2,
  healthyness: 1 , 
  steps:"pasos",
  diets:["vegan"]
};
describe.only('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /api/recipes', () => {
    it('should get 200', () =>
      agent.get('/api/recipes').expect(200).timeout(10000)
    );
  });
  describe('GET /api/recipe?name', () => {
    it('should get 200', () =>
      agent.get('/api/recipes?name=Milanea').expect(200)
    );
  });
  describe('GET api/recipes/:id', () => {
    it('should get 200', () =>
      agent.get('/api/recipes/47cc1f55-e367-4860-a620-f3306234c556').expect(200)
    );
  });
  describe('GET /api/types', () => {
    it('should get 200', () =>
      agent.get('/api/types').expect(200)
    );
  });
  describe('POST /api/recipe/', () => {
    it('should get 302 when created', () =>
      agent.post('/api/recipe')
      .send(recipe2).expect(200).timeout(10000)
    );
  });  
});
