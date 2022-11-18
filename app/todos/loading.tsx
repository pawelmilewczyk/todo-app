function loading() {
  return (
    <div className="flex flex-col gap-y-4 items-center animate-pulse">
      <div className="bg-zinc-600 rounded-md h-8 w-28" />
      <div className="bg-zinc-600 p-2 rounded-md h-8 w-4/5" />
      <div className="bg-zinc-600 p-2 rounded-md h-10 w-full" />
      <div className="bg-zinc-600 p-2 rounded-md h-10 w-full" />
    </div>
  );
}

export default loading;
