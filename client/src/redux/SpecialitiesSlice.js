import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  specialities: [],
  speciality: null,
  status: 'idle',
  error: null,
};

const API_URL = "http://localhost:4000/api/specialities";

export const createSpeciality = createAsyncThunk(
  'specialities/createSpeciality',
  async (specialityData) => {
    const response = await axios.post(`${API_URL}/create`, specialityData);
    return response.data;
  }
);

export const fetchAllSpecialities = createAsyncThunk(
  'specialities/fetchAllSpecialities',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const fetchSpecialityById = createAsyncThunk(
  'specialities/fetchSpecialityById',
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

export const updateSpeciality = createAsyncThunk(
  'specialities/updateSpeciality',
  async ({ id, specialityData }) => {
    const response = await axios.put(`${API_URL}/${id}`, specialityData);
    return response.data;
  }
);

export const deleteSpeciality = createAsyncThunk(
  'specialities/deleteSpeciality',
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const specialitySlice = createSlice({
  name: 'specialities',
  initialState,
  reducers: {
    //acá va reducers sincronicos
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSpeciality.fulfilled, (state, action) => {
        state.specialities.push(action.payload);
      })
      .addCase(fetchAllSpecialities.fulfilled, (state, action) => {
        state.specialities = action.payload;
      })
      .addCase(fetchSpecialityById.fulfilled, (state, action) => {
        state.speciality = action.payload;
      })
      .addCase(updateSpeciality.fulfilled, (state, action) => {
        const index = state.specialities.findIndex(speciality => speciality.id === action.payload.id);
        state.specialities[index] = action.payload;
      })
      .addCase(deleteSpeciality.fulfilled, (state, action) => {
        state.specialities = state.specialities.filter(speciality => speciality.id !== action.payload);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => { state.status = 'loading'; }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => { state.status = 'succeeded'; }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export default specialitySlice.reducer;
