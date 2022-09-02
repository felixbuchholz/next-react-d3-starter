import { Axis, Orient } from 'd3-axis-for-react'
import React, { FC } from 'react'

import { UseScalesReturn } from '../../../types/hooks/useScales'
import { Dimensions } from '../../../types/visualization/Dimensions'

import { GridLines } from './GridLines'

export const Axes: FC<{ graph: Dimensions; scales: UseScalesReturn }> = ({
  graph,
  scales,
}) => {
  return (
    <g>
      <Axis orient={Orient.left} scale={scales.y} ticks={[defaultTicks]} />
      <GridLines graph={graph} scale={scales.y} />
      <g transform={`translate(0, ${graph.height})`}>
        <Axis scale={scales.x} />
      </g>
    </g>
  )
}

export const defaultTicks = 4
