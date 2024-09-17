import { Link } from "react-router-dom";

const ItemCard = ({ article }) => {
  let path = `/${article.article_id}`;
  const source = article.article_img_url;
  console.log();
  return (
    <li className="item-card">
      <div className="image-container">
        <Link to={path}>
          <img src={source} className="image item-link" />
        </Link>
      </div>
      <div className="item-info">
        <h2>{article.title}</h2>
        <p>{article.author}</p>
      </div>
      <Link to={path}>
        <button className="hover-info">Click here for more info</button>
      </Link>
    </li>
  );
};

export default ItemCard;
