import * as actionTypes from "./actionTypes";
import axios from 'axios';

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

export function fetchArticles() {
  axios.get('/api/articles').then((res) => {
    const articles: IArticle[] = res.data.map((article: any) => {
      return {
        id: article.id,
        title: article.title,
        body: article.body,
      }
    });

    articles.forEach((article) => {
      const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article,
      }

      return simulateHttpRequest(action);
    }
    )
  }).catch((err) => {
    console.log(err);
  }
  )

}