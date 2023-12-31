import Image from "next/image";
import Link from "next/link";
import Add from "./components/Add";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-4xl">Our Redis System</h1>
      <Add />
      <Link href={"/comments"} className="btn btn-active">
        Our Comments
      </Link>
    </main>
  );
}
