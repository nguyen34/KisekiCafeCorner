import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup, fireEvent } from '@testing-library/react';
import reducer from '../../store/index';
import ReduxCounter from '../ReduxCounter';

interface RenderWithReduxProps {
	initialState?: any;
	store?: any;
}

const renderWithRedux = (
	component: any,
	{
		initialState,
		store = configureStore({
			reducer: reducer,
			middleware: [thunk],
			preloadedState: initialState,
		}),
	}: RenderWithReduxProps = {}
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

afterEach(cleanup);

it('checks initial state is equal to 0', () => {
	const { getByTestId } = renderWithRedux(<ReduxCounter />);
	expect(getByTestId('counter')).toHaveTextContent('0');
});

it('increments the counter through redux', () => {
	const { getByTestId } = renderWithRedux(<ReduxCounter />, {
		initialState: { test: { count: 5 } },
	});
	fireEvent.click(getByTestId('button-up'));
	expect(getByTestId('counter')).toHaveTextContent('6');
});

it('decrements the counter through redux', () => {
	const { getByTestId } = renderWithRedux(<ReduxCounter />, {
		initialState: { test: { count: 100 } },
	});
	fireEvent.click(getByTestId('button-down'));
	expect(getByTestId('counter')).toHaveTextContent('99');
});
