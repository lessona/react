import { useProgress } from "./use-progress";
import styles from "./progress-bar.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../../autocontext/autocontext.jsx";
import { useTheme } from "../theme-context/use-theme";
export const ProgressBar = ({ viewVariant = "default" }) => {
  const progress = useProgress();
  const { value } = useTheme();
  const auth = useContext(AuthContext);
  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === "default",
        [styles.colored]: viewVariant === "colored",
        [styles.light]: value === "light",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
