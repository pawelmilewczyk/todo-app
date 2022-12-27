import EditGroup from "components/groups/EditGroup";
import { PageProps, TodosPageParams } from "types/pages";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function fetchGroup(name: string) {
  const { response } = await fetchData<TodoGroupInterface>({
    url: `todos/${name}`,
    cache: "no-store",
  });
  return response;
}

async function EditGroupPage({ params }: PageProps<TodosPageParams>) {
  const group = await fetchGroup(params.group);

  return group ? <EditGroup group={group} /> : <p>Something went wrong</p>;
}

export default EditGroupPage;
