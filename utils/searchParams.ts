import { Filters, SearchParams } from "types/filters";

export const searchParamsToFilters = (searchParams: SearchParams): Filters =>
  Object.entries(searchParams)
    .map(([key, value]) => ({ key, value: JSON.parse(value) as boolean }))
    .reduce((prev, { key, value }) => ({ ...prev, [key]: value }), {});

export const filtersToSearchParams = (searchParams: Filters): SearchParams =>
  Object.entries(searchParams)
    .map(([key, value]) => ({ key, value: String(value) }))
    .reduce((prev, { key, value }) => ({ ...prev, [key]: value }), {});
