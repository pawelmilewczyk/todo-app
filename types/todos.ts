export interface TodoGroupInterface {
  id: string;
  name: string;
}

export interface TodoInterface {
  id: string;
  title: string;
  description?: string;
  group: string;
  completed: boolean;
}

export type FilterGroup = "date" | "completion";
export type FilterName = "today" | "week" | "completed" | "all";

export interface TodoFilter {
  group: FilterGroup;
  name: FilterName;
  active: boolean;
}
