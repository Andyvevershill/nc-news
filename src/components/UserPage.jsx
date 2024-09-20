import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../helpers";

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchUser(username)
      .then((data) => setUser(data.user))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [username]);

  if (isLoading) return <p>Loading user data...</p>;
  if (isError) return <p>Error fetching user data</p>;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          src={user.avatar_url}
          alt={`${user.username}'s avatar`}
          className="profile-image"
        />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-username">{user.username}</p>
      </div>
    </div>
  );
};

export default UserPage;
