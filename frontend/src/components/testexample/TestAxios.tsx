import * as React from 'react';
import axios from 'axios';

type Props = {
	url: string;
};

// This component is used to demonstrate how to write unit tests with axios http calls

const TestAxios: React.FC<Props> = ({ url }) => {
	const [data, setData] = React.useState();

	const fetchData = async () => {
		const response = await axios.get(url);
		setData(response.data.greeting);
	};

	return (
		<>
			<button onClick={fetchData} data-testid="fetch-data">
				Load Data
			</button>
			{data ? (
				<div data-testid="show-data">{data}</div>
			) : (
				<h1 data-testid="loading">Loading...</h1>
			)}
		</>
	);
};

export default TestAxios;
