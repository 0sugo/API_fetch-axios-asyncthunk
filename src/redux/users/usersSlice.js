import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://randomuser.me/api/?results=5'
export const fetcher = createAsyncThunk('fetchOurUsers',async ()=>{
    try {
const response = await axios (url);

return response.data;
        
    } catch (error) {
    throw new Error('error bwana check on that');
    }
})
const initialState ={
    users:[],
    isLoading:false,
    error:undefined
}
const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetcher.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetcher.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.users= action.payload
        })
        .addCase(fetcher.rejected,(state,action)=>{
            state.isLoading = false;
            state.users.error = action.error.message
        })

    }
})
export default usersSlice.reducer;