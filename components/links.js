export default function Links() {
  const links = [
    { label: "GitHub", username: "f7g", url: "https://github.com/f7g" },
    {
      label: "Twitter",
      username: "ghz_______",
      url: "https://twitter.com/ghz_______",
    },
  ];
  return (
    <div className="mb-20 mt-8">
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
