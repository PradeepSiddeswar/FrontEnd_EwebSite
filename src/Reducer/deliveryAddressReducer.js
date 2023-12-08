// deliveryAddressReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    city: '',
    streetAddress: '',
    postalCode: '',
  },
  addressSaved: false,
};

const deliveryAddressSlice = createSlice({
  name: 'deliveryAddress',
  initialState,
  reducers: {
    setAddressFormData: (state, action) => {
      state.formData = action.payload;
    },
    setAddressSaved: (state, action) => {
      state.addressSaved = action.payload;
    },
  },
});

export const { setAddressFormData, setAddressSaved } = deliveryAddressSlice.actions;

export default deliveryAddressSlice.reducer;
