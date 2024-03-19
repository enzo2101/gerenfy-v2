import Link from "next/link";

export default async function Home() {

  return (
    <main className="bg-zinc-800 h-screen">

    </main>
  );
}

{/*         <CrudShowcase /> */ }
/* async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div classNameName="w-full max-w-xs">
      {latestPost ? (
        <p classNameName="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
 */