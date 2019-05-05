import React from 'react';
import { render } from 'react-testing-library';
import Dictionary from 'components/Dictionary';

it('renders <Dictionary> component', () => {
  const { getByTestId } = render(<Dictionary />);

  expect(getByTestId('dictionary').children.length).toBe(2);
});
