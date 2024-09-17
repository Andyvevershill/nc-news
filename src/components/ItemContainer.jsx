import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";

const ItemContainer = ({ search, articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const url = new URL(
      "https://project1-be-nc-news.onrender.com/api/articles/"
    );

    url.searchParams.set("search", search);

    fetch(url.toString())
      .then((response) => {
        return response.json();
      })
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
  }, [search]);
  if (isLoading) return <p>Loading articles...</p>;
  if (isError) return <p>Error fetching article details</p>;

  return (
    <ul>
      <div className="container">
        {articles.map((article) => {
          return <ItemCard article={article} key={article.article_id} />;
        })}
      </div>
    </ul>
  );
};

export default ItemContainer;
