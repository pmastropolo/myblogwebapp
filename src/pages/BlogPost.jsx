import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPost = ({ match }) => {
  // Dummy data for illustration purposes
  const postId = match.params.slug;
  const post = { id: postId, title: 'Example Post', content: 'Content of the example post.' };

  // Dummy comments data
  const comments = [
    { id: 1, author: 'John Doe', text: 'Great post!' },
    { id: 2, author: 'Jane Smith', text: 'I enjoyed reading this.' },
    // Add more comments as needed
  ];

  return (
    <div>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>

      <section>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Add a Comment</h2>
        {/* Add your comment form component here */}
      </section>

      <nav>
        <Link to="/blog">Back to Blog</Link>
      </nav>
    </div>
  );
};

export default BlogPost;