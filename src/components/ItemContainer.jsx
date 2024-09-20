import ItemCard from "./ItemCard";
import { useState, useEffect, useMemo } from "react";
import { fetchAllArticles } from "../helpers";
import { useLocation, useSearchParams } from "react-router-dom";

const ItemContainer = ({ search = "", articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  //set default sortby to created at, set default order to desc
  const sort_by = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLoading(true);
      setIsError(false);

      fetchAllArticles(sort_by, order)
        .then((newArticles) => {
          setArticles(newArticles);
        })
        .catch(() => {
          setIsError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [setArticles, location.pathname, sort_by, order]);

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSearchParams({ sort_by: newSort, order });
  };

  const handleOrderChange = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setSearchParams({ sort_by, order: newOrder });
  };

  const filteredArticles = useMemo(() => {
    const upperCaseSearch = search.toUpperCase();
    return articles?.filter(
      (article) =>
        article.title.toUpperCase().includes(upperCaseSearch) ||
        article.author.toUpperCase().includes(upperCaseSearch)
    );
  }, [articles, search]);

  if (isLoading) return <p>Loading articles...</p>;
  if (isError) return <p>Error fetching article details.</p>;

  if (filteredArticles.length === 0 && search) {
    return <p>Sorry, theres nothing that matches your search: "{search}"</p>;
  }

  return (
    <>
      <div className="sort-controls">
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sort_by}
          onChange={handleSortChange}
          className="drop-down"
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment Count</option>
        </select>

        <button onClick={handleOrderChange} className="sort-by">
          {order === "desc" ? "Descending" : "Ascending"}
        </button>
      </div>
      <div className="container">
        {filteredArticles.map((article) => (
          <ItemCard article={article} key={article.article_id} />
        ))}
      </div>
    </>
  );
};

export default ItemContainer;
