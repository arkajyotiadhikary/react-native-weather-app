import axios from "axios";
import Geolocation from "@react-native-community/geolocation";
import { API_KEY } from "../utils/WeatherAPIKey";

export const _fetchCurrentWeather = async () => {
      try {
            const location = await _getLocation();

            const res = await axios.get(
                  `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric`
            );

            console.log("current weather:", res.data);

            return res.data;
      } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
      }
};

export const _fetchWeatherForcast = async () => {
      try {
            const location = await _getLocation();

            const res = await axios.get(
                  `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric`
            );

            console.log("weather forecast:", res.data);
            return res.data;
      } catch (error) {
            console.error("Error fetching weather:", error);
            throw error;
      }
};

export const _getLocation = () => {
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
