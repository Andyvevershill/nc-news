import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <ul className="nav-list">
      <Link to="/" className="navigator-item">
        Cooking
      </Link>

      <Link to="/" className="navigator-item">
        Coding
      </Link>

      <Link to="/" className="navigator-item">
        Football
      </Link>
    </ul>
  );
};

export default Navigator;
