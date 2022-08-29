/* eslint-disable max-lines-per-function */
import { curveBasis, line } from 'd3-shape'
import React, { useState, FC } from 'react'

import { DataPoint } from '../../../types/DataPoint'
import { UseScalesReturn } from '../hooks/useScales'

export const Trendline: FC<{ data: DataPoint[]; scales: UseScalesReturn }> = ({
  data,
  scales,
}) => {
  const [isInitial, setIsInitial] = useState(true)

  setTimeout(() => {
    setIsInitial(false)
  }, delayInitial)
  const lineGenerator = line<[string, number]>()
    .x(([x]) => scales.x(x) ?? noMatchCoordinate)
    .y(([, y]) => scales.y(y))
    .curve(curveBasis)

  const path = lineGenerator(data) ?? undefined
  const initialPath =
    lineGenerator(data.map(([x]) => [x, noDataYValue])) ?? undefined

  return (
    <path
      d={isInitial ? initialPath : path}
      opacity={isInitial ? opacityInitial : opacity}
    />
  )
}

const noMatchCoordinate = 0
const noDataYValue = 0
const delayInitial = 500
const opacityInitial = 0
const opacity = 1
