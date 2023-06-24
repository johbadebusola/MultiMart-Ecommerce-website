import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slice/filterSlice";

export const store = configureStore({
reducer:{
    filter:filterSlice
}
})

// firebase deploy --only hosting:minimart-cca2a

