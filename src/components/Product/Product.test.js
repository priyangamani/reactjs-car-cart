import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Product from './Product';

test('examples of some things', async () => {
  const { toJSON } = render(<Product />)
  expect(toJSON).toMatchSnapshot();
})


test('examples of some things', async () => {
    const { getByTestId,container } = render(<Product />)
    expect(container).toBeDefined();
  })