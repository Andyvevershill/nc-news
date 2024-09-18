import moment from "moment";
import ArticleVoting from "./ArticleVoting";

const CommentCard = ({ comment }) => {
  if (comment.author == "grumpy19") {
    comment.author = "Me";
  }

  return (
    <div className="comment-card">
      <p>
        <b>{comment.author} </b>
        {moment(comment.created_at).format("DD/MM/YYYY")}
      </p>
      <p>{comment.body}</p>
      <p>
        <ArticleVoting
          articleId={comment.article_id}
          initialVotes={comment.votes}
        />
      </p>
    </div>
  );
};

export default CommentCard;
