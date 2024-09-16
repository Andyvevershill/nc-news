const ItemCard = ({ article }) => {
  let path = `/${article.article_id}`;
  const source = article.article_img_url;
  console.log();
  return (
    <li className="item-card">
      <div className="image-container">
        <a href={path}>
          <img src={source} className="image item-link" />
        </a>
      </div>
      <div className="item-info">
        <h2>{article.title}</h2>
        <p>{article.author}</p>
      </div>
      <a href={path}>
        <button className="hover-info">Click here for more info</button>
      </a>
    </li>
  );
};

export default ItemCard;
