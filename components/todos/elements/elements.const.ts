import { format } from "date-fns";
import { NewTodoInterface } from "types/todos";

export const defaultFormValues: NewTodoInterface = {
  group: "",
  title: "",
  deadline: format(Date.now(), "yyyy/MM/dd"),
};
