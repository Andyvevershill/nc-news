import { useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faHeart, faThumbsUp, faThumbsDown);

const ArticleVoting = ({ articleId, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes || 0);
  const [error, setError] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = (voteChange) => {
    // optimistically change the votes straight away
    setVotes((prevVotes) => prevVotes + voteChange);
    //disable voting whenn request is in progress
    setIsVoting(true);
    //send patch request to the backend
    fetch(
      `https://project1-be-nc-news.onrender.com/api/articles/${articleId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inc_votes: voteChange }),
      }
    )
      // if there is an error, set the votes back and send an error to the user
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to update votes");
        }
      })
      .catch(() => {
        setVotes((prevVotes) => prevVotes - voteChange);
        setError("Sorry, we couldnt update the votes. Please try again later");
      })
      // set all the votes back to false regardless of error ot not
      .finally(() => setIsVoting(false));
  };

  return (
    <section>
      <FontAwesomeIcon className="votes" icon="fa-solid fa-heart" />
      {votes}
      <button onClick={() => handleVote(1)} disabled={isVoting}>
        <FontAwesomeIcon className="votes-up" icon="fa-thumbs-up" />
      </button>
      <button onClick={() => handleVote(-1)} disabled={isVoting}>
        <FontAwesomeIcon className="votes-down" icon="fa-thumbs-down" />
      </button>
    </section>
  );
};

export default ArticleVoting;
