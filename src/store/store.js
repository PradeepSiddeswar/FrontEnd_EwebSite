// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Reducer/cartReducer';
import hotelResgisterReducer from '../Reducer/hotelResgisterReducer';
// import deliveryAddressReducer from '../Reducer/deliveryAddressReducer'
import addressReducer from '../Reducer/addressSlice';
import locationReducer from '../Reducer/locationSlice'
import defaultValuesReducer  from '../Reducer/defaultValuesReducer '

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your product slice reducer
    hotel:hotelResgisterReducer,
    // deliveryAddress: deliveryAddressReducer,
    address: addressReducer, 
    location: locationReducer,

    defaultValues: defaultValuesReducer,
    
    // Other reducers go here
  },
});

export default store;
