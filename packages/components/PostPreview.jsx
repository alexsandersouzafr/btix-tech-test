export default function PostPreview({ post, user }) {
  return (
    <div className="text-zinc-900 lg:max-w-xs p-4 m-2 border border-zinc-400 shadow-lg">
      <div className="text-xl font-bold line-clamp-1">
        {post.title.toUpperCase()}
      </div>
      <div className="my-8 line-clamp-3">{post.body}</div>
      <div className="flex">
        <div className="flex-1 text-blue-700">Read more...</div>
        <div>by {user}</div>
      </div>
    </div>
  );
}
