import { addDays, format, parseISO, subDays } from "date-fns";
import { getTodayDate } from "utils/dates";
import { formatDate, isTimeValid } from "utils/todos";

describe("formatDate", () => {
  test("validates time correctly", () => {
    expect(isTimeValid("12:5")).toBeFalsy();
    expect(isTimeValid("25:12")).toBeFalsy();
    expect(isTimeValid("12:61")).toBeFalsy();
    expect(isTimeValid("12:00")).toBeTruthy();
  });

  test("returns formatted date", () => {
    const date = format(addDays(new Date(), 5), "yyyy-MM-dd");
    const { formattedDate } = formatDate(date, undefined, false) ?? {};
    expect(formattedDate).toEqual(format(parseISO(date), "yyyy/MM/dd"));
  });

  test("returns connected date with time [in 3 days]", () => {
    const date = format(addDays(new Date(), 3), "yyyy-MM-dd");
    const { formattedDate } = formatDate(date, "15:00", false) ?? {};

    expect(formattedDate).toEqual(
      `${format(parseISO(date), "yyyy/MM/dd")}, 15:00`
    );
  });

  test("returns connected date with time [2022-12-22]", () => {
    const { formattedDate } = formatDate("2022-12-22", "15:00", false) ?? {};
    expect(formattedDate).toEqual("2022/12/22, 15:00");
  });

  test("returns connected date with time [today]", () => {
    const { formattedDate } = formatDate(getTodayDate(), "15:00", false) ?? {};
    expect(formattedDate).toEqual(`Today, 15:00`);
  });

  test("returns tomorrow label", () => {
    const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");
    const { formattedDate } = formatDate(tomorrow, "15:00", false) ?? {};
    expect(formattedDate).toEqual("Tomorrow, 15:00");
  });

  test("returns yesterday label", () => {
    const yesterday = format(subDays(new Date(), 1), "yyyy-MM-dd");
    const { formattedDate } = formatDate(yesterday, "15:00", false) ?? {};
    expect(formattedDate).toEqual("Yesterday, 15:00");
  });
});
