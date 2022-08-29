import { extent } from 'd3-array'

export const getExtent = (nums: number[]): [] | [number, number] => {
  const extentD3 = extent(nums)
  if (extentD3[indexExtentTest] === undefined) {
    return []
  }
  return extentD3
}
const indexExtentTest = 0
