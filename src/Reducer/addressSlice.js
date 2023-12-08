

import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: null,
  reducers: {
    setAddress: (state, action) => {
      return { ...action.payload }; // Return an object containing the address data
    },
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;




