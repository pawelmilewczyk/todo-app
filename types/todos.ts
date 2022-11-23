export interface TodoGroupInterface {
  id: number;
  group: string;
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
  filters: {
    name: FilterName;
    active: boolean;
  }[];
}
