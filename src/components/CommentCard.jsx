import moment from "moment";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>
        <b>{comment.author} </b>
        {moment(comment.created_at).format("DD/MM/YYYY")}
      </p>
      <p>{comment.body}</p>
      <p>
        <b>Votes: </b>
        {comment.votes}
      </p>
    </div>
  );
};

export default CommentCard;
