import React from 'react';
import './Article.css';
type Props = {
	article: IArticle;
};

const ArticleContextExample: React.FC<Props> = ({ article }) => (
	<div className="article">
		<h1>{article.title}</h1>
		<p>{article.body}</p>
	</div>
);

export default ArticleContextExample;
