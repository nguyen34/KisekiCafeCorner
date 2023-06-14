import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Article } from "../components/Article";
import { AddArticle } from "../components/AddArticle";
import {
  addArticle,
  removeArticle,
  fetchArticles,
} from "../store/reducers/articles/actionCreators";
import { getGreeting } from "../store/reducers/landing/actionCreators";
import { Dispatch } from "redux";

const Articles: React.FC = () => {
  const articles = useSelector((state: any) => state.articles.articles);
  const greeting = useSelector((state: any) => state.landing.greeting);

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(getGreeting());
  });

  const fetchBackendArticles = () => dispatch(fetchArticles());

  return (
    <main>
      <h1>{greeting}</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
      <button onClick={fetchBackendArticles}>Fetch Articles</button>
    </main>
  );
};

export default Articles;
