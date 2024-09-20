import { useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/fontawesome-free-solid";
import { patchVotes } from "../helpers";

fontawesome.library.add(faHeart, faThumbsUp, faThumbsDown);

const ArticleVoting = ({ articleId, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes || 0);
  const [isError, setIsError] = useState(null);
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = (voteChange) => {
    // optimistically change the votes straight away
    setVotes((prevVotes) => prevVotes + voteChange);
    //disable voting whenn request is in progress
    setIsVoting(true);
    setIsError(false);

    patchVotes(articleId, voteChange)
      .then((data) => {
        const updatedArticle = data.article;
        console.log("Updated article:", updatedArticle);
        setVotes(updatedArticle.votes);
      })
      .catch(() => {
        setVotes((prevVotes) => prevVotes - voteChange);
        setIsError(
          "Sorry, we couldnt update the votes. Please try again later"
        );
      })
      // set all the votes back to false regardless of error ot not
      .finally(() => setIsVoting(false));
  };

  return (
    <div>
      <FontAwesomeIcon className="votes" icon="fa-solid fa-heart" />
      {votes}
      <div>
        <button onClick={() => handleVote(1)} disabled={isVoting}>
          <FontAwesomeIcon className="votes-up" icon="fa-thumbs-up" />
        </button>

        <button onClick={() => handleVote(-1)} disabled={isVoting}>
          <FontAwesomeIcon className="votes-down" icon="fa-thumbs-down" />
        </button>
      </div>
    </div>
  );
};

export default ArticleVoting;
