import { Link } from "react-router-dom";

const ItemCard = ({ article }) => {
  let path = `/${article.article_id}`;
  const source = article.article_img_url;

  return (
    <ul className="item-card">
      <div className="image-container">
        <Link to={path}>
          <img src={source} className="image item-link" />
        </Link>
      </div>
      <div className="item-info">
        <h2>{article.title}</h2>
        {article.author === "grumpy19" ? (
          <p>My article</p>
        ) : (
          <p>{article.author}</p>
        )}
      </div>
      <Link to={path}>
        <button className="hover-info">Click here for more info</button>
      </Link>
    </ul>
  );
};

export default ItemCard;
