import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  user: {
		name: '',
		age: '',
		gender: ''
	}
}

export const FromSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUserInfo(state, action){
      state.user = action.payload
    }
  }
})

export const { setUserInfo } = FromSlice.actions