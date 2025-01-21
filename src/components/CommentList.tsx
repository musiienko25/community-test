import React from 'react';
import Comment from './Comment';

interface CommentListProps {
  comments: CommentProps[];
  onReply: (postId: number, parentId: number, content: string) => void;
}

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onReply }) => {
  const renderComments = (parentId: number | null) => {
    return comments
      .filter(comment => comment.parentId === parentId)
      .map(comment => (
        <div key={comment.id} style={{ marginLeft: parentId ? 20 : 0 }}>
          <Comment {...comment} onReply={onReply} />
          {renderComments(comment.id)}
        </div>
      ));
  };

  return <div>{renderComments(null)}</div>;
};

export default CommentList;
