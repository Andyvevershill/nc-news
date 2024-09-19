import ItemCard from "./ItemCard";
import { useState, useEffect, useMemo } from "react";

const ItemContainer = ({ search = "", articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //api is not set up to search for any keyword so have done on the frontend
  const filteredArticles = useMemo(() => {
    const upperCaseSearch = search.toUpperCase();
    return articles?.filter(
      (article) =>
        article.title.toUpperCase().includes(upperCaseSearch) ||
        article.author.toUpperCase().includes(upperCaseSearch)
    );
  }, [articles, search]);

  if (isLoading) return <p>Loading articles...</p>;
  if (isError) return <p>Error fetching article details</p>;

  return (
    <ul>
      <div className="container">
        {filteredArticles.map((article) => {
          return <ItemCard article={article} key={article.article_id} />;
        })}
      </div>
    </ul>
  );
};

export default ItemContainer;
