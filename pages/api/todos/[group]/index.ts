import { StaticGroups } from "consts/groups";
import { addData, deleteData, getData, updateData } from "data/fileSystem";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async ({ method, body, query }, res) => {
  const group = query.group?.toString().toLowerCase();
  console.log(query);
  switch (method) {
    case "GET":
      const allTodos = await getData("todos");
      const todos = allTodos.filter((todo) => {
        if (group === StaticGroups.Today) {
          // return all with deadline for today
          return true;
        } else if (group === StaticGroups.Scheduled) {
          // return all with assigned deadline date
          return true;
        }
        return group === todo.group.toLowerCase();
      });
      return res.status(200).json(todos);
    case "POST":
      const newTodo = await addData("todos", body);
      return res.status(201).json(newTodo);
    default:
      return res.status(501);
    case "PUT":
      const groups = await getData("groups");
      const id = groups.find(({ name }) => name === group)?.id;
      if (id) {
        const updatedGroup = await updateData("groups", id, body);
        res.status(200).json(updatedGroup);
      }
      return res.status(404);
    case "DELETE":
      await deleteData("groups", { key: "name", value: group });
      await deleteData("todos", { key: "group", value: group });
      res.status(200);
  }
};

export default handler;
