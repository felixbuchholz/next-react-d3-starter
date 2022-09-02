/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import React from 'react'

import '@testing-library/jest-dom'

import { useScales } from '../../../hooks/useScales'
import { dataTest } from '../../../tests/common/dataTest'
import { graphTest } from '../../../tests/common/graphTest'

import { GridLines } from './GridLines'

describe('GridLines', () => {
  it('renders correct transform', () => {
    const scales = useScales({ data: dataTest, graph: graphTest })
    render(
      <svg>
        <GridLines graph={graphTest} scale={scales.y} />
      </svg>
    )

    const group = screen.getByTestId('groupGridLines')

    expect(group.getAttribute('transform')).toBe(
      `translate(${graphTest.width}, 0)`
    )
  })
})
