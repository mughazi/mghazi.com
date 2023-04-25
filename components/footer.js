import Container from "./container";
import Links from "./links";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="flex flex-col items-center border-t lg:flex-row">
          <Links />
        </div>
      </Container>
    </footer>
  );
}
