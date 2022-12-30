import { addData, getData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/groups

const handler: NextApiHandler = async ({ method, body }, res) => {
  switch (method) {
    case "GET": {
      const groups = await getData("groups");
      return res.status(200).json(groups);
    }
    case "POST": {
      const groups = await getData("groups");
      const nameExists = groups.some(({ name }) => name === body.name);
      if (nameExists) {
        return res
          .status(409)
          .json({ message: `Group with name "${body.name}" already exists!` });
      } else {
        const newGroup = await addData("groups", body);
        return res.status(201).json(newGroup);
      }
    }

    default:
      return res.status(501);
  }
};

export default handler;
