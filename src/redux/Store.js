import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

//to creatre store we use redux toolkit to install configurestore
// create a configstore
//we need to export so that component can be accessed
//store is globally accebile we have to go to index.js and make the app inside <Provider> and store
// a predefined function and store={store} in a <Provider>



export const store = configureStore({
    //reducer can only update value of state in store, reducer key is predefine
    //it can only be object which can hold more than one reducer
    reducer:{
        counter:counterSlice //reducer is being store in counter,
        //reducer is being coming from counterslice since we are export reducer as export default
    }
})