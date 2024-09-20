export const fetchArticlesByTopic = (topic) => {
  const validTopics = ["cooking", "coding", "football"];

  if (!validTopics.includes(topic)) {
    return Promise.reject(new Error("This topic does not exist"));
  }

  return fetch(
    `https://project1-be-nc-news.onrender.com/api/articles?topic=${topic}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });
};
