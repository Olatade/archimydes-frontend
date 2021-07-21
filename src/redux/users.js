import { createSlice } from '@reduxjs/toolkit';
// import users from '../data/users.js';

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
    },
    removeUser:(state, action) =>{
      const userIndex = state.users.findIndex( user => user.email === action.payload)
      // remove it 
      // console.log(state.users[3])
      state.users = [
        // from the start to the one we want to delete
        ...state.users.slice(0, userIndex),
        // after the deleted one to the end
        ...state.users.slice(userIndex + 1)
      ]
      // add new one
    },
    patchUser:(state, action) =>{
      console.log(action.payload);
      // find the user by it's id
      const userIndex = state.users.findIndex( user => user.id === action.payload.id)
      // remove the old user
      state.users = [
        ...state.users.slice(0, userIndex),
        ...state.users.slice(userIndex + 1)
      ]
      // add the new user
      state.users.unshift(action.payload);

    }
  },
})

// Action creators are generated for each case reducer function
export const { populateUsers, addUser, patchUser, removeUser } = usersSlice.actions

export default usersSlice.reducer