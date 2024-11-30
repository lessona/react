import { SwitchTheme } from "../switch-theme/switch-theme";
import styles from "./header.module.css";
export const Header = () => {
  // return <header className={styles.header}>Restaurants header</header>;
  return (
    <header className={styles.header}>
      header <SwitchTheme />
    </header>
  );
};
