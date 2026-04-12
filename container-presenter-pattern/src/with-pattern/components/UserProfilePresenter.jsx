import React, { useState } from "react";
import LoadingSpinner from "./common/LoadingSpinner";
import ErrorMessage from "./common/ErrorMessage";
import ProfileHeader from "./ProfileHeader";
import PostsList from "./PostsList";

const UserProfilePresenter = ({ user, posts, loading, error, onRetry }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

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

  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEdit={() => {
          setIsEditing(true);
        }}
      />
      <PostsList posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
