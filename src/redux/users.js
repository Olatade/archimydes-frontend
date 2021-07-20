import { createSlice } from '@reduxjs/toolkit';
import users from '../data/users.js';

export const usersSlice = createSlice({
  name: 'profile',
  initialState: {
    users: users
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    populateProfile:(state, action)=>{
      for (const i in state) {
        state[i] = action.payload[i]
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment} = usersSlice.actions

export default usersSlice.reducer