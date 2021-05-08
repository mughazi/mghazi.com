import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <div className="bg-gray-200 h-screen">
      <Meta />
      <div className="pt-16">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
