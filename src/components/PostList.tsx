import Post from './Post';

interface PostListProps {
  posts: PostProps[];
}

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

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
