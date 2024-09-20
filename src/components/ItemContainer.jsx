import ItemCard from "./ItemCard";
import { useState, useEffect, useMemo } from "react";

const ItemContainer = ({ search = "", articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (articles.length === 0) {
      setIsLoading(true);
      setIsError(false);

      fetch(`https://project1-be-nc-news.onrender.com/api/articles`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setArticles(data.articles); // Update the articles state with fetched data
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [setArticles, articles.length]);

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
    <div className="container">
      {filteredArticles.map((article) => (
        <ItemCard article={article} key={article.article_id} />
      ))}
    </div>
  );
};

export default ItemContainer;
