import { configureStore } from '@reduxjs/toolkit';
import specialtiesReducer from './SpecialitiesSlice';
import doctorsReducer from './DoctorsSlice';

const store = configureStore({
  reducer: {
    specialties: specialtiesReducer,
    doctors: doctorsReducer,
  },
});

export default store;

