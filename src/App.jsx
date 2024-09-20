import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import ItemContainer from "./components/ItemContainer";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TopicPage from "./components/TopicPage";
import LocationWatcher from "./components/LocationWatcher";

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
      <LocationWatcher setArticles={setArticles} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
