/* eslint-disable max-lines-per-function */
import { curveCatmullRom, line } from 'd3-shape'
import React, { FC, SVGAttributes } from 'react'

import { useInitial } from '../../../hooks/useInitial'
import { UseScalesReturn } from '../../../types/hooks/useScales'
import { DataPoint } from '../../../types/visualization/DataPoint'

import styles from './Trendline.module.css'

export const Trendline: FC<
  { data: DataPoint[]; scales: UseScalesReturn } & SVGAttributes<SVGPathElement>
> = ({ data: dataOriginal, scales, className, ...pathAttributes }) => {
  const { data, opacity } = useInitial(dataOriginal)
  const offSet = scales.x.bandwidth() * half

  // TODO: refactor to separate function
  const lineGenerator = line<[string, number]>()
    .x(([x]) => (scales.x(x) ?? noMatchCoordinate) + offSet)
    .y(([, y]) => scales.y(y))
    .curve(curveCatmullRom)

  const path = lineGenerator(data) ?? undefined

  return (
    <path
      {...pathAttributes}
      d={path}
      opacity={opacity}
      className={`${styles.path} ${className}`}
      data-testid="trendline"
    />
  )
}
const half = 0.5
const noMatchCoordinate = 0
