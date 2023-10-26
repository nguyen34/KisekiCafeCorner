import React from 'react';

const Counter = () => {
	const [counter, setCounter] = React.useState(0);

	const delayIncrement = () => {
		setTimeout(() => {
			setCounter(counter + 1);
		}, 500);
	};

	return (
		<>
			<h1 data-testid="counter">{counter}</h1>
			<button data-testid="button-delay" onClick={delayIncrement}>
				Delay Up
			</button>
			<button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
				{' '}
				Up
			</button>
			<button data-testid="button-down" onClick={() => setCounter(counter - 1)}>
				Down
			</button>
		</>
	);
};

export default Counter;
