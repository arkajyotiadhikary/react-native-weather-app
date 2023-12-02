import axios from "axios";
import Geolocation from "@react-native-community/geolocation";
import { API_KEY } from "../utils/WeatherAPIKey";

export const _fetchCurrentWeather = async () => {
    try {
        const location = await new Promise((resolve, reject) => {
            _getLocation(
                (loc) => resolve(loc),
                (err) => reject(err)
            );
        });

        // const res = await axios.get(
        //     `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
        // );

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
        const location = await new Promise((resolve, reject) => {
            _getLocation(
                (loc) => resolve(loc),
                (err) => reject(err)
            );
        });

        const res = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${API_KEY}&units=metric`
        );

        console.log("weather forcast:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        throw error;
    }
};

export const _getLocation = (successCallback) => {
    Geolocation.watchPosition(
        (pos) => {
            const location = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
            };
            successCallback(location);
        },
        (err) => {
            console.error("Error getting location:", err);
            errorCallback(err);
        }
    );
};

export const _getCity = (successCallback) => {};
