import { configureStore } from '@reduxjs/toolkit'
import { FromSlice } from './slices/FormSlice'


export const store = configureStore({
  reducer: {
    form: FromSlice.reducer
  }
})