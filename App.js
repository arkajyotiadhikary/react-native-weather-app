import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// components
import Weather from "./components/Weather";

// services
import { fetchWeather } from "./services/WeatherServices";

export default function App() {
    // States
    const { isLoading, setIsLoading } = useState(false);
    const { temp, setTemp } = useState(0);
    const { weatherCondition, setWeatherCondition } = useState(null);
    const { error, setError } = useState(null);

    // call get location
    useEffect(() => {});

    return (
        <View style={styles.container}>
            {isLoading ? (
                <Text>fetching data</Text>
            ) : (
                <View>
                    <Weather />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#d4e6f9",
        alignItems: "center",
        justifyContent: "center",
    },
});
