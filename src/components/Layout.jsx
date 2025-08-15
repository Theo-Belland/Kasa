import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/style.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
