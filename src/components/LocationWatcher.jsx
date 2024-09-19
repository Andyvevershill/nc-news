import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LocationWatcher = ({ setArticles }) => {
  const location = useLocation();

  //home page is not loading the articles when filter works, but filter does not work when the articles are loading in the main page!!!

  useEffect(() => {
    if (location.pathname === "/") {
      setArticles([]); // Clear articles when on the homepage
    }
  }, [location.pathname, setArticles]);

  return null;
};

export default LocationWatcher;
