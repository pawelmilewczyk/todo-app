import {
  filtersToSearchParams,
  searchParamsToFilters,
} from "utils/searchParams";

const filters = {
  truthy: true,
  falsy: false,
  number: 23,
  string: "string",
};

const searchParams = {
  truthy: "true",
  falsy: "false",
  number: "23",
  string: "string",
};

describe("searchParams", () => {
  test("converts searchParams to filters", () => {
    const createdFilters = searchParamsToFilters(searchParams);
    expect(createdFilters).toMatchObject(filters);
  });

  test("converts filters to searchParams", () => {
    const createdParams = filtersToSearchParams(filters);
    expect(createdParams).toMatchObject(searchParams);
  });
});
