import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./layout.module.css";
export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <ProgressBar />
      <Header />
      <div className={styles.layout}>{sidebar}</div>
      {children}
      <Footer />
    </div>
  );
};
