import { useMemo } from "react";
import { formatDate } from "../todos.utils";
import { TodoElementProps } from "./elements.types";

function TodoDeadline({
  todo: { deadline, completed },
  className,
}: TodoElementProps) {
  const { formattedDate, isToday, isPast } =
    formatDate(deadline, completed) ?? {};

  const colorClass = useMemo(() => {
    if (!completed && isPast) return "text-red-500";
    else if (!completed && isToday) return "text-orange-400";
    return "text-zinc-400";
  }, [completed, isPast, isToday]);

  return formattedDate ? (
    <span className={`${className} text-xs cursor-default pb-2 ${colorClass}`}>
      {formattedDate}
    </span>
  ) : null;
}

export default TodoDeadline;
