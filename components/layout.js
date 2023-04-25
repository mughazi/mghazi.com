import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <div className="h-screen text-gray-800 ">
      <Meta />
      <main className="py-12">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
