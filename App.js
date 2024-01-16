import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./assets/colors.json";

// components
import Weather from "./components/Weather";
import SearchComponent from "./components/SearchComponent";
import SearchModal from "./components/SearchModal";

// redux store]
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
      // States
      const [isLoading, setIsLoading] = useState(false);
      const [isModalVisible, setIsModalVisible] = useState(true);

      return (
            <View style={styles.container}>
                  {isLoading ? (
                        <Text>fetching data</Text>
                  ) : (
                        <Provider store={store}>
                              <View>
                                    <SearchModal />
                                    <Weather />
                                    <SearchComponent />
                              </View>
                        </Provider>
                  )}
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: `${colors.app_background_color}`,
            alignItems: "center",
            justifyContent: "center",
      },
      container_main: {
            flex: 1,
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
