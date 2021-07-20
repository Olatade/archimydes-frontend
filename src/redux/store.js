import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './modals';
import usersReducer from './users';

export default configureStore({ 
  reducer: {
    modal: modalReducer,
    users: usersReducer
  } 
});