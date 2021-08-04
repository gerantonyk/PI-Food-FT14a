export function setRecipeForm(payload) {
  return { type: "SET_RECIPE_FORM", payload };
}

export function changePage(payload) {
  return { type: "CHANGE_PAGE", payload };
}

export function updateFilter(payload) {
  return { type: "UPDATE_FILTER", payload };
}

export function setRecipes(payload) {
  return { type: "SET_RECIPES", payload };
}

export function changeOrder(payload) {
  return { type: "CHANGE_ORDER", payload };
}

export function addDietFilter(payload) {
  return { type: "ADD_DIET_FILTER", payload };
}
export function removeDietForm(payload) {
  return { type: "REMOVE_DIET_FORM", payload };
}
export function addDietForm(payload) {
  return { type: "ADD_DIET_FORM", payload };
}
export function removeDietFilter(payload) {
  return { type: "REMOVE_DIET_FILTER", payload };
}
export function getRecipesByName(name) {
  return function(dispatch) {
    return fetch("http://localhost:3001/api/recipes?name="+name)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_RECIPES", payload: json });
      });
  };
}

export function getRecipeDetail(id) {

  return function(dispatch) {
      return fetch("http://localhost:3001/api/recipes/" + id)
        .then(response => response.json())
        .then(json => {dispatch({ type: "GET_RECIPE_DETAIL", payload: json });
        });
    };
} 

export function getDiets() {
  return function(dispatch) {

      return fetch("http://localhost:3001/api/types/")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DIETS", payload: json });
        });
    };
} 

export function postRecipe(recipe) {
  return function(dispatch) {

      return fetch("http://localhost:3001/api/recipe/", {
        method: 'post',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
    })
        .then(response => response.json())
        .then(() => {
          dispatch({ type: "POST_RECIPE", payload:{
            title:'',
            summary:'',
            score:'',
            image:'',
            healthyness:'',
            steps:'',
            diets:[]
          } });
        });
    };
} 