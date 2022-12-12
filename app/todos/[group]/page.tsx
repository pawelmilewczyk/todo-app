import { PageProps, TodosPageParams } from "types/pages";
import { TodoGroupInterface } from "types/todos";
import fetchData from "utils/fetchData";

async function EditGroupPage({ params }: PageProps<TodosPageParams>) {
  return (
    <div className="">
      <h1 className="font-medium text-md text-center uppercase">Edit group</h1>
      <p className="text-center">{params.group}</p>
    </div>
  );
}

export default EditGroupPage;

export async function generateStaticParams() {
  const { response } = await fetchData<TodoGroupInterface[]>({
    url: "/groups",
  });
  return response
    ? response?.map(({ name }: TodoGroupInterface) => ({ group: name }))
    : [];
}
