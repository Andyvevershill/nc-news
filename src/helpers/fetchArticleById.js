export const fetchArticleById = (article_id) => {
  return fetch(
    `https://project1-be-nc-news.onrender.com/api/articles/${article_id}`
  )
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Article does not exist");
        }
        throw new Error("Network response was not ok");
      }
      return response.json();
    })

    .then((data) => data.article);
};
