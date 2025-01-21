import React, { useState } from 'react';

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
  onReply: (postId: number, parentId: number, content: string) => void;
}

const Comment: React.FC<CommentProps> = ({ id, postId, parentId, content, onReply }) => {
  const [replyContent, setReplyContent] = useState('');

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent) {
      onReply(postId, id, replyContent);
      setReplyContent('');
    }
  };

  return (
    <div className="comment">
      <p>{content}</p>
      <form onSubmit={handleReply}>
        <input
          type="text"
          placeholder="Reply"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          required
        />
        <button type="submit">Reply</button>
      </form>
    </div>
  );
};

export default Comment;
