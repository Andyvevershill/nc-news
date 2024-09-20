//get all the article objects
// format so they are readable
// select only the articles to pass over

export const fetchAllArticles = (sort_by = "created_at", order = "desc") => {
  const url = `https://project1-be-nc-news.onrender.com/api/articles?sort_by=${sort_by}&order=${order}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data.articles);
};
