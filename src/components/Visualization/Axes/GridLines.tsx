import { Axis, Orient } from 'd3-axis-for-react'
import React, { FC } from 'react'

import { UseScalesReturn } from '../../../types/hooks/useScales'
import { Dimensions } from '../../../types/visualization/Dimensions'

import { defaultTicks } from './Axes'

export const GridLines: FC<{
  graph: Dimensions
  scale: UseScalesReturn['y']
}> = ({ graph, scale }) => {
  return (
    <g transform={`translate(${graph.width}, 0)`} data-testid="groupGridLines">
      <Axis
        orient={Orient.left}
        scale={scale}
        ticks={[defaultTicks]}
        tickSize={graph.width}
        tickLineProps={{ strokeDasharray: '2 4', opacity: 0.5 }}
        tickSizeOuter={0}
        tickFormat={() => ''}
        domainPathProps={{ stroke: 'none' }}
      />
    </g>
  )
}
