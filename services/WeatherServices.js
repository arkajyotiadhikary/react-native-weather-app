import axios from "axios";
import { API_KEY } from "../utils/WeatherAPIKey";

export const _fetchWeather = async () => {
    try {
        const location = await new Promise((resolve, reject) => {
            _getLocation(
                (loc) => resolve(loc),
                (err) => reject(err)
            );
        });

        const res = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric`
        );

        console.log(res.data);

        return res.data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        throw error;
    }
};

export const _getLocation = (successCallback) => {
    navigator.geolocation.watchPosition((pos) => {
        const location = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
        };
        successCallback(location);
    });
};

export const _getCity = (successCallback) => {};
