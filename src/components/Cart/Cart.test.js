import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Cart from './Cart';

test('examples of some things', async () => {
  const { toJSON } = render(<Cart />)
  expect(toJSON).toMatchSnapshot();
})


test('examples of some things', async () => {
    const { getByTestId,container } = render(<Cart />)
    const input = getByTestId('icon-img');
    expect(container).toBeDefined();
  })