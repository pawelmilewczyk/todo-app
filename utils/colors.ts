import { ColorInterface } from "types/colors";

export const formatColorClasses = (
  colors: Record<string, string>,
  value: string
) =>
  Object.entries(colors)
    .map(([key, color]) => ({ key, color: `${value}-${color}` }))
    .reduce(
      (prev, { key, color }) => ({ ...prev, [key]: color }),
      {}
    ) as ColorInterface;
