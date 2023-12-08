// defaultValuesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const defaultValuesSlice = createSlice({
  name: 'defaultValues',
  initialState: {
    name: '',
    image: null,
    location:'',
  },
  reducers: {
    setDefaultValues: (state, action) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.location = action.payload.location;
    },
  },
});

export const { setDefaultValues } = defaultValuesSlice.actions;
export default defaultValuesSlice.reducer;
