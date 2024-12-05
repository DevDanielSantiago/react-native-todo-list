import { View, Alert } from "react-native";

import HomeHeader from "./header";
import HomeForm from "./form";
import HomeList from "./list";

import { useTasksStore } from "../../stores/tasks";

import { styles } from "./styles";

export default function HomeScreen() {
  const { todoList, onCheck, onDelete, onAdd } = useTasksStore();

  function handleDelete(id: number) {
    const findTask = todoList.find((task) => task.id === id);
    if (!findTask) return;

    Alert.alert("Remover", `Remover a tarefa: ${findTask.name}?`, [
      {
        text: "Sim",
        onPress: () => onDelete(id),
        style: "default",
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeForm list={todoList} onAdd={onAdd} />

      <HomeList list={todoList} onCheck={onCheck} onDelete={handleDelete} />
    </View>
  );
}
