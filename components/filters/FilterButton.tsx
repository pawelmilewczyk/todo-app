interface FilterButtonProps<T> {
  label: T;
  active: boolean;
  onClick: (label: T) => void;
}

function FilterButton<T>({ label, active, onClick }: FilterButtonProps<T>) {
  const handleClick = () => onClick(label);

  return (
    <button
      aria-label={label as string}
      className={`w-[8rem] px-2 py-1 rounded-md cursor-pointer select-none uppercase transition-colors 
                outline-none border border-zinc-400 focus-visible:outline-zinc-400 focus-visible:outline-offset-0 ${
                  active ? "text-zinc-800 bg-zinc-100" : "hover:bg-zinc-600"
                }`}
      onClick={handleClick}
    >
      {label as string}
    </button>
  );
}

export default FilterButton;
