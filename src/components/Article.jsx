import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch(`https://project1-be-nc-news.onrender.com/api/articles/${article_id}`)
      .then((article) => {
        return article.json();
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setIsError(false);
        setArticle(response.article);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [article_id]);

  const dateString = moment(article.created_at);

  return (
    <>
      <section className="container">
        <div>
          <img src={article.article_img_url} className="solo-image" />
        </div>
        <div className="description-div">
          <h2 className="title">{article.title}</h2>
          <p className="description">
            <b>Author:</b> {article.author}
            <br />
            <b>Topic:</b> {article.topic}
            <br />
            <b>Date created: </b>
            {dateString.format("DD/MM/YYYY")}
          </p>
          <p className="body-text"></p>
          <p className="body-text">{article.body}</p>
        </div>
      </section>
    </>
  );
};

export default Article;
