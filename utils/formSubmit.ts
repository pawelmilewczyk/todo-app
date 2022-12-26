import { FormEventHandler } from "react";

export const handleSubmit =
  <T extends {}>(
    inputs: Array<keyof T>,
    onSubmit: (values: T) => void
  ): FormEventHandler<HTMLFormElement> =>
  (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const values = inputs.reduce(
      (prev, value) => ({
        ...prev,
        [value]: formData.get(value as string)?.toString(),
      }),
      {}
    ) as T;

    // onSubmit(values);
    console.log(values);
  };
