import Container from "./Container";

export default function LastPost({ posts, users }) {
  const post = posts[0];
  const user = users[post.userId - 1].name;

  return (
    <Container className="bg-orange-700 p-4 mb-8 md:p-16 text-zinc-900 text-xl">
      <div className="text-sm">last post by {user}</div>
      <div className="font-black text-4xl pb-8">{post.title.toUpperCase()}</div>
      <div className="md:pb-16 line-clamp-2">{post.body}</div>
      <div className="text-zinc-300 pt-4">Read more...</div>
    </Container>
  );
}
