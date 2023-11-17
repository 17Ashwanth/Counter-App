import { createSlice } from "@reduxjs/toolkit";

// to make the js file like a slice that is action and reducer can be called
export const counterSlice = createSlice({
    name:"counterApp",
    initialState:{
        value:0
    },

    //actions here mentioned in reducers key as objects
    //reducer key and reducers are not same
    reducers:{
        //logics to update state

        // function to increment number
        increment:(state,action)=>{
            state.value +=action.payload
            // it is an argument function then it can be only be accessed by action and value in payload
        },

        // function to decrement number
        decrement:(state,action)=>{
            state.value -= action.payload
             // it is an argument function then it can be only be accessed by action and value in payload
        },

        // function to reset number
        reset:(state)=>{
            state.value =0
        }

    }
})

//action is required by component inorder to update state
export const {increment,decrement,reset} = counterSlice.actions

// reducer is required to store to change the state value
export default counterSlice.reducer