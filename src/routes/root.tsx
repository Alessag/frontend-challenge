import { Outlet } from "react-router-dom";
import { Footer } from "../common/components/footer/Footer";

import { Header } from "../common/components/header/Header";
import { Navbar } from "../common/components/navbar/Navbar";

export const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
