import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <div className="h-screen text-gray-800 ">
      <Meta />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
