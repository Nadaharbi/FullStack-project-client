import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Features/UserSlice";
import ServiceReducer from "./Features/ServiceSlice"; // Correct import

export const store = configureStore({
  reducer: {
    counter: UserSlice,
    services: ServiceReducer, // Use the correct reducer here
  },
});
