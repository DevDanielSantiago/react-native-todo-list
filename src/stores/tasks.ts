import { create } from "zustand";

import { Task } from "../types/task";

interface TasksState {
  todoList: Task[];
  onAdd: (task: Task) => void;
  onDelete: (id: number) => void;
  onCheck: (id: number, status: boolean) => void;
}

export const useTasksStore = create<TasksState>((set, get) => ({
  todoList: [],
  onAdd: (task) => {
    const list = get().todoList;
    const newList: Task[] = [...list, task];

    set({ todoList: newList });
  },
  onDelete: (id) => {
    const list = get().todoList;
    const newList = list.filter((task) => task.id !== id);

    set({ todoList: newList });
  },
  onCheck: (id, status) => {
    const list = get().todoList;
    const newList = list.map((task) => {
      if (task.id !== id) return task;
      return { ...task, done: status };
    });

    set({ todoList: newList });
  },
}));
