import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: "",
}

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data;
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state,action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state,action) => {
            state.loading = false;
            state.error = "error fetching products data";
        })
    }
})

export default productsSlice.reducer;