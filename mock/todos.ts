import { TodoGroupInterface, TodoInterface } from "types/todos";
import { getTodayDate } from "utils/dates";

export const TODOS: TodoInterface[] = [
  {
    id: "1",
    title: "Apples",
    group: { id: "1", name: "shopping" },
    completed: true,
  },
  {
    id: "2",
    title: "Oranges",
    group: { id: "1", name: "shopping" },
    completed: true,
    date: "2022-12-20",
  },
  {
    id: "3",
    title: "Bananas",
    group: { id: "1", name: "shopping" },
    completed: false,
  },
  {
    id: "4",
    title: "clean bathroom",
    group: { id: "3", name: "home" },
    completed: false,
    date: "2022-12-22",
  },
  {
    id: "5",
    title: "100 push-ups",
    group: { id: "2", name: "gym" },
    completed: false,
    date: getTodayDate(),
  },
  {
    id: "6",
    title: "spanish",
    group: { id: "5", name: "learning" },
    completed: false,
    date: getTodayDate(),
    time: "16:00",
  },
  {
    id: "7",
    title: "english",
    group: { id: "5", name: "learning" },
    completed: true,
    date: "2022-12-19",
  },
];

export const TODO_GROUPS: TodoGroupInterface[] = [
  { id: "1", name: "shopping" },
  { id: "2", name: "gym" },
  { id: "3", name: "home" },
  { id: "4", name: "others" },
  { id: "5", name: "learning" },
];
