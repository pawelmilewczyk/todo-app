export interface TodoPageParams {
  group: string;
  id: string;
}

export interface TodosPageParams {
  group: string;
}

export type PageProps<Params extends {}, SearchParams extends {} = {}> = {
  params: Params;
  searchParams: SearchParams;
};
