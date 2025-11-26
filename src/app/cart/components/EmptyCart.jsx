import Link from "next/link";

export default function EmptyCart() {
  return (
    <main className="bg-zinc-950 text-white text-center min-h-screen">
      <div className="mb-72 flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl mt-52">Cart empty</h2>
          <p>Add products</p>
        </div>
        <div>
          <Link
            href="/"
            className="hover:brightness-95 active:brightness-90 bg-amber-300 text-black px-3 py-2 shadow rounded"
          >
            Go to store
          </Link>
        </div>
      </div>
    </main>
  );
}
