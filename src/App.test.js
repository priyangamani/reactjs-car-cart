import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import App from './App';

test('examples of some things', async () => {
  const { toJSON } = render(<App />)
  expect(toJSON).toMatchSnapshot()
})