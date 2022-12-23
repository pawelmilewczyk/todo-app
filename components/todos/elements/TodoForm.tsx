import Select from "components/ui/Select";
import Input from "components/ui/Input";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NewTodoInterface } from "types/todos";
import { TodoFormProps } from "./elements.types";
import { getTodayDate } from "utils/dates";

const inputNames: Array<keyof NewTodoInterface> = [
  "title",
  "group",
  "date",
  "time",
];

function TodoForm({ groups, values, onSubmit, title }: TodoFormProps) {
  const [date, setDate] = useState(values.date ?? "");
  const [time, setTime] = useState(values.time ?? "");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const values = inputNames.reduce(
      (prev, value) => ({ ...prev, [value]: formData.get(value)?.toString() }),
      {}
    ) as NewTodoInterface;

    onSubmit(values);
  };

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
    <div>
      <h1 className="font-medium text-md text-center uppercase">{title}</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="text-zinc-100 p-6 grid gap-4 max-w-lg w-full mx-auto mb-2">
          <Input
            label="Title"
            name="title"
            defaultValue={values.title}
            placeholder="Name your task"
            required
          />
          <Select
            options={groups}
            label="Group"
            name="group"
            defaultValue={values.group}
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
        <button
          type="submit"
          className="bg-zinc-600 border border-zinc-600 hover:bg-zinc-600/50 text-white py-2 px-4 rounded uppercase max-w-[10rem] w-full transition-colors outline-none focus-visible:border-zinc-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
