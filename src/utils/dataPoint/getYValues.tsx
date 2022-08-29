import { DataPoint } from '../../types/DataPoint'

export const getYValues = (data: DataPoint[]): number[] => {
  return data.map(([, y]) => y)
}
