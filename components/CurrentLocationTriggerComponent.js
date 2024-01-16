import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/CurrentLocationTriggerComponent";

import { setChangeData } from "../features/locationSlice";

export default CurrentLocationTrigger = () => {
      const [isVisible, setIsVisisble] = useState(false);
      const currentLocationState = useSelector((state) => state.location.currentLocation.payload);

      useEffect(() => {
            console.log("isVisible", currentLocationState);
            setIsVisisble(currentLocationState);
      }, [currentLocationState]);

      const dispatch = useDispatch();
      return isVisible ? (
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => (isVisible ? dispatch(setChangeData(false)) : "")}
            >
                  <Text style={styles.buttonText}>
                        <MaterialCommunityIcons name="map-marker" size={20} />
                  </Text>
            </TouchableOpacity>
      ) : (
            ""
      );
};
