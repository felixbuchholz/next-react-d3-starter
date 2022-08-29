import React, { RefObject, SVGProps } from 'react'

import { ChartDimensions } from '../../../types/Dimensions'
import { FCC } from '../../../types/FCC'

import styles from './SVGChartContainer.module.css'

export const SVGChartContainer: FCC<{
  className?: string
  divRef: RefObject<HTMLDivElement>
}> = ({ children, className, divRef }) => {
  return (
    <div className={`${styles.container} ${className}`} ref={divRef}>
      <svg {...svgDefinition} width="100%" height="100%">
        {children}
      </svg>
    </div>
  )
}

export const GroupGraph: FCC<{ margins: ChartDimensions['margins'] }> = ({
  children,
  margins,
}) => {
  return (
    <g transform={`translate(${margins.left}, ${margins.top})`}>{children}</g>
  )
}

const svgDefinition: SVGProps<SVGSVGElement> = {
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  xmlSpace: 'preserve',
}
