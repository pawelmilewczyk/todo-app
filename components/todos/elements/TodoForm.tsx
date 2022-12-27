import Input from "components/ui/Input";
import Select from "components/ui/Select";
import { todoInputs } from "consts/todos";
import { ChangeEventHandler, useState } from "react";
import { getTodayDate } from "utils/dates";
import { handleSubmit } from "utils/formSubmit";
import { TodoFormProps } from "./elements.types";

function TodoForm({ groups, values, onSubmit, title }: TodoFormProps) {
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
    <div>
      <h1 className="font-medium text-md text-center uppercase">{title}</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(todoInputs, onSubmit)}
      >
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
            defaultValue={JSON.stringify(values.group)}
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
