export interface TodoPageParams {
  group: string;
  id: string;
}

export interface TodosPageParams {
  group: string;
}

export type PageProps<T extends {}> = { params: T };
