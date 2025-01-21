import React from 'react';

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
}

const Comment: React.FC<CommentProps> = ({ content }) => {
  return (
    <div className="comment">
      <p>{content}</p>
    </div>
  );
};

export default Comment;
