import { FlatList } from "react-native";
import { memo, useCallback } from "react";

import Task from "../../task";
import EmptyList from "../../empty-list";

import { Task as TaskType } from "../../../../types/task";

interface HomeListDataProps {
  list: TaskType[];
  onCheck: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}

const HomeListData = ({ list, onCheck, onDelete }: HomeListDataProps) => {
  const renderItem = useCallback(
    ({ item }: { item: TaskType }) => (
      <Task
        done={item.done}
        name={item.name}
        onCheck={() => onCheck(item.id, !item.done)}
        onDelete={() => onDelete(item.id)}
      />
    ),
    [onCheck, onDelete]
  );

  const EmptyListMemo = useCallback(() => <EmptyList />, []);

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => `${item.name}`}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ListEmptyComponent={EmptyListMemo}
    />
  );
};

export default memo(HomeListData);
