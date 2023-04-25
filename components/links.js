export default function Links() {
  const links = [
    {
      label: "GitHub",
      username: "fikrigha",
      url: "https://github.com/fikrigha",
    },
    {
      label: "Twitter",
      username: "fikrigha",
      url: "https://twitter.com/fikrigha",
    },
  ];
  return (
    <nav>
      {links.map((link) => (
        <div key={link.url} className="flex justify-between w-48 ">
          <p>
            <a
              href={link.url}
              target="_blank"
              className="text-blue-600 underline hover:text-blue-700"
            >
              {link.url}
            </a>
          </p>
        </div>
      ))}
    </nav>
  );
}
