import { createReducer } from "@reduxjs/toolkit";

const initialstate={
  value:[],

}


export const customreducer= createReducer(initialstate,{
  addvalue:(state,action)=>{

    return {
        ...state,
        value: [...state.value, action.payload],
    };
  },
  
 


   
});


export default customreducer;