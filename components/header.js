import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between py-4 bg-white border-b">
      <h1 className="font-bold">
        <Link href={"/"} className="text-black no-underline">
          Fikri Ghazi
        </Link>
      </h1>
      <nav className="space-x-3">
        <a href="mailto:fikri@mghazi.com">Email</a>
        <a href="https://github.com/fikrigha" target="_blank">
          GitHub
        </a>
        <a href="https://twitter.com/fikrigha" target="_blank">
          Twitter
        </a>
      </nav>
    </header>
  );
}
