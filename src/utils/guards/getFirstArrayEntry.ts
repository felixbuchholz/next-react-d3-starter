import { isNotOrEmptyArray } from './isNotOrEmptyArray'

export const getFirstArrayEntry = <T>(array: T[]): T => {
  if (isNotOrEmptyArray(array)) {
    throw new Error('Resize observer did not include parent div')
  }
  return array[firstEntryIndex]
}
const firstEntryIndex = 0
