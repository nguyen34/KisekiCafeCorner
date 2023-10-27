import React, { createContext, useState } from 'react';
// This context serves as an example of a React Context, an altenative to Redux state management
export const ArticleContext = createContext({});
type Props = {
	children: React.ReactNode;
};

const ArticleProvider: React.FC<Props> = ({ children }) => {
	const [articles, setArticles] = useState([
		{ id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
		{ id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' },
	]);
	const saveArticle = (article: IArticle) => {
		const newArticle = {
			id: Math.random(), // not really unique but it's just an example
			title: article.title,
			body: article.body,
		};
		setArticles([...articles, newArticle]);
	};
	return (
		<ArticleContext.Provider value={{ articles, saveArticle }}>
			{children}
		</ArticleContext.Provider>
	);
};

export default ArticleProvider;
