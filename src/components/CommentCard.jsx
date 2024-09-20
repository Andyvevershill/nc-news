import moment from "moment";
import ArticleVoting from "./ArticleVoting";

const CommentCard = ({ comment, onDelete }) => {
  const isOwnComment = comment.author === "grumpy19";
  const displayAuthor = isOwnComment ? "Me" : comment.author;

  const className = comment.votes > 0 ? "comment-card-plus" : "comment-card";

  return (
    <div className={className}>
      <p>
        <b>{displayAuthor} </b>
        {moment(comment.created_at).format("DD/MM/YYYY")}
      </p>
      <p>{comment.body}</p>
      <div>
        <ArticleVoting
          articleId={comment.article_id}
          initialVotes={comment.votes}
        />
      </div>
      {comment.author === "grumpy19" && (
        <button onClick={() => onDelete(comment.comment_id)}>Delete</button>
      )}
    </div>
  );
};

export default CommentCard;
