import { TouchableOpacity, View } from "react-native";

import DoneIcon from "@expo/vector-icons/MaterialIcons";

import { styles } from "./styles";

interface RadioProps {
  selected: boolean;
  onCheck: (status: boolean) => void;
}

export default function Radio({ selected, onCheck }: RadioProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onCheck(!selected)}>
      {!selected && <View style={styles.radio} />}
      {selected && (
        <View style={styles.radioSelected}>
          <DoneIcon
            style={{ padding: 2 }}
            name="done"
            size={12}
            color="white"
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
