import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import 'jsdom'
import App from '../src/App'

describe('useConnection unit test', () => {
  test('hook is true', () => {
    render(<App />)

    expect(screen.getByTestId('statusId').innerHTML).toContain('online')
  })
})