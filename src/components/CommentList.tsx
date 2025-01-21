import React from 'react';
import Comment from './Comment';

interface CommentListProps {
  comments: CommentProps[];
}

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const renderComments = (parentId: number | null) => {
    return comments
      .filter(comment => comment.parentId === parentId)
      .map(comment => (
        <div key={comment.id} style={{ marginLeft: parentId ? 20 : 0 }}>
          <Comment {...comment} />
          {renderComments(comment.id)}
        </div>
      ));
  };

  return <div>{renderComments(null)}</div>;
};

export default CommentList;
