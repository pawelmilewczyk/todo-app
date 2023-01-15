import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "consts/style";
import { ButtonProps } from "types/ui/button";

function Button({
  label,
  color = "darkGray",
  icon,
  className,
  ...props
}: ButtonProps) {
  const bgColor = `bg-${colors[color]}`;

  return (
    <button
      className={`${bgColor} flex gap-x-4 items-center justify-center border border-zinc-600 hover:bg-opacity-75 text-white py-2 px-4 rounded uppercase max-w-[10rem] w-full transition-colors outline-none focus-visible:border-zinc-400 ${className}`}
      {...props}
    >
      {icon && <FontAwesomeIcon size="xl" icon={icon} />}
      {label}
    </button>
  );
}

export default Button;
