import { useState } from "react";
import { postComment } from "../helpers";

const PostComment = ({ article_id, addNewComment }) => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("grumpy19");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    setIsSubmitting(true);

    const newComment = {
      // //make sure these are the exact same as what the backend is wanting!!!!!!!
      article_id,
      //username NOT author!!!!!!!!
      username: author,
      body,
    };

    postComment(article_id, newComment)
      .then((data) => {
        setIsSubmitting(false);
        setBody("");

        addNewComment(data.comment);
      })
      .catch(() => setError(true));
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <label className="post-comment-box">
          <textarea
            className="post-comment-box"
            id="comment-body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="write your comment here..."
            required
          ></textarea>
        </label>
        <button className="post-button" type="submit">
          {isSubmitting ? <b>Posting comment... </b> : <b>Post comment</b>}
        </button>
      </form>
    </div>
  );
};

export default PostComment;
