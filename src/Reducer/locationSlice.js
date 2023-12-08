import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: '',
  reducers: {
    setLocationInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLocationInfo } = locationSlice.actions;
export default locationSlice.reducer;
