import { useState } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

interface CreatePostProps {
  onAddPost: (title: string, content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onAddPost(title, content);
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <CustomInput
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <CustomInput
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        isTextarea
      />
      <CustomButton type="submit" className="mt-4" color="blue">
        Add Post
      </CustomButton>
    </form>
  );
};

export default CreatePost;
