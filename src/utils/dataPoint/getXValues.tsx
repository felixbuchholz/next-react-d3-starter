import { DataPoint } from '../../types/DataPoint'

export const getXValues = (data: DataPoint[]): string[] => {
  return data.map(([x]) => x)
}
