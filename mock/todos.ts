import { format } from "date-fns";
import { TodoGroupInterface, TodoInterface } from "types/todos";

export const TODO_LIST_DATA: TodoInterface[] = [
  {
    id: "1",
    title: "bread",
    group: "shopping",
    completed: true,
    deadline: "2022/12/16",
  },
  {
    id: "2",
    title: "meat",
    group: "shopping",
    completed: true,
    deadline: "2022/12/17",
  },
  {
    id: "3",
    title: "50 push-ups",
    group: "gym",
    completed: false,
    deadline: "2022/12/15",
  },
  {
    id: "4",
    title: "20 pull-ups",
    group: "gym",
    completed: false,
    deadline: "2022/12/16",
  },
  {
    id: "5",
    title: "100 squats",
    group: "gym",
    completed: false,
    deadline: "2022/12/20",
  },
  { id: "6", title: "clean bathroom", group: "home", completed: true },
  {
    id: "7",
    title: "wash dog",
    group: "home",
    completed: false,
    deadline: format(Date.now(), "YYYY/mm/DD"),
  },
  {
    id: "8",
    title: "water flowers",
    group: "home",
    completed: false,
    deadline: format(Date.now(), "YYYY/mm/DD"),
  },
  { id: "9", title: "milk", group: "shopping", completed: false },
  {
    id: "10",
    title: "water",
    group: "shopping",
    completed: false,
    deadline: format(Date.now(), "YYYY/mm/DD"),
  },
  {
    id: "11",
    title: "vegetables",
    group: "shopping",
    completed: false,
    deadline: format(Date.now(), "YYYY/mm/DD"),
  },
  {
    id: "12",
    title: "practice spanish",
    group: "learning",
    completed: true,
    deadline: format(Date.now(), "YYYY/mm/DD"),
  },
  { id: "13", title: "english homework", group: "learning", completed: true },
];

export const TODO_GROUPS: TodoGroupInterface[] = [
  { id: "1", name: "shopping" },
  { id: "2", name: "gym" },
  { id: "3", name: "home" },
  { id: "4", name: "others" },
  { id: "5", name: "learning" },
];
