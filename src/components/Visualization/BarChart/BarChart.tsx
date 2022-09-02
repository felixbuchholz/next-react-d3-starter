import { FC, SVGAttributes } from 'react'

import { useInitial } from '../../../hooks/useInitial'
import { UseScalesReturn } from '../../../types/hooks/useScales'
import { DataPoint } from '../../../types/visualization/DataPoint'
import { getGraphHeightFromYScale } from '../../../utils/visualization/getGraphHeightFromYScale'

import { Bar } from './Bar'

export const BarChart: FC<
  { data: DataPoint[]; scales: UseScalesReturn } & SVGAttributes<SVGRectElement>
> = ({ data: dataOriginal, scales, className, ...rectAttributes }) => {
  const { data, opacity } = useInitial(dataOriginal)
  const graphHeight = getGraphHeightFromYScale(scales.y)
  const barWidth = scales.x.bandwidth()

  return (
    <g opacity={opacity} data-testid="barChart">
      {data.map(([x, y]) => {
        return (
          <Bar
            {...rectAttributes}
            key={`${x}`}
            barWidth={barWidth}
            className={className}
            graphHeight={graphHeight}
            scales={scales}
            x={x}
            y={y}
          />
        )
      })}
    </g>
  )
}
