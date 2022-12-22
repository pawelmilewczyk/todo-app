import { deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/todos/[group]
const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const group = String(query.group);

  switch (method) {
    case "PUT":
      const groups = await getData("groups");
      const { id } = groups.find(({ name }) => name === group) ?? {};
      if (id) {
        const updatedGroup = await updateData("groups", group, body);
        if (updatedGroup) {
          return res.status(200).json(updatedGroup);
        }
        return res
          .status(404)
          .json({ message: `Couldn't update the group. Try again.` });
      }
      return res
        .status(404)
        .json({ message: `Group with name ${group} does not exist` });
    case "DELETE":
      await deleteData("groups", { key: "name", value: group });
      await deleteData("todos", { key: "group", value: group });
      res.status(200);
    default:
      return res.status(501);
  }
};

export default handler;
