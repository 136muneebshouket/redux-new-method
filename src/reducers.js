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
  },updatevalue:(state,action)=>{
    
    const newvalue= [...state.value];
    newvalue[action.id]=action.payload;
    state.value=newvalue;
  
 },
 delete:(state,action)=>{
   
   const newvalue= [...state.value];
  
   state.value=newvalue.filter((todo)=>{
     return action.id!=todo.id;
   });
 //   return {
 //     ...state,
 //     value: [...state.value.filter((todo) => todo.id !== action.id)]

 // };

 }
 


   
});


export default customreducer;