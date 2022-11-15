import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="overflow-auto px-4 py-2"> {children}</div>
      <footer className="flex items-center px-1 py-3 justify-between text-white">
        <button className="uppercase text-sm hover:bg-zinc-600 transition-colors px-4 py-2 rounded-md">
          + New task
        </button>
        <button className="uppercase text-sm hover:bg-zinc-600 transition-colors px-4 py-2 rounded-md">
          Add list
        </button>
      </footer>
    </div>
  );
}
