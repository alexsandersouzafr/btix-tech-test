import { useRouter } from "next/router";
import Container from "../../packages/components/Container";
import Comment from "../../packages/components/Comment";
import PostBody from "../../packages/components/PostBody";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Container className="p-16 bg-orange-700">
        <div className="font-black text-4xl">
          POST TITLE GOES HERE IN THIS PLACE
        </div>
        <div>by Fulana de Tal</div>
      </Container>

      <PostBody />

      <Container className="grid  px-4">
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
