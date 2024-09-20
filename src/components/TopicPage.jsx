import { useEffect, useState } from "react";
import ItemContainer from "./ItemContainer";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../helpers";

const TopicPage = ({ setArticles, articles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchArticlesByTopic(topic)
      .then((data) => setArticles(data.articles))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
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
