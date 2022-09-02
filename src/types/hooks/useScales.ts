import { ScaleLinear, ScaleBand } from 'd3-scale'

import { DataPoint } from '../visualization/DataPoint'
import { ChartDimensions } from '../visualization/Dimensions'

export type UseScales = (
  props: UseScalesProps,
  options?: UseScalesOptions
) => UseScalesReturn

export type UseScalesReturn = {
  x: ScaleBand<string>
  y: ScaleLinear<number, number>
}
type UseScalesProps = {
  data: DataPoint[]
  graph: ChartDimensions['graph']
}
export type UseScalesOptions = {
  includeZero?: boolean
  yRange?: [number | undefined, number | undefined]
  padding?: number // between 0 (= no padding) and 1 (= all padding, no width)
  paddingInner?: number // between 0 (= no padding) and 1 (= all padding, no width)
  paddingOuter?: number // between 0 (= no padding) and 1 (= all padding, no width)
}
