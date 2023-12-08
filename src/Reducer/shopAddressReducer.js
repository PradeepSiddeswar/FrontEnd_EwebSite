

import { createSlice } from '@reduxjs/toolkit';

const shopAddressSlice = createSlice({
  name: 'shopaddress',
  initialState: null,
  reducers: {
    setShopAddress: (state, action) => {
      return { ...action.payload }; // Return an object containing the address data
    },
  },
});

export const { setShopAddress } = shopAddressSlice.actions;
export default shopAddressSlice.reducer;

