export interface TodoGroupInterface {
  id: number;
  name: string;
}

export interface TodoInterface {
  id: number;
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
