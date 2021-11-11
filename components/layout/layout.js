import CustomNavbar from "./CustomNavbar";

export default function Layout({ children }) {
  return (
    <>
      <CustomNavbar>
        <main>{children}</main>
      </CustomNavbar>
    </>
  );
}
