import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/features/redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
