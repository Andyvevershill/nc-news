import { useEffect, useState } from "react";
import ItemContainer from "./ItemContainer";
import { useParams } from "react-router-dom";

const TopicPage = ({ setArticles, articles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch(
      `https://project1-be-nc-news.onrender.com/api/articles?topic=${topic}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
        setArticles(data.articles);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topic, setArticles]);

  if (isError) {
    return <p>Error fetching articles on {topic}</p>;
  }
  if (isLoading) {
    return <p>Loading articles on {topic}</p>;
  }

  return (
    <section className="topic-page">
      <h2>Here are the articles on {topic}:</h2>
      <ItemContainer articles={articles} />
    </section>
  );
};

export default TopicPage;
