import { configureStore } from '@reduxjs/toolkit'
import pastReducer from "./redux/pasteSlice"
export const store = configureStore({
  reducer: {
    paste:pastReducer,
  },
})