export const fetchArticlesByTopic = (topic) =>
  fetch(
    `https://project1-be-nc-news.onrender.com/api/articles?topic=${topic}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
