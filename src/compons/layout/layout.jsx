import { Outlet } from "react-router-dom";
import { useAuth } from "../../autocontext/use-auth";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./layout.module.css";

// export const Layout = ({ children, sidebar }) => {
//   const { auth } = useAuth();
//   const { isAuthorized } = auth;
//   return (
//     <div>
//       <ProgressBar viewVariant="colored" />
//       <Header />
//       {children}
//       <div className={styles.layout}>{sidebar}</div>
//       {isAuthorized && <Cart />}
//       <Footer />
//     </div>
//   );
// };
export const Layout = () => {
  const { auth } = useAuth();
  const { isAuthorized } = auth;
  return (
    <div>
      <ProgressBar viewVariant="colored" />
      <Header />
      <Outlet />
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
