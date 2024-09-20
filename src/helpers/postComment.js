export const postComment = (article_id, newComment) =>
  fetch(
    `https://project1-be-nc-news.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(err.message || "Failed to post comment");
    }
    return response.json();
  });
