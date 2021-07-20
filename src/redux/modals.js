import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    createUser: false,
    updateUser: false,
    updateState: {}
  },
  reducers: {
    open:(state, action)=>{
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
    setUpdateState:(state, action) =>{
      state.updateState = action.payload
    },
    close:(state, action)=>{
      state[action.payload] = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { open, close, setUpdateState } = modalSlice.actions

export default modalSlice.reducer