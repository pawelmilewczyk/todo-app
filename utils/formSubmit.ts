import { FormEventHandler } from "react";

function isJsonString(string: string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

export const handleSubmit =
  <T extends {}>(
    inputs: Array<keyof T>,
    onSubmit: (values: T) => void
  ): FormEventHandler<HTMLFormElement> =>
  (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const values = inputs.reduce((prev, value) => {
      const input = formData.get(value as string)?.toString() ?? "";
      return {
        ...prev,
        [value]: isJsonString(input) ? JSON.parse(input) : input,
      };
    }, {}) as T;

    // onSubmit(values);
    console.log(values);
  };
