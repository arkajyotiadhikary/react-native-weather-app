import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/SearchComponent";

import { useDispatch, useSelector } from "react-redux";
import { setTrue, setFalse } from "../features/modalSlice";

export default SearchComponent = () => {
      const modalState = useSelector((state) => state.modal.isVisible);
      const dispatch = useDispatch();
      return (
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => (modalState ? dispatch(setFalse()) : dispatch(setTrue()))}
            >
                  <Text style={styles.buttonText}>
                        <MaterialCommunityIcons name="magnify" size={20} />
                  </Text>
            </TouchableOpacity>
      );
};
