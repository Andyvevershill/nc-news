import "./App.css";
import Header from "./components/Header";
import ItemContainer from "./components/ItemContainer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  return (
    <>
      <Header />
      <ItemContainer
        search={search}
        articles={articles}
        setArticles={setArticles}
      />
    </>
  );
}

export default App;
