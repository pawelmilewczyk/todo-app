import { ColorClassesInterface, ColorInterface } from "types/colors";
import { formatColorClasses } from "utils/colors";

export const colors: ColorInterface = {
  red: "red-500",
  orange: "orange-400",
  gray: "zinc-400",
  darkGray: "zinc-600",
  white: "zinc-100",
};

export const groupColors = {
  red: colors.red,
  orange: "orange-500",
  yellow: "yellow-500",
  green: "green-500",
  lime: "lime-500",
  stone: "stone-500",
  blue: "blue-500",
  cyan: "cyan-500",
  purple: "purple-500",
  fuchsia: "fuchsia-500",
  pink: "pink-500",
  white: colors.white,
};

export const colorClasses: ColorClassesInterface = {
  bg: formatColorClasses(colors, "bg"),
  text: formatColorClasses(colors, "text"),
};
