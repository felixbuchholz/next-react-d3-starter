/* eslint-disable no-magic-numbers */
import { cloneElement, FC } from 'react'

import { DataPoint, ChildWithDataPointProps } from '../../types/DataPoint'

import styles from './VisualizationContainer.module.css'

const data: DataPoint[] = [
  ['a', 100],
  ['b', 200],
  ['c', 500],
]

export const VisualizationTestContainer: FC<{
  children: ChildWithDataPointProps
}> = ({ children }) => {
  if (!children) {
    return null
  }

  return (
    <div className={styles.container}>{cloneElement(children, { data })}</div>
  )
}
