import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <ul className="nav-list">
      <Link to="/topics/cooking" className="navigator-item">
        Cooking
      </Link>

      <Link to="/topics/coding" className="navigator-item">
        Coding
      </Link>

      <Link to="/topics/football" className="navigator-item">
        Football
      </Link>
    </ul>
  );
};

export default Navigator;
