import EditGroup from "components/groups/EditGroup";
import { getSingleGroupRoute } from "consts/routes";
import { PageProps } from "types/pages";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

interface Params {
  name: string;
}

async function fetchGroup(name: string) {
  const { response } = await fetchData<TodoGroupInterface>({
    url: getSingleGroupRoute(name),
    cache: "no-cache",
  });
  return response;
}

async function EditGroupPage({ params }: PageProps<Params>) {
  const group = await fetchGroup(params.name);

  return group ? <EditGroup group={group} /> : <p>Something went wrong</p>;
}

export default EditGroupPage;
