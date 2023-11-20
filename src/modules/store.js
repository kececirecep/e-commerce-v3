import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../redux/productsSlice";
import detailSlice from "../redux/productDetail";
import cartSlice from "../redux/cartSlice";

export default configureStore({
    reducer:{
        products: productsSlice,
        detail: detailSlice,
        cart: cartSlice,
    },
});