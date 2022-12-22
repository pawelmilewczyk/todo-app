import { addData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/todos
const handler: NextApiHandler = async ({ method, body }, res) => {
  switch (method) {
    case "POST":
      const newTodo = await addData("todos", body);
      return res.status(201).json(newTodo);
    default:
      return res.status(501);
  }
};

export default handler;
