import { Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";

import TrashIcon from "@expo/vector-icons/MaterialCommunityIcons";

import Radio from "../../../shared/components/radio";

import { styles } from "./styles";

interface TaskProps {
  done: boolean;
  name: string;
  onCheck: () => void;
  onDelete: () => void;
}

const Task = ({ done, name, onCheck, onDelete }: TaskProps) => {
  return (
    <View style={styles.container}>
      <Radio selected={done} onCheck={() => onCheck()} />
      <Text style={[styles.text, done && styles.lineThrough]} onPress={onCheck}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <TrashIcon style={styles.icon} name="trash-can-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Task);
