import {
  isValid,
  format,
  isBefore,
  isToday,
  isTomorrow,
  isYesterday,
  formatDistance,
} from "date-fns";

export const formatDate = (
  deadline: string | undefined,
  completed: boolean
) => {
  if (!deadline) return null;

  const date = new Date(deadline);
  if (isValid(date)) {
    let formattedDate = format(date, "yyyy/MM/dd");
    const isPast = isBefore(date, Date.now()) && !isToday(date);

    if (!completed) {
      if (isToday(date)) {
        formattedDate = "Today";
      } else if (isTomorrow(date)) {
        formattedDate = "Tomorrow";
      } else if (isYesterday(date)) {
        formattedDate = "Yesterday";
      } else if (isPast) {
        formattedDate = formatDistance(date, Date.now(), { addSuffix: true });
      }

      const time = format(date, "HH:mm");
      if (time !== "00:00") {
        formattedDate = `${formattedDate}, ${time}`;
      }
    }

    return { formattedDate, isPast, isToday: isToday(date) };
  }
  return null;
};
