import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import ItemContainer from "./components/ItemContainer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopicPage from "./components/TopicPage";
import UserPage from "./components/UserPage";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Header setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <ItemContainer
              search={search}
              setSearch={setSearch}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route path="/:article_id" element={<Article />} />
        <Route
          path="/topics/:topic"
          element={<TopicPage articles={articles} setArticles={setArticles} />}
        />
        <Route path="/users/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
