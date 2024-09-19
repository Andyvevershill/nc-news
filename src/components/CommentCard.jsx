import moment from "moment";
import ArticleVoting from "./ArticleVoting";

const CommentCard = ({ comment, onDelete }) => {
  const isOwnComment = comment.author === "grumpy19";
  const displayAuthor = isOwnComment ? "Me" : comment.author;

  return (
    <div className="comment-card">
      <p>
        <b>{displayAuthor} </b>
        {moment(comment.created_at).format("DD/MM/YYYY")}
      </p>
      <p>{comment.body}</p>
      <p>
        <ArticleVoting
          articleId={comment.article_id}
          initialVotes={comment.votes}
        />
      </p>
      {comment.author === "grumpy19" ? (
        <button onClick={() => onDelete(comment.comment_id)}>Delete</button>
      ) : null}
    </div>
  );
};

export default CommentCard;
