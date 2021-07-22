const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid title and summary', (done) => {
        Recipe.create({     
          title: 'hola',
          summary:'Hola'
        }).then(() => done())
        .catch(() => done(new Error('it should create a new recipe')));
      });
    });
    describe('summary', () => {
      it('should throw an error if summary is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
    });    
    describe('score', () => {
      it('should throw an error if score is not an interger', (done) => {
        Recipe.create({
          title: 'hola',
          summary:'Hola',
          score:'catorce'          
        })
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid score', (done) => {
        Recipe.create({     
          title: 'hola',
          summary:'Hola',
          score:10
        }).then(() => done())
        .catch(() => done(new Error('it should create a new recipe')));
      });      
    });  
    describe('steps', () => {
      it('should throw an error if steps is not a valid text', (done) => {
        Recipe.create({
          title: 'hola',
          summary:'Hola',
          score:false         
        })
          .then(() => done(new Error('It requires a valid steps')))
          .catch(() => done());
      });
      it('should work when its a valid image', (done) => {
        Recipe.create({     
          title: 'hola',
          summary:'Hola',
          steps:"doce pasos"
        }).then(() => done())
        .catch(() => done(new Error('it should create a new recipe')));
      });      
    });              
  });
});
