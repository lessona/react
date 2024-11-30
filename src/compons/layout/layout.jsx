import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./layout.module.css";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { AuthContext } from "../../autocontext/autocontext.jsx";

export const Layout = ({ children, sidebar }) => {
  return (
    <AuthContext.Provider value={true}>
      <ThemeContextProvider>
        <div>
          <ProgressBar viewVariant="colored" />
          <Header />
          {children}
          <div className={styles.layout}>{sidebar}</div>
          <Footer />
        </div>
      </ThemeContextProvider>
    </AuthContext.Provider>
    // <div>
    //   <ProgressBar />
    //   <Header />
    //   <div className={styles.layout}>{sidebar}</div>
    //   {children}
    //   <Footer />
    // </div>
  );
};
