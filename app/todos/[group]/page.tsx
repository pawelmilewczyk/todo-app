import { PageProps, TodosPageParams } from "types/pages";

async function EditGroupPage({ params }: PageProps<TodosPageParams>) {
  return (
    <div className="">
      <h1 className="font-medium text-md text-center uppercase">Edit group</h1>
      <p className="text-center">{params.group}</p>
    </div>
  );
}

export default EditGroupPage;
