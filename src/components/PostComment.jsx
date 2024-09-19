import { useState } from "react";

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

    console.log("sending comment:", newComment);

    fetch(
      `https://project1-be-nc-news.onrender.com/api/articles/${article_id}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            console.error("Server response error:", err);
            throw new Error(err.message || "Failed to post comment");
          });
        }
        return response.json();
      })
      .then((data) => {
        setIsSubmitting(false);
        //clear input field
        setBody("");
        //update comments in comment container
        addNewComment(data.comment);
      })
      .catch(() => {
        setError(true);
        setIsSubmitting(false);
      });
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
