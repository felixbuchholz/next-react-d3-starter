/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { dataTest } from '../../../tests/common/dataTest'
import { scalesTest } from '../../../tests/common/scalesTest'

import { Trendline } from './Trendline'

describe('BarChart', () => {
  describe('renders bars', () => {
    it('should render a correct rectangle', async () => {
      render(
        <svg>
          <Trendline data={dataTest} scales={scalesTest} />
        </svg>
      )

      const trendline = screen.getByTestId('trendline')

      expect(trendline.getAttribute('d')).toBe(
        'M12.5,100C12.5,100,29.166666666666668,100,37.5,100C45.833333333333336,100,54.166666666666664,100,62.5,100C70.83333333333333,100,87.5,100,87.5,100'
      )
    })
  })
})
