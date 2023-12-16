import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { requestAuthorization } from "react-native-geolocation-service";
import colors from "./assets/colors.json";

// components
import Weather from "./components/Weather";
import { requestLocationPermission } from "./services/LocationServices";

// services

export default function App() {
      // States
      const { isLoading, setIsLoading } = useState(false);
      // call get location
      useEffect(() => {}, []);

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
            backgroundColor: `${colors.app_background_color}`,
            alignItems: "center",
            justifyContent: "center",
      },
});
