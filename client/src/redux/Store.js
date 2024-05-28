import { configureStore } from '@reduxjs/toolkit';
import specialtiesReducer from './SpecialitiesSlice';

const store = configureStore({
  reducer: {
    specialties: specialtiesReducer,
  },
});

export default store;

