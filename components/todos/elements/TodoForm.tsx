import Form from "components/ui/Form";
import Input from "components/ui/Input";
import Select from "components/ui/Select";
import { todoInputs } from "consts/todos";
import { ChangeEventHandler, useState } from "react";
import { getTodayDate } from "utils/dates";
import { handleSubmit } from "utils/formSubmit";
import { TodoFormProps } from "./elements.types";

function TodoForm({
  groups,
  values: { name, group, ...values },
  onSubmit,
  title,
}: TodoFormProps) {
  const [date, setDate] = useState(values.date ?? "");
  const [time, setTime] = useState(values.time ?? "");

  const onDateChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setDate(target.value);
  };

  const onTimeChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTime(target.value);
    if (!date) {
      setDate(getTodayDate());
    }
  };

  return (
    <Form onSubmit={handleSubmit(todoInputs, onSubmit)} title={title}>
      <div className="text-zinc-100 p-6 grid gap-4 max-w-lg w-full mx-auto mb-2">
        <Input
          label="Name"
          name="name"
          defaultValue={name}
          placeholder="Name your task"
          required
        />
        <Select
          options={groups}
          label="Group"
          name="group"
          defaultValue={group.name && group.id ? JSON.stringify(group) : ""}
          placeholder="Select group"
          required
        />
        <Input
          label="Date"
          name="date"
          type="date"
          value={date}
          onChange={onDateChange}
        />
        <Input
          label="Time"
          name="time"
          type="time"
          value={time}
          onChange={onTimeChange}
        />
      </div>
    </Form>
  );
}

export default TodoForm;
