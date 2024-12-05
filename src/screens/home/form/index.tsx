import {
  Alert,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { memo, useEffect, useRef, useState } from "react";

import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";
import { Task } from "../../../types/task";

interface HomeFormProps {
  list: Task[];
  onAdd: (task: Task) => void;
}

const HomeForm = ({ list, onAdd }: HomeFormProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [taskName, setTaskName] = useState("");

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        inputRef.current?.blur();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  function handleAddTask() {
    if (taskName.length === 0)
      return Alert.alert(
        "Nome requerido",
        "Por favor, insira o nome da tarefa"
      );

    const findTask = list.find(
      (task) => task.name.toUpperCase() === taskName.toUpperCase().trim()
    );

    if (findTask)
      return Alert.alert(
        "Tarefa Existe",
        "Já existe uma tarefa na lista com essa nome"
      );

    const id = Math.floor(Math.random() * 1000000);
    onAdd({ id: id, name: taskName.trim(), done: false });
    setTaskName("");
  }

  return (
    <View style={styles.form}>
      <TextInput
        ref={inputRef}
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#6b6b6b"
        selectionColor="#1E6F9F"
        cursorColor="#1E6F9F"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={taskName}
        onChangeText={setTaskName}
        onSubmitEditing={handleAddTask}
        returnKeyType="done"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Feather style={styles.buttonIcon} name="plus-circle" />
      </TouchableOpacity>
    </View>
  );
};

export default memo(HomeForm);
