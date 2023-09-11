import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsService from "./productsService"

const initialState ={
    products:[]
}

export const getProducts = createAsyncThunk("products/getProducts",async ()=>{
    try {
        return await productsService.getProducts()
    } catch (error) {
        console.error(error);
    }
})
export const addLike = createAsyncThunk("products/addLike",async (_id)=>{
    try {
        return await productsService.addLike(_id)
    } catch (error) {
        console.error(error);
    }
})

export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })
        .addCase(addLike.fulfilled,(state,action)=>{
            const productsUpdated = state.products.map(product=>{
                if(product._id == action.payload._id){
                    product = action.payload
                }
                return product
            }
            )
            state.products = productsUpdated
        })
    }
})

export default productsSlice.reducer