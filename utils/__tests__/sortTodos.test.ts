import { TODOS } from "mock/todos";
import { getTodayDate } from "utils/dates";
import { sortTodos } from "utils/todos";

test("sortTodos", () => {
  const sorted = TODOS.sort(sortTodos);
  expect(sorted).toMatchObject([
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
      id: "6",
      title: "spanish",
      group: { id: "5", name: "learning" },
      completed: false,
      date: getTodayDate(),
      time: "16:00",
    },
    {
      id: "5",
      title: "100 push-ups",
      group: { id: "2", name: "gym" },
      completed: false,
      date: getTodayDate(),
    },
    {
      id: "2",
      title: "Oranges",
      group: { id: "1", name: "shopping" },
      completed: true,
      date: "2022-12-20",
    },
    {
      id: "7",
      title: "english",
      group: { id: "5", name: "learning" },
      completed: true,
      date: "2022-12-19",
    },
    {
      id: "1",
      title: "Apples",
      group: { id: "1", name: "shopping" },
      completed: true,
    },
  ]);
});
