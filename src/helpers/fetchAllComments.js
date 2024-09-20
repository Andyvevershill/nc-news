export const fetchAllComments = (article_id) =>
  fetch(
    `https://project1-be-nc-news.onrender.com/api/articles/${article_id}/comments`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      return response.json();
    })
    .then((data) => data.comments);
