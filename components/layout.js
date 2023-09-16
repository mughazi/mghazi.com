import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Meta />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
