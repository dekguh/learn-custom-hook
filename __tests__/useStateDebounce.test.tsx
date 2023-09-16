import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe } from 'vitest'
import 'jsdom'
import App from '../src/App'

describe('useStateDevounce unit test', () => {
  test('input is change then not showing value', () => {
    render(<App />)

    fireEvent.change(screen.getByTestId('inputId'), {
      target: {
        value: 'test 1234'
      }
    })
    expect(screen.getByTestId('resultId').outerHTML).not.toContain('test 1234')
  })

  test('input is change then value is showing', async () => {
    render(<App />)

    fireEvent.change(screen.getByTestId('inputId'), {
      target: {
        value: 'test 1234'
      }
    })
    await waitFor(() => {
      expect(screen.getByTestId('resultId').outerHTML).toContain('test 1234')
    })
  })
})