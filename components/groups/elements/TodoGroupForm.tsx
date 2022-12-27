import Input from "components/ui/Input";
import { groupInputs } from "consts/groups";
import { NewGroupInterface } from "types/todos";
import { handleSubmit } from "utils/formSubmit";

export interface TodoGroupFormProps {
  title: string;
  values: NewGroupInterface;
  onSubmit: (values: NewGroupInterface) => void;
}

function TodoGroupForm({ values, onSubmit, title }: TodoGroupFormProps) {
  return (
    <div>
      <h1 className="font-medium text-md text-center uppercase">{title}</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(groupInputs, onSubmit)}
      >
        <div className="text-zinc-100 p-6 grid gap-4 max-w-lg w-full mx-auto mb-2">
          <Input
            label="Name"
            name="name"
            defaultValue={values.name}
            placeholder="Name your group"
            required
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

export default TodoGroupForm;
