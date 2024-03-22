import Link from "next/link";
import { AuthProvider } from "~/contexts/AuthProvider";

export default async function Home() {
  return (
      <main className="h-screen bg-zinc-800">
        
      </main>
  );
}

{
  /*         <CrudShowcase /> */
}
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
