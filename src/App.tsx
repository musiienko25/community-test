import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { mockPosts } from './mockData';

function App() {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = (title: string, content: string) => {
    const newPost = {
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
  )
}

export default App
