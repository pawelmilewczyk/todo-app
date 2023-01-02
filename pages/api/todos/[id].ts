import { deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";

// api/todos/[todoId]
const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const todoId = String(query.id);

  switch (method) {
    case "GET":
      const todos = await getData("todos");
      const todo = todos.find((todo) => todo.id === todoId);
      if (todo) {
        return res.status(200).json(todo);
      }
      return res
        .status(404)
        .json({ message: `Todo with id ${todoId} does not exist` });
    case "PUT":
      const updatedTodo = await updateData("todos", todoId, body);
      if (updatedTodo) {
        return res.status(200).json(updatedTodo);
      }
      return res.status(404).json({ message: `Couldn't update the task` });
    case "DELETE":
      await deleteData("todos", { key: "id", value: todoId });
      return res
        .status(200)
        .json({ message: `Task with id "${todoId}" successfully deleted` });
    default:
      return res.status(501);
  }
};

export default handler;
