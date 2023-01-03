import { getGroup } from "api/groups";
import EditGroup from "components/groups/EditGroup";
import { PageProps } from "types/pages";

interface Params {
  name: string;
}

async function EditGroupPage({ params }: PageProps<Params>) {
  const group = await getGroup(params.name);

  if (!group) return <p>Something went wrong</p>;
  return <EditGroup group={group} />;
}

export default EditGroupPage;
