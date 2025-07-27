import processList from "./main";

describe("processList Function Tests", () => {
  test("Valid input list of length 20", () => {
    const inputList = Array.from({ length: 20 }, (_, index) => index + 1);
    const result = processList(inputList);
    expect(result).toEqual([1, 5, 7, 11, 13, 17, 19]);
  });

  test("Invalid input list length", () => {
    const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(() => processList(inputList)).toThrow(
      "List length must be a multiple of 10",
    );
  });

  test("Non-array input", () => {
    expect(() => processList("not an array")).toThrow("Input must be an array");
  });

  test("Input list contains non-numeric values", () => {
    const inputList = [1, 2, 3, "four", 5, 6, 7, 8, 9, 10];
    expect(() => processList(inputList)).toThrow(
      "All elements in the list must be numbers",
    );
  });
});
