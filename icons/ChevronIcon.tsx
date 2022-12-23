import { IconInterface } from "types/icons";
import SvgComponent from "./SvgComponent";

function ChevronIcon(props: IconInterface) {
  return (
    <SvgComponent {...props}>
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
        clipRule="evenodd"
      />
    </SvgComponent>
  );
}

export default ChevronIcon;