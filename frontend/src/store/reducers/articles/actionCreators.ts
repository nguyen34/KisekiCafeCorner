import axiosConfig from '../../../plugins/axiosConfig';
import * as actionTypes from './actionTypes';

export function addArticle(article: IArticle) {
	const action: ArticleAction = {
		type: actionTypes.ADD_ARTICLE,
		article,
	};

	return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
	const action: ArticleAction = {
		type: actionTypes.REMOVE_ARTICLE,
		article,
	};
	return simulateHttpRequest(action);
}

export function fetchArticles() {
	return (dispatch: ArticleDispatchType) => {
		axiosConfig
			.get('/api/articles/')
			.then((response) => {
				const articles: IArticle[] = response.data.map((article: any) => {
					return {
						id: article.id,
						title: article.title,
						body: article.body,
					};
				});
				articles.forEach((article) =>
					dispatch({
						type: actionTypes.ADD_ARTICLE,
						article,
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export function simulateHttpRequest(action: ArticleAction) {
	return (dispatch: ArticleDispatchType) => {
		setTimeout(() => {
			dispatch(action);
		}, 500);
	};
}
