import { useState } from 'react';
import Input from './Input';
import Button from './Button';

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
  onReply: (postId: number, parentId: number, content: string) => void;
}

const Comment: React.FC<CommentProps> = ({ id, postId, content, onReply }) => {
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
        <Input
          placeholder="Reply"
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          required
        />
        <Button type="submit" className="mt-1" color="yellow">
          Reply
        </Button>
      </form>
    </div>
  );
};

export default Comment;
