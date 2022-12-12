export enum TimeFilters {
  All = "all",
  Today = "today",
  Week = "week",
}

export enum StatusFilters {
  All = "all",
  Done = "done",
  Todo = "todo",
}

export interface Filters {
  time: TimeFilters;
  status: StatusFilters;
}
