import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  doctors: [],
  doctor: null,
  status: 'idle',
  error: null,
};

const API_URL = "http://localhost:3000/api/doctor"; // replace with your actual API endpoint

export const fetchAllDoctors = createAsyncThunk(
  'doctors/fetchAllDoctors',
  async () => {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  }
);

export const fetchDoctorById = createAsyncThunk(
  'doctors/fetchDoctorById',
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

export const createDoctor = createAsyncThunk(
    'doctors/createDoctor',
    async (doctorData) => {
        const response = await axios.post(`${API_URL}`, doctorData);
        return response.data;
    }
    );

export const updateDoctor = createAsyncThunk(
    'doctors/updateDoctor',
    async ({ id, doctorData }) => {
        const response = await axios.put(`${API_URL}/${id}`, doctorData);
        return response.data;
    }
    );

export const getDoctorSpecialities = createAsyncThunk(
  'doctors/getDoctorSpecialities',
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}/specialities`);
    return response.data;
  }
);

export const deleteDoctor = createAsyncThunk(
    'doctors/deleteDoctor',
    async (id) => {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    }
  );
  
  export const addSpeciality = createAsyncThunk(
    'doctors/addSpeciality',
    async ({ id, specialityName }) => {
      const response = await axios.post(`${API_URL}/${id}/specialities`, { specialityName });
      return response.data;
    }
  );


const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctors = action.payload;
      })
      .addCase(fetchAllDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchDoctorById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctorById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.doctor = action.payload;
      })
      .addCase(fetchDoctorById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
        .addCase(createDoctor.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createDoctor.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.doctors.push(action.payload);
        })
        .addCase(createDoctor.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(updateDoctor.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateDoctor.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const index = state.doctors.findIndex(doctor => doctor.id === action.payload.id);
            state.doctors[index] = action.payload;
        })
        .addCase(updateDoctor.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
      .addCase(deleteDoctor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Remove the deleted doctor from state.doctors
        state.doctors = state.doctors.filter(doctor => doctor.id !== action.payload.id);
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addSpeciality.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addSpeciality.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the doctor with the new speciality in state.doctors
        const index = state.doctors.findIndex(doctor => doctor.id === action.payload.id);
        state.doctors[index] = action.payload;
      })
      .addCase(addSpeciality.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getDoctorSpecialities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDoctorSpecialities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the doctor with the fetched specialities in state.doctors
        const index = state.doctors.findIndex(doctor => doctor.id === action.payload.id);
        state.doctors[index].specialities = action.payload.specialities;
      })
      .addCase(getDoctorSpecialities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default doctorsSlice.reducer;