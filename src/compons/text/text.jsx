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
      Tags[type] || Tags.h1,
      { className: classNames("text", styles.h1) },
      children
    );
  }

  return <span className={styles.text}>{children}</span>;
}
