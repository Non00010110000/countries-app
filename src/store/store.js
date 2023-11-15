import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "../reducers/dark"
const store = configureStore({
    reducer:{
        dark :darkReducer
    }
})
export default store;