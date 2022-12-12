"use client";

import { routes } from "consts/routes";
import { ChevronIcon } from "icons/ChevronLeft";
import Link from "next/link";
import { useRouter } from "next/navigation";

function BackButton() {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      className="mt-4 absolute left-10 top-0 cursor-pointer p-1 leading-none rounded-full outline-none
    hover:bg-zinc-600 active:scale-95 transition focus-visible:outline-zinc-300"
    >
      <ChevronIcon />
    </button>
  );
}

export default BackButton;
