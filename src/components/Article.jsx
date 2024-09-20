import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import CommentContainer from "./CommentContainer";
import { fetchArticleById } from "../helpers";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchArticleById(article_id)
      .then((newArticle) => setArticle(newArticle))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [article_id]);

  const dateString = moment(article.created_at);

  return (
    <>
      <div className="article-container">
        <img
          src={article.article_img_url}
          className="solo-image"
          alt="Article"
        />
        <h2 className="title">{article.title}</h2>
        <div className="article-details">
          <b>Author:</b> {article.author}
          <br />
          <b>Topic:</b> {article.topic}
          <br />
          <b>Date created:</b> {dateString.format("DD/MM/YYYY")}
        </div>
        <br />
        <br />
        <div className="article-body">{article.body}</div>
      </div>

      <section className="comments-section">
        <CommentContainer article_id={article_id} />
      </section>
    </>
  );
};

export default Article;
