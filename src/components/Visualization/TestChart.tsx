/* eslint-disable no-magic-numbers */
import React, { FC } from 'react'

import { DataPoint } from '../../types/DataPoint'

import { useChartDimensions } from './hooks/useChartDimensions'
import { useScales } from './hooks/useScales'
import {
  GroupGraph,
  SVGChartContainer,
} from './SVGChartContainer/SVGChartContainer'
import { Trendline } from './Trendline/Trendline'

const data: DataPoint[] = [
  ['a', 100],
  ['b', 9],
  ['c', 60],
  ['d', 5],
]

export const TestChart: FC = () => {
  const { ref, chartDimensions } = useChartDimensions()
  const { graph, margins } = chartDimensions
  const scales = useScales({ data, graph })
  return (
    <>
      <SVGChartContainer divRef={ref}>
        <GroupGraph margins={margins}>
          <Trendline data={data} scales={scales} />
        </GroupGraph>
      </SVGChartContainer>
    </>
  )
}
