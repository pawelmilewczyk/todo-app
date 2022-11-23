import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { initFilters } from "consts/filters";
import { TODO_LIST_DATA } from "mock/todos";
import { FilterGroup, FilterName } from "types/todos";
import { updateFilters } from "./todos.utils";
import TodosFilters from "./TodosFilters";
import TodosList from "./TodosList";

describe("filters", () => {
  test("display correct number of filters", async () => {
    render(<TodosFilters filters={initFilters} setFilters={jest.fn()} />);

    const filtersLength = initFilters.reduce(
      (prev, { filters }) => prev + filters.length,
      0
    );

    const filters = screen.getAllByRole("button");
    expect(filters).toHaveLength(filtersLength);
  });

  test("correctly update filters", async () => {
    const getFilter = (
      filterGroup: FilterGroup,
      filterName: FilterName,
      filters = initFilters
    ) =>
      filters
        .find(({ group }) => group === filterGroup)
        ?.filters.find(({ name }) => name === filterName);

    // Check init state
    let filter = getFilter("completion", "completed");
    expect(filter?.active).toBeFalsy();

    filter = getFilter("completion", "all");
    expect(filter?.active).toBeFalsy();

    // Click on "completed" filter
    let updatedFilters = updateFilters("completion", "completed")(initFilters);
    filter = getFilter("completion", "completed", updatedFilters);
    expect(filter?.active).toBeTruthy();

    // Click on "all" filter
    updatedFilters = updateFilters("completion", "all")(initFilters);
    filter = getFilter("completion", "all", updatedFilters);
    expect(filter?.active).toBeTruthy();

    filter = getFilter("completion", "completed", updatedFilters);
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
