/*
    @TODO 
    * Have to make the first letter of the weather description capitalize
    * have to convert the dates to actual date name
*/

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { _fetchWeather, _getLocation } from "../services/WeatherServices";
import { _getWeahterForecast } from "../android/helpers/WeatherHelper";
import { CapitalizeFirstLetter } from "../helper/StringHelper";

const MINUTE_MS = 60000;

const Weather = () => {
    const [currentLoc, setCurrentLoc] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState("");
    const [tempreture, setTempreture] = useState(0);
    const [description, setDescription] = useState("");
    const [windSpeed, setWindSpeed] = useState(0);
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
        setCity(data.city.name);
        setCountry(data.city.country);
        setTempreture(Math.round(data.list[0].main.temp));
        setDescription(
            CapitalizeFirstLetter(data.list[0].weather[0].description)
        );
        setWindSpeed(data.list[0].wind.speed);
        setIcon(data.list[0].weather[0].icon);
        setWeatherForecast(_getWeahterForecast(data.list));
    };

    return (
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
                    style={{ width: 110, height: 50 }}
                />

                {/* <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /> */}
                <Text style={styles.temp}>{tempreture}°</Text>
                <Text style={styles.description}>{description}</Text>
                <Text>wind</Text>
                <View style={styles.wind}>
                    <MaterialCommunityIcons
                        size={20}
                        name="weather-windy"
                        color={"#2F3543"}
                    />
                    <Text>{windSpeed} km/h</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                {weatherForecast.map((weather, id) => (
                    <View key={id} style={styles.nextweather}>
                        <Text style={styles.nextweatherDate}>
                            {weather.dt_txt.split(" ")[0]}
                        </Text>
                        <Image
                            source={{
                                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                            }}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text>{Math.floor(weather.main.temp)}°</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
    },
    location_text: {
        fontSize: 20,
        color: "#2F3543",
        fontWeight: "500",
    },
    country: {
        fontSize: 12,
        marginTop: 4,
        color: "#2F3543",
    },

    temp: {
        color: "#2F3543",
        marginStart: 20,
        fontSize: 100,
        marginTop: 10,
    },
    tempText: {
        fontSize: 48,
        color: "#2F3543",
    },
    description: {
        margin: 30,
        fontSize: 15,
        color: "#2F3543",
        fontWeight: "500",
    },
    wind: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bodyContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    bottomContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 120,
        marginTop: 25,
    },
    nextweather: {
        flex: 1,
        width: "122%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 100,
    },
    nextweatherDate: {
        width: 80,
    },
});

export default Weather;
