import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
fontawesome.library.add(faUser);

const Account = () => {
  return (
    <div className="img-container">
      <Link to="/">
        <FontAwesomeIcon icon="fa-solid fa-user" className="header-image" />
      </Link>
      <div className="username-text">
        <b>grumpy19</b>
      </div>
    </div>
  );
};

export default Account;
