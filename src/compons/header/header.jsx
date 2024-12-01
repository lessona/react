import { AuthButton } from "../auth-button/auth-button";
import { SwitchThemeButton } from "../swithc-theme-button/switch-theme-button";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      header switchbutton <SwitchThemeButton />
      <AuthButton />
    </header>
  );
};
