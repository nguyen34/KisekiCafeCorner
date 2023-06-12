import * as React from "react";
import {
  useSelector,
  shallowEqual,
  useDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import "./App.css";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import {
  addArticle,
  removeArticle,
} from "./store/reducers/articles/actionCreators";
import { Dispatch } from "redux";
import axios from "axios";

const App: React.FC = () => {
  const articles = useSelector((state: any) => state.articles.articles);

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
      articles.forEach((article) => saveArticle(article));
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
