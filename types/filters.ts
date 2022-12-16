export enum StatusFilters {
  Completed = "completed",
  All = "all",
}

export interface Filters {
  completed?: boolean;
  today?: boolean;
  scheduled?: boolean;
}

export type SearchParams = Partial<Record<keyof Filters, string>>;
