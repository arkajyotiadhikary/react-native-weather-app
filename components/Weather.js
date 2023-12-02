/*
    @TODO 
    * Have to make the first letter of the weather description capitalize
    * have to convert the dates to actual date name
*/

import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { _fetchWeather, _getLocation } from "../services/WeatherServices";
import { _getWeahterForecast } from "../helpers/WeatherHelper";
import { CapitalizeFirstLetter, FormateDate } from "../helpers/StringHelper";

import styles from "../styles/Weather";

const MINUTE_MS = 60000;

const Weather = () => {
    const [loaded, setLoaded] = useState(false);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState("");
    const [tempreture, setTempreture] = useState(0);
    const [description, setDescription] = useState("");
    const [windSpeed, setWindSpeed] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [icon, setIcon] = useState("");
    const [weatherForecast, setWeatherForecast] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, []);

    const fetchData = async () => {
        const data = await _fetchWeather();
        setLoaded(true);
        setCity(data.city.name);
        setCountry(data.city.country);
        setTempreture(Math.round(data.list[0].main.temp));
        setHumidity(data.list[0].main.humidity);
        setDescription(
            CapitalizeFirstLetter(data.list[0].weather[0].description)
        );
        setWindSpeed(data.list[0].wind.speed);
        setIcon(data.list[0].weather[0].icon);
        setWeatherForecast(_getWeahterForecast(data.list));
    };

    return loaded ? (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.location_text}>{city}</Text>
                <Text style={styles.country}>{country}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Image
                    source={{
                        uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
                    }}
                    style={styles.weatherImg}
                />

                {/* <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /> */}
                <Text style={styles.temp}>{tempreture}°</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.exData}>
                    <View style={styles.exDataSection}>
                        <Text>Wind</Text>
                        <View style={styles.exDataText}>
                            <MaterialCommunityIcons
                                style={styles.exDataLogo}
                                size={20}
                                name="weather-windy"
                                color={"#2F3543"}
                            />
                            <Text>{windSpeed} km/h</Text>
                        </View>
                    </View>
                    <View style={styles.exDataSection}>
                        <Text>Humidity</Text>
                        <View style={styles.exDataText}>
                            <MaterialCommunityIcons
                                style={styles.exDataLogo}
                                size={20}
                                name="water"
                                color={"#2F3543"}
                            />
                            <Text>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                {weatherForecast.map((weather, id) => (
                    <View key={id} style={styles.nextweather}>
                        <Text style={styles.nextweatherDate}>
                            {FormateDate(weather.dt_txt.split(" ")[0])}
                        </Text>
                        <Image
                            source={{
                                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                            }}
                            style={styles.nextweatherImg}
                        />
                        <Text>{Math.floor(weather.main.temp)}°</Text>
                    </View>
                ))}
            </View>
        </View>
    ) : (
        <View style={styles.loadingSection}>
            <Image
                source={require("../assets/gifs/icons8-rain-cloud-100.png")}
                style={styles.loadingImg}
            />
            <Text style={styles.loadingText}>Loading Data</Text>
        </View>
    );
};

export default Weather;
