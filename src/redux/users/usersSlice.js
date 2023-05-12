import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://randomuser.me/api/?results=5'
const fetcher = createAsyncThunk('fetchOurUsers',async (thunkAPI)=>{
    try {
const response = await axios (url);

return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue('error bwana check on that');
    }
})
const initialState ={
    users:[
        {
            firstname:"joseck",
            lastname:"osugo",
        }
    ],
    isLoading:false,
    error:''
}
const usersSlice = createSlice({
    name:'users',
    initialState,
    extraReducers:{}
})

export default usersSlice.reducer;