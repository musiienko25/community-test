import React, { useState } from 'react';
import CommentList from './CommentList';
import CustomInput from './CustomInput';

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
        <CustomInput
          placeholder="Add a comment"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">
          Comment
        </button>
      </form>
      <CommentList comments={postComments} onReply={addComment} />
    </div>
  );
};

export default Post;
