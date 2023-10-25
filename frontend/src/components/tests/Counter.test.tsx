import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Counter from '../Counter';

afterEach(cleanup);

it('should equal to 0', () => {
	const { getByTestId } = render(<Counter />);
	expect(getByTestId('counter')).toHaveTextContent('0');
});

it('increments counter', () => {
	const { getByTestId } = render(<Counter />);

	fireEvent.click(getByTestId('button-up'));

	expect(getByTestId('counter')).toHaveTextContent('1');
});

it('decrements counter', () => {
	const { getByTestId } = render(<Counter />);

	fireEvent.click(getByTestId('button-down'));

	expect(getByTestId('counter')).toHaveTextContent('-1');
});

it('increments counter after 0.5s', async () => {
	const { getByTestId, getByText } = render(<Counter />);

	fireEvent.click(getByTestId('button-delay'));

	const counter = await waitFor(() => getByText('1'));

	expect(counter).toHaveTextContent('1');
});
