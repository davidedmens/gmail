export const initialState = {
    inputValue: "",
    
  };
  

  
  const reducer = (state, action) => {
    switch (action.type) {
        case "SET_INPUT_VALUE":
          return { ...state, inputValue: action.value, };
        
        default:
          return state;
                
    }
}

export default reducer;