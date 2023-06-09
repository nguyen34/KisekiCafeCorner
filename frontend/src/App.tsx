import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./App.css";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { addArticle, removeArticle } from "./store/actionCreators";
import { Dispatch } from "redux";
import axios from "axios";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const [backendArticles, setBackendArticles] = React.useState<IArticle[]>([]);

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  function fetchArticles() {
    axios.get("/api/articles").then((res) => {
      const articles: IArticle[] = res.data.map((article: any) => {
        return {
          id: article.id,
          title: article.title,
          body: article.body,
        };
      });
      setBackendArticles(articles);
      articles.forEach((article) => saveArticle(article));
      console.log(articles);
    });
  }

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
      <button onClick={fetchArticles}>Fetch Articles</button>
    </main>
  );
};

export default App;
