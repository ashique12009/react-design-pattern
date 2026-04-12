import React from "react";
import LoadingSpinner from "./common/LoadingSpinner";

const UserProfilePresenter = ({ user, posts, loading, error }) => {

  if (loading) {
    return (
      <LoadingSpinner message="Loading user profile..." />
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={fetchUserData}>Try Again</button>
      </div>
    );
  }

  return <div>UserProfileresenter</div>;
}

export default UserProfilePresenter;