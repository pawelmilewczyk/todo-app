import { formatColorClasses } from "utils/colors";

const colors = {
  red: "red-500",
  orange: "orange-400",
};

test("correctly format color classes", () => {
  const bgColorClasses = formatColorClasses(colors, "bg");

  expect(bgColorClasses).toEqual({
    red: "bg-red-500",
    orange: "bg-orange-400",
  });

  const textColorClasses = formatColorClasses(colors, "text");
  expect(textColorClasses).toEqual({
    red: "text-red-500",
    orange: "text-orange-400",
  });
});
