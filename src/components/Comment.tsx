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
    <div className="comment bg-gray-100 shadow-inner rounded px-4 pt-2 pb-2 mb-2">
      <p className="text-gray-800 text-sm mb-2">{content}</p>
      <form onSubmit={handleReply} className="mb-2">
        <input
          type="text"
          placeholder="Reply"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-1">
          Reply
        </button>
      </form>
    </div>
  );
};

export default Comment;
