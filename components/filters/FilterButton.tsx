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
      className={`px-2 py-1 rounded-md cursor-pointer select-none uppercase transition-colors outline-none  focus-visible:outline-zinc-300 ${
        active ? "text-zinc-800 bg-white" : "hover:bg-zinc-600"
      }`}
      onClick={handleClick}
    >
      {label as string}
    </button>
  );
}

export default FilterButton;
