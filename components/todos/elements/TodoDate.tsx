import { colors } from "consts/style";
import { useMemo } from "react";
import { formatDate } from "utils/todos";
import { TodoElementProps } from "./elements.types";

function TodoDate({
  todo: { date, time, completed },
  className,
}: TodoElementProps) {
  const { formattedDate, isToday, isPast } =
    formatDate(date, time, completed) ?? {};

  const textColor = useMemo(() => {
    if (!completed && isPast) return `text-${colors.red}`;
    else if (!completed && isToday) return `text-${colors.orange}`;
    return `text-${colors.gray}`;
  }, [completed, isPast, isToday]);

  return formattedDate ? (
    <span className={`${className} ${textColor} text-xs cursor-default pb-2`}>
      {formattedDate}
    </span>
  ) : null;
}

export default TodoDate;
