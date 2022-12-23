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
  dateAsString: string | undefined,
  time: string | undefined,
  completed: boolean
) => {
  if (!dateAsString) return null;

  const date = time
    ? new Date(`${dateAsString}, ${time}`)
    : new Date(dateAsString);

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

      if (time) {
        formattedDate = `${formattedDate}, ${time}`;
      }
    }

    return { formattedDate, isPast, isToday: isToday(date) };
  }
  return null;
};
