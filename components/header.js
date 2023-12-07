export default function Header() {
  return (
    <header>
      <h1 style={{ fontSize: "1em" }}>Fikri Ghazi</h1>
      <nav style={{ display: "flex", gap: 12 }}>
        <a href="mailto:fikri@mghazi.com">Email</a>
        <a href="https://github.com/fikrigha" target="_blank">
          GitHub
        </a>
        <a href="https://twitter.com/fikrigha" target="_blank">
          Twitter
        </a>
        <a href="https://youtube.com/@fikrigha" target="_blank">
          YouTube
        </a>
      </nav>
    </header>
  );
}
