import classNames from "classnames";
import styles from "./text.module.css";

const Tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
};
export const Text = ({ type, children }) => {
  const Tag = Tags[type] || "span";
  const TagStyle =
    Tags[type] === "h1"
      ? styles.h1
      : Tags[type] === "h2"
      ? styles.h2
      : styles.h3;

  return <Tag className={classNames("text", TagStyle)}>{children}</Tag>;
};
