import { TodoGroupInterface, TodoInterface } from "types/todos";
import { getTodayDate } from "utils/dates";

export const TODO_GROUPS: TodoGroupInterface[] = [
  { id: "1", name: "shopping", color: "yellow", icon: "cartShopping" },
  { id: "2", name: "gym", color: "stone", icon: "dumbbell" },
  { id: "3", name: "home", color: "blue", icon: "house" },
  { id: "4", name: "others", color: "fuchsia", icon: "star" },
  { id: "5", name: "learning", color: "orange", icon: "graduationCap" },
];

export const TODOS: TodoInterface[] = [
  {
    id: "1",
    name: "Apples",
    group: TODO_GROUPS[0],
    completed: true,
  },
  {
    id: "2",
    name: "Oranges",
    group: TODO_GROUPS[0],
    completed: true,
    date: "2022-12-20",
  },
  {
    id: "3",
    name: "Bananas",
    group: TODO_GROUPS[0],
    completed: false,
  },
  {
    id: "4",
    name: "clean bathroom",
    group: TODO_GROUPS[2],
    completed: false,
    date: "2022-12-22",
  },
  {
    id: "5",
    name: "100 push-ups",
    group: TODO_GROUPS[1],
    completed: false,
    date: getTodayDate(),
  },
  {
    id: "6",
    name: "spanish",
    group: TODO_GROUPS[4],
    completed: false,
    date: getTodayDate(),
    time: "16:00",
  },
  {
    id: "7",
    name: "english",
    group: TODO_GROUPS[4],
    completed: true,
    date: "2022-12-19",
  },
];
