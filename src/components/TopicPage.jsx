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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      })
      .catch((err) => {
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
