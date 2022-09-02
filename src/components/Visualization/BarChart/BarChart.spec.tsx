/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { dataTest } from '../../../tests/common/dataTest'
import { scalesTest } from '../../../tests/common/scalesTest'

import { BarChart } from './BarChart'

describe('BarChart', () => {
  describe('renders bars', () => {
    it('should render a correct rectangle', async () => {
      render(
        <svg>
          <BarChart data={dataTest} scales={scalesTest} />
        </svg>
      )

      const barChart = screen.getByTestId('barChart')
      const bars = screen.getAllByTestId('bar')

      expect(barChart).toBeInTheDocument()
      expect(bars).toHaveLength(dataTest.length)

      // useInitial integration
      expect(barChart.getAttribute('opacity')).toBe('0')
      expect(bars[1].getAttribute('height')).toBe('0')
      await waitFor(() => expect(barChart.getAttribute('opacity')).toBe('1'))

      // useScales integrations
      // run after !isInitial
      expect(bars[0].getAttribute('height')).toBe(dataTest[0][1].toString())
      expect(bars[1].getAttribute('height')).toBe(dataTest[1][1].toString())
    })
  })
})
