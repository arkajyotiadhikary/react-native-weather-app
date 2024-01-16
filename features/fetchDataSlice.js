import { createSlice } from "@reduxjs/toolkit";
import { CapitalizeFirstLetter } from "../helpers/StringHelper";

export const fectchDataSlice = createSlice({
      name: "fetchData",
      initialState: {
            city: "",
            country: "",
            tempreture: "",
            description: "",
            windSpeed: "",
            humidity: "",
            icon: "",
            weatherForecast: [],
      },
      reducers: {
            setData: (state, payload) => {
                  console.log("payload", payload.payload);
                  if (payload !== null) {
                        state.city = payload.payload.name;
                        state.country = payload.payload.sys.country;
                        state.tempreture = Math.round(payload.payload.main.temp);
                        state.description = CapitalizeFirstLetter(
                              payload.payload.weather[0].description
                        );
                        state.windSpeed = payload.payload.wind.speed;
                        state.humidity = payload.payload.main.humidity;
                        state.icon = payload.payload.weather[0].icon.slice(0, -1);
                  }
            },
      },
});

export const { setData } = fectchDataSlice.actions;

export default fectchDataSlice.reducer;
