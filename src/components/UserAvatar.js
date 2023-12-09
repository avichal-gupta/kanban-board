import React from 'react';

const UserAvatar = ({ userId }) => {
  // You'll need to fetch the user's avatar URL or use a placeholder
  const avatarUrl = 'https://eu.ui-avatars.com/api/?name=John+Doe&size=250';
  return (
    <img src={avatarUrl} alt="User Avatar" className="user-avatar" />
  );
};

export default UserAvatar;
