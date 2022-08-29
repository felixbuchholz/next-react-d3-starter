import { RefObject } from 'react'

import { ChartDimensions, Margins } from '../Dimensions'

type UseChartDimensionsProps = {
  margins?: Margins
}

export type UseChartDimensions = (
  props?: UseChartDimensionsProps
) => {
  ref: RefObject<HTMLDivElement>
  chartDimensions: ChartDimensions
}
