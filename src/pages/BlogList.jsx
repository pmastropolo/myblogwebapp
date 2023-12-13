import React from 'react';

const BlogList = () => {
  // Dummy data for illustration purposes
  const blogPosts = [
    { id: 1, title: 'First Post', summary: 'Summary of the first post.' },
    { id: 2, title: 'Second Post', summary: 'Summary of the second post.' },
    // Add more posts as needed
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.title}</a>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;