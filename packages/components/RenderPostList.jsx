import React from "react";
import Container from "./Container";
import PostPreview from "./PostPreview";

export default function RenderPostList({ posts, users, fromPost, untilPost }) {
  const userNameFromPost = (post) => users[post.userId - 1].name;
  const renderList = [];
  posts.map((post, i) =>
    i >= fromPost && i < untilPost ? renderList.push(post) : null
  );

  return (
    <Container className="flex flex-col flex-wrap md:flex-row md:justify-between md:px-0 gap-2 mb-4">
      {renderList.map((post) => (
        <PostPreview key={post.id} post={post} user={userNameFromPost(post)} />
      ))}
    </Container>
  );
}
