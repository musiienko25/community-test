import React, { useState } from 'react';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { mockPosts } from '../mockData';

interface CommentProps {
  id: number;
  postId: number;
  parentId: number | null;
  content: string;
}

interface PostProps {
  id: number;
  title: string;
  content: string;
  comments: CommentProps[];
}

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>(mockPosts);

  const addPost = (title: string, content: string) => {
    const newPost: PostProps = {
      id: posts.length + 1, 
      title,
      content,
      comments: [], 
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1>Community Page</h1>
      <CreatePost onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default CommunityPage;
