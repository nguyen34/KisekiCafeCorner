import React, { useState } from 'react';

const AddArticle: React.FC = () => {
	const [article, setArticle] = useState({});

	const handleArticleData = (e: { target: { id: any; value: any } }) => {
		setArticle({
			...article,
			[e.target.id]: e.target.value,
		});
	};
	const addNewArticle = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// The logic will come later
	};

	return (
		<form onSubmit={addNewArticle} className="add-article">
			<input
				type="text"
				id="title"
				placeholder="Title"
				onChange={handleArticleData}
			/>
			<input
				type="text"
				id="body"
				placeholder="Body"
				onChange={handleArticleData}
			/>
			<button>Add article</button>
		</form>
	);
};
export default AddArticle;
