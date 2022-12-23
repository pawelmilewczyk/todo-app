import { PropsWithChildren, useMemo } from "react";
import { IconInterface } from "types/icons";

type Props = PropsWithChildren & IconInterface;

function SvgComponent({ size = "sm", children }: Props) {
  const widthAndHeight = useMemo(() => {
    switch (size) {
      case "lg":
        return "24px";
      case "md":
        return "20px";
      default:
        return "16px";
    }
  }, [size]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={widthAndHeight}
      height={widthAndHeight}
    >
      {children}
    </svg>
  );
}

export default SvgComponent;
