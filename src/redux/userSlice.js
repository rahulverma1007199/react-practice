import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const updateUserThunk = createAsyncThunk("user/update", async (user) => { // the variable name to be user in extraReducer
    const res = await {data:{}};

    return res.data;
});

export const userSlice = createSlice({
    name:"user",//to be match with name in the store.js
    initialState:{
        userInfo:{
            name:"test",
            email:"test@gmail.com"
        },
        pending:false,
        error:false
    },
    reducers:{ // here we have mutiple action
        update:(state,action) => {
            state.userInfo.name = action.payload.name;
            state.userInfo.email = action.payload.email;
        },
        remove:(state) => {
            state.userInfo = null;
        },
        updateStart: (state) => { // this is how we use for api
            state.pending = true;
        },
        updateSuccess : (state,action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        updateError : (state) => {
            state.pending = false;
            state.error = true;
        },
        //asynthunkExample

    },
    extraReducers:{
        [updateUserThunk.pending] : (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUserThunk.fulfilled] : (state,action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [updateUserThunk.rejected] : ( state) => {
            //handle error
        }

    }
});

export const {update,remove,updateStart,updateSuccess,updateError} = userSlice.actions;
export default userSlice.reducer;
