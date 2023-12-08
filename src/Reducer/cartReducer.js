// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'carts',
  initialState: {"value":{}},
  reducers: {
    addCart: (state, action) => {
      
      console.log(action.payload)
      if (String(action.payload.id) in state["value"]){
        console.log(state)
        state["value"][action.payload.id]["count"]=state["value"][action.payload.id]["count"]+1
        
      }
      else{
        console.log(state)
        
          state["value"][action.payload.id]={"count":1}
          state["value"][action.payload.id]["data"]=action.payload.data
          
      }
    //   state.push(action.payload); // Add the product to the state
    },
    removeCart:(state,action)=>{
      
      state["value"][action.payload]["count"]=state["value"][action.payload]["count"]-1
      if(state["value"][action.payload]["count"]===0){
        
        delete state["value"][action.payload]
      }
    }
  },
});



export const { addCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
