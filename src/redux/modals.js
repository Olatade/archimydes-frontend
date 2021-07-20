import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'modals',
  initialState: {
    createUser: false,
    updateUser: true
  },
  reducers: {
    open:(state, action)=>{
      console.log(action);
      switch(action.payload){
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
        default:
          state.updateUser = false;
          state.createUser = false;
      }
    },
    close:(state, action)=>{
      state[action.payload] = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { open, close } = profileSlice.actions

export default profileSlice.reducer