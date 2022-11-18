export interface TodoTagInterface {
  id: number;
  tag: string;
}

export interface TodoInterface {
  id: number;
  title: string;
  description?: string;
  tag: string;
  completed: boolean;
}

export type FilterGroup = "date" | "completion";

export interface TodoFilter {
  group: FilterGroup;
  filters: {
    label: string;
    active: boolean;
  }[];
}
