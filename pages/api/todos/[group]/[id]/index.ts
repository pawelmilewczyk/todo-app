import { deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/todos/[group]/[todoId]
const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const id = String(query.id);
  switch (method) {
    case "GET":
      const todos = await getData("todos");
      const todo = todos.find((todo) => todo.id === id);
      if (todo) return res.status(200).json(todo);
      return res.status(404);
    case "PUT":
      const updatedTodo = await updateData("todos", id, body);
      if (updatedTodo) return res.status(200).json(updatedTodo);
      return res.status(404);
    case "DELETE":
      await deleteData("todos", { key: "id", value: id });
      res.status(200);
    default:
      return res.status(501);
  }
};

export default handler;
