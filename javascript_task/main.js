/**
 * Remove items at positions which are multiples of 2 or 3.
 * @param {Array<number>} inputList - List of integers.
 * @returns {Array<number>} - Modified list with items removed.
 */
function removeMultiples(inputList) {
  return inputList.filter(
    (_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0,
  );
}

/**
 * Process the input list and handle errors.
 * @param {Array<number>} inputList - List of integers.
 * @returns {Array<number>} - Modified list or throws an error.
 * @throws {TypeError|RangeError} - For invalid input types or lengths.
 */
function processList(inputList) {
  if (!Array.isArray(inputList)) {
    throw new TypeError("Input must be an array");
  }

  if (!inputList.length === 0) {
    throw new TypeError("Input list cannot be empty");
  }

  if (
    !inputList.every(
      (item) => typeof item === "number" && Number.isFinite(item),
    )
  ) {
    throw new TypeError("All elements in the list must be finite numbers");
  }

  if (inputList.length % 10 !== 0) {
    throw new RangeError("List length must be a mutliple of 10.");
  }

  return removeMultiples(inputList);
}

export default processList;
