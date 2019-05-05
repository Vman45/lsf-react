import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from 'components/Dashboard';

it('renders <Dashboard> component', () => {
  const { getByTestId } = render(<Dashboard />);
  expect(getByTestId('dashboard')).toBeVisible();
});
