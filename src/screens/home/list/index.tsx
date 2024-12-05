import { View } from "react-native";
import { memo } from "react";

import HomeListHeader from "./header";
import HomeListData from "./data";

import { Task } from "../../../types/task";

import { styles } from "./styles";

interface HomeListProps {
  list: Task[];
  onCheck: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

const HomeList = ({ list, onCheck, onDelete }: HomeListProps) => {
  return (
    <View style={styles.content}>
      <HomeListHeader list={list} />
      <HomeListData list={list} onCheck={onCheck} onDelete={onDelete} />
    </View>
  );
};

export default memo(HomeList);
