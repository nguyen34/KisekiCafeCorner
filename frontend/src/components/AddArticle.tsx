import * as React from 'react';

type Props = {
	saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
	const [article, setArticle] = React.useState<IArticle | {}>();

	const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
		setArticle({
			...article,
			[e.currentTarget.id]: e.currentTarget.value,
		});
	};

	const addNewArticle = (e: React.FormEvent) => {
		e.preventDefault();
		saveArticle(article);
	};

	return (
		<form onSubmit={addNewArticle} className="Add-article">
			<input
				type="text"
				id="title"
				placeholder="Title"
				onChange={handleArticleData}
			/>
			<input
				type="text"
				id="body"
				placeholder="Description"
				onChange={handleArticleData}
			/>
			<button
				className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				disabled={article === undefined ? true : false}
			>
				Add article
			</button>
		</form>
	);
};
