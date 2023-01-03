import { ColorClassesInterface, ColorInterface } from "types/colors";
import { formatColorClasses } from "utils/colors";

export const colors: ColorInterface = {
  red: "red-500",
  orange: "orange-400",
  gray: "zinc-400",
  darkGray: "zinc-600",
  white: "zinc-100",
};

export const colorClasses: ColorClassesInterface = {
  bg: formatColorClasses(colors, "bg"),
  text: formatColorClasses(colors, "text"),
};
