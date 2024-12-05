import { Text, View } from "react-native";

import Clibboard from "./../../../assets/clipboard.svg";

import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <Clibboard style={styles.clipboard} />
      <View>
        <Text style={[styles.text, styles.textHighlight]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
