import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { initFilters } from "consts/filters";
import { TODO_LIST_DATA } from "mock/todos";
import { FilterName } from "types/todos";
import { updateFilters } from "./todos.utils";
import TodosList from "./TodosList";

describe("filters", () => {
  test("correctly update filters", async () => {
    const getFilter = (filterName: FilterName, filters = initFilters) =>
      filters.find(({ name }) => name === filterName);

    // Check init state
    let filter = getFilter("completed");
    expect(filter?.active).toBeFalsy();

    filter = getFilter("all");
    expect(filter?.active).toBeFalsy();

    // Click on "completed" filter
    let updatedFilters = updateFilters(initFilters, "completion", "completed");
    filter = getFilter("completed", updatedFilters);
    expect(filter?.active).toBeTruthy();

    // Click on "all" filter
    updatedFilters = updateFilters(initFilters, "completion", "all");
    filter = getFilter("all", updatedFilters);
    expect(filter?.active).toBeTruthy();

    filter = getFilter("completed", updatedFilters);
    expect(filter?.active).toBeFalsy();
  });

  test("highlight active filter", async () => {
    render(<TodosList todos={TODO_LIST_DATA} />);
    const user = userEvent.setup();

    const completedFilter = screen.getByRole("button", { name: /completed/i });
    expect(completedFilter).not.toHaveClass("bg-white");

    await user.click(completedFilter);
    expect(completedFilter).toHaveClass("bg-white");
  });
});
