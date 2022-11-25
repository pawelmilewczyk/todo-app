function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 items-center animate-pulse">
      <div className="bg-zinc-600 p-2 rounded-md h-11 w-full" />
      <div className="bg-zinc-600 p-2 rounded-md h-11 w-full" />
      <div className="bg-zinc-600 p-2 rounded-md h-11 w-full" />
      <div className="bg-zinc-600 p-2 rounded-md h-11 w-full" />
    </div>
  );
}

export default LoadingSkeleton;
