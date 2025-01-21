import { useState } from 'react';
import CommentList from './CommentList';
import Input from './Input';
import Button from './Button';

interface PostProps {
  id: number;
  title: string;
  content: string;
  comments: CommentProps[];
}

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
}

const Post: React.FC<PostProps> = ({ id, title, content, comments }) => {
  const [postComments, setPostComments] = useState(comments);
  const [commentContent, setCommentContent] = useState('');

  const addComment = (postId: number, parentId: number | null, content: string) => {
    const newComment = {
      id: postComments.length + 1,
      postId,
      parentId,
      content,
    };
    setPostComments([...postComments, newComment]);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentContent) {
      addComment(id, null, commentContent);
      setCommentContent('');
    }
  };

  return (
    <div className="post bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-base mb-4">{content}</p>
      <form onSubmit={handleAddComment} className="mb-4">
        <Input
          placeholder="Add a comment"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          required
        />
        <Button type="submit" className="mt-2" color="green">
          Comment
        </Button>
      </form>
      <CommentList comments={postComments} onReply={addComment} />
    </div>
  );
};

export default Post;
