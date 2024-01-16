import React, { useState } from "react";
import {
      Text,
      View,
      Modal,
      StyleSheet,
      TextInput,
      Button,
      KeyboardAvoidingView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setFalse } from "../features/modalSlice";
import { setLocation, setChangeData } from "../features/locationSlice";
import { _getSearchLocation } from "../services/WeatherServices";

const SearchModal = () => {
      const modalState = useSelector((state) => state.modal.isVisible);
      const dispatch = useDispatch();
      const [searchedLocation, setSearchedLocation] = useState("");

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
            }
      };

      return (
            <Modal
                  visible={modalState}
                  transparent={true}
                  onRequestClose={() => dispatch(setFalse())}
            >
                  <View style={styles.popup}>
                        <View style={styles.content}>
                              <Text style={styles.modalHeader}>Search your location</Text>
                              <View style={styles.input}>
                                    <KeyboardAvoidingView
                                          behavior="padding"
                                          style={styles.textinput}
                                    >
                                          <TextInput
                                                placeholder="Type something..."
                                                onChangeText={(text) => handleChange(text)}
                                          />
                                    </KeyboardAvoidingView>

                                    <Button title="Submit" onPress={handleSubmit} />
                              </View>
                        </View>
                  </View>
            </Modal>
      );
};

const styles = StyleSheet.create({
      popup: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
      },
      modalHeader: {
            fontSize: 20,
      },
      content: {
            backgroundColor: "#ffff",
            borderRadius: 10,
            height: "30%",
            width: "80%",
            padding: "10%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
      },
      input: {
            flex: 1,
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
            height: "30%",
            marginEnd: "5%",
      },
});

export default SearchModal;
