import NavbarLayout from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavbarLayout />
      <main>{children}</main>
    </>
  );
}
