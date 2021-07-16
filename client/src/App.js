import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import RecipeForm from './components/RecipeForm';
import Recipes from './components/Recipes';
import SearchBar from './components/SearchBar';

// const recipes = 

function App() {
  
  return (
    <div className="App">
      <Route exact path = '/'>
        <h1>Henry Food</h1>
        <Landing/>
      </Route>
      <Route path = '/home'>
        <SearchBar/>
        <Recipes/>
      </Route>
      <Route path = '/recipeform'>
        <RecipeForm/>
      </Route>
    </div>
  );
}

export default App;
