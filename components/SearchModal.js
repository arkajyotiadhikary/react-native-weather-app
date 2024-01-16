import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
      Text,
      View,
      Modal,
      StyleSheet,
      TextInput,
      TouchableOpacity,
      Keyboard,
      Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setFalse } from "../features/modalSlice";
import { setLocation, setChangeData, setCurrentLocation } from "../features/locationSlice";
import { _getSearchLocation } from "../services/WeatherServices";

const SearchModal = () => {
      const modalState = useSelector((state) => state.modal.isVisible);
      const dispatch = useDispatch();
      const [searchedLocation, setSearchedLocation] = useState("");
      const [modalHeight, setModalHeight] = useState(Dimensions.get("window").height);

      useEffect(() => {
            const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
                  // Adjust modal height when keyboard is shown
                  setModalHeight(Dimensions.get("window").height * 0.8);
            });

            const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
                  // Reset modal height when keyboard is hidden
                  setModalHeight(Dimensions.get("window").height);
            });

            return () => {
                  // Cleanup listeners when component unmounts
                  keyboardDidShowListener.remove();
                  keyboardDidHideListener.remove();
            };
      }, []);

      const handleChange = (text) => {
            setSearchedLocation(text);
            dispatch(setLocation({ text }));
      };

      const handleSubmit = async () => {
            try {
                  const location = await _getSearchLocation(searchedLocation);
                  dispatch(setLocation(location));
                  console.log("location searched ", location);
            } catch (error) {
                  console.error("Error fetching location:", error);
            } finally {
                  dispatch(setChangeData(true));
                  dispatch(setFalse(true));
                  dispatch(setCurrentLocation(true));
            }
      };

      return (
            <Modal
                  visible={modalState}
                  transparent={true}
                  onRequestClose={() => dispatch(setFalse())}
            >
                  <View style={[styles.popup, { height: modalHeight }]}>
                        <View style={styles.content}>
                              <Text style={styles.modalHeader}>Search your location</Text>
                              <View style={styles.input}>
                                    <TextInput
                                          placeholder="Your Location"
                                          onChangeText={(text) => handleChange(text)}
                                          style={styles.textinput}
                                    />
                                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                          <Text style={styles.buttonText}>
                                                <MaterialCommunityIcons name="magnify" size={20} />
                                          </Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </View>
            </Modal>
      );
};

const styles = StyleSheet.create({
      popup: {
            justifyContent: "center",
            alignItems: "center",
      },
      modalHeader: {
            fontSize: 20,
      },
      content: {
            backgroundColor: "#ffff",
            borderRadius: 10,
            width: "80%",
            padding: "10%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
      },
      input: {
            marginVertical: 30,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
      },
      textinput: {
            borderRadius: 5,
            borderColor: "#0000",
            borderWidth: 2,
            paddingHorizontal: 10,
            backgroundColor: "#e9f0ff",
            width: "75%",
            height: 50,
            marginEnd: "5%",
      },
      button: {
            marginStart: 10,
      },
});

export default SearchModal;
