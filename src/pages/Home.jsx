import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Dummy data for illustration purposes
  const blogPosts = [
    { id: 1, title: 'First Post', summary: 'Summary of the first post.' },
    { id: 2, title: 'Second Post', summary: 'Summary of the second post.' },
    // Add more posts as needed
  ];

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>Explore the latest posts and stay informed!</p>

      <section>
        <h2>Latest Posts</h2>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
              <p>{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;