import { format } from "date-fns";

export const getTodayDate = () => format(Date.now(), "yyyy-MM-dd");
