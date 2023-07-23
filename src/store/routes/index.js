import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: null,
  polyline_geometry: null,
  isLoading: false,
  errors: null,
};

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    addRoute: (state, action) => {
      state.route = action.payload;
    },
    getWaypointsFetch: (state) => {
      state.isLoading = true;
    },
    getWaypointsSuccess: (state, action) => {
      state.polyline_geometry = action.payload;
      state.isLoading = false;
    },
    getWaypointsFailure: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  addRoute,
  getWaypointsFetch,
  getWaypointsSuccess,
  getWaypointsFailure,
} = routesSlice.actions;

export default routesSlice.reducer;
