import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
})