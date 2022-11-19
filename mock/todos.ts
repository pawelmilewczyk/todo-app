import { TodoFilter, TodoInterface, TodoTagInterface } from "types/todos";

export const TODO_LIST_DATA: TodoInterface[] = [
  { id: 1, title: "firstTodo", tag: "shopping", completed: true },
  { id: 2, title: "secondTodo", tag: "shopping", completed: true },
  { id: 3, title: "thirdTodo", tag: "gym", completed: false },
  { id: 4, title: "fourthTodo", tag: "gym", completed: false },
  { id: 5, title: "fifthTodo", tag: "home", completed: true },
];

export const TODO_TAGS: TodoTagInterface[] = [
  { id: 1, tag: "shopping" },
  { id: 2, tag: "gym" },
  { id: 3, tag: "home" },
  { id: 4, tag: "others" },
  { id: 5, tag: "learning" },
];

export const FILTERS: TodoFilter[] = [
  {
    group: "date",
    filters: [
      { name: "today", active: false },
      { name: "week", active: false },
    ],
  },
  {
    group: "completion",
    filters: [
      { name: "completed", active: false },
      { name: "all", active: true },
    ],
  },
];
