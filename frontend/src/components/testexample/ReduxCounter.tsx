import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/reducers/test/actionCreators';
import { Dispatch } from 'redux';

const ReduxCounter: React.FC = () => {
	const counter = useSelector((state: any) => state.test.count);
	const dispatch: Dispatch<any> = useDispatch();

	const incrementCount = () => dispatch(increment());
	const decrementCount = () => dispatch(decrement());

	return (
		<>
			<h1 data-testid="counter">{counter}</h1>
			<button data-testid="button-up" onClick={incrementCount}>
				Up
			</button>
			<button data-testid="button-down" onClick={decrementCount}>
				Down
			</button>
		</>
	);
};

export default ReduxCounter;
