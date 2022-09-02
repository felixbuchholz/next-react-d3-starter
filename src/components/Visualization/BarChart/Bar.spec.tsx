/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { scalesTest } from '../../../tests/common/scalesTest'

import { Bar } from './Bar'

describe('Bar', () => {
  describe('with mocked scales', () => {
    const mockScales = {
      x: () => 0,
      y: () => 0,
    }

    it('should render a correct rectangle', () => {
      render(
        <svg>
          <Bar
            className="test"
            x={'a'}
            y={10}
            barWidth={10}
            graphHeight={100}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            scales={mockScales}
          />
        </svg>
      )

      const bar = screen.getByTestId('bar')

      expect(bar).toBeInTheDocument()
      expect(bar).toHaveClass('test')

      expect(bar.getAttribute('x')).toBe('0')
      expect(bar.getAttribute('y')).toBe('0')
      expect(bar.getAttribute('height')).toBe('100')
    })
  })

  describe('integration with the useScales hook', () => {
    it('should render a correct rectangle', () => {
      render(
        <svg>
          <Bar
            className="test"
            x={'a'}
            y={10}
            barWidth={10}
            graphHeight={100}
            scales={scalesTest}
          />
        </svg>
      )

      const bar = screen.getByTestId('bar')

      expect(bar.getAttribute('x')).toBe('0')
      expect(bar.getAttribute('y')).toBe('90')
      expect(bar.getAttribute('height')).toBe('10')
    })
  })
})
