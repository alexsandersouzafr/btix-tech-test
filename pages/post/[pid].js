import { useRouter } from "next/router";
import Container from "../../packages/components/Container";
import Comment from "../../packages/components/Comment";
import PostBody from "../../packages/components/PostBody";
import CTAButton from "../../packages/components/CTAButton";

export default function Post({ posts, users }) {
  const router = useRouter();
  const { pid } = router.query;
  const post = posts[pid];
  const user = users[post.userId - 1].name;

  return (
    <div>
      <Container className="p-4 md:p-16 text-zinc-900  bg-orange-700">
        <div className="font-black text-4xl">{post.title.toUpperCase()}</div>
        <div>by {user}</div>
      </Container>

      <PostBody post={post} />
      <div className="pb-8">
        <CTAButton onClick={() => router.back()}>BACK</CTAButton>
      </div>
      <Container className="grid px-4 md:px-0">
        <div className="grid border border-zinc-400 p-4 gap-4">
          <div className="text-orange-700 font-bold text-left">add comment</div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </Container>
    </div>
  );
}

Post.getInitialProps = async (ctx) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonPosts = await posts.json();

  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUsers = await users.json();

  return { posts: jsonPosts, users: jsonUsers };
};
