import React from "react";
import LoadingSpinner from "./common/LoadingSpinner";
import ErrorMessage from "./common/ErrorMessage";

const UserProfilePresenter = ({ user, posts, loading, error, onRetry }) => {
  if (loading) {
    return <LoadingSpinner message="Loading user profile..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Oops! Something went wrong"
        message={error}
        onRetry={onRetry}
      />
    );
  }

  return <div>UserProfileresenter</div>;
};

export default UserProfilePresenter;
