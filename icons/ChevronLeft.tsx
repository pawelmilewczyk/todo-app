import { FC } from "react";
import { IconInterface } from "types/icons";

export const ChevronIcon: FC<IconInterface> = ({ size = "1.4rem" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      width={size}
      height={size}
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
