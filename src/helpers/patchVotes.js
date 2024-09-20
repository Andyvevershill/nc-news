export const patchVotes = (articleId, voteChange) => {
  return fetch(
    `https://project1-be-nc-news.onrender.com/api/articles/${articleId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inc_votes: voteChange }),
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to update votes");
    }
    console.log(response);
    return response.json();
  });
};
