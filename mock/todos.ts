import { TodoFilter, TodoInterface, TodoTagInterface } from "types/todos";

export const TODO_LIST_DATA: TodoInterface[] = [
  { id: 1, title: "bread", tag: "shopping", completed: true },
  { id: 2, title: "meat", tag: "shopping", completed: true },
  { id: 3, title: "50 push-ups", tag: "gym", completed: false },
  { id: 4, title: "20 pull-ups", tag: "gym", completed: false },
  { id: 5, title: "100 squats", tag: "gym", completed: false },
  { id: 6, title: "clean bathroom", tag: "home", completed: true },
  { id: 7, title: "wash dog", tag: "home", completed: false },
  { id: 8, title: "water flowers", tag: "home", completed: false },
  { id: 9, title: "milk", tag: "shopping", completed: false },
  { id: 10, title: "water", tag: "shopping", completed: false },
  { id: 11, title: "vegetables", tag: "shopping", completed: false },
  { id: 12, title: "practice spanish", tag: "learning", completed: true },
  { id: 13, title: "english homework", tag: "learning", completed: true },
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
      { name: "today", active: true },
      { name: "week", active: false },
    ],
  },
  {
    group: "completion",
    filters: [
      { name: "completed", active: false },
      { name: "all", active: false },
    ],
  },
];
