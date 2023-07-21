import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from "./todoSlice";


export default configureStore({
  reducer: {
    todos:TodoSlice
  }
})