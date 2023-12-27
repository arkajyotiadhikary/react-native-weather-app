import {
      Text,
      View,
      Modal,
      StyleSheet,
      TextInput,
      Button,
      KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";
export default SerchModal = () => {
      const modalState = useSelector((state) => state.modal.isVisible);
      return (
            <Modal visible={modalState} transparent={true}>
                  <View style={styles.popup}>
                        <View style={styles.content}>
                              <Text style={styles.modalHeader}>Search your location</Text>
                              <View style={styles.input}>
                                    <TextInput
                                          placeholder="Type something..."
                                          style={styles.textinput}
                                    />
                                    <Button title="Submit"></Button>
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
