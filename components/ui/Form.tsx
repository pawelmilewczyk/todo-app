"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler, PropsWithChildren } from "react";
import Button from "./Button";

interface Props extends PropsWithChildren {
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

function Form({ onSubmit, title, children }: Props) {
  const { back } = useRouter();

  return (
    <div>
      <h1 className="font-medium text-md text-center uppercase">{title}</h1>
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        {children}
        <div className="grid grid-cols-2 gap-4">
          <Button
            label="Cancel"
            color="transparent"
            type="button"
            onClick={back}
          />
          <Button label="Save" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
