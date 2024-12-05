import { Text, View } from "react-native";
import { memo } from "react";

import { styles } from "./styles";

import { Task } from "../../../../types/task";

interface HomeListHeaderProps {
  list: Task[];
}

const HomeListHeader = ({ list }: HomeListHeaderProps) => {
  return (
    <View style={styles.info}>
      <View style={styles.infoData}>
        <Text style={styles.createdTitle}>Criadas</Text>
        <Text style={styles.quantity}>{list.length}</Text>
      </View>
      <View style={styles.infoData}>
        <Text style={styles.concludedTitle}>Concluídas</Text>
        <Text style={styles.quantity}>
          {list.filter((task) => task.done).length}
        </Text>
      </View>
    </View>
  );
};

export default memo(HomeListHeader);
