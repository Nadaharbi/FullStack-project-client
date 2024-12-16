import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//post data in database
export const addService = createAsyncThunk("services/addService",
  async (serviceData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://127.0.0.1:8080/addService", {
        mobileNumber: serviceData.mobileNumber,
        stationName: serviceData.stationName,
        lat:serviceData.lat,
        lng:serviceData.lng,
      });
      return response.data; 
    } catch (error) {
      console.error("Add Service Error: ", error);
      return rejectWithValue(error.response?.data || "Failed to add service.");
    }
  }
);
// get Service from database
export const getService = createAsyncThunk(
  "services/getService",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/getService");
      return response.data; 
    } catch (error) {
      console.error("Get Service Error: ", error);
      return rejectWithValue(error.response?.data || "Failed to fetch services.");
    }
  }
);
// Delete Service
export const deleteService = createAsyncThunk(
  "services/deleteService",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8080/deleteService/${id}`);
      return id; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete service.");
    }
  }
);

// Update Service
export const updateService = createAsyncThunk(
  "services/updateService",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8080/updateService/${id}`, updatedData);
      return response.data.service;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update service.");
    }
  }
);

const initialState = {
  services: [],  
  isLoading: false,
  isError: false,
  errorMessage: "",
};


export const ServiceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    // Add Service
      .addCase(addService.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services.push(action.payload.service);
      })
      .addCase(addService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || "An unknown error occurred.";
      })
     // Get Service
     .addCase(getService.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(getService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.services = action.payload;
    })
    .addCase(getService.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    })
    // Delete Service
  .addCase(deleteService.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(deleteService.fulfilled, (state, action) => {
    state.isLoading = false;
    state.services = state.services.filter((service) => service._id !== action.payload);
  })
  .addCase(deleteService.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = true;
    state.errorMessage = action.payload;
  })
  // Update Service
  .addCase(updateService.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(updateService.fulfilled, (state, action) => {
    state.isLoading = false;
    const index = state.services.findIndex((s) => s._id === action.payload._id);
    if (index !== -1) {
      state.services[index] = action.payload;
    }
  })
  .addCase(updateService.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = true;
    state.errorMessage = action.payload;
  });
},
});

export default ServiceSlice.reducer;
