import { ScalePoint, ScaleLinear, scalePoint, scaleLinear } from 'd3-scale'

import { DataPoint } from '../../../types/DataPoint'
import { ChartDimensions } from '../../../types/Dimensions'
import { getExtent } from '../../../utils/dataPoint/getExtent'
import { getXValues } from '../../../utils/dataPoint/getXValues'
import { getYValues } from '../../../utils/dataPoint/getYValues'

type UseScalesProps = {
  data: DataPoint[]
  graph: ChartDimensions['graph']
}

export type UseScalesReturn = {
  x: ScalePoint<string>
  y: ScaleLinear<number, number>
}

type UseScales = (props: UseScalesProps) => UseScalesReturn

export const useScales: UseScales = ({ data, graph }) => {
  const x = scalePoint(getXValues(data), [scaleStartPoint, graph.width])
  const y = scaleLinear(getExtent(getYValues(data)), [
    graph.height,
    scaleStartPoint,
  ])
  return { x, y }
}

const scaleStartPoint = 0
