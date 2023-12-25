import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import colors from "./assets/colors.json";

// components
import Weather from "./components/Weather";
import SearchComponent from "./components/SearchComponent";
import SearchModal from "./components/SearchModal";

// services

export default function App() {
      // States
      const [isLoading, setIsLoading] = useState(false);
      const [isModalVisible, setIsModalVisible] = useState(true);
      // call get location
      useEffect(() => {}, []);

      return (
            <View style={styles.container}>
                  {isLoading ? (
                        <Text>fetching data</Text>
                  ) : (
                        <View>
                              <Weather />
                              <SearchComponent />
                              <SearchModal isModalVisible={isModalVisible} />
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
      buttonText: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
      },
});
