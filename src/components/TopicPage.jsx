import { useEffect, useState } from "react";
import ItemContainer from "./ItemContainer";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../helpers";

const TopicPage = ({ setArticles, articles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { topic } = useParams();

  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchArticlesByTopic(topic)
      .then((data) => setArticles(data.articles))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [topic, setArticles]);

  if (isError) {
    return <p>Error fetching articles on {topic}. This topic does not exist</p>;
  }
  if (isLoading) {
    return <p>Loading articles on {topic}</p>;
  }

  return (
    <section className="topic-page">
      <h2>Here are the articles on {topic}:</h2>
      <ItemContainer
        articles={articles}
        setArticles={setArticles}
        sort_by={sort_by}
        order={order}
      />
    </section>
  );
};

export default TopicPage;
