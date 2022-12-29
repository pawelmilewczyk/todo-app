export type Colors = "red" | "orange" | "gray" | "darkGray" | "white";

type ColorInterface = Record<Colors, string>;

export interface ColorClassesInterface {
  bg: ColorInterface;
  text: ColorInterface;
}
