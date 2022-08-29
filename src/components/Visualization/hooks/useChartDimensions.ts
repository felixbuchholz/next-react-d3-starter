import { useEffect, useState } from 'react'

import { ChartDimensions, Dimensions, Margins } from '../../../types/Dimensions'
import { UseChartDimensions } from '../../../types/hooks/useChartDimensions'

import {
  defaultDimensions,
  useDebouncedDimensions,
} from './useDebouncedDimensions'

export const useChartDimensions: UseChartDimensions = (
  props = defaultProps
) => {
  const margins = props.margins ?? defaultMargins
  const { ref, dimensions: frame } = useDebouncedDimensions()
  const [chartDimensions, setChartDimensions] = useState<ChartDimensions>({
    ...defaultChartDimensions,
    margins,
  })

  useEffect(() => {
    if (hasChangedFrameOrMargins({ chartDimensions, frame, margins })) {
      setChartDimensions(prev => {
        return getUpdatedChartDimensions({ prev, frame, margins })
      })
    }
  }, [chartDimensions, frame, margins])

  return { ref, chartDimensions }
}

const defaultMargins = {
  bottom: 10,
  left: 10,
  right: 10,
  top: 10,
}

const defaultProps = { margins: defaultMargins }

const defaultChartDimensions: ChartDimensions = {
  frame: defaultDimensions,
  margins: defaultMargins,
  graph: defaultDimensions,
}

const getUpdatedChartDimensions = ({
  prev,
  frame,
  margins,
}: {
  prev: ChartDimensions
  frame: Dimensions
  margins: Margins
}): ChartDimensions => {
  const _dimensions = { ...prev }
  _dimensions.frame = frame
  _dimensions.graph.height = frame.height - (margins.bottom + margins.top)
  _dimensions.graph.width = frame.width - (margins.left + margins.right)
  _dimensions.margins = margins
  return _dimensions
}

const hasChangedFrameOrMargins = ({
  chartDimensions,
  frame,
  margins,
}: {
  chartDimensions: ChartDimensions
  frame: Dimensions
  margins: Margins
}): boolean => {
  return (
    !Object.is(frame, chartDimensions.frame) ||
    !Object.is(margins, chartDimensions.margins)
  )
}
