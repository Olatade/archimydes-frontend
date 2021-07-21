import { createSlice } from '@reduxjs/toolkit';
import users from '../data/users.js';

export const usersSlice = createSlice({
  name: 'profile',
  initialState: {
    users: []
  },
  reducers: {
    populateUsers:(state, action)=>{
      state.users = action.payload;
    },
    addUser:(state, action)=>{
      state.users.unshift(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { populateUsers, addUser } = usersSlice.actions

export default usersSlice.reducer