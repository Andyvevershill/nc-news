export const fetchUser = (username) =>
  fetch(`https://project1-be-nc-news.onrender.com/api/users/${username}`).then(
    (response) => response.json()
  );
