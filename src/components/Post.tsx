import React, { useState } from 'react';
import CommentList from './CommentList';

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
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          required
        />
        <button type="submit">Comment</button>
      </form>
      <CommentList comments={postComments} onReply={addComment} />
    </div>
  );
};

export default Post;
