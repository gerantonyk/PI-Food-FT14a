const initialState = {
  recipes: [
    // {
    //   title:"califlawer",
    //   image:"https://spoonacular.com/recipeImages/716426-312x231.jpg",
    //   diets: ["Vegetarian","Ovo-Vegetarian","Vegan"]
    // },
    // {
    //   title:"snail stew",
    //   image:"https://spoonacular.com/recipeImages/716381-312x231.jpg",
    //   diets:[ "gluten free", "dairy free"]
    // },
    // {
    //   title:"Red Kidney Bean Jambalaya",
    //   image:"https://spoonacular.com/recipeImages/782601-312x231.jpg",
    //   diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"]
    // }
  ],
  recipeNameFilter:'',
  recipeDetail: {},
  currentPage:1,
  itemsPerPage:2,
  recipeOrder:{}
};


function reducer(state = initialState, action) {

  if (action.type === "CHANGE_PAGE") {
    console.log(state)
    return {
        ...state,
        currentPage: action.payload
    };
  }
  if (action.type === "UPDATE_FILTER") {
    return {
        ...state,
        recipeNameFilter: action.payload
    };
  }
  if (action.type === "GET_RECIPES") {
    console.log("se ejecuto",action.payload)
    return {
        ...state,
        recipes: action.payload
    };
  }
  if (action.type === "GET_RECIPE_DETAIL") {
      return {
          ...state,
          recipeDetail: action.payload
      };
  }
  return state;
}

export default reducer;