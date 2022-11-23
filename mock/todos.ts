import { TodoFilter, TodoInterface, TodoGroupInterface } from "types/todos";

export const TODO_LIST_DATA: TodoInterface[] = [
  { id: 1, title: "bread", group: "shopping", completed: true },
  { id: 2, title: "meat", group: "shopping", completed: true },
  { id: 3, title: "50 push-ups", group: "gym", completed: false },
  { id: 4, title: "20 pull-ups", group: "gym", completed: false },
  { id: 5, title: "100 squats", group: "gym", completed: false },
  { id: 6, title: "clean bathroom", group: "home", completed: true },
  { id: 7, title: "wash dog", group: "home", completed: false },
  { id: 8, title: "water flowers", group: "home", completed: false },
  { id: 9, title: "milk", group: "shopping", completed: false },
  { id: 10, title: "water", group: "shopping", completed: false },
  { id: 11, title: "vegetables", group: "shopping", completed: false },
  { id: 12, title: "practice spanish", group: "learning", completed: true },
  { id: 13, title: "english homework", group: "learning", completed: true },
];

export const TODO_GROUPS: TodoGroupInterface[] = [
  { id: 1, group: "shopping" },
  { id: 2, group: "gym" },
  { id: 3, group: "home" },
  { id: 4, group: "others" },
  { id: 5, group: "learning" },
];
