import Link from "next/link";

export default function PostPreview({ post, user }) {
  return (
    <Link href={`post/${post.id - 1}`}>
      <div className="text-zinc-900 lg:max-w-xs p-4 m-2 border border-zinc-400 hover:shadow-2xl shadow-lg hover:bg-zinc-200 cursor-pointer transition-all">
        <div className="text-xl font-bold line-clamp-1">
          {post.title.toUpperCase()}
        </div>

        <div className="my-8 line-clamp-3">{post.body}</div>

        <div className="flex">
          <div className="flex-1 text-blue-700">Read more...</div>
          <div>by {user}</div>
        </div>
      </div>
    </Link>
  );
}
