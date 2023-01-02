export type PageProps<Params extends {}, SearchParams extends {} = {}> = {
  params: Params;
  searchParams: SearchParams;
};
