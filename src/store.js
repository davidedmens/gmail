// store.js
import { configureStore } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  globalVariable: null, // Initialize with your default value
};

// Define reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SETVARIABLE':
        return { ...state, globalVariable: action.payload };
    // Add other cases as needed
    default:
        return state;
  }
};

// Create the Redux store
const store = configureStore({
    reducer: rootReducer,
  });
  
export default store;