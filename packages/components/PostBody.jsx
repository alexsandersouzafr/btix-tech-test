import React from "react";
import Container from "./Container";

export default function PostBody({ post }) {
  return (
    <Container className="py-8 px-4 text-zinc-900 ">
      {post.body}
      <hr />
    </Container>
  );
}
