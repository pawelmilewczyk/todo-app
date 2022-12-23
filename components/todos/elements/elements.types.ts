import { FormEventHandler } from "react";
import {
  NewTodoInterface,
  TodoGroupInterface,
  TodoInterface,
} from "types/todos";

export interface TodoElementProps {
  todo: TodoInterface;
  className?: string;
}

export interface TodoFormProps {
  groups: TodoGroupInterface[];
  values: NewTodoInterface;
  title: string;
  onSubmit: (values: NewTodoInterface) => void;
}
