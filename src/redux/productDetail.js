import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: "",
}

export const getProduct = createAsyncThunk("getProduct", async (id) => {
    const response = await axios.get("https://fakestoreapi.com/products/"+id)
    return response.data;
})

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state,action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(getProduct.fulfilled, (state,action) => {
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        })
        builder.addCase(getProduct.rejected, (state,action) => {
            state.loading = false;
            state.error = "error fetching product data";
        })
    }
})

export default detailSlice.reducer;