export const fetchArticleById = (article_id) =>
  fetch(`https://project1-be-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => response.json())
    .then((data) => data.article);
