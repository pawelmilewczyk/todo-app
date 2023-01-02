import { Filters, SearchParameter, SearchParams } from "types/filters";

const getValue = (param: SearchParameter) => {
  if (param === "true") return true;
  else if (param === "false") return false;
  else if (param && !isNaN(Number(param))) return Number(param);
  return param;
};

export const searchParamsToFilters = (searchParams: SearchParams): Filters =>
  Object.entries(searchParams)
    .map(([key, value]) => ({ key, value: getValue(value) }))
    .reduce((prev, { key, value }) => ({ ...prev, [key]: value }), {});

export const filtersToSearchParams = (searchParams: Filters): SearchParams =>
  Object.entries(searchParams)
    .map(([key, value]) => ({ key, value: String(value) }))
    .reduce((prev, { key, value }) => ({ ...prev, [key]: value }), {});

export const getRouteWithSearchParams = (
  url: string,
  searchParams?: SearchParams
) => {
  if (searchParams) {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (typeof value === "string" && !!value.length) {
        params.append(key, value);
      }
    });

    if (params.toString().length) {
      return `${url}?${params.toString()}`;
    }
  }
  return url;
};
