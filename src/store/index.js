import { configureStore } from '@reduxjs/toolkit'
import dustReducer from './dust'

export const store = configureStore({
  reducer: {
    dust: dustReducer,
  },
})
