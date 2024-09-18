import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

const CommentContainer = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://project1-be-nc-news.onrender.com/api/articles/${article_id}/comments`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setComments(response.comments);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  const addNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <section className="comments-section">
      <PostComment article_id={article_id} addNewComment={addNewComment} />
      <h3>Take a read through the comments below:</h3>
      {comments.length === 0 ? (
        <p>Sorry about that, no comments here yet... </p>
      ) : (
        comments
          .filter((comment) => comment && comment.comment_id)
          .map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))
      )}
    </section>
  );
};

export default CommentContainer;
