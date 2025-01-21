import { useState } from 'react'
import './App.css'
import CommunityPage from './pages/CommunityPage';
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
      <CommunityPage />
    </div>
  )
}

export default App
