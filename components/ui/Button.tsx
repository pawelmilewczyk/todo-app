import { colors } from "consts/style";
import { ButtonProps } from "types/ui/button";

function Button({ label, color = "darkGray", ...props }: ButtonProps) {
  const bgColor = `bg-${colors[color]}`;

  return (
    <button
      className={`${bgColor} border border-zinc-600 hover:bg-opacity-75 text-white py-2 px-4 rounded uppercase max-w-[10rem] w-full transition-colors outline-none focus-visible:border-zinc-400`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
