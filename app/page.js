// localhost:3000 < home page
import Link from "next/link"; // this component Link ensures that we stay in a single page application

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
    </main>
  );
}
