"use client";
import Link from "next/link";
import SearchComponent from "./components/SearchComponent";

export default function Home() {
  return (
    <main>
      <Link href="/users">Users</Link>
      <SearchComponent />
    </main>
  );
}
