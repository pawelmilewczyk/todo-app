import { deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/todos/[group]
const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const queryGroup = String(query.group);

  switch (method) {
    case "GET": {
      const groups = await getData("groups");
      const group = groups.find(({ name }) => name === queryGroup);
      if (group) {
        return res.status(200).json(group);
      }
      return res
        .status(404)
        .json({ message: `Group with name ${queryGroup} does not exist` });
    }
    case "PUT": {
      const groups = await getData("groups");
      const { id } = groups.find(({ name }) => name === queryGroup) ?? {};
      if (id) {
        const updatedGroup = await updateData("groups", queryGroup, body);
        if (updatedGroup) {
          return res.status(200).json(updatedGroup);
        }
        return res.status(404).json({ message: `Couldn't update the group` });
      }
      return res
        .status(404)
        .json({ message: `Group with name ${queryGroup} does not exist` });
    }
    case "DELETE": {
      await deleteData("groups", { key: "name", value: queryGroup });
      await deleteData("todos", { key: "group", value: queryGroup });
      res.status(200);
    }
    default:
      return res.status(501);
  }
};

export default handler;
