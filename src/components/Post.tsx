import React from 'react';
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

const Post: React.FC<PostProps> = ({ title, content, comments }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default Post;
