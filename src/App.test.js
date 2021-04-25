import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('renders learn react link', () => {
    render(<App />)
    expect(
      screen.getByRole('link', { name: /learn react/i })
    ).toBeInTheDocument()
  })
})
