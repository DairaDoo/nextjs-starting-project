// localhost:3000 < home page
import Link from "next/link"; // this component Link ensures that we stay in a single page application
import Header from "@/components/header";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
