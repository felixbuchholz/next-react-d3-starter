/* eslint-disable no-magic-numbers */
import React, { FC } from 'react'

import { useChartDimensions } from '../../hooks/useChartDimensions'
import { useScales } from '../../hooks/useScales'
import { DataPoint } from '../../types/visualization/DataPoint'

import { Axes } from './Axes/Axes'
import { BarChart } from './BarChart/BarChart'
import { GroupGraph } from './SVGChartContainer/GroupGraph'
import { SVGChartContainer } from './SVGChartContainer/SVGChartContainer'
import styles from './TestChart.module.css'
import { Trendline } from './Trendline/Trendline'

const data: DataPoint[] = [
  ['x', 50],
  ['a', 20],
  ['b', 90],
  ['c', 60],
  ['d', 110],
  ['e', 20],
  ['f', 80],
  ['g', 100],
  ['h', 5],
  ['i', 80],
  ['j', 10],
  ['k', 50],
]

const margins = { bottom: 20, left: 25, right: 10, top: 10 }
const options = { includeZero: true, paddingInner: 0.5, paddingOuter: 0.5 }

export const TestChart: FC = () => {
  const { ref, chartDimensions } = useChartDimensions({ margins })
  const { graph } = chartDimensions
  const scales = useScales({ data, graph }, options)
  return (
    <>
      <SVGChartContainer divRef={ref} className={styles.container}>
        <GroupGraph margins={margins}>
          <BarChart data={data} scales={scales} />
          <Trendline data={data} scales={scales} />
          <Axes graph={graph} scales={scales} />
        </GroupGraph>
      </SVGChartContainer>
    </>
  )
}
