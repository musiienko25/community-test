export const mockPosts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
    comments: [
      { id: 1, postId: 1, parentId: null, content: 'First comment on first post' },
      { id: 2, postId: 1, parentId: 1, content: 'Reply to first comment' },
      { id: 3, postId: 1, parentId: null, content: 'Second comment on first post' },
    ],
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.',
    comments: [
      { id: 4, postId: 2, parentId: null, content: 'First comment on second post' },
    ],
  },
];
