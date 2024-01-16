import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
      name: "location",
      initialState: {
            location: {
                  lat: "",
                  lon: "",
            },
            changeData: false,
            currentLocation: true,
      },
      reducers: {
            setLocation: (state, payload) => {
                  state.location = payload;
            },
            setChangeData: (state, payload) => {
                  state.changeData = payload;
            },
            setCurrentLocation: (state, payload) => {
                  state.currentLocation = payload;
            },
      },
});

export const { setLocation, setChangeData, setCurrentLocation } = locationSlice.actions;

export default locationSlice.reducer;
