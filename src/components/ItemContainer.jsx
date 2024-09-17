import ItemCard from "./ItemCard";
import { useState, useEffect, useMemo } from "react";

const ItemContainer = ({ search, articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const url = new URL(
      "https://project1-be-nc-news.onrender.com/api/articles/"
    );

    // url.searchParams.set("search", search);

    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        // if condition is null or undefined, use the empty array
        setArticles(data.articles ?? []);
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const filteredArticles = useMemo(() => {
    const upperCaseSearch = search.toUpperCase();
    return articles?.filter(
      (article) =>
        article.title.toUpperCase().includes(upperCaseSearch) ||
        article.author.toUpperCase().includes(upperCaseSearch) ||
        article.topic.toUpperCase().includes(upperCaseSearch)
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
