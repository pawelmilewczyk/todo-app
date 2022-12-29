import { colorClasses } from "consts/style";
import { ButtonColor, ButtonProps } from "types/ui/button";

const colors: Record<ButtonColor, string> = {
  default: colorClasses.bg.darkGray,
  danger: colorClasses.bg.red,
};

function Button({ label, color = "default", ...props }: ButtonProps) {
  const bgColor = colors[color];

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
