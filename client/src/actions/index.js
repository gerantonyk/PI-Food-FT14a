export function changePage(payload) {
  return { type: "CHANGE_PAGE", payload };
}

export function updateFilter(payload) {
  return { type: "UPDATE_FILTER", payload };
}

export function getRecipesByName(name) {
  return function(dispatch) {
    return fetch("http://localhost:3001/recipes?name="+name)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_RECIPES", payload: json });
      });
  };
}

export function getRecipeDetail(id) {
  return function(dispatch) {
      return fetch("http://localhost:3001/recipes/" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_RECIPE_DETAIL", payload: json });
        });
    };
} 