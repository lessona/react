import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

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
