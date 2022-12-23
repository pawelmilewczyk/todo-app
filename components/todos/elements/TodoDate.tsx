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

  const color = useMemo(() => {
    if (!completed && isPast) return colors.red;
    else if (!completed && isToday) return colors.orange;
    return colors.gray;
  }, [completed, isPast, isToday]);

  return formattedDate ? (
    <span
      style={{ color }}
      className={`${className} text-xs cursor-default pb-2`}
    >
      {formattedDate}
    </span>
  ) : null;
}

export default TodoDate;
