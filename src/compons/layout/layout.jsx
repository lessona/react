import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <Header />
      <div style={{ color: "orange", background: "brown" }}>{sidebar}</div>
      {children}
      <Footer />
    </div>
  );
};
