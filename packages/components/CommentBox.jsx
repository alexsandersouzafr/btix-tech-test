import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Container from "./Container";

export default function CommentBox({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId + 1}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .then(setLoading(false))
      .catch((e) => console.error(e));
  }, [postId]);

  return (
    <Container className="grid px-4 md:px-0">
      {loading ? (
        <p>loading comments...</p>
      ) : (
        <div className="grid border border-zinc-400 p-4 gap-4">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              user={comment.name}
              comment={comment.body}
            />
          ))}
          <div className="text-orange-700 font-bold text-left">
            add comment (mock)
          </div>
        </div>
      )}
    </Container>
  );
}
