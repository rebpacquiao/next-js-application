"use client";
import Link from "next/link";
import SearchComponent from "./components/SearchComponent";

export default function Home() {
  return (
    <main>
      <Link href="/about">About</Link>
      <SearchComponent />
    </main>
  );
}
