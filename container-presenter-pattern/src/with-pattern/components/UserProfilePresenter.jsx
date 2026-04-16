import React, { useState } from "react";
import LoadingSpinner from "./common/LoadingSpinner";
import ErrorMessage from "./common/ErrorMessage";
import ProfileHeader from "./ProfileHeader";
import PostsList from "./PostsList";

const UserProfilePresenter = ({ user, posts, loading, error, onRetry, onUpdateUser }) => {
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

  const handleCancelEdit = () => {
    setIsEditing(false);
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio,
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const handleSaveProfile = () => {
    onUpdateUser(formData);
    setIsEditing(false);
  }

  return (
    <div className="user-profile">
      <ProfileHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onStartEdit={() => {
          setIsEditing(true);
          setFormData({
            name: user.name,
            email: user.email,
            bio: user.bio,
          });
        }}
        onInputChange={handleInputChange} 
        onCancelEdit={handleCancelEdit} 
        onSaveProfile={handleSaveProfile} 
      />
      <PostsList posts={posts} />
    </div>
  );
};

export default UserProfilePresenter;
