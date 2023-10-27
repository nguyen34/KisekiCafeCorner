import React, { useState } from 'react';
import ArticleContextExample from '../components/contextexample/ArticleContextExample';

const Articles: React.FC = () => {
	const [articles, setArticles] = useState([
		{ id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
		{ id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' },
	]);

	return (
		<div>
			{articles.map((article) => (
				<ArticleContextExample key={article.id} article={article} />
			))}
		</div>
	);
};

export default Articles;
