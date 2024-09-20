export const deleteCommentById = (commentId) =>
  fetch(`https://project1-be-nc-news.onrender.com/api/comments/${commentId}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.status === 204) {
      return true;
    } else {
      throw new Error("Failed to delete comment, try again later");
    }
  });
