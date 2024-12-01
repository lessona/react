import classNames from "classnames";
import styles from "./text.module.css";
import React from "react";
const Tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
};
export function Text({ type, children }) {
  if (Tags[type]) {
    return React.createElement(
      Tags[type],
      {
        className: classNames(
          "text",
          Tags[type] === "h1"
            ? styles.h1
            : Tags[type] === "h2"
            ? styles.h2
            : styles.h3
        ),
      },
      children
    );
  }

  return <span className={styles.text}>{children}</span>;
}
