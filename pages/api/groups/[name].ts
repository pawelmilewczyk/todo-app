import { deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/groups/[groupName]
const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const groupName = String(query.name);

  switch (method) {
    case "GET": {
      const groups = await getData("groups");
      const group = groups.find(({ name }) => name === groupName);
      if (group) {
        return res.status(200).json(group);
      }
      return res
        .status(404)
        .json({ message: `Group with name ${groupName} does not exist` });
    }
    case "PUT": {
      const groups = await getData("groups");
      const { id } = groups.find(({ name }) => name === groupName) ?? {};
      if (id) {
        const updatedGroup = await updateData("groups", groupName, body);
        if (updatedGroup) {
          return res.status(200).json(updatedGroup);
        }
        return res.status(404).json({ message: `Couldn't update the group` });
      }
      return res
        .status(404)
        .json({ message: `Group with name ${groupName} does not exist` });
    }
    case "DELETE": {
      await deleteData("groups", { key: "name", value: groupName });
      await deleteData("todos", { key: "group", value: groupName });
      return res.status(200).json({
        message: `Group with name ${groupName} successfully deleted`,
      });
    }
    default:
      return res.status(501);
  }
};

export default handler;
