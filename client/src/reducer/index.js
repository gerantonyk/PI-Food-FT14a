const initialState = {
  recipes: [],
  recipeNameFilter:'',
  recipeDetail: {},
  currentPage:1,
  itemsPerPage:2,
  recipeOrder:{order:'',dir:''},
  recipeDiets:[],
  dietsFilter:[]
};


function reducer(state = initialState, action) {
  if (action.type === "ADD_DIET_FILTER") {
    return {
        ...state,
        dietsFilter: state.dietsFilter.includes(action.payload)?
        state.dietsFilter:state.dietsFilter.concat(action.payload)
    }
  }
  if (action.type === "REMOVE_DIET_FILTER") {
    return {
        ...state,
        dietsFilter: state.dietsFilter.filter(diet=> diet !== action.payload)
    };
  }   
  if (action.type === "GET_DIETS") {

    return {
        ...state,
        recipeDiets: action.payload
    };
  }  
  if (action.type === "CHANGE_ORDER") {
    return {
        ...state,
        recipeOrder: action.payload
    };
  }
  if (action.type === "CHANGE_PAGE") {

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
    return {
        ...state,
        recipes: action.payload
    };
  }
  if (action.type === "SET_RECIPES") {
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