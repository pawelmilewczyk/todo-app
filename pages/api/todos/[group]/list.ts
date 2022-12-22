import { addData, deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";
import { filterTodos, sortTodos } from "utils/todos";

// api/todos/[group]/list
const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const group = query.group?.toString().toLowerCase();

  switch (method) {
    case "GET":
      const allTodos = await getData("todos");
      const todos = allTodos.filter(filterTodos(query)).sort(sortTodos);
      const isEmpty = !allTodos.filter(filterTodos({ group })).length;
      return res.status(200).json({ list: todos, isEmpty });
    default:
      return res.status(501);
  }
};

export default handler;
