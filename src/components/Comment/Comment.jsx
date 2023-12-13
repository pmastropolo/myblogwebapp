import React from 'react';

const Comment = ({ comment }) => {
  return (
    <li>
      <strong>{comment.author}:</strong> {comment.text}
    </li>
  );
};

export default Comment;