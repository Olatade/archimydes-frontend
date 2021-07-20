import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'modals',
  initialState: {
    createUser: false,
    updateUser: false
  },
  reducers: {
    open:(state, modalName)=>{
      switch(modalName){
        // hide the update user modal when the create user modal is open
        case 'createUser':
          state.createUser = true;
          state.updateUser = false;
          break;
        // hide the create user modal when the update user modal is open
        case 'updateUser':
          state.updateUser = true;
          state.createUser = false;
          break;
      }
    },
    close:(state, modalName)=>{
      state[modalName] = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, populateProfile } = profileSlice.actions

export default profileSlice.reducer