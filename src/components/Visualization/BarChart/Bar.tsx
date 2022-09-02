import { FC, SVGAttributes } from 'react'

import { UseScalesReturn } from '../../../types/hooks/useScales'
import { getNumberOrZeroIfUndefined } from '../../../utils/guards/getNumberOrZeroIfUndefined'

import styles from './Bar.module.css'

export const Bar: FC<BarProps> = ({
  graphHeight,
  barWidth,
  className,
  scales,
  x: xValue,
  y: yValue,
  ...rectAttributes
}) => {
  const x = getNumberOrZeroIfUndefined(scales.x(xValue))
  const height = graphHeight - scales.y(yValue)
  const y = graphHeight - height
  return (
    <rect
      {...rectAttributes}
      className={`${styles.rect} ${className}`}
      x={x}
      y={y}
      width={barWidth}
      height={height}
      data-testid="bar"
    />
  )
}

type BarProps = {
  x: string
  y: number
  scales: UseScalesReturn
  barWidth: number
  graphHeight: number
} & SVGAttributes<SVGRectElement>
