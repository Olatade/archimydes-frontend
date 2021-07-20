import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modals';

export default configureStore({ 
  reducer: {
    modal: modalReducer
  } 
});