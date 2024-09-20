import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { fetchAllComments, deleteCommentById } from "../helpers";

const CommentContainer = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchAllComments(article_id)
      .then((newComment) => setComments(newComment))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [article_id]);

  const addNewComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleDeleteComment = (commentId) => {
    deleteCommentById(commentId).then((success) => {
      if (success) {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== commentId)
        );
      }
    });
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
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              onDelete={handleDeleteComment}
            />
          ))
      )}
    </section>
  );
};

export default CommentContainer;
