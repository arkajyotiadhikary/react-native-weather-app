import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
      name: "location",
      initialState: {
            location: {
                  lat: "",
                  lon: "",
            },
            changeData: false,
      },
      reducers: {
            setLocation: (state, payload) => {
                  state.location = payload;
            },
            setChangeData: (state, payload) => {
                  state.changeData = payload;
            },
      },
});

export const { setLocation, setChangeData } = locationSlice.actions;

export default locationSlice.reducer;
