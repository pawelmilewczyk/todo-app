export enum StatusFilters {
  Completed = "completed",
  All = "all",
}

export interface Filters
  extends Partial<Record<string, string | boolean | number>> {
  completed?: boolean;
  group?: string;
}

export type SearchParameter = string | string[] | undefined;

export type SearchParams = Record<keyof Required<Filters>, SearchParameter>;
