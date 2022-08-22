import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('should have a welcome message', () => {
    render(<Welcome />)
    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
  })
})
