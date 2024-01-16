import store from "../store";
import { setData } from "../features/fetchDataSlice";
import axios from "axios";
import Geolocation from "@react-native-community/geolocation";
import { API_KEY } from "../utils/WeatherAPIKey";

export const _fetchCurrentWeather = async (location) => {
      try {
            const res = await axios.get(
                  `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric`
            );
            console.log("fetched current data", res.data);
            store.dispatch(setData(res.data));
            return res.data;
      } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
      }
};

export const _fetchWeatherForcast = async (location) => {
      try {
            const res = await axios.get(
                  `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric`
            );

            return res.data;
      } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
      }
};

export const _getCurrentLocation = () => {
      return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                  (pos) => {
                        const location = {
                              lat: pos.coords.latitude,
                              lon: pos.coords.longitude,
                        };
                        resolve(location);
                  },
                  (err) => {
                        console.error("Error getting location:", err);
                        reject(err);
                  }
            );
      });
};

export const _getSearchLocation = async (location) => {
      const data = await axios.get(
            `https://nominatim.openstreetmap.org/search.php?q=${location}&polygon_geojson=1&format=jsonv2`
      );
      return { lat: data.data[0].lat, lon: data.data[0].lon };
};
