import { useRouter } from "next/router";
import Container from "../../packages/components/Container";
import PostBody from "../../packages/components/PostBody";
import CTAButton from "../../packages/components/CTAButton";
import CommentBox from "../../packages/components/CommentBox";

export default function Post({ users, posts }) {
  const router = useRouter();
  const { pid } = router.query;
  const post = posts[pid];
  const user = users[post.userId - 1].name;

  return (
    <div>
      <Container className="p-4 md:p-16 text-zinc-900 bg-orange-700">
        <div>by {user}</div>
        <div className="font-black text-4xl">{post.title.toUpperCase()}</div>
      </Container>

      <PostBody post={post} />
      <div className="pb-8">
        <CTAButton onClick={() => router.back()}>BACK</CTAButton>
      </div>

      <CommentBox postId={parseInt(pid) + 1} />
    </div>
  );
}
