export const isNotOrEmptyArray = (array: unknown[]): boolean => {
  return !Array.isArray(array) || !array.length // Equals array.length === 0
}
