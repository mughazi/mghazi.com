import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "monospace",
        paddingTop: 12,
        paddingBottom: 12,
      }}
    >
      <Meta />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
