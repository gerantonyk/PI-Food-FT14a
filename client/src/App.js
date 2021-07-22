import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getRecipeDetail } from './actions';
import './App.css';
import NoMatch from './components/NoMatch';
import Landing from './components/Landing';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import Recipes from './components/Recipes';
import SearchBar from './components/SearchBar';
import AddRecipe from './components/AddRecipe';
import NavBar from './components/NavBar';
import FootBar from './components/FootBar';

// const recipes = 

function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
    <NavBar></NavBar>
    <Switch>
      <Route exact path = '/'>

        <Landing/>
      </Route>
      <Route path = '/home'>
        <Recipes/>
      </Route>
      <Route path = '/recipeform'>
        <RecipeForm/>
      </Route>
      <Route
        exact
        path='/recipe/:recipeId'
        
        render={({match}) => <RecipeDetail city={dispatch(getRecipeDetail(match.params.recipeId))}/>}
      />
      <NoMatch />
      </Switch>
      <FootBar></FootBar>
    </div>
  );
}

export default App;
