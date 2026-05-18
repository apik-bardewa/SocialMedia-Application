import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./usrSlice";

const store = configureStore({
  reducer:{
    user:userSlice
  }
})

export default store