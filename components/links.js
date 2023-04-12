export default function Links() {
  const links = [
    { label: "GitHub", username: "fikrigha", url: "https://github.com/fikrigha" },
    {
      label: "Twitter",
      username: "fikrigha",
      url: "https://twitter.com/fikrigha",
    },
  ];
  return (
    <div className="mt-8 mb-20">
      <nav>
        {links.map((link) => (
          <div key={link.url} className="flex justify-between w-48 ">
            <div className="text-gray-400">{link.label}</div>
            <div className="text-gray-400 hover:text-green-600">
              <a target="_blank" href={link.url}>
                {link.username} &#8599;{" "}
              </a>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
