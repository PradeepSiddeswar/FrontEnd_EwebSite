// productSlice.js
import { createSlice } from '@reduxjs/toolkit';



const hotelSlice = createSlice({
  
  name: 'hotelRegister',
  initialState: {"name":"","image":null},
  reducers: {
   
    addHotelData:(state,action)=>{
        debugger
        state.name=action.payload.name
        state.image=action.payload.image
   
    }
  },
});



export const { addHotelData } = hotelSlice.actions;
export default hotelSlice.reducer;





