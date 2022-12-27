import { StaticGroups } from "consts/groups";
import { TODOS } from "mock/todos";
import { getTodayDate } from "utils/dates";
import { filterTodos } from "utils/todos";

describe("filterTodos", () => {
  test("get todos from one group", () => {
    const query = { group: "home" };
    const filtered = TODOS.filter(filterTodos(query));
    expect(filtered).toMatchObject([
      {
        id: "4",
        title: "clean bathroom",
        group: { id: "3", name: "home" },
        completed: false,
        date: "2022-12-22",
      },
    ]);
  });

  test("get todos from one group without completed tasks", () => {
    const query = { group: "shopping", completed: "false" };
    const filtered = TODOS.filter(filterTodos(query));
    expect(filtered).toMatchObject([
      {
        id: "3",
        title: "Bananas",
        group: { id: "1", name: "shopping" },
        completed: false,
      },
    ]);
  });

  test("get all scheduled tasks", () => {
    const query = { group: StaticGroups.Scheduled };
    const filtered = TODOS.filter(filterTodos(query));
    expect(filtered).toMatchObject([
      {
        id: "2",
        title: "Oranges",
        group: { id: "1", name: "shopping" },
        completed: true,
        date: "2022-12-20",
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
    ]);
  });

  test("get all todays tasks", () => {
    const query = { group: StaticGroups.Today };
    const filtered = TODOS.filter(filterTodos(query));
    expect(filtered).toMatchObject([
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
    ]);
  });
});
