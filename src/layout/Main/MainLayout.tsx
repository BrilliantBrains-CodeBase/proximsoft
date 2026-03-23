import { Outlet} from "react-router-dom";
// import Footer from "../Footer/Footer";
import NavbarV2 from "../Navbar/NavbarV2";
import FooterV2 from "../Footer/FooterV2";

export default function MainLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarV2 />
      <main>
        <Outlet />
      </main>
      {/* <Footer />  */}
      <FooterV2 />
    </>
  );
}
