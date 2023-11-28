/*
    @TODO 
    * Have to make the first letter of the weather description capitalize
*/

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { _fetchWeather, _getLocation } from "../services/WeatherServices";

const Weather = () => {
    const [currentLoc, setCurrentLoc] = useState(null);
    const [city, setCity] = useState(null);
    const [tempreture, setTempreture] = useState(0);
    const [description, setDescription] = useState("");
    const [windSpeed, setWindSpeed] = useState(0);
    const [icon, setIcon] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await _fetchWeather();
            setCity(data.name);

            setTempreture(Math.round(data.main.temp));
            setDescription(data.weather[0].description);
            setWindSpeed(data.wind.speed);
            setIcon(data.weather[0].icon);
        };
        fetchData();
    }, []);

    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.location_text}>{city}</Text>
                <Text style={styles.country}>India</Text>
            </View>
            <View style={styles.bodyContainer}>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
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
                <View style={styles.nextweather}>
                    <Text style={styles.nextweatherDate}>Tue ,Apr 14</Text>
                    <MaterialCommunityIcons
                        size={20}
                        name="weather-windy-variant"
                        color={"#2F3543"}
                    />
                    <Text>23°</Text>
                </View>
                <View style={styles.nextweather}>
                    <Text style={styles.nextweatherDate}>Wed ,Apr 15</Text>
                    <MaterialCommunityIcons
                        size={20}
                        name="weather-windy-variant"
                        color={"#2F3543"}
                    />
                    <Text>19°</Text>
                </View>
                <View style={styles.nextweather}>
                    <Text style={styles.nextweatherDate}>Thr ,Apr 16</Text>
                    <MaterialCommunityIcons
                        size={20}
                        name="weather-windy-variant"
                        color={"#2F3543"}
                    />
                    <Text>21°</Text>
                </View>
                <View style={styles.nextweather}>
                    <Text style={styles.nextweatherDate}>Fri ,Apr 17</Text>
                    <MaterialCommunityIcons
                        size={20}
                        name="weather-windy-variant"
                        color={"#2F3543"}
                    />
                    <Text>20°</Text>
                </View>
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
