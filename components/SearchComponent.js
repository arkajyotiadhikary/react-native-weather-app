import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/SearchComponent";

export default SearchComponent = () => {
      return (
            <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>
                        <MaterialCommunityIcons name="magnify" size={20} />
                  </Text>
            </TouchableOpacity>
      );
};
