import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { _fetchWeather, _getLocation } from "../services/WeatherServices";

const Weather = () => {
    const [currentLoc, setCurrentLoc] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        // _fetchWeather();
    }, []);

    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.location_text}>Guwahati, Assam</Text>
                <Text style={styles.country}>India</Text>
            </View>
            <View style={styles.bodyContainer}>
                <MaterialCommunityIcons
                    size={48}
                    name="weather-partly-rainy"
                    color={"#2F3543"}
                />
                <Text style={styles.temp}>23°</Text>
                <Text style={styles.description}>Mostly Cloudy</Text>
                <Text>wind</Text>
                <View style={styles.wind}>
                    <MaterialCommunityIcons
                        size={20}
                        name="weather-windy"
                        color={"#2F3543"}
                    />
                    <Text>3 km/h</Text>
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
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    location_text: {
        fontSize: 20,
        color: "#2F3543",
        marginTop: 50,
        fontWeight: "500",
    },
    country: {
        color: "#2F3543",
    },
    headerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    },
    bottomContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 120,
        marginTop: 25,
        marginBottom: 40,
    },
    nextweather: {
        flex: 1,
        width: "122%",
        flexDirection: "row",
        justifyContent: "space-around", // Adjusted justifyContent
        alignItems: "center",
        paddingHorizontal: 100, // Added paddingHorizontal for spacing
    },
    nextweatherDate: {
        width: 80,
    },
    // nextweathertext: {
    //     alignContent: "center",
    // },
});

export default Weather;
